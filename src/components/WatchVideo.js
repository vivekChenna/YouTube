import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSideBar } from "../utils/appSlice";
import Loader from "./Loader";
import Comment from "./Comment";

const WatchVideo = () => {
  // const [channelDetails, setChannelDetails] = useState(null);

  const [load, setLoad] = useState(true);
  const [videoData, setVideoData] = useState([]);
  const [channelData, setChannelData] = useState([]);
  const [commentsData, setCommentsData] = useState([]);

  const [searchParams] = useSearchParams();
  const queryParams = searchParams.get("v");
  const dispatch = useDispatch();

  const getVideoInfo = async () => {
    // this api call is for video data
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${queryParams}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
    const { items } = await response.json();
    // console.log("printing items");
    setVideoData(items[0]);
    const channelId = items[0]?.snippet.channelId;

    // this api call is for channel data
    const result = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );

    const finalData = await result.json();
    // console.log("printing final Data");
    // console.log(finalData.items[0]);
    setChannelData(finalData?.items);

    // this api call is for video comments
    // const responseForComments = await fetch(
    //   `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=10&videoId=${queryParams}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    // );

    // const jsonDataForComments = await responseForComments.json();
    // console.log("printing data of comments");
    // console.log(jsonDataForComments.items[0]);
    // setCommentsData(jsonDataForComments.items);

    setLoad(!load);
  };

  useEffect(() => {
    dispatch(closeSideBar());
    getVideoInfo();
  }, []);

  return load ? (
    <Loader />
  ) : (
    <div className="watch-video-div">
      <iframe
        width="1100"
        height="570"
        src={`https://www.youtube.com/embed/${queryParams}?si=asBPvWo7pHNlqyaH`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p className="video-title">{videoData.snippet.title}</p>
      <div className="channel-data-div">
        <img
          src={channelData[0]?.snippet?.thumbnails?.medium?.url}
          alt="channel-img"
          width="40"
        />
        <div className="channel-data-title-sub">
          <p>
            <span className="watch-video-div-channel-title">
              {channelData[0]?.snippet?.title}
            </span>
            <span
              style={{
                display: "inline-block",
                fontSize: "10px",
                color: "#000000",
                background: "#cccccc",
                borderRadius: "30px",
                padding: "2px 5px",
              }}
            >
              ✔
            </span>
          </p>
          <p>{`${
            channelData[0].statistics.subscriberCount / 100000
          }lakh subscribers`}</p>
        </div>
      </div>

      {/* <div className="comments-div">
        {commentsData.map((data) => {
          return <Comment {...data} />;
        })}
      </div> */}
    </div>
  );
};

export default WatchVideo;
