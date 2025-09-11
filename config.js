const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0tPSkVoWVZvdGtDUFJndlJabXhkK3F3RWR2WjRvbzdWK28rOXhZcXBubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDlzL3FySmxKODBSV0o1ZUh0akxWUUNPWnU2VE5RVzgwS2dCS3ZvSkZTZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TzNHREppZURDbFozb0JBa3RhWXRTVThYbEdWS3ptV2tSVGtoN0QrSUVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJURHBkTXllMnBkRkxQSlllejJ1YUJKdW92SHZFNkY5WDJzZDcrbGFFMlFJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVBTnJDL3libzhPSEpqOEFlYUFMdFNUejNuM1NIcmFVcGNJNlJWYnphRWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklielVRTmoreWxsT2ttMEk1bmlDMEEvSHlua285K0tIeU45T1VNcS95d009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0lCamxtVWs0S3lPQnZGUW9acjJUaXgzQ1cyZXBIUS9ZN0RPc1RKbTgxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnNLR29UdlkzWU1Ra1QvUzlYYU5YbXNJY3k2S1FyRVF0ZEs2Szc4ZXJ4OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVJSCthbTBHNk9yOXZISDBJUEZpSWpmTnpLN3NLSU5LbXRSUjl5SlFINXZHa256eVlIbEpCNGdQQ1MvcE9RcSs1eHY2UURiYUVXbFdHeGpBRnNhQkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAzLCJhZHZTZWNyZXRLZXkiOiIwTzVQK3A2NTRhbUh2RTQ3RDlFYlUzU3lmK1dxME1CN2ZrMndHbzliTlE4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxODczMTgxMDMxMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxN0E1RkE0NTZCRjE3NzVEQzAyODY3MEU2MjkyMDY2RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU3NjEzODI3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTg3MzE4MTAzMTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDRDNEFGN0MwOEY4Qzk0NEIxQjY0NkI4Mjk4NjAxMkEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NzYxMzgyN30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTE4NzMxODEwMzExQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjI5NzQ3MTZCRTg1MDdGQ0NCRkUzNUJEQTVCRjc4NkI5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTc2MTM4NTR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjhEMlpZTFRLIiwibWUiOnsiaWQiOiI5MTg3MzE4MTAzMTE6NzNAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxODU0NTI4OTYyMzk4NjE6NzNAbGlkIiwibmFtZSI6IkFMT05HIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOZkVrb3dHRU8rZGpNWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkMmZPUURlWXFSY1FJVitSM2Y1ZlV0enkvR3VubGlXeDF3OVdpc3JMaml3PSIsImFjY291bnRTaWduYXR1cmUiOiJlVlJXOEo3c0dHTzJhbWdWeVdKSFp3aXJwNDZmbnA0U2ZCRk1EZE00bUJ0cVNjZEE4M290ZHV4UHdFcVdhZ2pjUC93SWRJUW5zVmYxR2pITkVTM3pDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNDZXcjBmUTZPbnBVdFlKb2lLbXBab3FLYURPQlFwM1NmN3hVOFg2YlpRQkR4QUtldmNMK1Qzb2JpK1RPRVV3T3lyVmNVYnVHWUNhZXc0R0FPd3Q4REE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTg3MzE4MTAzMTE6NzNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWGRuemtBM21La1hFQ0Zma2QzK1gxTGM4dnhycDVZbHNkY1BWb3JLeTQ0cyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3NjEzODIyLCJsYXN0UHJvcEhhc2giOiIyTUZLUFEiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURQZiJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY NEXUS-AI 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
GOODBYE: process.env.GOODBYE || "false",
// true if want welcome and goodbye msg in groups       
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.postimg.cc/SR9S0ZdT/11900809-f4ad-46ee-bedf-f430eed4bab8.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ALONG",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Along",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "918731810311",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ALONG",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ALONG*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/SR9S0ZdT/11900809-f4ad-46ee-bedf-f430eed4bab8.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *NEXUS-AI*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "254794146821",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
