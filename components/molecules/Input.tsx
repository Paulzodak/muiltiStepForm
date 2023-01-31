import * as React from "react";

export interface IInputProps {
  name: string;
  placeholder: string;
}

export function Input(props: IInputProps) {
  console.log(props.name);
  return (
    <div className="my-5">
      <label
        htmlFor="input"
        className="text-textDarkBlue font-medium font-main"
      >
        {props.name}
      </label>
      <input
        id={props.name}
        className="w-full h-10 border-2 border-textGrey-1 font-main rounded px-3"
        placeholder={props.placeholder}
      />
    </div>
  );
}
