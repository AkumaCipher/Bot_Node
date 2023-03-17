const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Renvoie en réponse le paramètre donné')
        .addStringOption(option =>
            option
                .setName('input')
                .setDescription('Le paramètre a donné')
                .setRequired(true)
        ),
    async execute(interaction) {
        const input = interaction.options.getString("input");
        await interaction.reply(input);
    },
};