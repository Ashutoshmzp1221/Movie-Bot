
let binary = `// C++ program to implement iterative Binary Search
#include <bits/stdc++.h>
using namespace std;

// An iterative binary search function.
int binarySearch(int arr[], int low, int high, int x)
{
    while (low <= high) {
        int mid = low + (high - low) / 2;

        // Check if x is present at mid
        if (arr[mid] == x)
            return mid;

        // If x greater, ignore left half
        if (arr[mid] < x)
            low = mid + 1;

        // If x is smaller, ignore right half
        else
            high = mid - 1;
    }

    // If we reach here, then element was not present
    return -1;
}

// Driver code
int main(void)
{
    int arr[] = { 2, 3, 4, 10, 40 };
    int x = 10;
    int n = sizeof(arr) / sizeof(arr[0]);
    int result = binarySearch(arr, 0, n - 1, x);
    (result == -1)
        ? cout << "Element is not present in array"
        : cout << "Element is present at index " << result;
    return 0;
}`;

// const movieDetails = async function() {
//     const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=1b4cba56');
//     console.log(response.data);
//     const movieDetail = {
//         Title : response.data.Title,
//     }
//     return movieDetail;

// }

numpy , opencv, 
const axios = require('axios')

const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

/* How to get the secret token to create a bot.

    1. open telegram and search for botfather.
    2. to read instruction type /start.
    3. to create a new bot type /newbot.

    // https://t.me/code_js_cpp_java_bot
*/

const bot = new Telegraf('7428932529:AAFoJulaVl9BetqvxIUreq6TYJrf_DLR0Ps')
bot.start((ctx) => ctx.reply('Welcome to coding bot'))
bot.on(message('sticker'), (ctx) => ctx.reply('❤️'))
bot.hears('hi', (ctx) => ctx.reply('Hey there! How are you?'))
bot.command('binary',async function(ctx){
    const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=1b4cba56');
    console.log(response.data);
    return response.data;
});

bot.command('binary', (ctx) => ctx.reply(movieDetails));
// bot.command('binarytreejs', async function(ctx){
//     const response = await axios.get("")
// }) you can fetch data from some of the url.
bot.launch();