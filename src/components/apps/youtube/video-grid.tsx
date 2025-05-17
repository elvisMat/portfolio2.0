import React from "react";
import VideoCard from "./video-card";

type VideoData = {
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  time: string;
};

type VideoGridProps = {
  videos: VideoData[];
};

const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {videos.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
  );
};

export default VideoGrid;
