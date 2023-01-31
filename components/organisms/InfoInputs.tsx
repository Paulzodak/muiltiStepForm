import * as React from "react";
import { Input } from "../molecules/Input";

export interface IAppProps {}

export function InfoInputs(props: IAppProps) {
  return (
    <div>
      <Input name="Name" placeholder="e.g Stephen King" />
      <Input name="Email Address" placeholder="e.g stephenking@gmail.com" />
      <Input name="Phone Number" placeholder="+234 8164857706" />
    </div>
  );
}
