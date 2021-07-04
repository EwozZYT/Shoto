const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('ShotoBot')
            .setDescription(`
            **__+avatar__**
            Pour voir votre avatar.
            **__+kick__**
            Pour expulser une personne
            **__+ban__**
            Pour bannir une personne
            **__+lock__**
            Vérouiller un salon
            **__+unlock__**
            Dévérouiller un salon
            **__+anonyme [message]___**
            Faire un message anonyme !`)
                        .setColor('PURPLE')
                        .setImage('https://cdn.discordapp.com/attachments/842469245840916500/861199894555262996/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.jpg')
                        .setTimestamp()
                        .setURL(''))
                },
                name: 'help'
}