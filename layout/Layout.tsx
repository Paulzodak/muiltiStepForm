import React from "react";
import Image from "next/image";
import bg from "assets/images/bg-mobile.svg";
import { BasicCard } from "../components/atoms/BasicCard";
const Layout = () => {
  const navItems = [
    { index: 1, active: true },
    { index: 2, active: false },
    { index: 3, active: false },
    { index: 4, active: false },
  ];
  return (
    <div className="bg-cover  w-full h-[10rem] bg-[url('../assets/images/bg-mobile.svg')]">
      <nav> </nav>
      <BasicCard />
    </div>
  );
};

export default Layout;
