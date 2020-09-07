// this module listens for ambient messages containing info from ../data/faq.js
import { faq } from "../data";

module.exports = function(controller) {
  controller.hears(
    Object.keys(faq),
    ["direct_mention", "mention", "ambient"],
    (bot, message) => {
      let response;
      let sender = message.user;

      // console.log(message) to see entire structure of the object
      response = faq[message.match[0]];

      bot.reply(message, response);
    }
  );
};
