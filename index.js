const { Client } = require('tdl');
const { TDLib } = require('tdl-tdlib-addon');
const { apiConfig } = require('./consts');

const client = new Client(new TDLib('./libtdjson.so'), apiConfig);

client.on('error', console.error);
client.on('update', (update) => {
	  if (update._ == 'updateChatLastMessage' && update?.last_message?.content?._ == 'messageText') {
		  console.log(`${new Date(update.last_message.date*1000).toISOString()} - Message from ${update.last_message.sender.user_id}: ${update.last_message.content.text.text}`);
	  }
});

async function main() {
	await client.connectAndLogin();

	console.log(await client.invoke({ _: 'getMe' }));
}

main();
