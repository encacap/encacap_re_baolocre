import SidebarContainer from "./SidebarContainer";
import SidebarItem from "./SidebarItem";

const Sidebar = () => (
    <SidebarContainer className="items-center hidden ml-4 mr-4 font-semibold md:flex lg:ml-10">
        <SidebarItem href="/">Trang chủ</SidebarItem>
        <SidebarItem href="/bat-dong-san-ban">Bất động sản bán</SidebarItem>
        <SidebarItem href="/tin-tuc">Tin tức</SidebarItem>
        <SidebarItem href="/thu-vien-nha-mau">Thư viện nhà mẫu</SidebarItem>
    </SidebarContainer>
);

export default Sidebar;
