const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('ShotoBot')
            .setDescription(`
Voici le règlement a suivre et lire impérativement.

─━━━━━━⊱❉⊰━━━━━━─
🔥 ↦𝚁é𝚐𝚕𝚎𝚖𝚎𝚗𝚝 𝙶é𝚗é𝚛𝚊𝚕
─━━━━━━⊱❉⊰━━━━━━─

▸ Toute provocation, insultes est passible de sanctions en fonction de la gravité.
▸ Le racisme, sexisme, discrimination ou autre sera sanctionné d'un warn. (voir plus)
▸ Tout caractère choquant ou pornographiques, etc sont interdites. 
▸ Le non respect du staff sera punie d'un warn, le respect des membres est obligatoire aussi.
▸ L' harcèlement ou les menaces sont interdites.

🔥   ' Deuxièmement nous voulons des salons propre et lisible donc :

▸ Le spam est interdit.
▸ En cas de soucis entre deux personnes aller en message privé ou nous le reporté 
▸ Le flood est interdit
🔥   -> voici pour les interdiction passible par un mute. 

 🔥   ' Troisièmement les messages privé ¦ channel vocaux

▸ La pub en message privé est interdite.
▸ Menaces ou intimidations interdites.
▸ Merci de ne pas crié, insulter dans les vocaux.
🔥   -> Voici les interdictions ou nous allons voir pour la sanction, selon la gravité.


Veuillez cocher la case :verif: pour accepter c'est règles.`)
            .setColor('BLUE')
            .setImage('https://cdn.discordapp.com/attachments/842469245840916500/861199894555262996/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.jpg')
            .setTimestamp()
            .setURL('https://discord.gg/PHtQFbgZWD'))
    },
    name: 'regles'
}