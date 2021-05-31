import BaseEvent from '../../utils/structures/BaseEvent';
import DiscordClient from '../../client/client';
// import SlashCommand from '../../slash_commands/index'

export default class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client: DiscordClient) {
    console.log(`${client.user?.username} is online`);
  }
}