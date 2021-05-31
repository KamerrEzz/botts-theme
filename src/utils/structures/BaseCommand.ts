import { Message, MessageEmbed } from "discord.js";
import Colors from "../custom/color";
import DiscordClient from "../../client/client";

export default abstract class BaseCommand {
  /**
   *
   * @param name Name Command
   * @param category Categorie Command
   * @param guildOnly Command only guild
   * @param cooldown Time milliseconds
   * @param permissions Array PermissionFlags
   * @param aliases Array Aliases
   * @param owner Bolean - only owner
   * @param description Descripcion command
   */
  constructor(
    private name: string,
    private category: string,
    private guildOnly: boolean,
    private cooldown: number,
    private permissions: Array<string>,
    private aliases: Array<string>,
    private owner: boolean,
    private description: string
  ) {}
  getName(): string {
    return this.name;
  }
  getCategory(): string {
    return this.category;
  }
  getGuildOnly(): boolean {
    return this.guildOnly;
  }
  getcooldown(): number {
    return this.cooldown;
  }
  getPermissions(): Array<any> {
    return this.permissions;
  }
  getAliases(): Array<string> {
    return this.aliases;
  }
  getDescription(): string {
    return this.description;
  }
  getOwner(): boolean {
    return this.owner;
  }

  abstract run(
    client: DiscordClient,
    message: Message,
    args: Array<string> | null
  ): Promise<any>;

  embed(title: string, body: string, color: string = "RED") {
    return new MessageEmbed()
      .setTitle(title)
      .setDescription(body)
      .setColor(color);
  }

  getColor() {
    return Colors;
  }

  handleError(message: any, command: any, err: any) {
    message.guilds.cache
      .get("739306480586588241")
      .channels.cache
      .get("848366018909044736")
      .send(`${command} » ${err}`)
  }
}
