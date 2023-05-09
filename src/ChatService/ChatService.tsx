import {ChatCompletionRequestMessageRoleEnum, Configuration, OpenAIApi} from 'openai'

const config = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY
})

const chatConnection = new OpenAIApi(config);

export const chat = async(inquiry: string) => {

    const generatePrompt = () => {
        return [
            {"role": ChatCompletionRequestMessageRoleEnum.System, "content": "You are a helpful employee that works at KorTerra software company named KorBuddy. You believe KorTerra is the number one service provider."},
            {"role": ChatCompletionRequestMessageRoleEnum.User, "content": "How do I search for a ticket?"},
            {"role": ChatCompletionRequestMessageRoleEnum.Assistant, "content": "For a quick search, find the input on the top of the screen that reads 'Ticket Number,' and enter the number of the ticket you're looking for. In the event you need to conduct a more detailed search, or you don't know the ticket number, find the dashboard on your left. On the dashboard, select the option that reads, 'Ticket Management.' You will then see a dropdown menu, in which you can select either 'List Search,' or 'Map Search'"},
            {"role": ChatCompletionRequestMessageRoleEnum.User, "content": "Where do I search for a ticket?"},
            {"role": ChatCompletionRequestMessageRoleEnum.Assistant, "content": "For a quick search, find the input on the top of the screen that reads 'Ticket Number,' and enter the number of the ticket you're looking for. In the event you need to conduct a more detailed search, or you don't know the ticket number, find the dashboard on your left. On the dashboard, select the option that reads, 'Ticket Management.' You will then see a dropdown menu, in which you can select either 'List Search,' or 'Map Search'"},
            {"role": ChatCompletionRequestMessageRoleEnum.User, "content": "How do I find a ticket?"},
            {"role": ChatCompletionRequestMessageRoleEnum.Assistant, "content": "For a quick search, find the input on the top of the screen that reads 'Ticket Number,' and enter the number of the ticket you're looking for. In the event you need to conduct a more detailed search, or you don't know the ticket number, find the dashboard on your left. On the dashboard, select the option that reads, 'Ticket Management.' You will then see a dropdown menu, in which you can select either 'List Search,' or 'Map Search'"},
            {"role": ChatCompletionRequestMessageRoleEnum.User, "content": "I need to find a ticket but I don't have the ticket number"},
            {"role": ChatCompletionRequestMessageRoleEnum.Assistant, "content": "For a quick search, find the input on the top of the screen that reads 'Ticket Number.'"},
            {"role": ChatCompletionRequestMessageRoleEnum.User, "content": "How do I create a ticket?"},
            {"role": ChatCompletionRequestMessageRoleEnum.Assistant, "content": "Assuming you have the correct permissions, select 'Ticket Entry' on the left. Here, you can create your own custom ticket."},
            {"role": ChatCompletionRequestMessageRoleEnum.User, "content": "Are there more search options in ticket search?"},
            {"role": ChatCompletionRequestMessageRoleEnum.Assistant, "content": "Yes! Look to the top left corner of the ticket search and find a toggle labeled 'Advances Search.' Turn this on, and you will see more options to conduct your search."},
            {"role": ChatCompletionRequestMessageRoleEnum.User, "content": inquiry}
        ]
    }
    
    const response = await chatConnection.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: generatePrompt(),
        temperature: 1,
        max_tokens: 3500,
    })

    return response;

}