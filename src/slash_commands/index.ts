import DiscordKeys from "../config/Discord";
import { DiscordInteractions, Interaction } from "slash-commands";
import { MessageEmbed } from "discord.js";
import Embed from './commands/Embed';

export default async function SlashCommand(client: any) {
  const interaction = new DiscordInteractions({
    applicationId: DiscordKeys.DISCORD_ID,
    authToken: `${DiscordKeys.DISCORD_TOKEN}`,
    publicKey: `${DiscordKeys.DISCORD_PUBLICKEY}`,
  });
  
  await interaction
    .createApplicationCommand(Embed, "709658304971931719")
    .catch(console.error);

  client.ws.on("INTERACTION_CREATE", async (interaction: Interaction) => {
    const command = interaction.data?.name.toLowerCase();
    const args: any = interaction.data?.options;

    if (command) {
      if (command === "start_lesson") {
        messageSlash(client, interaction, "");
      }
    }
  });
}

function messageSlash(client: any, interaction: Interaction, message: string) {
  client.api.interactions(interaction.id, interaction.token).callback.post({
    data: {
      type: 4,
      data: {
        content: message,
        embeds: [
          {
            title: "asd",
            description: "asdasdasd",
            color: null,
            fields: [
              {
                name: "asdasd",
                value: "asdasdasdasdasdasd",
              },
            ],
            author: {
              name: "asdasdasdasdasdasdasdasd",
              url: "https://kamerrezz.com",
            },
            footer: {
              text: "asdasdasdasdadasd",
            },
          },
        ],
      },
    },
  });
}
