import React from "react";

type VideoCardProps = {
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  time: string;
};

const VideoCard: React.FC<VideoCardProps> = ({
  thumbnail,
  title,
  channel,
  views,
  time,
}) => {
  return (
    <div className="w-full max-w-sm cursor-pointer">
      <img
        src={thumbnail}
        alt={title}
        className="rounded-lg w-full aspect-video object-cover"
      />
      <div className="mt-2">
        <h3 className="text-sm font-semibold leading-snug line-clamp-2">
          {title}
        </h3>
        <p className="text-xs text-gray-500 mt-1">{channel}</p>
        <p className="text-xs text-gray-400">
          {views} • {time}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
