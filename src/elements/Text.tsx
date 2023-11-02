import React from "react";

interface TextProps {
  color?: string;
  font?: string;
  size?: string;
  align?: "left" | "center" | "right";
  className?: string;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  children,
  align,
  size,
  color,
  font,
  className,
}) => {
  const alignClass = align ? `text-${align}` : "text-left";
  const sizeClass = size ? `${size}` : "text-base";
  const colorClass = color ? `${color}` : "text-black";
  const fontClass = font ? `font-${font}` : "";

  return (
    <p
      className={`${alignClass} ${sizeClass} ${colorClass} ${fontClass} ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;
