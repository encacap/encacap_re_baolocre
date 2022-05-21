import NavbarContainer from "./NavbarContainer";
import NavbarItem from "./NavbarItem";

const Navbar = () => (
    <NavbarContainer className="items-center hidden ml-4 mr-4 font-semibold md:flex lg:ml-10">
        <NavbarItem href="/">Trang chủ</NavbarItem>
        <NavbarItem href="/bat-dong-san-ban">Bất động sản bán</NavbarItem>
        <NavbarItem href="/tin-tuc">Tin tức</NavbarItem>
        <NavbarItem href="/thu-vien-nha-mau">Thư viện nhà mẫu</NavbarItem>
    </NavbarContainer>
);

export default Navbar;
