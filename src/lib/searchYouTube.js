var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      'part': 'snippet',
      'type': 'video',
      'key': options.key,
      'q': options.query,
      'maxResults': options.max,
    },
    contentType: 'application/json',
    error: function(e) {
      console.log(e);
    },
  }).done((data) => {
    return callback(data.items);
  });
};

export default searchYouTube;
