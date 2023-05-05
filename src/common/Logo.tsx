import Image from "next/image";

const Logo = () => {
  return (
    <a href="/" className="relative flex items-center header-logo">
      <div className="w-12 h-12 overflow-hidden border-2 rounded-lg border-encacap-main">
        <Image width={48} height={48} src="/images/logo.jpg" alt="Encacap Estate Logo" />
      </div>
      <div className="ml-4 uppercase header-logo-text">
        <div className="mt-1 ml-px text-xs font-semibold">BĐS nghỉ dưỡng</div>
        <div className="text-2xl font-bold text-encacap-main">Bảo Lộc</div>
      </div>
    </a>
  );
};

export default Logo;
