'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Card from '@/components/Card';
import Spinner from '@/components/Spinner';

import { JobProps, WishInfo, WishItem, WishRes } from '@/types/type';

import { getJobs } from '@/services/jobs';
import { formatSalary } from '../../utils/stringUtils';
import { parseUrl } from '@/app/(feed)/_utils/stringUtils';
import Image from 'next/image';
import useUserStore from '@/app/stores/loginStore';
import useModalStore from '@/app/stores/modalStore';

import { postWishItem, deleteWishItem, getWishFeeds } from '@/services/wishs';

export default function Job() {
  const [feedList, setFeedList] = useState<JobProps[]>([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [area, setArea] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');
  const [wishList, setWishList] = useState<WishInfo[]>([]);
  const [isFirst, setIsFirst] = useState(true);
  const { isLoggedIn } = useUserStore();
  const { openModal } = useModalStore();

  const router = useRouter();

  const fetchData = async () => {
    if (loading || pageCount + 1 < page) return;
    setLoading(true);

    try {
      const response = await getJobs(area, keyword, page);
      setPageCount(response.data.pageNo);
      const data = response.data.items.item.map((item: JobProps) => ({
        contentid: item.contentid,
        cardType: 'default',
        serviceType: 'work',
        title: item.empmnTtl,
        company: item.corpoNm,
        price: item.wageAmt,
        location: item.wrkpAdres,
        image: item.corpoLogoFileUrl || '/svgs/job-default.svg',
        inWishlist: wishList.some(
          wishItem => wishItem.contentid === item.contentid,
        ),
        contenttypeid: item.contenttypeid,
        workType: item.salStle,
      }));

      setFeedList(prevList => {
        // 기존 데이터와 중복되지 않는 데이터만 필터링
        const newData = data.filter(
          (newItem: JobProps) =>
            !prevList.some(
              prevItem => prevItem.contentid === newItem.contentid,
            ),
        );

        // 새로운 데이터가 있을 때만 페이지 증가
        if (newData.length > 0) {
          setPage(prevPage => prevPage + 1);
        }
        return [...prevList, ...newData];
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      router.push('/not-found');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fullUrl = window.location.href;
    const feedInfo = parseUrl(fullUrl);
    fetchWishList();
    if (feedInfo.location) {
      setArea(feedInfo.location);
      setKeyword(feedInfo.keyword || '');
    }
  }, [feedList]);

  const fetchWishList = async () => {
    const wishListData = await getWishFeeds();
    const allData: WishInfo[] = Object.values(wishListData)
      .flatMap(location => Object.values(location))
      .flat();
    setWishList(allData);
    await setIsFirst(false);
  };

  useEffect(() => {
    if (area) {
      fetchData();
    }
  }, [area]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 50 >=
        document.documentElement.scrollHeight
      ) {
        fetchData();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page, loading]);

  useEffect(() => {
    if (wishList.length > 0 && feedList.length > 0) {
      const updatedFeedList = feedList.map(feedItem => {
        const isInWishlist = wishList.some(
          wishItem => wishItem.contentid === feedItem.contentid,
        );

        // 상태가 변경된 경우에만 업데이트
        if (feedItem.inWishlist !== isInWishlist) {
          return {
            ...feedItem,
            inWishlist: isInWishlist, // wishList에 있으면 true로 설정
          };
        }
        return feedItem; // 상태가 변경되지 않았으면 기존 상태 유지
      });

      // 변경 사항이 있을 때만 feedList 업데이트
      if (JSON.stringify(updatedFeedList) !== JSON.stringify(feedList)) {
        setFeedList(updatedFeedList);
      }
    }
  }, [wishList]);

  const cardClick = (id: string, contentTypeId?: string, image?: string) => {
    const pushImage = image === '/svgs/job-default.svg' ? '' : image;
    router.push(
      `/job/${id}?contenttypeid=${contentTypeId}?thumbnail=${pushImage}`,
    );
  };

  // fetchDataAndWishList 함수를 통해서만 wish icon 업데이트를 하면 클라이언트 측에서 조금 느리게 반영되어 보임
  // 따라서 우선 상태를 바꾸고 에러가 발생했을 경우, 원래 상태로 되돌리는 방향으로 진행
  const wishClick = async (item: JobProps) => {
    if (!isLoggedIn) {
      openModal();
      return;
    }

    const originState = item.inWishlist;
    setFeedList(prevList =>
      prevList.map(feedItem =>
        feedItem.contentid === item.contentid
          ? { ...feedItem, inWishlist: !feedItem.inWishlist }
          : feedItem,
      ),
    );
    try {
      const data: WishItem = {
        type: 'job',
        contentTypeId: item.contenttypeid || '',
        contentId: item.contentid || '',
      };

      if (originState) {
        await deleteWishItem(data);
      } else {
        await postWishItem(data);
      }
    } catch (error) {
      console.error('Error in wishClick:', error);

      // 에러가 발생한 경우 원래 상태로 되돌림
      setFeedList(prevList =>
        prevList.map(feedItem =>
          feedItem.contentid === item.contentid
            ? { ...feedItem, inWishlist: originState }
            : feedItem,
        ),
      );
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-5 text-black relative">
      {feedList.length > 0 ? (
        <div className="flex flex-col gap-1 items-center w-full mb-10 mt-[20px]">
          {feedList.map((item: JobProps) => (
            <Card
              id={item.contentid}
              key={item.contentid}
              cardType={item.cardType}
              serviceType={item.serviceType}
              title={item.title}
              location={item.location}
              price={item.price}
              company={item.company}
              image={item.image}
              inWishlist={item.inWishlist}
              onCardClick={() =>
                cardClick(item.contentid, item.contenttypeid, item.image)
              }
              onWishListClick={() => wishClick(item)}
              contenttypeid={item.contenttypeid}
              workType={formatSalary(item.workType)}
            />
          ))}
        </div>
      ) : (
        <div className="w-full flex flex-col items-center pt-20 gap-24">
          {isFirst ? (
            <Spinner />
          ) : (
            <span className="text-center">
              검색 결과가 없습니다.
              <br />
              다른 검색어를 입력해주세요.
            </span>
          )}
        </div>
      )}
    </div>
  );
}
