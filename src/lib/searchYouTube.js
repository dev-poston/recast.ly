import apiKey from '../config/youtube.js';

var searchYouTube = ({key, max = 5, query}, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: key,
      q: query,
      part: 'snippet',
      maxResults: max,
      type: 'video',
      videoEmbeddable: true,
    },
    success: function(data) {
      console.log(data);
      callback(data);
    },
    error: function(response) {
      console.log('Request Failed');
    }
  });
};

export default searchYouTube;
