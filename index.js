// Require the necessary discord.js classes
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');
// Create a new client instance
const client = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
] });

//Commands dễ manage hơn
client.commands = new Collection();

// When the client is ready, run this code (only once)
client.on('ready', () => {
	console.log(`ASCII later for ${client.user.tag}!`);
});

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}




//idk
client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.on("messageCreate", (mess) => {
	const prefix = ".";
	if (mess.author.bot) return false;
	if (mess.content.startsWith(prefix)) {
		const command =  mess.content.slice(prefix.length).split(" ")[0];
		console.log(`${command} command was used`)
	switch(command) {
	case "remind":
		function Reminder() {
			setTimeout(Reminder, 86400000)
			mess.channel.send('<@&1014821317821866025> role Reminder!')
		}
		Reminder();
	break;
	case "invite": mess.channel.send('from daubuoi with love \n https://discord.com/api/oauth2/authorize?client_id=1023505382586449991&permissions=8&scope=bot%20applications.commands')
	break;
	default: mess.channel.send('Wrong command! >w<')
}}});
client.on("messageCreate", (ping) => {
	if (ping.author.bot) return false;
	if (ping.content === `<@${client.user.id}>`) {
		ping.channel.send('don\'t ping me UwU?')
	}
})
client.on("messageCreate", (mess) => {
	if (mess.author.id === '696757615048523906') {
		mess.react('💀') //1109673389725077604 :aychet:
	}
})
client.on("messageCreate", (mess) =>{
	if (mess.author.bot) return false;
	if (['dmcs', 'đmcs', 'heil hitler', 'địt mẹ cộng sản', 'dit me cong san'].includes(mess.content.toLowerCase())) {
		mess.channel.send('https://cdn.discordapp.com/attachments/860588443381661737/947744838235856946/Screenrecorder-2022-02-28-13-39-16-818.mp4')
	}
})
// Login to Discord with your client's token
client.login(token);