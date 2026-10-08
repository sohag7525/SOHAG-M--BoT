const fs = global.nodemodule["fs-extra"];
const path = global.nodemodule["path"];
const guardSpam = require("../../includes/Rahat_spt.js");

module.exports.config = {
  name: "autoreplybot",
  version: "6.0.2",
  hasPermssion: 0,
  credits: "🔰𝐌𝐝 𝐒𝐨𝐡𝐚𝐠🔰",
  description: "Auto-response bot with specified triggers (safe version)",
  commandCategory: "No Prefix",
  usages: "[any trigger]",
  cooldowns: 3,
};

module.exports.handleEvent = async function ({ api, event, Users }) {
  const { threadID, messageID, senderID, body } = event;
  if (!body) return;

  const name = await Users.getNameUser(senderID);
  const msg = body.toLowerCase().trim();

  const responses = {
    "miss you": "Aww 🥺 আমিও তোমাকে মিস করি!",
    "kiss de": "😄 haha, এখন না পরে কথা বলি!",
    "👍": "🙉👀",
    "help": "Prefix তোমার নানি কালকে দিয়ে যাবে😊",
    "fork2": "https://github.com/Rahat-Boss/Rahat_Bot.git",
    "pro": "😎 Nice vibe!",
    "🙄🙄🙄": "🙄🙄🙄",
    "Md Sohag": "Bot owner😄",
    "owner": "👑 Owner: 𝐌𝐝 𝐒𝐨𝐡𝐚𝐠\nFacebook: https://www.facebook.com/share/1XbR5WYtL8/",
    "admin": "🔰𝐌𝐝 𝐒𝐨𝐡𝐚𝐠🔰",
    "babi": "😊 দুষ্টু তুমি",
    "chup": "😄চুপ কীভাবে করে🙄",
    "assalamualaikum": "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ 💖",
    "kiss me": "😄 virtual hug পাঠালাম 🤗",
    "thanks": "😊 সাহায্য করতে পেরে খারাপ লাগলো",
    "i love you": "❤️ Thank you! You’re awesome",
    "by": "Bye 👋 ভালো থেকো",
    "ami Sohag": "হ্যাঁ 😄 বলো বস",
    "tor nam ki": "My name is 🔰 𝑺𝒐𝒉𝒂𝒈 Bot 🔰",
    "pic de": "📸 এখন ছবি শেয়ার করতে পারছি না",
    " আমি সোহাগ": "হ্যাঁ 😄 বলো কী লাগবে?",
    "murgi": "🐔 কাউকে মুরগি দিলে আমি লিভ নিবো😒",
    "heda": "😄 ok",
    "boda": "😄 haha",
    "love you": "❤️ love you too",
    "kire ki koros": "😄 তোমার সাথে কথা বলছি",
    "kire bot": "হ্যাঁ বলো👀"
  };

  if (responses[msg]) {
    const spamBanned = await guardSpam({
      api,
      Users,
      senderID,
      threadID,
      messageID,
      triggerKey: "autoreply:" + msg,
    });
    if (spamBanned) return;

    return api.sendMessage(responses[msg], threadID, messageID);
  }
};

module.exports.run = async function ({ api, event, args, Users }) {
  return this.handleEvent({ api, event, Users });
};
