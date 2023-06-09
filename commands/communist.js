const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('communist')
		.setDescription('dmcs'),
	async execute(interaction) {
		await interaction.reply('dmcs');
	}
};