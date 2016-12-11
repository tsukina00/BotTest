const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
	if (msg.content === 'ไม่หมีล') {
		msg.reply('หมีล');
	}else if (msg.content === 'ใครหมีลสุด'){
		msg.reply('ถุงชาค่ะ');
	}
});

client.login('MjU3NDU0MTk0Njk5NjY1NDA4.Cy69aw.oGpThNC_P5bpukWHxqhuycYndGY');
