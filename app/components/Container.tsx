import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`max-w-[1760px] w-full m-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
