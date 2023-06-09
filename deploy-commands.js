const { REST, SlashCommandBuilder, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('communist').setDescription('dmcs'),
	new SlashCommandBuilder().setName('freak').setDescription('THE THIRD REICH WILL ARISE'),
	new SlashCommandBuilder().setName('invite').setDescription('Invite me to your server!'),
	new SlashCommandBuilder().setName('avatar').setDescription('ur stupid avatar').addUserOption(option => option.setName('user').setDescription('The user\'s avatar to show')),
	new SlashCommandBuilder().setName('mute').setDescription('mute someone u dont like').addUserOption(option => option.setName('user').setDescription('the user you want to mute').setRequired(true)).addRoleOption(option => option.setName('role').setDescription('mute role that you want to assign').setRequired(true))
]
	.map(s => s.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);
	const fs = require('node:fs');
	const path = require('node:path');

	const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}