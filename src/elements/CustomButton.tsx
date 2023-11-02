import React from "react";

interface ButtonProps {
  children: any;
  type?: string;
  size?: string;
  onClick?: (e: any) => void;
}
const Button = ({ children, type, size, onClick }: ButtonProps) => {
  const buttonClasses = `rounded-md  text-center font-sf-regular mr-2 ${
    type == "success"
      ? `border-[1px]  border-success-600 bg-success-600 text-white`
      : type == "secondary"
      ? `border-[1px]  border-secondary-600 bg-secondary-600 text-white`
      : type == "warning"
      ? `border-[1px]  border-warning-400 mr-2 bg-warning-400 text-white`
      : type == "danger"
      ? `border-[1px]  border-danger-600 bg-danger-600 text-white`
      : type == "grad-btn"
      ? `border-[1px]  border-black bg-gradient-to-r from-lightBlue-400 to-green-400 text-white`
      : type == "outline"
      ? "border border-primary bg-white text-primary"
      : "bg-primary text-white"
  } 
${
  size == "xs"
    ? "py-0 px-2 text-xs lg:px-4 lg:text-sm"
    : size == "sm"
    ? "py-1 px-4 text-sm"
    : size == "base"
    ? "text-base"
    : size == "md"
    ? "w-24 py-2 px-4"
    : size == "lg"
    ? "py-2  px-4 text-sm lg:text-lg xl:px-8"
    : `py-2 px-4 
   `
}`;

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
