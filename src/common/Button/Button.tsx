import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: "primary" | "secondary" | "tertiary" | "gray" | "white";
  children: React.ReactNode;
}

const Button = ({ color, children, className, type = "button" }: ButtonProps) => {
  const colorClassName = {
    gray: "text-black bg-gray-50 border-gray-100 hover:bg-encacap-main hover:border-encacap-main hover:text-white",
  };

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={twMerge(
        "flex items-center justify-center flex-1 px-3 py-2 text-sm font-semibold text-center duration-200 border-2 rounded-md",
        colorClassName[String(color)],
        // eslint-disable-next-line comma-dangle
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
