import Image from "next/image";
import React from "react";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          className="w-[200px] p-2 bg-transparent border-none outline-none focus:ring-0"
          placeholder="Search...."
        />
      </div>
      {/* ICON AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center cursor-pointer relative">
          <Image src="/announcement.png" alt="" width={20} height={20} />
          <div className="absolute -top-3 -right-3 w-5 h-5 items-center justify-center bg-purple-500 text-white rounded-full flex text-sm">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Dow</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        {/*<Image*/}
        {/*  alt=""*/}
        {/*  src="/avatar.png"*/}
        {/*  width={36}*/}
        {/*  height={36}*/}
        {/*  className="rounded-full"*/}
        {/*/>*/}
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
