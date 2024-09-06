from fastapi import APIRouter, HTTPException
from ..external_services.areaBasedAPI import get_spots, get_spots_by_region
from ..external_services.detailAPI import get_common, get_intro, get_info, get_image

# from datetime import datetime

# formatted_date = datetime.now().strftime("%Y-%m-%d")

router = APIRouter(
    prefix="/spots",
    tags=["spots"],
)


@router.get("")
async def read_spots(keyword: str, pageNo: int = 1):
    try:
        data = get_spots(keyword, pageNo)
        return data
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.get("/by_region")
async def read_spots_by_region(area: str, pageNo: int = 1):
    try:
        data = get_spots_by_region(area, pageNo)

        return data
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.get("/detail")
async def spot_stay_detail(contentId: int, contentTypeId: int):
    common = get_common(contentId, contentTypeId)

    intro = get_intro(contentId, contentTypeId)

    info = get_info(contentId, contentTypeId)

    image = get_image(contentId)

    # 빈 딕셔너리 생성
    combined_dict = {}

    # 딕셔너리들을 순차적으로 합치기
    combined_dict.update(common)
    combined_dict.update(intro)
    combined_dict.update(info)
    combined_dict.update(image)

    # 결과 확인
    # print(combined_dict)
    return combined_dict
