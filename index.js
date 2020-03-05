const Commando = require('discord.js-commando');
const discord = require('discord.js');
const Minesweeper = require('discord.js-minesweeper')
const bot = new Commando.Client({
    commandPrefix: "c!",
    unknownCommand: false,
    owner: '213636195580641280'
});
// process.setMaxListeners(100);
// require('events').EventEmitter.defaultMaxListeners = 15;

bot.registry.registerDefaultTypes();
bot.registry.registerDefaultGroups();
bot.registry.registerGroup('utility', 'Utility');
bot.registry.registerGroup('fun', 'Fun Stuff!');
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.registry.registerDefaultCommands({
    help: true,
    unknownCommand: false,
    commandState: false
    });

bot.on('message', function (message) {
    const content = message.content.split(' ');
    const args = content.slice(1);
   
    if (content[0] === 'vitaretro') {
      const rows = parseInt(args[0]);
      const columns = parseInt(args[1]);
      const mines = parseInt(args[2]);
   
      if (!rows) {
        return message.channel.send('*Please provide the number of rows!*');
      }
   
      if (!columns) {
        return message.channel.send('*Please provide the number of columns!*');
      }
   
      if (!mines) {
        return message.channel.send('*Please provide the number of mines!*');
      }
      
      const minesweeper = new Minesweeper({ rows, columns, mines });
      let = minesweeper.revealFirstCell = true;
      const matrix = minesweeper.start();
   
      return matrix
        ? message.channel.send(matrix)
        : message.channel.send('*Bugrit-bugrit*');
    }
  });

//

bot.on('message', function(message){
    var flickroflife = Math.floor(Math.random() * 16);
    if(message.content.toLowerCase() == "*flick*")
    {
        if(flickroflife == 0){
            message.channel.sendMessage("*Mein leben!*");
        }
        if(flickroflife == 1){
            message.channel.sendMessage("*Don't do anything stupid.. without me!*");
        }
        if(flickroflife == 2){
            message.channel.sendMessage("*My resistance is futile-*");
        }
        if(flickroflife == 3){
            message.channel.sendMessage("*My existence was irrelative..*");
        }
        if(flickroflife == 4){
            message.channel.sendMessage("*Aaaaargh! Das ende...*");
        }
        if(flickroflife == 5){
            message.channel.sendMessage("*Okay wise kerl!*");
        }
        if(flickroflife == 6){
            message.channel.sendMessage("*They'll be reading about this on the newsreel!*");
        }
        if(flickroflife == 7){
            message.channel.sendMessage("*They got me..*");
        }
        if(flickroflife == 8){
            message.channel.sendMessage("*Nergh!*");
        }
        if(flickroflife == 9){
            message.channel.sendMessage("*I'll be back!*");
        }
        if(flickroflife == 10){
            message.channel.sendMessage("*Fehlfunktion!*");
        }
        if(flickroflife == 11){
            message.channel.sendMessage("*Argh, verdammte ruffian!*");
        }
        if(flickroflife == 12){
            message.channel.sendMessage("*Y-n'gha.. wgah’n uh'e-oth shugg..*");
        }
        if(flickroflife == 13){
            message.channel.sendMessage("*Ich wage sagen, quite a spectacular show!*");
        }
        if(flickroflife == 14){
            message.channel.sendMessage("*We seem to be having technical-*");
        }
        if(flickroflife == 15){
            message.channel.sendMessage("*Command invalid! B-b-back to you!-*");
        }
        bot.destroy();
        bot.destroy();
        bot.destroy();
        bot.destroy();
        bot.destroy();
        bot.destroy();
        bot.destroy();
        bot.destroy();
        bot.destroy();
        bot.destroy();
        bot.destroy();
        bot.destroy();
    }
})


bot.on('message', function(message){
    if(message.guild){
        return undefined
    }
    else {
        console.log(message.content)
        if(message.author.bot === false)
        {
        var unixTimestamp = Math.round(new Date("2017-09-15 00:00:00.000").getTime()/1000)
        dateObj = new Date(unixTimestamp * 1000); 
        utcString = dateObj.toUTCString(); 
        time = utcString.slice(-11, -4);
        var vpdate = new Date();
        //var fortimevar = Date.getTime
        //vpdate.setTime(fortimevar);

        var seconds = vpdate.getSeconds();
        var minutes = (vpdate.getMinutes() < 10 ? '0' : '') + vpdate.getMinutes();
        var hour = vpdate.getHours(); + ":"
        var day = vpdate.getDate();
        var month = vpdate.toLocaleString('default', { month: 'long' })
        var botLogMessagefromUser = new discord.RichEmbed()
            .setDescription("**" + message.author.username + " sent me the following message at " + hour + ":" + minutes + " on " + day + " " + month + "**\n" + message.content)
            .setColor("#68e4ce")
            .setThumbnail(message.author.avatarURL)
            .setTitle("Logged Direct Message")
            //.setFooter("")

            bot.channels.get("588390527339069461").sendEmbed(botLogMessagefromUser);
        //bot.channels.get("588390527339069461").send("*" + message.author.username + " sent me the following message at " + hour + ":" + minutes + " on " + day + " " + month + "*\n" + message.content)
        }
        else if(message.author.bot === true)
        return undefined;
     // bot.channels.get("588390527339069461").send(message.content)
    }
})

bot.on('message', function(message){
    if(message.content.toLowerCase() == "MetaID"){
        message.channel.sendMessage(message.author.id);
    }
    else if(message.content.toLowerCase() == 'fsendnoncommando')
    {
        const includebotsontop = bot.guilds.get("557897762180694056");
        includebotsontop.members.forEach(member => console.log(member.user.username)); 
    }
});

    // Prints a text to terminal when bot is activated
bot.once('ready', function(){
    console.log("Vita is successfully launched!");
})

bot.once('ready', function()
    {
        bot.user.setActivity('c!help for commands!')
    });

bot.on('guildMemberAdd', function(member)
    {
        //member.send("glicko not elo");
        let faction1 = member.guild.roles.find("name", "Faction 1");
        let faction2 = member.guild.roles.find("name", "Faction 2");
        let faction3 = member.guild.roles.find("name", "Faction 3");
        let roleChance = Math.floor(Math.random() * 3);
        if (roleChance == '0' )
        {
            member.addRole(faction1);
            member.send("*Ah, " + member.name + "! Another despondent individual. I know just what to do with you... SLYTHERIN!*")
        }
        else if (roleChance == '1')
        {
            member.addRole(faction2);
            member.send("*Hello and welcome to the Goldmen Inc. " + member.name + "! You are now assigned to work for Faction 2!*")
        }
        else if (roleChance == '2')
        {
            member.addRole(faction3);
            member.send("*Welcome to featurefees, " + member.name + "! For whatever reason, you are now part of Faction 3!*")
        }
    });
    
bot.once('error', console.error);
const { botTokenConfig } = require('.assets/token/tokenConfig.json')
bot.login(botTokenConfig)//.then