const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription(`Renvoie les informations de l'utilisateur`),
    async execute(interaction) {
        const username = await interaction.member.displayName;
        const joinedAt = await interaction.member.joinedAt;
        interaction.reply(`Nom de l'utilisateur : ${username}\nÀ rejoint : ${joinedAt}`);
    },
}