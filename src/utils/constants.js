export const Youtube_Videos_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
export const Youtube_Channel_Info_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export const Youtube_Search_Suggestion_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
