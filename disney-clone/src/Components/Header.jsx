import React, { useState } from "react";
import disneyLogo from "../assets/images/disneyLogo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from "./HeaderItems";

function Header() {
    const[toggle, setToggle] = useState(false)
  const menu = [
    {
      name: "Home",
      icon: HiHome,
    },
    {
      name: "Search",
      icon: HiMagnifyingGlass,
    },
    {
      name: "My List",
      icon: HiPlus,
    },
    {
      name: "Originals",
      icon: HiStar,
    },
    {
      name: "Movies",
      icon: HiPlayCircle,
    },
    {
      name: "Series",
      icon: HiTv,
    }
  ];
  return (
    <div className="flex items-center  justify-between px-5">
      <div className="flex gap-8 items-center">
        <img
          src={disneyLogo}
          alt="disneyLogo"
          className="w-[60px] md:w-[90px] object-cover"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItems name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItems name={''} Icon={item.icon} />
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItems name={""} Icon={HiDotsVertical} />
            {toggle ? <div className="absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-4">
              {menu.map(
                (item, index) =>
                  index > 2 && <HeaderItems name={item.name} Icon={item.icon} />
              )}
            </div> : null}
          </div>
        </div>
      </div>
      <img
        src="https://rb.gy/g1pwyx"
        alt="user"
        className="w-[30px] h-[30px] md:w-[55px] md:h-[55px] rounded-full"
      />
    </div>
  );
}

export default Header;
