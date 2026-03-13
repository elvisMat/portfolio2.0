const sampleVideos = [
  {
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    title: "Never Gonna Give You Up",
    channel: "Rick Astley",
    views: "1.2B views",
    time: "13 years ago",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/tgbNymZ7vqY/hqdefault.jpg",
    title: "Charlie bit my finger - again!",
    channel: "HDCYT",
    views: "880M views",
    time: "14 years ago",
  },
  // Add more as needed
];

// import React from "react";
import VideoGrid from "./youtube/video-grid";

function Youtube() {
  return (
    <div className="min-h-screen bg-white">
      <VideoGrid videos={sampleVideos} />
    </div>
  );
}

export default Youtube;
