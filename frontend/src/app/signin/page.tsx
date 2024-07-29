'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Kakao: any;
    naver: any;
  }
}

function SignInPage() {
  const loginWithKaKao = () => {
    if (window.Kakao) {
      window.Kakao.Auth.authorize({
        redirectUri: `${window.location.protocol}//${window.location.host}/signin/kakao`,
      });
    }
  };

  const handleKakaoLoad = () => {
    if (window.Kakao) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
    }
  };

  useEffect(() => {
    // 회원가입 및 로그인 페이지에 진입할 때 Kakao SDK를 추가
    const kakaoScript = document.createElement('script');
    kakaoScript.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
    kakaoScript.async = true;
    kakaoScript.onload = handleKakaoLoad;
    document.body.appendChild(kakaoScript);

    return () => {
      // 회원가입 및 로그인 페이지에서 이탈할 때 Kakao SDK를 제거
      document.body.removeChild(kakaoScript);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-[393px] px-6">
        <div className="text-left">
          <p className="text-[#33C4A8] text-xl font-semibold pb-[6px]">
            워크인코리아
          </p>
          <p className="text-lg font-medium pb-6">
            원하는 곳에 머무르며 일하다
          </p>
          <p className="text-sm font-normal pb-[99px]">
            나에게 꼭 맞는 장소에서의 워케이션을 계획하세요.
          </p>
        </div>
        <div className="w-full gap-[6px] flex flex-col">
          <button
            type="button"
            onClick={loginWithKaKao}
            className="w-full self-stretch text-center align-center bg-[#FEE502] p-[18px] text-md font-medium rounded-[10px]
            border-[1px] border-[#D9D9D9]"
          >
            카카오로 시작하기
          </button>
          <div id="naverIdLogin">
            <button
              type="button"
              className="w-full self-stretch text-center align-center bg-[#04C759] p-[18px] text-md font-medium rounded-[10px]
            border-[1px] border-[#D9D9D9] text-white"
            >
              네이버로 시작하기
            </button>
          </div>
          <button
            type="button"
            className="w-full self-stretch text-center align-center p-[18px] text-md font-medium rounded-[10px]
            border-[1px] border-[#D9D9D9]"
          >
            Google로 시작하기
          </button>
        </div>
        <p className="text-sm font-medium pt-[40px] text-[#5A5A5A]">
          계속 진행하시면 워크인코리아의 서비스 약관 및 개인정보처리방침에
          동의하시는 것으로 간주됩니다.
        </p>
      </div>
    </div>
  );
}

export default SignInPage;
