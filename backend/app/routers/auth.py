from fastapi import APIRouter
import requests
import os

router = APIRouter(
    prefix="/auth",
    tags=["auth"]
)

@router.get("/kakao")
async def kakaoAuth(client_id: str, redirect_url: str, code: str):
    # grant_type    <String>: authorization_code로 고정
    # client_id     <String>: 앱 REST API 키
    # redirect_uri  <String>: 인가 코드가 리다이렉트된 URI
    # code          <String>: 인가 코드 받기 요청으로 얻은 인가 코드
    _url = f"https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id={client_id}&code={code}&redirect_uri={redirect_url}"
    _res = requests.post(_url)
    _result = _res.json()
    return {"code": _result}


@router.get('/naver')
async def naverAuth(state: str, code: str):
    client_id = os.getenv("NAVER_CLIENT_ID")
    client_secret = os.getenv("NAVER_CLIENT_SECRET")
    redirect_uri = os.getenv("NAVER_REDIRECT_URI")
    
    _url = f'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id={client_id}&client_secret={client_secret}&redirect_uri={redirect_uri}&code={code}&state={state}'
    _res = requests.post(_url, headers={'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret})
    _result = _res.json()
    return _result