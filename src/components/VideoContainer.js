import React, { useState, useEffect } from "react";
import { Youtube_Videos_URL } from "../utils/constants";
// import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [data, setData] = useState([]);

  const getYoutubeData = async () => {
    const response = await fetch(Youtube_Videos_URL);
    const { items } = await response.json();

    console.log(Object.keys(items));

    const finalData = Object.values(items);
    console.log(finalData);
  };

  useEffect(() => {
    getYoutubeData();
  }, []);

  return <div></div>;
};

export default VideoContainer;
