const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('mute')
    .setDescription('mute someone u dont like')
    .addUserOption(option => option.setName('user')
    .setDescription('the user you want to mute')
    .setRequired(true))
    .addRoleOption(option => option.setName('role')
    .setDescription('mute role that you want to assign')
    .setRequired(true)),
    async execute(interaction) {
        const member = interaction.member;
        const user = interaction.guild.members.cache;
        const role = interaction.options.getRole('role');
        const _roles = user._roles;
        console.log(user.objectMap)
        /*await user.roles.remove(_roles)
        await user.roles.add(role);*/
        await interaction.reply(`successfully muted ${user}`);
    }
};