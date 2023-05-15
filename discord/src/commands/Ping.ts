import { CommandInteraction, Client, ApplicationCommandType } from 'discord.js';
import { Command } from './type';

const Ping: Command = {
  name: 'ping',
  description: 'Ping Pong!',
  type: ApplicationCommandType.ChatInput,
  run: async (_: Client, interaction: CommandInteraction) => {
    const content = `pong`;

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};

export default Ping;
