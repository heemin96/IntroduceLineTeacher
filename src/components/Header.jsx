import Image from "next/image";
import React from "react";
import RedPlus from "public/icons/MainLogo2.svg";
import GtwinsLogo from "public/icons/gtwinslogo.png";
import Link from "next/link";

function Header() {
  const platform = process.env.NEXT_PUBLIC_PLATFORM;

  return (
    <div className="sticky z-50 bg-white  top-0 p-4 border-b-2 border-[#545454] shadow-xl">
      <div className=" mx-auto flex flex-wrap flex-col md:flex-row  items-center ">
        <div className="flex title-font font-medium items-center  text-gray-900 mb-4 md:mb-0  w-40 max-[360px]:w-28  ">
          <Link href="/">
            {platform === "eugene" ? (
              <Image src={GtwinsLogo} alt="GtwinsLogo" />
            ) : (
              <Image src={RedPlus} alt="RedPlus" />
            )}
          </Link>
        </div>

        <div className="flex md:ml-auto   max-[480px]:flex-col  flex-row  flex-wrap items-center text-base md:self-end self-center justify-center gap-4">
          <Link href="https://cafe.naver.com/kindfiner" target="_blank">
            <div className=" hover:text-gray-900  text-lg font-bold drop-shadow-lg  max-[360px]:text-base ">
              추세선생 네이버카페
            </div>
          </Link>
          <Link href="https://www.youtube.com/@TV-sy5er" target="_blank">
            <div className=" hover:text-gray-900 text-lg font-bold drop-shadow-lg  max-[360px]:text-base ">
              유튜브채널
            </div>
          </Link>
          <Link
            href="https://m.eugenefn.com/main.do"
            target="_blank"
          >
            <div className="hover:text-gray-900 text-lg font-bold drop-shadow-lg  max-[360px]:text-base">
              유진투자증권
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
