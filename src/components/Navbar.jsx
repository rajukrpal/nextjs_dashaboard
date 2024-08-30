import { announcement, avatar, message, search } from "@/images/images";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* searchbar */}
      <div className="hidden lg:flex gap-3 items-center text-xs rounded-full relative ring-[1.5px] ring-gray-400 px-2">
        <Image className="absolute top-2 right-2" src={search} alt="search" width={14} height={14} />

        <input className="w-[200px] p-2 bg-transparent outline-none" type="text" placeholder="Search..." />
      </div>
      {/* Icon And User */}
      <div className="flex items-center gap-6">
        <div className="bg-white rounded-full w-7 flex items-center justify-center cursor-pointer">
          <Image src={message} alt="message" height={20} width={20} />
        </div>
        <div className="bg-white rounded-full w-7 flex items-center justify-center cursor-pointer relative ">
          <Image src={announcement} alt="message" height={20} width={20} />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            2
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Don</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image src={avatar} width={36} height={36} className="rounded-full" />
      </div>
    </div>
  );
};

export default Navbar;
