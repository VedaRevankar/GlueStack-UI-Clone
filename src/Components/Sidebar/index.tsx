"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Pencil from "/public/images/20_20.png";

import UserImage from "../UserImage";
import Text from "@/elements/Text";
import Link from "next/link";

const Sidebar: React.FC = () => {
  //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  return (
    <aside className="relative fixed h-screen max-w-xs flex flex-col w-80 border border-coolGray-200">
      {/* UserInfo */}
      <div className="pt-10 pb-4 flex flex-col items-center border-b border-gray-200 px-[84px]">
        <UserImage width={140} height={140} />
        <div className="flex items-center justify-center gap-2 pt-3">
          <Text
            color="text-coolGray-800"
            size="lg"
            font=""
            align="center"
            className="font-bold"
          >
            Jane Doe
          </Text>
          <Image src={Pencil} alt="pencil" />
        </div>
        <Text
          color="text-coolGray"
          size="sm"
          font=""
          align="center"
          className="pt-1"
        >
          janedoe2@mydomain.com
        </Text>
      </div>

      {/* NavMenu */}
      <div className="p-4">
        <div className="flex gap-4 px-5 py-3 active:rounded-md active:bg-primary-100 active:text-primary-900 hover:rounded-md hover:bg-primary-100 hover:text-primary-900">
          <Icon icon="ic:round-home" width={20} height={20} />
          <Link href="/home">Home</Link>
        </div>
        <div className="flex gap-4 px-5 py-3 active:rounded-md active:bg-primary-100 active:text-primary-900 hover:rounded-md hover:bg-primary-100 hover:text-primary-900">
          <Icon icon="bxs:book-open" width={20} height={20} />
          <Link href="/syllabus">Syllabus</Link>
        </div>
        <div className="flex gap-4 px-5 py-3 active:rounded-md active:bg-primary-100 active:text-primary-900 hover:rounded-md hover:bg-primary-100 hover:text-primary-900">
          <Icon icon="ic:twotone-speed" width={20} height={20} />
          <Link href="/test">Test</Link>
        </div>
        <div className="flex gap-4 px-5 py-3 active:rounded-md active:bg-primary-100 active:text-primary-900 hover:rounded-md hover:bg-primary-100 hover:text-primary-900">
          <Icon icon="material-symbols:subscriptions" width={20} height={20} />
          <Link href="/subscribe">Subscribe</Link>
        </div>
      </div>
      {/* LogOut */}
      <div className="flex gap-4 px-9 py-5 border-t border-gray-200 absolute bottom-0 left-0 right-0">
        <Icon icon="material-symbols:logout" width={20} height={20} />
        <Link href="/logout">
          <button className="">Logout</button>
        </Link>
      </div>
      {/* <div
        className={`sidebar transition-width duration-300 bg-sidebar text-white relative ${
          isSidebarOpen || isHovered ? "open w-72" : "w-14"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`bg-header ${
            isSidebarOpen || isHovered ? "flex flex-row justify-between" : ""
          }`}
        >
          <div
            className={`py-2 px-2 ${
              isSidebarOpen || isHovered ? "block" : "hidden"
            }`}
          ></div>
          <button
            onClick={toggleSidebar}
            className="hover:bg-header p-2 h-10 mx-2 my-4 rounded text-white"
          >
            <MenuIcon className="" />
          </button>
        </div>
        <div className={`${isSidebarOpen || isHovered ? "block" : "hidden"}`}> */}
      {/* Add your sidebar content here */}
      {/* <div className="">
            <div className="flex items-center p-4 ">
              <div className="ml-4">
                <div className="flex items-center">
                  <span className="h-3 w-3 bg-green-600 rounded-full mr-1" />
                  <span className="text-green-600 mr-1">Online</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="p-4">
                <div className="flex items-center rounded-lg bg-white p-2">
                  <SearchIcon className="text-gray-600" />
                  <InputBase
                    placeholder="Search..."
                    className="ml-2 flex-grow outline-none"
                  />
                </div>
              </div>

              <div className="mb-auto"></div>

              <div className="p-4 sticky bottom-0">
                <button className="hover:shadow hover:bg-sidebar-active text-white py-2 px-4 rounded-full w-full font-extrabold font-display text-center text-xl sticky bottom-0">
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </aside>
  );
};

export default Sidebar;
