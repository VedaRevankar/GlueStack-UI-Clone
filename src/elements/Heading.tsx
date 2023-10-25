const Heading = ({ priority, children, color, font}: any) => {
  const DynamicTag: any = `h${priority}`;

  return (
    <DynamicTag
      className={`
      ${font ? `${font}` : 'font-bold'} 
      ${color ? `${color}` : 'text-black'}
      ${priority == 1
          ? 'text-2xl lg:text-6xl'
          : priority == 2
          ? 'text-lg lg:text-5xl'
          : priority == 3
          ? 'text-3xl' 
          : priority == 4
          ? 'text-2xl'
          : priority == 5
          ? 'text-sm lg:text-base xl:text-md'
          : priority == 6 && 'text-sm'
      } 
    `}
    >
      {children}
    </DynamicTag>
  );
};

export default Heading;