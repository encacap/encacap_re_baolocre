import Navbar from "./Navbar";
import SocialItems from "./SocialItems";

const Header = () => (
    <div className="w-full px-4 border-b-2 border-gray-100 shadow-md shadow-gray-50 lg:px-10">
        <div className="flex items-center justify-between h-20 md:h-20">
            <div className="flex items-center">
                <a href="/" className="flex items-center header-logo">
                    <img
                        src="/images/logo.jpg"
                        alt="Encacap Estate Logo"
                        className="w-12 border-2 rounded-lg border-encacap-main"
                    />
                    <div className="ml-4 uppercase header-logo-text">
                        <div className="mt-1 ml-px text-xs font-semibold">BĐS nghỉ dưỡng</div>
                        <div className="text-2xl font-bold text-encacap-main">Bảo Lộc</div>
                    </div>
                </a>
                <Navbar />
            </div>
            <SocialItems />
        </div>
    </div>
);

export default Header;
