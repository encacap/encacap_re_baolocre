import { ReactNode } from "react";

export interface IconProps {
  children?: ReactNode;
  href: string;
  className?: string;
}

const IconWrapper = ({ children, href, className }: IconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center w-11 h-11 rounded-full border-2 duration-150 bg-gray-100 text-xl text-zinc-500 ${className}`}
    >
      {children}
    </a>
  );
};

export default IconWrapper;
