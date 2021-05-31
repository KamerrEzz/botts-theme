import { Message, MessageEmbed } from "discord.js";
import * as util from "util";
import BaseCommand from "../../utils/structures/BaseCommand";
import DiscordClient from "../../client/client";
const x = "```";
export default class TestCommand extends BaseCommand {
  constructor() {
    super("help", "help", true, 0, [""], ["ayuda"], false, "Comando de ayuda");
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    try {
      let commandHelp = args.join(" ");

      if (commandHelp) {
        let command = client.commands.get(commandHelp);

        if (command)
          return message.channel.send(
            this.embed("Comando", command.getDescription(), "GREEN")
          );
      } else {
        message.channel.send(
          this.embed(
            "💬 | Ayuda general!",
            "No te preocupes, aqui te doy toda la informacion importante del bot.",
            "RANDOM"
          )
            .addField(
              "📌 | Informacion general",
              `• Creador: Kamerr Ezz#5216(403695999941345280) | https://kamerrezz.com/
              • Creacion: Mon Dec 10 2018`
            )
            .addField(
              "📄 | Comandos",
              `Descripcion del comando: \`g!help <comando>\`
              Lista de comandos: \`g!comandos\``
            )
            .addField("❤ | Partners", "Yo (kamerr) por que nadie me quiere patrocinar")
        );
      }
    } catch (error) {
      this.handleError(message, this.getName(), error.message);
    }
  }
}
