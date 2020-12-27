const Discord = require('discord.js')
const command = require('./command')
const client = new Discord.Client()
const math = require ('mathjs')
const config = require('./config.json')
const privateMessage = require('./private-message')
const poll = require('./poll')
const mongo = require('./mongo')
const randomPuppy = require('random-puppy');
const welcome = require('./welcome')
const moment = require ('moment')
const dateformat = require('dateformat')


client.on('ready', async () => {
  
  console.log('╠══════════════════════════════════ ( login ) ═══════════════════════════════════════╣')
  console.log(`║ > Logged in as ${client.user.tag}!                                      ║`);
  console.log('╠══════════════════════════════════ ( Amount ) ══════════════════════════════════════╣')
  console.log(`║ > Active in ${client.guilds.cache.size} servers!                                                 ║`)
  console.log('╠══════════════════════════════════ ( Servers ) ═════════════════════════════════════╣')
  let content = "";
  let s = "";
    client.guilds.cache.forEach((guild) => {
    let spaces = 85 - (`║ > ${guild.name} member's ${guild.memberCount}`).length
    s += 1
    if(s > Number(client.guilds.cache.size)-2){
      content += `\n║`

    } else {
      content += '║'
    }
    content += ` > ${guild.name} member's ${guild.memberCount}`

    for (i = 0; i < spaces; i++) { 
      content += ' '
    }
          content += '║'
  })
  console.log(content)
  console.log('╚════════════════════════════════════════════════════════════════════════════════════╝	')
})
  //console.log('Phoenix has logged in.',
  //client.user.setActivity('With Your MOM', { type: "PLAYING"}
  
 




command(client, ['ping', 'test'], (message) => {
    message.channel.send('**Pong!** This message had a Latency of **69420ms**')
  })

  command(client, 'servers', (message) => {
    client.guilds.cache.forEach((guild) => {
      message.channel.send(
        `**${guild.name}** has a total of **${guild.memberCount}** members`
      )
      
      })
    })



  command(client, 'stats', (message) => {
    
    {
    
      var mcount = client.users.cache.size
      var scount = client.guilds.cache.size
      var tcount = client.channels.cache.filter(c => c.type === 'text').size
      var vcount = client.channels.cache.filter(c => c.type === 'voice').size
      message.reply(`**${client.user.username}** is on **${scount}** servers with **${mcount}** members, chatting on **${tcount}** text channels, with **${vcount}** voice channels!`)
    }

    
  })

  command(client, ['cc', 'clearchannel'], (message) => {
    if (message.member.hasPermission('ADMINISTRATOR')) {
      message.channel.messages.fetch().then((results) => {
        message.channel.bulkDelete(results)
      })
    }
  })

  command(client, 'status', (message) => {
    const content = message.content.replace('?status ', '')
    // "!status hello world" -> "hello world"

    client.user.setPresence({
      activity: {
        name: content,
        type: 0,
      },
    })
  })


privateMessage(client, 'hi', 'Hello!')
privateMessage(client, '69', '69')
privateMessage(client,'ok','**OK BOOMER**')  



command(client, 'createtextchannel', (message) => {
    const name = message.content.replace('?createtextchannel ', '')

    message.guild.channels
      .create(name, {
        type: 'text',
      })

      })
  

  command(client, 'createvoicechannel', (message) => {
    const name = message.content.replace('?createvoicechannel ', '')

    message.guild.channels
      .create(name, {
        type: 'voice',
      })
      
      })

      
     



    command(client, 'Game help', (message) => {

  const embed = new Discord.MessageEmbed()
   .setTitle('Game Commands')
   .setAuthor(message.author.username)
   .setFooter('Owned By DarkDevil#9348')
   .setColor('#FF0000')
   .addFields(
        {
          name:'?meme',
          value:'Gives you a random meme from Reddit'

        },
        {
          name: '?8ball',
          value:'Responds to a question you ask'
        },   

        {
         name : '?coinflip',
         value:'Flips a coin and says the result'
        },
        
        {
         name : '?say',
         value:'Says something for you'
        },

        {
          name : '?rateme',
          value:'Rates you out of 100'
        }
        

   )
    message.channel.send(embed)
    
})

