import * as React from "react";

export interface IMobileFooterProps {
  children: any;
}

export function MobileFooter(props: IMobileFooterProps) {
  return (
    <footer className="fixed bottom-0 bg-white w-full px-2 py-4 flex justify-end drop-shadow-md">
      {props.children}
    </footer>
  );
}
