const Discord = require('discord.js');
const client = new Discord.Client();

var PREFIX = '?';
var version = '1.0.0'

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            msg.channel.send('Pong!');
        break;
        case 'website':
            msg.channel.send('https://discord.gg/8a5cMAj');
        break;
        case 'info':
            if(args[1] === 'version'){
                msg.channel.send('Version ' + version);
            }
            else{
                msg.channel.send('Invalid Argument')
            }
        break;
        case 'clear':
            if(!args[1]) return msg.reply('Error: Undefined Argument')
            msg.channel.bulkDelete(args[1]);
        break;
        case 'embed':
            if(args[1] === 'welcome'){
                const embed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Give yourself roles!')
                    .setURL('https://youtu.be/pJEhR9O5G9w')
                    .setDescription('Type `!agree` to consent to becoming an associate of our organization!')
                msg.channel.send(embed);
            }
            else if(args[1] === 'info'){
                const embed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('About Sociocyberneering!')
                    .setURL('https://youtu.be/pJEhR9O5G9w')
                    .setDescription('Sociocyberneering is the applied knowledge of all available scientific fields to understand and improve the human condition.')
                msg.channel.send(embed);
            }
            else if(args[1] === 'roles'){
                const embed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Give yourself roles!')
                    .setDescription('<@&698000031747145808> is a good faith role which allows members to access general channels. This role is generally given once, when entering the server. The roles beyond Associate give members additional privileges and responsibilities within the organization.\n\n<@&698046340931911720> means you are committed to the ideals of the organization. To give yourself this role, type `!comrade`.\n\n<@&698168347098873918> gives comrades the authority speak for the organization and to invite new members. Give yourself this role by typing `!onboarding`.\n\n<@&698168421422202880> is how we keep our ideas and goals up to date. Take on this role with the command `!evolution`.')
                msg.channel.send(embed);
            }
            else{
                msg.channel.send('Invalid Argument')
            }
        break;
    }
});

client.login(process.env.token);
