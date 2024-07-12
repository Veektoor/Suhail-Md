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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+254712866672";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_43_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjExLFxuICAgICAgICA2MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI4LFxuICAgICAgICA3MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDY2LFxuICAgICAgICA3MyxcbiAgICAgICAgMixcbiAgICAgICAgMTA2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDczLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDgxLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOSxcbiAgICAgICAgMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUwLFxuICAgICAgICA2MixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NixcbiAgICAgICAgMTgzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE2LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM4LFxuICAgICAgICA4NSxcbiAgICAgICAgODMsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDk3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc4LFxuICAgICAgICAzMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkxLFxuICAgICAgICA1NixcbiAgICAgICAgMTY5LFxuICAgICAgICA0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDY0LFxuICAgICAgICA1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1M1F0WVhnWjhhbGQyTWZOcmZjQlpPbWIrMHAxdmNrbFdKU2tlZzJhSTAwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcxMjg2NjY3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjcwNTBFMDk0MUQ0NzVBMTA4RUQ5NTdDN0QxQzc0MkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNTk3NDA2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzEyODY2NjcyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBMzFBM0Y1RkMxOEUyOTE1REY4NEQ3MTM2QTlERjNBOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1OTc0MDhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMXhmNFd5SU5UUW1nQlFuSmtWclNCQVwiLFxuICBcInBob25lSWRcIjogXCIzNzc2MGIxMy0yNGIwLTQ2ZjMtYjU4NS1mYjFhYjUwNWQ2NGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE3LFxuICAgICAgMzYsXG4gICAgICAxNzksXG4gICAgICAxNzgsXG4gICAgICA2MixcbiAgICAgIDI1MyxcbiAgICAgIDI0LFxuICAgICAgOTcsXG4gICAgICAxMTYsXG4gICAgICAyMzEsXG4gICAgICAyNixcbiAgICAgIDYxLFxuICAgICAgMTU0LFxuICAgICAgMTY2LFxuICAgICAgMjE1LFxuICAgICAgMTc1LFxuICAgICAgMTY2LFxuICAgICAgMzYsXG4gICAgICAxMjMsXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOSxcbiAgICAgIDU1LFxuICAgICAgMjM3LFxuICAgICAgMTQsXG4gICAgICAxMzksXG4gICAgICAxNTIsXG4gICAgICAxNDEsXG4gICAgICAxNDEsXG4gICAgICA3NCxcbiAgICAgIDI4LFxuICAgICAgMzQsXG4gICAgICA4NCxcbiAgICAgIDU4LFxuICAgICAgNzAsXG4gICAgICAxMjQsXG4gICAgICAyMzUsXG4gICAgICAxMTIsXG4gICAgICAxMTQsXG4gICAgICAxMTcsXG4gICAgICAyMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR01WR1Y3WjNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxMjg2NjY3MjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDQ3MDMxMTU0MDc1MTM6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJJc2x1bVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01URzUrZ0RFSmozdUxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSDIrQkY0MlZIbG9PdjhsUXVEZWpOb0dxYml5blM5SGNFVnFhVkNmTWFsUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTUS8rSC9FRXJJOEdlVnBFK1M1S1MwemREN2IxOUNCdlFxbUZ1Wk1YQXdBTXNrZEJjcmVab1JwNEkrUUVaWmc4aWdyc0x1eVlKbGU2V2luWWFNV2RDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4MVRRNnAwamhoRlFQZWdqRnVHMWdaYlh2Ykx3RnE4cXhER2ZPRGVhdGszckdGK2VtMmZNM0w2ZmFpTmgxSVhlWkFxcGEwYlZaVW91M1J1aitQMDJBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MTI4NjY2NzI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU5NzQwNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVGYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUZiLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNlozMkl5T0MxalgzOUVGVjRSdEViZUdSNWdvanVaL3dYRVdYbEJMSTF1QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDI1MTA2NzU2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA1OTc0MDU3MDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Don",
  ownername:process.env.OWNER_NAME|| "Islam",


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
