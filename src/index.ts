import { registerCommands, registerEvents } from "./utils/registry";
import { Intents } from "discord.js";
import config from "./config/Discord";
import DiscordClient from "./client/client";
const client = new DiscordClient({ ws: { intents: Intents.ALL } });

import SlashCommand from './slash_commands/index'

(async () => {
  client.prefix = config.DISCORD_PREFIX || client.prefix;
  await registerCommands(client, "../commands");
  await registerEvents(client, "../events");
  await client.login(config.DISCORD_TOKEN);
  await SlashCommand(client)
})();
