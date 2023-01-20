import React, { useRef } from "react";
import Image from "next/image";
import { close } from "../../../public/images";

const Header = () => {
  let resMenu = useRef(null);
  let resMenuHeader = useRef(null);
  return (
    <div
      ref={resMenu}
      className="fixed w-full top-0 left-0 overflow-hidden h-screen bg-black translate-y-[1000px]"
    >
      <div
        ref={resMenuHeader}
        className="flex items-start justify-between w-[100%] h-fit py-[5px]"
      >
        <div className="mx-[5px] mix-blend-difference font-momentum font-semibold text-[20px] leading-none">
          Winged <br /> Anubis
        </div>
        <div className="block md:hidden cursor-pointer mx-[5px]">
          <Image
            src={close}
            alt="closeicon"
            className="w-9 object-contain invert"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
