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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_23_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NixcbiAgICAgICAgODgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTczLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUwLFxuICAgICAgICA1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NixcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIyLFxuICAgICAgICA4MixcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDU3LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDUxLFxuICAgICAgICA2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NixcbiAgICAgICAgMixcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0NyxcbiAgICAgICAgOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM4LFxuICAgICAgICA3NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDM1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkwLFxuICAgICAgICA0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDM4LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDczLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMixcbiAgICAgICAgMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MixcbiAgICAgICAgMTUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkxLFxuICBcImFkdlNlY3JldEtleVwiOiBcInpGbGcyUmdFVEEzMmQ4a1ZIMUlWa01JYWV6Z1h1SWZPSk9kWHZGT0w2bGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllyRzc5Q28yUk9HTEFwd0g1dTY0S1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDdlNzRkYmYtNDE1Zi00MTUyLWFjZGMtNWQ4NTBjNmNmNmM2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NSxcbiAgICAgIDgxLFxuICAgICAgMTg0LFxuICAgICAgMTkwLFxuICAgICAgOTEsXG4gICAgICAxNzcsXG4gICAgICAyMixcbiAgICAgIDEzOSxcbiAgICAgIDk4LFxuICAgICAgMjQ0LFxuICAgICAgMTY2LFxuICAgICAgMjQ1LFxuICAgICAgMTk5LFxuICAgICAgMzIsXG4gICAgICA1NixcbiAgICAgIDMyLFxuICAgICAgNDQsXG4gICAgICA2MyxcbiAgICAgIDEzLFxuICAgICAgMTk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNCxcbiAgICAgIDI1NCxcbiAgICAgIDIyNyxcbiAgICAgIDg5LFxuICAgICAgNyxcbiAgICAgIDE2OSxcbiAgICAgIDk1LFxuICAgICAgNixcbiAgICAgIDcwLFxuICAgICAgMjAxLFxuICAgICAgMjA3LFxuICAgICAgMTAyLFxuICAgICAgMTM4LFxuICAgICAgMjIxLFxuICAgICAgMTg4LFxuICAgICAgNjQsXG4gICAgICAyNTMsXG4gICAgICAxODAsXG4gICAgICA2LFxuICAgICAgMjExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhMMjM1RjY2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQxMDUyODU5OTc6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkpheVwiLFxuICAgIFwibGlkXCI6IFwiMTAyNjA3MTg4MTczMDI0OjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTERiMWdjUXFzSE50QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwemhoTStXaFp4d1ZFU0krMzk0d1RzS1pKZ2dMTS9QbzhWTWpOeTBaczBRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZDN0pxV3FmREN2T2lnems4WGNRM21iYm9zNlRUVzFFdzd2MTFHTXdkUHhlWVp0VW5sbkN2c0RQSG9PK0ZkSnhTTzVOV0t3aWQ2QVlMYWp6SlNWMERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFWai91MG1CUk1PUER2cU1hN3k3UlByQTE1blBzdVBidDc1aXFKVXVjYUhtVmhYay92b2lhUi95cHNYNWxDdURjek12a2NrV1p3ai9FQWxlejgyUWlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDEwNTI4NTk5Nzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTM0NTc0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTG9FXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMb0UuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjaHpITld4NDBjQUVYakJZSFFnalJHUDU5MmwweG5WK2lHRTA0eFZyZXRFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MTAwNzgyLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
