import BaseEvent from "../../utils/structures/BaseEvent";
import { Message, GuildMember } from "discord.js";
import DiscordClient from "../../client/client";
import CustomMessage from "../../utils/custom/message/Admin.json";
let Admins: string[] = ["403695999941345280"];

export default class MessageEvent extends BaseEvent {
  constructor() {
    super("message");
  }

  async run(client: DiscordClient, message: Message) {
    if (message.author.bot) return;

    if(!message.guild?.me?.hasPermission("SEND_MESSAGES")) return;

    if (message.content.startsWith(client.prefix)) {
      const [cmdName, ...cmdArgs] = message.content
        .slice(client.prefix.length)
        .trim()
        .split(/\s+/);
      const command = client.commands.get(cmdName);

      
      if (command?.getOwner() && !Admins.includes(message.author.id))
        return message.channel.send(
          this.embed(CustomMessage.owner.title, CustomMessage.owner.message)
        );

      if (command?.getGuildOnly() && message.channel.type === "dm")
        return message.channel.send(
          this.embed(CustomMessage.DM.title, CustomMessage.DM.message)
        );

      if (
        command?.getPermissions() && command?.getPermissions().length > 1 &&
        !message.member?.permissions.has(command.getPermissions())
      )
        return message.channel.send(
          this.embed(
            CustomMessage.userPerms.title,
            `${this.missionPerms(message.member, command.getPermissions())}`
          )
        );

      if (command) {
        command.run(client, message, cmdArgs);
      }
    }
  }

  missionPerms(member: GuildMember | any, perms: any) {
    const missiongPerms = member.permissions.missing(perms).map(
      (str: any) =>
        `\`${str
          .replace(/_/g, " ")
          .toLocaleLowerCase()
          .replace(/\b(\w)/g, (char: any) => char.toLocaleLowerCase())}\``
    );

    return missiongPerms.length > 1
      ? `${missiongPerms.slice(0, -1).join(" ")} y ${
          missiongPerms.slice(-1)[0]
        }`
      : missiongPerms[0];
  }
}
