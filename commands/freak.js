const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('freak')
		.setDescription('THE THIRD REICH WILL ARISE'),
	async execute(interaction) {
		await interaction.reply('THE THIRD REICH WILL ARISE');
	}
};