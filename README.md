# twitter-bot

This bot auto-replies to select Twitter accounts to warn people about potential scams.

You will need to input your own twitter API keys and secrets in server.js.

You can run this on a heroku server for instance. After install all you should need is a simple `npm start`.

There's an issue where the API stream includes so many retweets and there's no way to exclude them that I think some of the original tweets aren't always appearing in the firehouse of data.