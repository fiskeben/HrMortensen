var randomReply = require('./replies'),
  config = require('./config'),
  Twit = require('twit'),
  twit = new Twit(config),
  stream1 = twit.stream('statuses/filter', { track: 'da jeg var barn' }),
  stream2 = twit.stream('statuses/filter', { track: 'dengang jeg var barn' });

function handleTweet (tweet) {
  console.log('Tweet recieved.', tweet.id);
  var reply = {
    status: '@' + tweet.user.screen_name + ' ' + randomReply(),
    in_reply_to_status_id: tweet.id
  };
  twit.post('statuses/update', reply, function (err, data, response) {
    if (err) {
      console.error('Error posting tweet: ' + err);
    } else {
      console.log('Reply ' + data.created_at + ' (' + data.id + '): ' + data.text);
    }
  })
}

console.log('Starting listeners...');
stream1.on('tweet', handleTweet);
stream2.on('tweet', handleTweet);
console.log('Listening...');
