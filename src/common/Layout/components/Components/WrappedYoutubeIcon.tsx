import YoutubeIcon from "../../../Icons/YoutubeIcon";
import IconWrapper, { IconProps } from "./IconWrapper";

const WrappedYoutubeIcon = ({ href }: IconProps) => {
    return (
        <IconWrapper href={href} className="hover:border-red-500 hover:text-red-500 hover:bg-red-100">
            <YoutubeIcon className="w-7" />
        </IconWrapper>
    );
};

export default WrappedYoutubeIcon;
