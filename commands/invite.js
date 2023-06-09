const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('invite me to your server!'),
    async execute(interaction) {
        await interaction.reply('<https://discord.com/api/oauth2/authorize?client_id=1023505382586449991&permissions=8&scope=bot%20applications.commands>')
    }
}