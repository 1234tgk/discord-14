import { CommandInteraction, Client, Interaction } from 'discord.js';
import { commands } from '../commands';

export default (client: Client) => {
  client.on('interactionCreate', async (interaction: Interaction) => {
    if (interaction.isCommand()) {
      await handleSlashCommand(client, interaction);
    }
  });
};

const handleSlashCommand = async (
  client: Client,
  interaction: CommandInteraction
): Promise<void> => {
  const slashCommand = commands.find((c) => c.name === interaction.commandName);
  if (!slashCommand) {
    interaction.followUp({ content: 'An error has occured' });
    return;
  }
  await interaction.deferReply();

  slashCommand.run(client, interaction);
};
