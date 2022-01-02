module.exports = client => {
    const channelId = "894571100565020682";
    client.on("guildMemberAdd", (member) => {
        console.log(member);

        const message = `Konnichiwa <@${member.id} welcome to Steins Gate!` 
    });
}