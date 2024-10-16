
// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

const GOOGLE_API_KEY = "AIzaSyDfLDKmHu-pkFWTUDM4_rFC4KCZY-8MOT4"
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" + GOOGLE_API_KEY;

