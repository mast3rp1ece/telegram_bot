const TelegramApi = require('node-telegram-bot-api')
const {payOptions} = require('./options.js')
const token = '6012962427:AAFba66cBiy2YFJXTGh0VhrXm_vhuT2-A34'

const bot = new TelegramApi(token, {polling: true})




const start = () => {
	bot.setMyCommands([
		{command:'/start', description: 'Привітання!'},
		{command:'/info', description: 'Отримати інформацію про себе'},
		{command: '/check', description: 'Check month pay'}
	])
	
	bot.on("message", async msg => {
		const text = msg.text;
		const chatId = msg.chat.id;
		if (text === '/start') {
			await bot.sendSticker(chatId, "./img/ali.png")
			return bot.sendMessage(chatId, `Вітаю друзі! Я створив цей телеграм-бот для того "Рома", щоб ви не забували оплачувати щомісячний платіж за підписку в "Youtube Music"`)
		}
		if (text === "/info") {
			return bot.sendMessage(chatId, `Тебе звати ${msg.from.first_name}`)
		}
		if (text === "/check") {
			return bot.sendMessage(chatId, 'Хай', payOptions)
		}
		return bot.sendMessage(chatId, 'Не зрозумів, спробуй ще раз😀')
	})

	bot.on('callback_query', msg => {
		const data = msg.data;
		const chatId = msg.message.chat.id;

		bot.sendMessage(chatId, `Ти вибрав кнопку ${data}`)
	})
}

start()