command(client, 'Mod help', (message) => {

  const embed = new Discord.MessageEmbed()
   .setTitle('Moderation Commands')
   .setAuthor(message.author.username)
   .setFooter('Owned By DarkDevil#9348')
   .setColor('#FF0000')
   .addFields(
        {
          name: '?ban',
          value:'Bans a person from the server'

        },
        {
          name: '?kick',
          value:'Kicks a person from the server'
        },
        {
          name: '?cc',
          value:'Clears All messages from a channel On That Day'
        },
        {
          name: '?mute',
          value:'Mutes a user in the Server'
        },
        {
          name: '?unmute',
          value:'Unmutes a user who is muted'
        },
        {
          name: '?createtextchannel',
          value:'Creates a Text channel in the server'

        },
        {
          name: '?createvoicechannel',
          value:'Creates a Voice channel in the server'
        },
        {
          name:'?slowmode',
          value:'Sets the slowmode for a channel'
        }

   )
   
message.channel.send(embed)


}) 






command(client, 'Utility help', (message) => {

  const embed = new Discord.MessageEmbed()
   .setTitle('Utility Commands')
   .setAuthor(message.author.username)
   .setFooter('Owned By DarkDevil#9348')
   .setColor('#FF0000')
   .addFields(
       
        {
          name : '?ping',
          value : 'Says Pong'
        },
        {
          name: '?servers',
          value:'Gives a list of servers the bot is in'
        },
        {
          name: '?stats',
          value:'Gives stats of the bot'
        },
        {
          name: '?status',
          value:'Changes the status of the Bot to whatever you want'
        },
        {
          name:'?serverinfo',
          value:'Gives Info About The server'
        },
        {
          name:'?avatar',
          value:'Sends your discord avatar'
        },
        {
          name:'?invite',
          value:'Invite me to your server'
        },
        {
          name:'?userinfo',
          value:'Shows info on you or any other person you mention'
        }
        

   )

message.channel.send(embed)

 })

      


      command(client, 'help', (message) => {
       
    
        const embed = new Discord.MessageEmbed()
          .setTitle('My Commands!')
          .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO')
          .setAuthor(message.author.username)
          .setFooter('Owned By DarkDevil#9348')
          .setColor('#FF0000')
          .addFields(
            {
              name: '?Utility help',
              value: 'Gives A list of Utility Commands',
              
            },
            {
              name: '?Mod help',
              value: 'Gives A list of Moderation Commands',
              
            },
            {
              name: '?Game help',
              value: 'Gives A list of Game Commands',
              
            },
        
          )
    
        message.channel.send(embed)
      })
    
      command(client, 'serverinfo', (message) => {
        let icon = message.guild.iconURL({size: 2048}); // Server Avatar
        
        let region = {
          "brazil": "Brazil",
          "eu-central": "Central Europe",
          "singapore": "Singapore",
          "london": "London",
          "russia": "Russia",
          "japan": "Japan",
          "hongkong": "Hongkong",
          "sydney": "Sydney",
          "us-central": "U.S. Central",
          "us-east": "U.S. East",
          "us-south": "U.S. South",
          "us-west": "U.S. West",
          "eu-west": "Western Europe"
        }
        
        // Members
        let member = message.guild.members;
        let offline = member.cache.filter(m => m.user.presence.status === "Offline").size,
        online = member.cache.filter(m => m.user.presence.status === "Online").size,
        idle = member.cache.filter(m => m.user.presence.status === "Idle").size,
        dnd = member.cache.filter(m => m.user.presence.status === "Do Not Disturb").size,
        robot = member.cache.filter(m => m.user.bot).size,
         total = message.guild.memberCount;
        
        // Channels
        let channels = message.guild.channels;
        let text = channels.cache.filter(r => r.type === "text").size,
            vc = channels.cache.filter(r => r.type === "voice").size,
            category = channels.cache.filter(r => r.type === "category").size,
            totalchan = channels.cache.size;
        
        // Region
        let location = region[message.guild.region];
        
        // Date
        let x = Date.now() - message.guild.createdAt;
        let h = Math.floor(x / 86400000) // 86400000, 5 digits-zero.
        let created = dateformat(message.guild.createdAt); // Install "dateformat" first.
        
        const embed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTimestamp(new Date())
        .setThumbnail(icon)
        .setAuthor(message.guild.name, icon)
        .setDescription(`**ID:** ${message.guild.id}`)
        .addField("Region", location)
        .addField("Date Created", `${created} \nsince **${h}** day(s)`)
        .addField("Owner", `**${message.guild.owner.user.tag}** \n\`${message.guild.owner.user.id}\``)
        .addField(`Members [${total}]`, 'BOTS also exsist')
        .addField(`Channels [${totalchan}]`, `Text: ${text} \nVoice: ${vc} \nCategory: ${category}`)
        message.channel.send(embed); // Let's see if it's working!
      })

      command(client, 'ban', (message) => {
        const { member, mentions } = message
    
        const tag = `<@${member.id}>`
    
        if (
          member.hasPermission('ADMINISTRATOR') ||
          member.hasPermission('BAN_MEMBERS')
        ) {
          const target = mentions.users.first()
          if (target) {
            const targetMember = message.guild.members.cache.get(target.id)
            targetMember.ban()
            message.channel.send(`${tag} That user has been banned`)
          } else {
            message.channel.send(`${tag} Please specify someone to ban.`)
          }
        } else {
          message.channel.send(
            `${tag} You do not have permission to use this command.`
          )
        }
      })
    
      command(client, 'kick', (message) => {
        const { member, mentions } = message
    
        const tag = `<@${member.id}>`
    
        if (
          member.hasPermission('ADMINISTRATOR') ||
          member.hasPermission('KICK_MEMBERS')
        ) {
          const target = mentions.users.first()
          if (target) {
            const targetMember = message.guild.members.cache.get(target.id)
            targetMember.kick()
            message.channel.send(`${tag} That user has been kicked`)
          } else {
            message.channel.send(`${tag} Please specify someone to kick.`)
          }
        } else {
          message.channel.send(
            `${tag} You do not have permission to use this command.`
          )
        }
      })

      poll(client)
    

      function doMagic8BallVoodoo() {
        var rand = ['Yes', 'No','Without A doubt','Not even in your dreams', 'Why are you even trying?','Ask Sunil','Try Again **B00MER**','Why not','Impossible','Google Says **NO**','**IDK**','What do you think? **NO**', 'Maybe', 'Never', 'Yep'];
    
        return rand[Math.floor(Math.random()*rand.length)];
    }
    
    // Later in the code:
     command(client, '8ball', (message) => {
    
        message.channel.send(doMagic8BallVoodoo());
    
     })

     const responseObject = {
      "ayy": "***Ayy DooD***",
      "what": "***Nani***",
      "lol": "**LMAO**",
      "sunil":"**S U N I L**"
    };
    
    client.on("message", (message) => {
      if(responseObject[message.content]) {
        message.channel.send(responseObject[message.content]);
      }
    });

    
    welcome(client)

    command(client,'say', (message) => {
      var text = message.content.split(' ').slice(1).join(' ')
      if(!text) return message.reply('Please give me some text to say! :)')
     message.channel.send(text)
    })
    
    command(client,'coinflip',(message) => {

      var choices = [
        "HEADS",
        "TAILS"
      ];
      
       var output = choices[Math.floor(Math.random()*choices.length)];
        
        message.channel.send(`You got **${output}!**`);
        
      })
     
    

