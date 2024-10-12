type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "transparent";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
};

const Button = ({
  children,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}: ButtonProps) => {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    transparent: "bg-transparent text-gray-800",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        (variants as any)[variant]
      } px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
