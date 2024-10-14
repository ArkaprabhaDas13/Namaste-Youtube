
// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

const GOOGLE_API_KEY = "AIzaSyBbiWXZ9VP99MMnvviyylcWnG8Ow9er8OU"
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" + GOOGLE_API_KEY;