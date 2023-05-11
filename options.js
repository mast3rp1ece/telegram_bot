module.exports = {
	payOptions: {
		reply_markup: JSON.stringify({
			inline_keyboard: [
				[{text: 'Month', callback_data: '1'}],
				[{text: 'Month', callback_data: '2'}],
				[{text: 'Month', callback_data: '3'}],
				[{text: 'Month', callback_data: '4'}],
			]
		})
	}
}