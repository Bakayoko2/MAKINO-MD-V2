const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = ["2250787666605"];
global.OwnerNumber = ["2250787666605"];
global.ownertag = ["2250787666605"]; 
global.OwnerName =  "𝚩𝐊𝚰𝐒𝚳𝚾⚜";
global.BotName = "𝚩𝐊𝚰𝐒𝚳𝚾🐉";
global.packname = "𝚩𝐊𝚰𝐒𝚳𝚾⚜";                             //Do not change.
global.author = "𝚩𝐊𝚰𝐒𝚳𝚾🐉";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"IBFzFHNX5N9Thpdg/KjIf2hH+DmAvne7fKfv2oyXzk0="},"public":{"type":"Buffer","data":"5FXGgaVwscoef2FYp3IBRVVUktmKHcA7y0JMF/o8+hw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"aKNH8r6ASMuvKSquCaGKo2Gib1RhXbuIi/bRK8WxPm0="},"public":{"type":"Buffer","data":"gy87dBuWsjz3m5RhbGKCjrw/VuPl2c8kuIk6PauUw3M="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"6KJyUI7GfcmAAzeOk1enR8GYlPgc2StrBEhB2PektE8="},"public":{"type":"Buffer","data":"UWVn7OWlAJyLXr7wbStjXPdVZ0ue8dyg+Z6oT1R52n0="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"QH1ZaEpgdEpgOKn+Hw/MVvRxsHe+W2PcTr5Px1oBNWs="},"public":{"type":"Buffer","data":"x3E36O0yWwl1OB8biA87qU7PuB8GLyOKdhDWgMIq02k="}},"signature":{"type":"Buffer","data":"yZ8I8bOMLyewcNHlrz52iVmxazyROxAu42GjE2+gv6cvKDa80qTpmAq58VfBWDNQABjVhuyGmAYyVd+1/RHBjw=="},"keyId":1},"registrationId":184,"advSecretKey":"u+VVg2bfPq5Lli8dUDPkn1eQjlinHvkueEzElciYQsc=","processedHistoryMessages":[],"nextPreKeyId":32,"firstUnuploadedPreKeyId":32,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"a4JueP6nRf2me9aeuVapCg","phoneId":"a9cf6d94-47a0-4d07-b410-ca54b85e8933","identityId":{"type":"Buffer","data":"W1wItbAkF7kCe38Rkjn6x2RM3wo="},"registered":true,"backupToken":{"type":"Buffer","data":"+gXf9rluF///oghPqyq2qZRMGTo="},"registration":{},"pairingCode":"H7J1CBJM","me":{"id":"22587666605:32@s.whatsapp.net"},"account":{"details":"CKiDgfQHEJbRi7UGGAEgACgA","accountSignatureKey":"G3pBXj3lH2weTesN4VFhbZjSK4DoLQK/1cE/g1xnXSA=","accountSignature":"96aSxlwVcWo6gPHctGokrIbatFbqmtrPk+6xqD+IkZhOPHv2whTPcUdDrvh7yKVHB7jmUAXOIV3+Ylvrplw0BQ==","deviceSignature":"/qIPTDwWMTyVnPjZbY8zPjZdZVHhAy5EzuLPkOD9h3jE5TDsiML0Z9LF6qP1ZRpDWqvvFXWc68D5RNmxO0/Phg=="},"signalIdentities":[{"identifier":{"name":"22587666605:32@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BRt6QV495R9sHk3rDeFRYW2Y0iuA6C0Cv9XBP4NcZ10g"}}],"platform":"android","lastAccountSyncTimestamp":1721952418}`
global.prefa = ["!"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
