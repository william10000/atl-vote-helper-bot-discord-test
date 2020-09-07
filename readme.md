# Notes
- Inviting the bot
  - Go [here](https://discord.com/oauth2/authorize?client_id=749838888209743873&scope=bot&permissions=2112) in your browser and add the bot to servers that you have sufficient access to.
  - Note: the client_id in the URL is tied to a specific discord app account. You'll need a different ID if you want to use your own bot app.
- The express server seems to serve contents at the [glitch.me site](https://atl-vote-helper-bot.glitch.me/) for this project.
- [bot.js](https://glitch.com/edit/#!/atl-vote-helper-bot?path=bot.js) - start the bot by "requiring" this file
- [guides.js](https://glitch.com/edit/#!/atl-vote-helper-bot?path=guides.js) - helpful stuff that will check the discord token as well as handle the site at [https://atl-vote-helper-bot.glitch.me/](https://atl-vote-helper-bot.glitch.me/)
- making this work with slack will require a significant refactor
  - botkit-discord is a wrapper for discord.js and an older version of botkit.
  - path of least resistance might be to fork botkit-discord and add the slack adaptor according to https://github.com/howdyai/botkit/blob/main/packages/testbot/multiadapter.js
  - there may also need to be updates to work with version 4 of botkit - https://botkit.ai/docs/v4/advanced.html#anatomy-of-a-botkit-app

# TODO
- ~~figure out how to listen to entire channel so that users don't need to @mention the bot~~
- ~~allow bot to repond to questions that match FAQ from [https://atlvoterhelper.netlify.app/](https://atlvoterhelper.netlify.app/)~~
- The bot should give instructions if users ask it for help.
- It would be great if the bot can listen in a case insensitive way
- It would be great if the bot can handle occasional typos
- pull info from central location
  - for now, parse files from [https://github.com/Bartlebyy/atlanta-voter-helper/tree/master/src/pages](https://github.com/Bartlebyy/atlanta-voter-helper/tree/master/src/pages) mapping titles to content
- update boilerplate bot site so that it includes purpose of the bot and styling to match [https://atlvoterhelper.netlify.app/](https://atlvoterhelper.netlify.app/)

--- Rest of starter kit boilerplate below ---

# Botkit Discord Starter App
[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/glitchdotcom/starter-discord)

Starter Botkit Discord is a Discord bot with an interactive setup and coding guide. Click "Show" to start following the guide. We recommend following the guide before you go through the code here. 

The Install guide connects your Glitch app to a Discord app. It also teaches some important basic security guide. The Setup guide shows you how to add it to a Discord Server, keep it up and running, and add new functionality.

It uses

- Botkit: a handy bot building framework
- Discord.js: a node module for connecting to the Discord API
- Botkit Discord: A connector that allows you to use Bokit and Discord.js
- Uptime Robot: A monitoring service that helps keep your bot running 24/7

## The Code

### assets

This is where you [can add images, sound files, and other media](https://glitch.com/help/how-do-i/).

### public/client.js

This is the interactive code for the setup guide.

### public/install.js

This is the interactive code for the install guide.

### public/style.css

This is the styling for the install and setup guides

### skills/hears.js

This is an [Botkit](https://botkit.ai/) skill for your bot allowing it to respond to certain words it "hears" on the server.

### views/index.html

This is the basic webpage for the setup guide

### views/install.html

This is the basic webpage for the install guide

### .env

This is a file for storing secure info like API keys

### .gitignore

Git is a "version control" system, which is a fancy way of saying it backs up a record of all your code. This file tells git not to back up certain files. For example `.env` we don't want it backing up because it contains secure info.

## bot.js

This is the base code initializing the bot by giving it to the Discord Api key and telling it where the skills files are

## guides.js

This contains the code that makes the guides accessible and interactive

### package.json

This is a file that contains info about your project, like what [node modules it should install](https://glitch.com/help/how-do-i-add-an-npm-module-package-to-my-project/)

## readme.md

This is this file! It's full of helpful info.

## server.js

This contains the code that connects all the different pieces of the bot together so it can be started by package.json

## Get Started

Remix this app and click show! The install guide will walk you all the steps needed.

## I finished the install and setup guide!

Congrads! I bet you're excited to get started with customizing your bot
* Head to skills/hears.js to learn how a Botkit skill works and how to customize it
* Check out our [Discord collection](https://glitch.com/@glitch/discord) for some examples – feel free to copy the code into your own bot or remix them