command(client, 'rateme' , (message) =>  {
  var rating = Math.floor(Math.random() * 100) + 1;
message.reply(`I rate you **${rating}/100**`);
})


      command(client,'die',(message) => {
        let devs = ['699547766782951504'] //CHANGE THIS TO YOUR ID(S)
        
        if(!devs.includes(message.author.id)) {
      return true
      } else {
      process.exit()
      }
    })




command(client,'slowmode',(message) => {
  var time = message.content.split(' ').slice(1).join(' ')
  if(!time) return message.reply('Please enter a time in seconds!')
 message.channel.setRateLimitPerUser(time)
   message.channel.send('Set the slowmode!')
})


command(client, 'avatar', (message) => {

  let member = message.mentions.users.first() || message.author

  let avatar = member.displayAvatarURL({size: 1024})


  const embed = new Discord.MessageEmbed()
  .setTitle(`${member.username}'s avatar`)
  .setImage(avatar)
  .setColor('#FF0000')

  message.channel.send(embed);
})

command(client, 'meme', (message) => { 
  const { MessageEmbed } = require('discord.js');
const somethingRandom = require('some-random-cat').Random // Import the package...
const subreddits = [
    "meme",
    "memes",
    "dankmemes",
    // You can add as many as you wish...
]
let randomSubReddit = subreddits[Math.floor(Math.random() * subreddits.length)] // Generates a random subreddit from the array...
somethingRandom.getMeme(randomSubReddit).then(res => {
    const embed = new MessageEmbed()
    .setTitle(res.title)
    .setURL(`https://www.reddit.com/r/${randomSubReddit}`)
    .setImage(res.img)
    .setFooter(`👍 ${res.upvotes} | 💬 ${res.comments}`)
    .setAuthor(`From ${res.author}`)
    .setColor('#FF0000')
    message.channel.send(embed)
    console.log(res)
}).catch(e => message.channel.send('API Error.'))
})

