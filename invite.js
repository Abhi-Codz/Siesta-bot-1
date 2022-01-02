module.exports = {
    name : 'invite',
    description : 'gives you invitation for a tea party',
    execute(message, Discord, args,bot)
    {
        embed = new Discord.MessageEmbed();
        switch(args[1])
        {
            case "create":
                let channel = message.channel;
                channel.createInvite({unique: true})
                .then(invite => {
                    embed
                    .setTitle(message.auther.username + "'s invite")
                    .setDescription("https://discord.gg/" + invite.code)
                    message.reply(embed);
                })
                break;
            defalt:
                embed
                .setTitle('error')
                .setDescription('This command was not correctly formatted or does not exist!')
                message.channel.send(embed)
            break;
        }
    }
}