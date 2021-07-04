const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('ShotoBot')
            .setDescription(`
            **Ma copine : @Miku#8876**
            
            **Mon papa :** @!" 𝓔𝔀𝓸𝔃𝓩_𝓨𝓣 ' ♆⛉ 卍[GΞИ]ړײ*#0666`)
            .setColor('BLUE')
            .setImage('https://cdn.discordapp.com/attachments/842469245840916500/861199894555262996/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.jpg')
            .setTimestamp()
            .setURL('https://discord.gg/PHtQFbgZWD'))
    },
    name: 'info'
}