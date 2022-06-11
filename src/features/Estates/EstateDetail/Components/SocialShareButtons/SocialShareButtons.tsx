import FacebookShareButton from "./FacebookShareButton";
import ZaloShareButton from "./ZaloShareButton";

const SocialShareButtons = () => {
    return (
        <div className="grid grid-cols-2 gap-4 mt-6 md:gap-10">
            <ZaloShareButton />
            <FacebookShareButton />
        </div>
    );
};

export default SocialShareButtons;
