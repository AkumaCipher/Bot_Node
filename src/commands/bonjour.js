const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bonjour')
        .setDescription('Dis bonjour à tout le monde !'),
    async execute(interaction) {
        interaction.reply(`Salut @everyone !`);
    },
}