import Image from "next/image";
import { useState } from "react";
import YouTube, { YouTubeEvent } from "react-youtube";
import YoutubeIcon from "../../../../../common/Icons/YoutubeIcon";

interface REDImageSliderVideoProps {
    videoId: string;
    thumbnailSrc: string;
    priority?: boolean;
}

const EstateImageSliderVideo = ({ videoId, thumbnailSrc, priority }: REDImageSliderVideoProps) => {
    const [videoRef, setVideoRef] = useState<YouTubeEvent["target"]>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isShowThumbnail, setIsShowThumbnail] = useState(true);

    const handleClickPlayButton = () => {
        if (videoRef) {
            videoRef.playVideo();
            setIsPlaying(!isPlaying);
            setIsShowThumbnail(false);
        }
    };

    return (
        <div className="relative w-full h-full">
            <div className="absolute inset-0 -z-10 blur-xl bg-white/30">
                <Image
                    src={thumbnailSrc}
                    alt="Real Estate"
                    layout="fill"
                    quality={1}
                    className="object-cover object-center w-full h-full"
                    priority={priority}
                />
            </div>
            {!isPlaying && (
                <div
                    className="absolute inset-0 z-10 flex items-center justify-center text-white duration-150 bg-black bg-opacity-20 hover:text-red-500"
                    onClick={handleClickPlayButton}
                    tabIndex={0}
                    role="button"
                >
                    {isShowThumbnail && (
                        <div className="absolute inset-0 -z-10">
                            <Image
                                src={thumbnailSrc}
                                alt="Real Estate"
                                layout="fill"
                                className="object-cover object-center w-full h-full"
                                priority={priority}
                            />
                        </div>
                    )}
                    <YoutubeIcon className="w-12 sm:w-16 lg:w-20" />
                </div>
            )}
            <YouTube
                videoId={videoId}
                iframeClassName="w-full h-full"
                className="relative z-0 w-full h-full"
                loading="lazy"
                onReady={(e) => setVideoRef(e.target)}
                onPause={() => setIsPlaying(false)}
            />
        </div>
    );
};

export default EstateImageSliderVideo;
