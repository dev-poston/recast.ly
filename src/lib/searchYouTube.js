import apiKey from '../config/youtube.js';

var searchYouTube = ({query, max = 5}, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: apiKey,
      q: query,
      part: 'snippet',
      maxResults: max,
      type: 'video',
      videoEmbeddable: true,
    },
    success: function(data) {
      callback(data);
    },
    error: function(response) {
      console.log('Request Failed');
    }
  });
};

export default searchYouTube;
