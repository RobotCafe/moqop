'use strict';

exports.get = async function(req, res) {


  // Replace the placeholder text with your own Twitter API keys
  const twitterApiKey = "3WWVPkgczP0g6D6O7VWlUpMHG";
  const twitterApiSecret = "mdqK9mFheGN8apGXhFtx1z9JINecWJkU2o8Ll3n3hSADYqppCP";

  const base64Credentials = btoa(`${twitterApiKey}:${twitterApiSecret}`);
  const credentials = `Basic ${base64Credentials}`;

  const headers = new Headers();
  headers.append("Authorization", credentials);
  headers.append("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");

  const body = "grant_type=client_credentials";

  // This is the URL for Twitter's token endpoint
  const tokenUrl = "https://api.twitter.com/oauth2/token";

  // Use fetch() to get the bearer token
  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: headers,
    body: body,
  });

  const json = await response.json();
  const token = json.access_token;

  // Once you have the token, you can use it to make requests to the Twitter API

  // Replace the placeholder id with the id of the tweet you want to get
  const tweetId = req.params.id;
  console.log(req.params.id);

  // This is the URL for Twitter's statuses/show endpoint
  const showUrl = `https://api.twitter.com/2/tweets/?ids=${tweetId}&tweet.fields=attachments,author_id,context_annotations,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,public_metrics,referenced_tweets,source,text,withheld&expansions=referenced_tweets.id`;

  // Set the authorization header with the bearer token
  headers.set("Authorization", `Bearer ${token}`);

  // Use fetch() to get the tweet
  const response2 = await fetch(showUrl, {
    headers: headers,
  });

  // The tweet will be returned in JSON format
  const tweet = await response2.json();

  // You can access the tweet's content like this:
  const tweetContent = tweet.text;
  console.log(tweet)

  return res.send(tweet);


}