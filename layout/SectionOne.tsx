import * as React from "react";
import { BasicCard } from "../components/atoms/BasicCard";
import { InfoInputs } from "../components/organisms/InfoInputs";
export interface ISectionOneProps {}

export default function SectionOne(props: ISectionOneProps) {
  return (
    <BasicCard>
      <h1 className=" text-2xl text-textDarkBlue font-bold font-main mb-2">
        Personal info
      </h1>
      <div className="text-md text-textGrey  mr-0 font-main">
        Please provide your name, email, address, and phone number
      </div>
      <InfoInputs />
    </BasicCard>
  );
}
