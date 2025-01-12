import { PropsWithChildren } from "react";

const View = ({ children }: PropsWithChildren) => {
  return <div className="container bg-white dark:bg-black p-4 h-screen">{children}</div>;
};

export default View;
