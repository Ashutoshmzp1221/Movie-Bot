// Requiring modules
var requests = require('requests');
var TelegramBot = require('node-telegram-bot-api');
var token = "7117794528:AAFjG4Pf1WAAaKdkCvH64uq07pOToxHZKQY";
var movieapi = '1b4cba56';

// Create a bot that uses 'polling' to fetch new updates
var bot = new TelegramBot(token, { polling: true });

bot.on("polling_error", (err) => console.log(err));

bot.onText(/\/movie (.+)/, function (msg, match) {

    // The 'msg' is the received Message from user
    // and 'match' is the result of the execution above on the text content

    // Getting the name of movie from the message sent to bot
    var movie = match[1];
    var chatId = msg.chat.id;

    requests(`http://www.omdbapi.com/?t=${movie}&apikey=${movieapi}`, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            bot.sendMessage(chatId, `_Looking for_ ${movie}...`, { parse_mode: "Markdown" }).then(msg => {
                let res = JSON.parse(body);

                bot.sendPhoto(chatId, res.Poster, {
                    caption: `Result:\nTitle: ${res.Title}\nGenre: ${res.Genre}\nRated: ${res.Rated}\nReleased: ${res.Released}`
                });

                // Sending back response from the bot to the user
                // Response has many other details, which can be used or sent as per requirement
            });
        } else {
            bot.sendMessage(chatId, "Sorry, I couldn't find the movie. Please check the movie name and try again.");
        }
    });
});
