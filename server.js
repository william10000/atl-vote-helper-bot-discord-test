// I'm pretty sure botkit includes its own express server so express here
// is probably to serve contents for https://atl-vote-helper-bot.glitch.me/

// when deploying elsewhere such as heroku, we'd probably want to remove
// the express server and associated files

// init project
const express = require("express");
const fs = require("fs");
const discordBotkit = require("botkit-discord");
var Client = require("uptime-robot"); // probably not needed for 

const app = express();

const discordBot = require("./bot");

// this is the code for the guides
app.use(require("./guides"));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
