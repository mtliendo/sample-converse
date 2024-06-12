const {
	BedrockRuntimeClient,
	ConverseCommand,
} = require('@aws-sdk/client-bedrock-runtime')

const client = new BedrockRuntimeClient({ region: 'us-east-1' })

const userMessage = 'What is your favorite kind of taco?'

const conversation = [
	{
		role: 'user',
		content: [{ text: userMessage }],
	},
]

const modelId = 'anthropic.claude-3-haiku-20240307-v1:0'

const command = new ConverseCommand({
	modelId,
	messages: conversation,
})

client
	.send(command)
	.then((response) => {
		const responseText = response.output.message.content[0].text
		console.log(responseText)
	})
	.catch((err) => console.log(err))
