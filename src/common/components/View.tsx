import { PropsWithChildren } from "react";

const View = ({ children }: PropsWithChildren) => {
  return <div data-scrollable className="container bg-white dark:bg-black p-4 h-screen overflow-y-scroll pb-40">{children}</div>;
};

export default View;
