const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const VIDEO_LIST_API =
	'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' +
	YOUTUBE_API_KEY;

export const CHANNEL_LIST_API =
	'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=' +
	YOUTUBE_API_KEY +
	'&id=';

export const YOUTUBE_SEARCH_SUGGESTIONS_API =
	'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const YOUTUBE_SEARCH_LIST_API =
	'https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&key=' +
	YOUTUBE_API_KEY +
	'&q=';

export default VIDEO_LIST_API;
