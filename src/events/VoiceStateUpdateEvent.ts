// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-voiceStateUpdate
import { VoiceState } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";

let users: Array<any> = [];

export default class WoiceStateUpdateEvent extends BaseEvent {
  constructor() {
    super("voiceStateUpdate");
  }

  async run(client: DiscordClient, oldState: VoiceState, newState: VoiceState) {
    if (!oldState.channel && newState.channel) {

      this.myserver(newState, true);
    }

    if (oldState.channel && !newState.channel) {
    
      this.myserver(oldState, false);
    }

    if (
      oldState.channel &&
      newState.channel &&
      oldState.channel.id !== newState.channel.id
    ) {
      let logs: any = this.channel(oldState, "843659009353318440");
      logs.send(
        `${this.mark(oldState.member?.user.username)}(${this.mark(
          oldState.member?.user.id
        )}) - se ha movido al canal ${this.mark(newState.channel?.name)}`
      );
    }
  }

  channel(voice: VoiceState, id: string) {
    return voice.guild.channels.cache.get(id);
  }

  myserver(voice: VoiceState, join: boolean) {
    if (voice.guild.id === "739306480586588241") {
      let logs: any = this.channel(voice, "843659009353318440");
      if (join)
        logs.send(
          `${this.mark(voice.member?.user.username)}(${this.mark(
            voice.member?.user.id
          )}) - se ha unido al canal ${this.mark(voice.channel?.name)}`
        );
      else
        logs.send(
          `${this.mark(voice.member?.user.username)}(${this.mark(
            voice.member?.user.id
          )}) - se ha desconectado del canal ${this.mark(voice.channel?.name)}`
        );
    } else {
      return false;
    }
  }

  mark(text: any) {
    return "`" + text + "`";
  }
}
