import Image from "next/image";
import { ContactInformationType } from "../../../../types/dataTypes";
import Navbar from "./Navbar";
import SocialItems from "./SocialItems";

export interface HeaderProps {
  isHideMobileNavbar?: boolean;
  contactInformation?: ContactInformationType;
}

const Header = ({ isHideMobileNavbar = false, contactInformation }: HeaderProps) => {
  return (
    <div className="w-full px-4 border-b-2 border-gray-100 shadow-md shadow-gray-50 lg:px-10">
      <div className="flex items-center justify-between h-20 md:h-20">
        <div className="flex items-center">
          <a href="/" className="relative flex items-center header-logo">
            <div className="w-12 h-12 overflow-hidden border-2 rounded-lg border-encacap-main">
              <Image width={48} height={48} src="/images/logo.jpg" alt="Encacap Estate Logo" />
            </div>
            <div className="ml-4 uppercase header-logo-text">
              <div className="mt-1 ml-px text-xs font-semibold">BĐS nghỉ dưỡng</div>
              <div className="text-2xl font-bold text-encacap-main">Bảo Lộc</div>
            </div>
          </a>
          <Navbar className="items-center hidden ml-4 mr-4 font-semibold md:flex lg:ml-10" />
        </div>
        <SocialItems contactInformation={contactInformation} />
      </div>
      {!isHideMobileNavbar && (
        <Navbar className="flex px-4 -mx-4 border-t-2 border-gray-100 whitespace-nowrap md:hidden" />
      )}
    </div>
  );
};

export default Header;
