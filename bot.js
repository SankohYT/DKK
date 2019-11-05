const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ":";



client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
$nomention
$newTicket[categoryID/name;No subject has been given;Hello <@$authorID>!

Thanks for creating a Ticket!

Please, write down your whole problem. Our anwer time should be around 10 min if we are on.

Subject
{subject};تم عمل تكت الان انتظر إدارة على رد عليك ⁦✔️⁩{channel};error please try again]



client.login(process.env.BOT_TOKEN);
