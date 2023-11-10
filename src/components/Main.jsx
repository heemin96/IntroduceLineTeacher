"use client";

import React from "react";
import Image from "next/image";
import HTSImage from "public/icons/HTSImage.svg";
import MTSImage from "public/icons/MtsImage.svg";
import WTSImage from "public/icons/WtsImage.svg";
import Link from "next/link";

function Main() {
  return (
    <div className="flex-grow bg-main-texture bg-inherit bg-cover  pb-8">
      <div className="flex flex-col xl:flex-row w-full h-full justify-center  px-2 xl:px-28 mt-8 xl:justify-between items-center ">
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col xl:flex-row gap-6 w-full items-center xl:justify-between">
            <div className="flex  max-[360px]:text-3xl  text-4xl font-bold text-[#545454] ">
              추세선생- <span className="text-black">HTS</span>
            </div>
            <div className=" self-center ">
              <button className="flex text-xl items-center bg-gray-400 text-white font-bold border-0 py-1 px-3 focus:outline-none  rounded  cursor-not-allowed disabled">
                준비중
              </button>
            </div>
          </div>
          <div className=" pl-0 xl:pl-16 font-bold text-lg  w-max[360px]: gap-4 flex flex-col self-center justify-center w-full text-center xl:text-left  max-[360px]:text-base  max-[360px]:font-extrabold mb-2 xl:pr-12 pr:0 ">
            <div>테마의 추세와 테마종목별 추세현황을 한눈에</div>
            <div>자동추세선을 이용한 기술적분석 자동화 차트솔루션</div>

            <div>분할매매 정보와 전략보고서를 실시간 제공</div>
            <div>상승각도를 판정, 기준각 유효성 평가 시스템</div>
          </div>
        </div>
        <div>
          <Image src={HTSImage} width={500} height={500} alt="htsImage" />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row w-full h-full justify-center  px-2 xl:px-28 mt-16 xl:justify-between items-center">
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col xl:flex-row gap-6 w-full items-center xl:justify-between">
            <div className="flex  max-[360px]:text-3xl  text-4xl font-bold text-[#545454] ">
              추세선생- <span className="text-black">WTS</span>
            </div>
            <div className=" self-center ">
              <Link href="https://www.추세선생.com" target="_blank">
                <button className="flex text-xl items-center bg-[#54AC35] text-white font-bold border-0 py-1  px-3 focus:outline-none hover:bg-blue-500 rounded">
                  다운로드
                </button>
              </Link>
            </div>
          </div>
          <div className=" pl-0 xl:pl-16 font-bold text-lg  w-max[360px]: gap-4 flex flex-col self-center justify-center w-full text-center xl:text-left  max-[360px]:text-base  max-[360px]:font-extrabold mb-2 xl:pr-8 pr:0 ">
            <div>글로벌 차트프로그램 트레이딩뷰 무료배포용 웹페이지</div>
            <div>종목별 전문 분석보고서와 ETF 편입 정보 제공</div>

            <div>테마별 상승추세 현황 제공</div>
            <div>종목별 SNS 채널과 커뮤니티 서비스를 경험하세요</div>
          </div>
        </div>
        <div>
          <Image src={WTSImage} width={500} height={500} alt="htsImage" />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row w-full h-full justify-center  px-2 xl:px-28 mt-16 xl:justify-between items-center">
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col xl:flex-row gap-6 w-full items-center xl:justify-between">
            <div className="flex  max-[360px]:text-3xl  text-4xl font-bold text-[#545454] ">
              추세선생- <span className="text-black">MTS</span>
            </div>
            <div className=" self-center ">
              <button className="flex text-xl items-center bg-gray-400 text-white font-bold border-0 py-1 px-3 focus:outline-none  rounded  cursor-not-allowed disabled">
                준비중
              </button>
            </div>
          </div>
          <div className=" pl-0 xl:pl-16 font-bold text-lg  w-max[360px]: gap-4 flex flex-col self-center justify-center w-full text-center xl:text-left  max-[360px]:text-base  max-[360px]:font-extrabold mb-2 ">
            <div>종목별 분할가 분석 서비스 제공</div>
            <div>감시가 설정과 푸쉬 알림 서비스 제공</div>

            <div>매일 송출되는 추세전략 테마현황을 모바일로 간편하게</div>
            <div>유진투자증권 전용 API를 이용한 모바일 트레이딩 시스템</div>
          </div>
        </div>
        <div>
          <Image src={MTSImage} width={500} height={500} alt="htsImage" />
        </div>
      </div>
    </div>
  );
}

export default Main;
