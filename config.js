const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://fluffyjourney001:eEZlMzNMPdjDM1Ct@fundraiser.jz2gntv.mongodb.net/"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+254726475608";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_14_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODIsXG4gICAgICAgIDI3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3LFxuICAgICAgICA4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMzLFxuICAgICAgICA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDkyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUwLFxuICAgICAgICA2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MixcbiAgICAgICAgODQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTksXG4gICAgICAgIDg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MixcbiAgICAgICAgNTUsXG4gICAgICAgIDcyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjksXG4gICAgICAgIDUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjB5c2szVi9QQXlkWnM0cGJNcktNMnJCYlF6M1VLc2l0VWRHTGxCdXFCTFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRnY1E2SGNjUU9Hdy14aFBnODZvRXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWNjMjcwZjEtMWQ2Zi00ZWZiLTkxMWUtM2I2MGU3NWU4NDE1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDI4LFxuICAgICAgMjE4LFxuICAgICAgMTIyLFxuICAgICAgMCxcbiAgICAgIDI0NCxcbiAgICAgIDUwLFxuICAgICAgMjQ1LFxuICAgICAgMjAwLFxuICAgICAgMzUsXG4gICAgICAyMTQsXG4gICAgICAxMjUsXG4gICAgICAyMjgsXG4gICAgICA4MixcbiAgICAgIDE2NCxcbiAgICAgIDUsXG4gICAgICAyMTUsXG4gICAgICA0MyxcbiAgICAgIDIyNCxcbiAgICAgIDIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY2LFxuICAgICAgNTEsXG4gICAgICAzMixcbiAgICAgIDIzNSxcbiAgICAgIDcwLFxuICAgICAgMjMsXG4gICAgICAxMjcsXG4gICAgICAyMzYsXG4gICAgICAxNzQsXG4gICAgICAyMyxcbiAgICAgIDIyMCxcbiAgICAgIDQ4LFxuICAgICAgMTkwLFxuICAgICAgMyxcbiAgICAgIDE0MyxcbiAgICAgIDI0OSxcbiAgICAgIDEyMCxcbiAgICAgIDIzNSxcbiAgICAgIDE0MSxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2REFUNkdTVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzI2NDc1NjA4OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzYyMzgzNzY0NzAyMToyMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQdjMrN2NERUlpOHhMUUdHQllnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpDcldGcE0xYThqZ0Zpb2JBVGRIL2FIMGx4L25wQkp1cFNhV1lKekQ3VU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRTRaNEI4YTBBa1RIUENiQnA3VWdtZ2FWN2VVNzVzZ1FuL0ZPaDUwUVJkSWRPcTRmb0hpSGV5aGU5b3JvZXFxdGxJS295ZWsxRkZ1ZkZFeHlPWE5pREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicSsyL25hZzdOcVJaWHRYZ3YxdFRvNENCcVpjcGxtVGJQaG4zd0cyWnlmZjdxVmJUSVFBTXN4anV5cnJ1dXRIY1BjSi9KRXFWUjk5Qzl0dWI2RGVDamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzI2NDc1NjA4OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3ODY0NDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIelVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUh6VS5qc29uIjogIntcImtleURhdGFcIjpcIjA0eWhQaGNvSEhuajVRMnhWN0orOVJMc0FiUEpWK2JvOUdVNEZRTXRweDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTIyNjgwMzE1LFwiY3VycmVudEluZGV4XCI6MTcsXCJkZXZpY2VJbmRleGVzXCI6WzAsNiwxNCwxNV19LFwidGltZXN0YW1wXCI6XCIxNzIwNzc3NTIyMjYwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Don",
  ownername:process.env.OWNER_NAME|| "don",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
