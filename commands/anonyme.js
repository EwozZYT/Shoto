const config = require('../config.json')
 
module.exports = {
    run: (message, args) => {
        if (!args[0]) return message.channel.send('Veuillez indiquer le message anonyme à envoyer.')
        message.delete()
        message.channel.send(message.content.trim().slice(`${config.prefix}anonyme`.length))
    },
    name: 'anonyme',
    guildOnly: true
}