type IconButtonProps = {
  onClick: (e: any) => void;
  className?: string;
  title: string;
  children: React.ReactNode;
};
const IconButton = ({
  onClick,
  className = "",
  title,
  children,
}: IconButtonProps) => (
  <button
    onClick={onClick}
    title={title}
    className={`p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
  >
    {children}
  </button>
);

export default IconButton;
