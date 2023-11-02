import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container px-8 pt-8 mx-auto w-auto">{children}</div>;
};

export default Container;
