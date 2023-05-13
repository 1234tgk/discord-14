import { Client } from 'discord.js';
import { InteractionCreate, Ready } from './listeners';
import config from './config';

console.log('Bot is starting...');

const client = new Client({
    intents: [],
});

// Initialize Listeners
Ready(client);
InteractionCreate(client);

client.login(config.TOKEN);
