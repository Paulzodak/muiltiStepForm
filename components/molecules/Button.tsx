import * as React from "react";

export interface IButtonProps {}

export function Button(props: IButtonProps) {
  return (
    <button className="rounded-md font-main bg-textDarkBlue  text-white py-2 px-5">
      Next Step
    </button>
  );
}
