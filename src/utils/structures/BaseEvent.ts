import DiscordClient from "../../client/client";
import { MessageEmbed } from "discord.js";

export default abstract class BaseEvent {
  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }
  abstract run(client: DiscordClient, ...args: any): void;
  embed(title: string, body: string, color: string = "RED") {
    return new MessageEmbed()
      .setTitle(title)
      .setDescription(body)
      .setColor(color);
  }
}
