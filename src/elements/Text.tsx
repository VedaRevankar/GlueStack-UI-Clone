import React from 'react';

interface TextProps {
  color?: string;
  font?: string;
  size?: string;
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  children,
  align,
  size,
  color,
  font,
}) => {
  const alignClass = align ? `text-${align}` : 'text-left';
  const sizeClass = size ? `${size}` : 'base';
  const colorClass = color ? `${color}` : 'black';
  const fontClass = font ? `font-${font}` : 'font-display';

  return <p className={`${alignClass} text-${sizeClass} text-${colorClass} ${fontClass}`}>{children}</p>;
};

export default Text;
