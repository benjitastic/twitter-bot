var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key : "b4SDLmBN9q7HiRLILlyPede1Z",
  consumer_secret : "6aZ2YDzQIWUS7GeEp9DlO0qzqYkF5yhepudK4llRMPPshR3fdr",
  access_token_key: '971512800013987841-jd4UpIOSTIiPBdMqQ7PljpGuz45uaKB',
  access_token_secret: 'AebYP0MwCURQETUqwV3hvS8Sh21XKXNOeAheSje4jQT6E'
});

var followArray = [
  '902926941413453824',
  '961445378',
  '971512101809274882',
  '877807935493033984',
  '14338147',
  '1399148563',
  '28582680',
  '295218901',
  '886832413',
  '2309637680',
  '352518189',
  '103451046',
  '176758255',
  '61417559',
  '14379660',
  '1469101279',
  '2799211554',
  '2568108282',
  '143053926',
  '1333467482',
  '513685292',
  '906588230031683584',
  '435697346',
  '904385560080470017',
  '965914322806419457',
  '962287505411395585',
  '966543170086539265',
  '111793165',
  '962980299440316416',
  '322469786',
  '91391436',
  '956491575986552832',
  '960878992625684484',
  '965126622041997313',
  '44196397',
  '2319436837',
  '902839045356744704'
];
var followString = followArray.join(',');

var messages = [
  "🚨 DO NOT SEND CRYPTO 🚨 Any accounts promising to send you more crypto in exchange are 100% fake. Even if they look real.",
  "🚨 SCAM ALERT 🚨 Is somebody replies here promising to send you more crypto in return? Don't. It's 100% a scam even if it looks legit.",
  "🚨 WARNING WARNING 🚨 Scammers posting twitter replies! NEVER send your crypto to anybody on twitter even if it looks like a legitimate account.",
  "🚨 FAKE ACCOUNTS ALERT 🚨 Check the replies to this tweet. Fake accounts look legitimate and will ask for your crypto in exchange for more crypto. Don't fall for it.",
  "🚨 HIDE YOUR CRYPTO HIDE UR WIFE 🚨 There will be scammers replying to this tweet telling you to send them crypto. Don't.",
  "🚨 GIVEAWAYS TOO GOOD TO BE TRUE? 🚨 Yes. Yes. Yes. Don't send your crypto to addresses replying to this tweet. They are fake accounts that look real.",
  "🚨 FREE GIVEAWAYS ARE SCAMS 🚨 Don't fall for them. If somebody replies here saying they will give you crypto it's not real.",
  "🚨 SCAMBULANCE! 🚨 If anybody in these replies tells you to send them crypto DO NOT. It's a fake account designed to look real.",
  "🚨 SCAMS 🚨 The reply tweets here telling you to send them crypto in return for more crypto are all scammers.",
  "🚨 DING DONG 🚨 Scam patrol here. There will be fake accounts replying to this tweet telling you to send your crypto. Don't. You will lose it. These accounts are fake."
];

var stream = client.stream('statuses/filter', {follow: followString, filter_level: 'low'});
stream.on('data', function(event) {

  console.log('data', event);

  if(!event.in_reply_to_status_id_str && followArray.indexOf(event.user.id_str) > -1) { //only include tweets from the actual user
  // if(followArray.indexOf(event.user.id_str) > -1) { //only include tweets from the actual user

    console.log("Will tweet");

    var rand = messages[Math.floor(Math.random() * messages.length)];

    client.post('statuses/update', {
      status: '@' + event.user.screen_name + ' ' + rand,
      in_reply_to_status_id: event.id_str
    }, function(error, tweet, response) {
      if (error) {
        console.log("Tweet error", error);
      } else {
        console.log("Tweet successful");
      }
    });

  }

});
 
stream.on('error', function(error) {
  console.log('error', error);
  // throw error;
});