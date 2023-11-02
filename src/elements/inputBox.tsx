interface inputProps {
  value?: string;
  type: "text" | "password" | "email" | "number" | "date";
  name?: string;
  placeholder: string;
  size?: "sm" | "md" | "lg" | "xl" | "w";
  className?: string;
  variant: string;
  onChange: (value: string) => void;
  required?: "required";
  autocomplete?: string;
}
const InputBox: React.FC<inputProps> = ({
  variant,
  value,
  name,
  type,
  placeholder,
  required,
  autocomplete,
  size = "md",
  className = "",
  onChange,
}) => {
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
    xl: "px-4 py-3 text-2xl",
    w: "w-full text-xl p-4 w-full mx-2",
  }[size];

  const variantClasses = ` ${
    variant === "default"
      ? `font-display font-extrabold rounded appearance-none relative block w-full px-3 py-2 border border-purple-600 placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 focus:z-10 sm:text-sm`
      : ""
  }`;

  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className={`border rounded-lg rounded ${sizeClasses} ${className} ${variantClasses}`}
      onChange={(e) => onChange(e.target.value)}
      required
      autoComplete={autocomplete}
    />
  );
};

export default InputBox;