command(client,'mute',async (message) => {


  const args = message.content.trim().split(/ +/g);
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You do not have permission to run this command");

  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

  if(!user) message.channel.send("This user can't be found anywhere in this server");

  if(user.id === message.author.id) return message.channel.send("You cannot mute yourself you imbecile");

  let role = message.guild.roles.cache.find(x => x.name === "Muted");

  if(!role) return message.channel.send("Cannot find the muted role");

  let reason = args.slice(1).join(" ");
  if(reason === null) reason = "Unspecified"

  user.roles.add(role);

  await message.channel.send(`${user} has been muted for the following reason: ${reason}`)

  user.send(`Hello there. You have been muted from ${message.guild.name} for the following reason: ${reason}`);
})

command(client, 'unmute',async (message) => {

  const args = message.content.trim().split(/ +/g);
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You are not allowed to run this command");

  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

  let role = message.guild.roles.cache.find(x => x.name === "Muted");

  if(user.roles.cache.has(role)) return message.channel.send("This member isn't muted");

  user.roles.remove(role);

  message.channel.send(`${user} has been unmuted`)
}) 



command(client, 'invite' , (message) => {
  const embed = new Discord.MessageEmbed()

  .setTitle(`Invite Link`)
  .setDescription(`You can invite me [here](https://discord.com/api/oauth2/authorize?client_id=789044221784096789&permissions=8&scope=bot)`)
  .setColor('#FF0000')
  .setFooter('Owned By DarkDevil#9348')
  .setTimestamp()

  message.author.send(embed)
  message.channel.send('Please check your DM\'s')
})

command(client, 'userinfo', (message) => {
  let user = message.mentions.users.first() || message.author;
    
  let x = Date.now() - user.createdAt; // Since the user created their account.
  let y = Date.now() - message.guild.members.cache.get(user.id).joinedAt; // Since the user joined the server.
  let created = Math.floor(x / 86400000); // 5 digits-zero.
  let joined = Math.floor(y / 86400000);
  
  const member = message.guild.member(user);
  let nickname = member.nickname !== undefined && member.nickname !== null ? member.nickname : "None";
  let createdate = moment.utc(user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss"); // User Created Date
  let joindate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss"); // User Joined the Server Date
  let avatar = user.avatarURL({size: 2048}); // Use 2048 for high quality avatar.
  
  const embed = new Discord.MessageEmbed()
  .setAuthor(user.tag, avatar)
  .setThumbnail(avatar)
  .setTimestamp()
  .setColor('#FF0000')
  .addField("ID", user.id,)
  .addField("Nickname", nickname,)
  .addField("Created Account Date", `${createdate} \n **${created}** days ago`,)
  .addField("Joined Server Date", `${joindate} \n **${joined}** days ago`,)

  
  message.channel.send(embed); // Let's see if it's working.
})





client.login(config.token)
