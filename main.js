require("dotenv").config();
const { Client, Intents, Message } = require('discord.js');
const fetch = require('cross-fetch');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

const welcome = require("./welcome");

client.once('ready', () => {
    console.log('code name');

    welcome(client);
});

client.login(process.env.BOTTOKEN);

client.on('message', gotMessage);

const replies = [
    'Yes assistant?',
    'It is my code name...',
    'How can I help you?',
    'I love taking naps what about you?',
    'Yes, I am a detective',
    '私は伝説の探偵です',
    'あなたは私の相棒です'
]

async function gotMessage(msg)
{
    let tokens = msg.content.split('');

    console.log(msg.content);
    if(msg.content === ';am siesta')
    {
        const index = Math.floor(Math.random() * replies.length);
        msg.reply(replies[index]);
    } 
    else if(tokens[0] == '.')
    {
       let keywords = "anime";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }        
        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        // let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url);
        msg.reply(`${msg.author} ${keywords}s`);
    }
}