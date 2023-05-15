import { CommandInteraction, Client, ApplicationCommandType } from 'discord.js';
import { Command } from './type';

const Hello: Command = {
  name: 'hello',
  description: 'Greet User',
  type: ApplicationCommandType.ChatInput,
  run: async (_: Client, interaction: CommandInteraction) => {
    const content = `Hello there, ${interaction.user.username}!`;

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};

export default Hello;
