if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const t=e=>a(e,c),o={module:{uri:c},exports:r,require:t};s[c]=Promise.all(i.map((e=>o[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"3c94387a460283fa479c26a21b611476"},{url:"/_next/static/Fyb_DXaqsKiVRZsF_Ho91/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/Fyb_DXaqsKiVRZsF_Ho91/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/138-5f87b6b9a4a24481.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/23-63a418d3d74a73d8.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/236-bc4f0df66339960b.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/648-79344e642c4d1a2d.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/951-ad9761f9e6015f08.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/app/(detail)/job/%5BjobId%5D/page-bc5a6349e3296865.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/app/(detail)/layout-f66f14d4f9926ccd.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/app/(detail)/spot/%5BspotId%5D/page-52f99d98f3a24fb8.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/app/(feed)/job/page-f2bdb906573f6cdd.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/app/(feed)/layout-3fc19abd2ff7e06d.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/app/(feed)/stay/page-499c0a18a8e1bdc6.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/app/(feed)/tour/page-df41ab964ec96fa6.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/app/_not-found/page-49d93b941e661f07.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/app/layout-b37bf6a1baddfcce.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/app/main/page-f329910b074d4210.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/app/onboarding/layout-a94dbc69bd482687.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/app/onboarding/step1/page-b5df5661961e4c01.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/app/onboarding/step2/page-c5bc794ad4823d29.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/app/onboarding/step3/page-246f9a3eb224e2ba.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/app/onboarding/step4/page-000b6fe859dbb003.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/app/onboarding/step5/page-19a1e81e9025af55.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/app/page-2e8bbe083d518d55.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/app/search/page-47b8395f92d5a6b7.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/app/sign-in/page-3b4e8fcbc09ad01d.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/app/wish/%5Bid%5D/page-53085250ec98a299.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/app/wish/page-eea927e41c3da12d.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/fd9d1056-81f448b567f73d85.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/main-a01dcc744f6ae48f.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/main-app-e9b5d6359a8686da.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-a9345f71fd27f84e.js",revision:"Fyb_DXaqsKiVRZsF_Ho91"},{url:"/_next/static/css/2b2d3af2e84157f3.css",revision:"2b2d3af2e84157f3"},{url:"/_next/static/media/ff840cfebfb63b0c-s.p.woff2",revision:"302ec55f5b4320354ec6b35a53dead87"},{url:"/_next/static/media/강릉.ecf3731d.png",revision:"e5cb599b7fa36617f0d8665b09bcf68e"},{url:"/_next/static/media/경주.c34f38f7.png",revision:"1ff407a742b31989d28299ddd651be16"},{url:"/_next/static/media/부산.dbfcdf6a.png",revision:"f14c396bc77745d71971ce716bc79f37"},{url:"/_next/static/media/여수.a9a0ae33.png",revision:"91680af6a55204af0fc6ca6a487e8f17"},{url:"/_next/static/media/전주.8de966b6.png",revision:"f4b11d103503f9f15721b3ef2d26e19c"},{url:"/_next/static/media/제주.393dd5c3.png",revision:"9fb68b382f9f9ee30636cb996feb4d1f"},{url:"/_next/static/media/춘천.97d2eca1.png",revision:"17f5c4243e64ba3e5fed76e1b0478990"},{url:"/fonts/PretendardVariable.woff2",revision:"302ec55f5b4320354ec6b35a53dead87"},{url:"/icons/icon-192x192.png",revision:"36f9beb75dc847872eb8044c75210464"},{url:"/icons/icon-512x512.png",revision:"cc11d358f044a6bb48ccbd1e9f3f8baf"},{url:"/images/banner-test.jpg",revision:"117998a96d6974fd8517bf80634ab2da"},{url:"/images/location/강릉.png",revision:"e5cb599b7fa36617f0d8665b09bcf68e"},{url:"/images/location/경주.png",revision:"1ff407a742b31989d28299ddd651be16"},{url:"/images/location/부산.png",revision:"f14c396bc77745d71971ce716bc79f37"},{url:"/images/location/여수.png",revision:"91680af6a55204af0fc6ca6a487e8f17"},{url:"/images/location/전주.png",revision:"f4b11d103503f9f15721b3ef2d26e19c"},{url:"/images/location/제주.png",revision:"9fb68b382f9f9ee30636cb996feb4d1f"},{url:"/images/location/춘천.png",revision:"17f5c4243e64ba3e5fed76e1b0478990"},{url:"/images/opengraph-image.png",revision:"d033df00208f8d106969d1a70ea5cc1a"},{url:"/images/profile-test.png",revision:"bbf6fb74576eed827dce25da61de2252"},{url:"/images/splash-image.svg",revision:"45b2d620480c2842aa7628201897a252"},{url:"/images/spot-default.svg",revision:"9af994f0069610173c30d5da9971d865"},{url:"/images/stay-test.png",revision:"5f680685e30abbccb501af2a9c571164"},{url:"/images/tour-test.png",revision:"718f051f476240095085a66b36a6643d"},{url:"/manifest.json",revision:"332587589045cf9af912488ed8ba019f"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/robots.txt",revision:"804c7d9a3e95197eae8d2246a568167f"},{url:"/service-worker.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/sitemap-0.xml",revision:"a9d9e33d8391e19fd3d70a32621c9c3e"},{url:"/sitemap.xml",revision:"7f2f82d4fbbc1a52e8fc7bca6494efc6"},{url:"/svgs/back-white.svg",revision:"20f4554a95f16ad271a8d42ae78be8e8"},{url:"/svgs/back.svg",revision:"c775fa61a8d5c604b2ee5c6e406cb4a1"},{url:"/svgs/calender.svg",revision:"691d4c9ede64b563c41fd5bb6cbcd6b2"},{url:"/svgs/character.svg",revision:"2feeff56f415579d1795f2b559ca667d"},{url:"/svgs/close.svg",revision:"c75559c29afffa8c85c239bf411e7b7a"},{url:"/svgs/dropdown.svg",revision:"07e19016db82fac9d273773ced0c881d"},{url:"/svgs/emoji/coffee.svg",revision:"f4f26f825837d93a4d5616bb60e4e4a4"},{url:"/svgs/emoji/dice.svg",revision:"8cd58fc24fe1d199b5ce0e3c1ad09e31"},{url:"/svgs/emoji/egg.svg",revision:"981f4d3c6cadb9323e1c909e0ddb4dc5"},{url:"/svgs/emoji/fire.svg",revision:"c1bbc922b0bb2fa5638c807c8d8c8bdd"},{url:"/svgs/emoji/greeting.svg",revision:"b28e65a298373385ab0406182d19d230"},{url:"/svgs/emoji/hotel.svg",revision:"830e11f006fac16a568f7f64cb6d2879"},{url:"/svgs/emoji/leaf.svg",revision:"c01e7334a0443ab3fc92318ec8b221b9"},{url:"/svgs/emoji/learning.svg",revision:"f5d4f2514d9b492164ea7708d9d96d2a"},{url:"/svgs/emoji/marketing.svg",revision:"93135e2b258a6e1c2b9657330c0e6a57"},{url:"/svgs/emoji/moai.svg",revision:"d7d70a795a3f5478d2f4422ad0760ac3"},{url:"/svgs/emoji/paragliding.svg",revision:"2e3b536723ca2a68e89b2c16a3ee9114"},{url:"/svgs/emoji/sofa.svg",revision:"a9840bcfd784070cf45e2d04032be398"},{url:"/svgs/emoji/sound.svg",revision:"9166387cbb64059660af78556edcb3ac"},{url:"/svgs/emoji/weight.svg",revision:"db4dc36d454fd3646922ff696ef73d02"},{url:"/svgs/feed-banner.svg",revision:"843c8a61418e53a2086868800cfa4c80"},{url:"/svgs/feed-test.svg",revision:"b20992e22ee078aef4d34a13810315ba"},{url:"/svgs/filter.svg",revision:"cb972be34b04bcb586b0c49dd410c64a"},{url:"/svgs/go-small.svg",revision:"047541959046af20aedec7188cbb0228"},{url:"/svgs/go.svg",revision:"6163b5e548f16b56615efd09ff5fd5b8"},{url:"/svgs/google.svg",revision:"79ad21254e01bb169ed106cb408c8332"},{url:"/svgs/heart-color.svg",revision:"150749de8f1597fef2e3107c8de7a5e9"},{url:"/svgs/heart-fill.svg",revision:"734190dced1533389c5d9b3d349f1fd5"},{url:"/svgs/heart.svg",revision:"009f4cde142f5fbc0f90785a285b78f5"},{url:"/svgs/job-default.svg",revision:"20582e65dfc846aad8cb41e606c5d8f8"},{url:"/svgs/job-icon.svg",revision:"fc2ae5c1e2a32cadc84374714f263bab"},{url:"/svgs/job-test.svg",revision:"be6d13ef702e9573fd5aea33fdacfc46"},{url:"/svgs/kakao.svg",revision:"f0ae7dbac109b52ad7f00a3c21d40d89"},{url:"/svgs/location.svg",revision:"be7d7748bddfc0cbea87e488ab4b3ecd"},{url:"/svgs/map.svg",revision:"230e2b7a2489c25e13daf382bed84838"},{url:"/svgs/naver.svg",revision:"5fcdf1274693a9f6c1939805d9982341"},{url:"/svgs/search.svg",revision:"c217548d0e13969526e36d8c9fa47c7c"},{url:"/svgs/setting-color.svg",revision:"977f0307a0493a2e9cecf8dfaf6c2df6"},{url:"/svgs/setting-fill.svg",revision:"243ad0136a4cfb822f0fcf42860634a9"},{url:"/svgs/setting.svg",revision:"032a713ba5af1878998b38524b951e69"},{url:"/svgs/stay-icon.svg",revision:"98e226f119b0fc58a514622c12c4e560"},{url:"/svgs/tour-icon.svg",revision:"3c73bd420903ba7f0179651cd91f179c"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
