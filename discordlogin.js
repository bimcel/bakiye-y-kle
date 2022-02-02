const Discord = require("discord.js") 
const client = (global.client = new Discord.Client());


    client.on("ready", async function(message) {
        client.user.setPresence({ activity: { name: "C4REDİT E-C4RD HACKER" }, status: "idle" });
    console.log(0+1, client.user.tag, `Giriş yaptı.`)
    let panker = client.channels.cache.get("937837931371061311")
    panker.send(`Discorda giriş sağlandı şimdi ise websiteye giriş yapılıyor...`)
    setTimeout(() => {
        panker.send(`Websiteye giriş sağlandı.`)
    }, 9000);
    }) 
  

client.login("OTM4MDc1NTkxNzAwMjc5MzM2.YflA-Q.VKsxBECr4BwnyPhJH0h6kYG8aDI")
   