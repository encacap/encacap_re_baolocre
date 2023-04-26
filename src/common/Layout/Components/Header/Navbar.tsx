import { twMerge } from "tailwind-merge";
import NavbarContainer from "./NavbarContainer";
import NavbarItem from "./NavbarItem";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={twMerge(className, "relative")}>
      <NavbarContainer className="overflow-x-auto overflow-y-hidden overflow-clip scrollbar-none">
        <NavbarItem href="/">Trang chủ</NavbarItem>
        <NavbarItem href="/bat-dong-san-ban">Bất động sản bán</NavbarItem>
        <NavbarItem href="/tin-tuc">Tin tức</NavbarItem>
        <NavbarItem href="/thu-vien-nha-mau">Thư viện nhà mẫu</NavbarItem>
      </NavbarContainer>
      <span className="absolute inset-y-0 right-0 w-8 background-[linear-gradient(to left, #000 10%, rgba(249, 249, 249, 0) 90%)]" />
    </div>
  );
};

export default Navbar;
