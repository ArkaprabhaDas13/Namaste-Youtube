
// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

const GOOGLE_API_KEY = "AIzaSyDfLDKmHu-pkFWTUDM4_rFC4KCZY-8MOT4"

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key=" + GOOGLE_API_KEY;

export const YOUTUBE_RESULTS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=F1&key="+ GOOGLE_API_KEY

export const YOUTUBE_SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const LIVE_CHAT_PAGINATION_VALUE = 20