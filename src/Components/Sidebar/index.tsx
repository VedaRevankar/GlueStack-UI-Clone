"use client";
import React, { useState } from "react";
import Logout from "./Logout";
import UserInfo from "./UserInfo";
import SidebarMenu from "./SidebarMenu";

const Sidebar: React.FC = () => {
  //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  return (
    <aside className="relative max-w-xs flex flex-col w-80 border border-coolGray-200">
      <UserInfo />

      <SidebarMenu />

      <Logout />
    </aside>
  );
};

export default Sidebar;
