import Image from "next/image";
import { useState } from "react";
import { BsYoutube } from "react-icons/bs";
import YouTube, { YouTubeEvent } from "react-youtube";

interface REDImageSliderVideoProps {
    videoId: string;
    thumbnailSrc: string;
    priority?: boolean;
}

const REDImageSliderVideo = ({ videoId, thumbnailSrc, priority }: REDImageSliderVideoProps) => {
    const [videoRef, setVideoRef] = useState<YouTubeEvent["target"]>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClickPlayButton = () => {
        if (videoRef) {
            videoRef.playVideo();
            setIsPlaying(!isPlaying);
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
                    <div className="absolute inset-0 -z-10">
                        <Image
                            src={thumbnailSrc}
                            alt="Real Estate"
                            layout="fill"
                            className="object-cover object-center w-full h-full"
                            priority={priority}
                        />
                    </div>
                    <BsYoutube className="text-4xl lg:text-7xl" />
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

export default REDImageSliderVideo;
