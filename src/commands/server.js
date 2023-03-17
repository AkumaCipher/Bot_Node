const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Renvoie le nom du Serveur et son nombre de membres.'),
    async execute(interaction) {
        const serverName = interaction.guild.name;
        const memberCount = interaction.guild.memberCount;
        await interaction.reply(`Le serveur s'appelle ${serverName} et il y a ${memberCount} membres.`);
    },
}