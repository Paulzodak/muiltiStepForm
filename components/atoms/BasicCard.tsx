import * as React from "react";

export interface BasicCardProps {
  children: any;
}

export function BasicCard({ children }: BasicCardProps) {
  return (
    <div className="drop-shadow-md left-[auto] mx-auto center bg-white w-[20rem]  rounded-lg p-4">
      {children}
    </div>
  );
}
