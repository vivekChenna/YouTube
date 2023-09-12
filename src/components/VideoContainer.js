import React, { useState, useEffect } from "react";
import { Youtube_Videos_URL } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [data, setData] = useState([]);

  const getYoutubeData = async () => {
    const response = await fetch(Youtube_Videos_URL);
    const { items } = await response.json();
    console.log(items);
    setData(items);
  };

  useEffect(() => {
    getYoutubeData();
  }, []);

  return (
    <div className="videoContainer">
      {data.map((videoData) => {
        return <VideoCard key={videoData.id} {...videoData} />;
      })}
    </div>
  );
};

export default VideoContainer;
