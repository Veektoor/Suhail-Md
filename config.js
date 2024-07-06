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
global.DATABASE_URL = process.env.DATABASE_URL || ""

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_35_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1NixcbiAgICAgICAgMTczLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1LFxuICAgICAgICAzNixcbiAgICAgICAgMjIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExLFxuICAgICAgICAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc2LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgODYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAyLFxuICAgICAgICA0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAyNSxcbiAgICAgICAgODQsXG4gICAgICAgIDQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA0LFxuICAgICAgICA1NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MixcbiAgICAgICAgODQsXG4gICAgICAgIDcxLFxuICAgICAgICA2OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MixcbiAgICAgICAgODYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzksXG4gICAgICAgIDExLFxuICAgICAgICA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDczLFxuICAgICAgICAyNDksXG4gICAgICAgIDU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwLFxuICAgICAgICA1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJodnlQZkl3dUJIRG9vZHJleXM4T2ovV0N4aXVaMjk5ZTZPa1RSU3owTTN3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItckR3ckRhLVFLcUFzLXlEakliTGhnXCIsXG4gIFwicGhvbmVJZFwiOiBcImZiYTUxY2NjLTM0NGYtNDllNy1hM2MwLTg3MTJiYzJiMTg2ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NyxcbiAgICAgIDQ4LFxuICAgICAgMTg4LFxuICAgICAgNTgsXG4gICAgICAxODUsXG4gICAgICAxMTksXG4gICAgICAxMyxcbiAgICAgIDAsXG4gICAgICA1NSxcbiAgICAgIDcxLFxuICAgICAgNDMsXG4gICAgICAxMjksXG4gICAgICAxNTEsXG4gICAgICAxODgsXG4gICAgICAzNyxcbiAgICAgIDIwNSxcbiAgICAgIDQ0LFxuICAgICAgMSxcbiAgICAgIDE1LFxuICAgICAgMTU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDE1MyxcbiAgICAgIDE3LFxuICAgICAgNDEsXG4gICAgICAzNSxcbiAgICAgIDIxNyxcbiAgICAgIDE0MSxcbiAgICAgIDE0MyxcbiAgICAgIDgzLFxuICAgICAgMSxcbiAgICAgIDE3MSxcbiAgICAgIDMsXG4gICAgICAxOTMsXG4gICAgICAxNTksXG4gICAgICAxMSxcbiAgICAgIDIxNCxcbiAgICAgIDExMCxcbiAgICAgIDE3MSxcbiAgICAgIDc1LFxuICAgICAgMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFc0UkpWRk5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcyNjQ3NTYwODoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM2MjM4Mzc2NDcwMjE6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHYzKzdjREVML0lwYlFHR0E0Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKQ3JXRnBNMWE4amdGaW9iQVRkSC9hSDBseC9ucEJKdXBTYVdZSnpEN1VNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJHN09wNWtueTVzdWFhVTErL0RUQ0UxZlZlTllaSGRuQUk1VjJDOXpLT0xaTGM3aWE3bHZRR3l5RjJaMWoveVlnR2MyLy9PVnZzek0yNVhNdnloTENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImt6UGttSXV4SjcvK3U2bWtueGhITXRQUHhhVkoxQ1BHWVNPQVQxMW11L3FiK0tkcndVVFozR0lRYmRneG5VT2ZLTVFhODgvMks3MnRjQjJySHdKNWd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcyNjQ3NTYwODoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjgwMTMzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Don",
  ownername:process.env.OWNER_NAME|| "Donmureithi",


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
