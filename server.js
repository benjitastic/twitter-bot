var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key : "b4SDLmBN9q7HiRLILlyPede1Z",
  consumer_secret : "6aZ2YDzQIWUS7GeEp9DlO0qzqYkF5yhepudK4llRMPPshR3fdr",
  access_token_key: '971512800013987841-jd4UpIOSTIiPBdMqQ7PljpGuz45uaKB',
  access_token_secret: 'AebYP0MwCURQETUqwV3hvS8Sh21XKXNOeAheSje4jQT6E'
});


var followArray = ['902926941413453824','961445378','971512101809274882'];
var followString = followArray.join(',');

var stream = client.stream('statuses/filter', {follow: followString});
stream.on('data', function(event) {

  if(followArray.indexOf(event.user.id_str) > -1) { //only include tweets from the actual user

    client.post('statuses/update', {
      status: '@' + event.user.screen_name + '🚨 DO NOT SEND CRYPTO 🚨 Any accounts promising to send you more crypto in exchange are 100% fake. Even if they look real.',
      in_reply_to_status_id: event.id_str
    }, function(error, tweet, response) {
      // console.log("TWEETED");
      if (!error) {
        // console.log(tweet);
      }
    });

  }

});
 
stream.on('error', function(error) {
  throw error;
});