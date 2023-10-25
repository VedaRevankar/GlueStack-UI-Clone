import React from "react";
import logoSVG from "../assets/logo.svg";

interface LogoProps {
  height: string;
  width: string;
  type?: "light" | "dark";
  alt: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ height, width, type, alt, className }) => {
  const fillColor = type === "dark" ? "white" : "black";

  const svgContent = logoSVG;

  const updateFill = (svg: string, fillColor: string): string => {
    return svg.replace(/black/g, `${fillColor}`);
  };

  const updatedSVG = updateFill(svgContent, fillColor);

  return (
    <img
      src={updatedSVG}
      alt={alt}
      height={height}
      width={width}
      className={className}
    />
  );
};

export default Logo;
