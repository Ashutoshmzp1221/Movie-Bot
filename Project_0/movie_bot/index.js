const { Telegraf } = require('telegraf')
const axios = require('axios');
// t.me/movie_ashutosh_bot

const bot = new Telegraf('7278936778:AAFpYEbVWS2EWjwjFQee6SwLtw2zfkE-a8g');

const movieName = function(name){
    name = prompt();
}
bot.start((ctx) => ctx.reply('Welcome to the movie bot'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.command(movieName, async function(ctx){
    const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=1b4cba56')
    const re = `Title : ${response.data.Title},
                Year : ${response.data.Year},.
                Rated : ${response.data.Rated},
                Genre : ${response.data.Genre}
                `
    console.log(response.data);
    return ctx.reply(re);
})
bot.command('hipster', Telegraf.reply('λ'))
bot.launch();