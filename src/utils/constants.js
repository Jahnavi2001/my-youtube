
const YOUTUBE_API_KEY = 'AIzaSyDi4i4VbeCRCbEYE8-g4CfkI8su-hQQ5ZU'

const VIDEO_LIST_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' + YOUTUBE_API_KEY

export const YOUTUBE_SEARCH_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='

export default VIDEO_LIST_API