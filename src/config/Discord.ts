import { config } from 'dotenv';
config();

const Discord = {
    DISCORD_TOKEN: process.env.DISCORD_TOKEN,
    DISCORD_PREFIX: process.env.DISCORD_PREFIX,
    DISCORD_PUBLICKEY: process.env.DISCORD_PUBLICKEY,
    DISCORD_ID: "521810164928610304"
}

export default Discord;