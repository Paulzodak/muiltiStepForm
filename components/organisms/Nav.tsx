import * as React from "react";
import { useSelector } from "react-redux";

export interface INavProps {}

export function Nav(props: INavProps) {
  const { navItems } = useSelector((state: any) => state.nav);
  console.log(navItems);
  return (
    <div className=" mb-[3rem]  mobile:text-center ">
      {navItems.map((item: any) => {
        return (
          <div
            key={item.id}
            className={` ${
              item.active
                ? "bg-[#BADDF7] text-black"
                : "text-white border-white border-[1px]"
            } ${"inline-block text-xl font-main  mx-2 h-9 w-9 pt-1   rounded-full  text-center "}`}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
