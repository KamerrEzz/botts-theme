import { Message, MessageEmbed } from "discord.js";
import * as util from "util";
import BaseCommand from "../../utils/structures/BaseCommand";
import DiscordClient from "../../client/client";
const x = "```";
export default class TestCommand extends BaseCommand {
  constructor() {
    super("eval", "admin", true, 0, [""], [""], true, "");
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    let owner = ["403695999941345280"];
    let text = args.join(" ");
    if (!owner.includes(message.author.id)) return;
    if (!text) return;
    if (text === "client.token") return;
    try {
      let toEval: any = eval(text);
      if (typeof toEval === "string")
        toEval = this.resume(util.inspect(toEval, { depth: 0 }), 750);
      let embed = new MessageEmbed()
        .addField("To eval:", x + text + x, false)
        .addField("\\📤 Output:", x + this.resume(toEval, 750) + x, false)
        .addField("Type", x + typeof toEval + x, false)
        .setColor("#000dff");
      message.channel.send(embed);
    } catch (err) {
      const errEmbed = new MessageEmbed()
        .setTitle("Error")
        .addField("\\📤 Output:", x + this.resume(err, 750) + x, false)
        .setColor("RED");

      message.channel.send(errEmbed);
    }
  }
  resume(text: string, number: number) {
    let str = "";
    if (text.length > number) {
      str += text.substring(0, number);
      str += "...";
      return str;
    } else {
      str += text;
      return str;
    }
  }
}
