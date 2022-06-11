import Script from "next/script";
import ZaloIcon from "../../../../../common/Icons/ZaloTextIcon";

const ZaloShareButton = () => {
    return (
        <>
            <div className="relative flex items-center justify-center px-4 py-2 font-semibold text-center text-white duration-200 border-2 rounded-md cursor-pointer border-encacap-zalo bg-encacap-zalo hover:bg-white hover:text-encacap-zalo">
                <div className="relative z-20 flex items-center">
                    <div className="mr-4 group">
                        <ZaloIcon className="w-7" />
                    </div>
                    Chia sẻ
                </div>
                <div
                    className="absolute inset-0 zalo-share-button"
                    data-href=""
                    data-oaid="579745863508352884"
                    data-layout="1"
                    data-color="blue"
                    data-customize
                />
            </div>
            <Script src="https://sp.zalo.me/plugins/sdk.js" strategy="lazyOnload" />
        </>
    );
};

export default ZaloShareButton;
