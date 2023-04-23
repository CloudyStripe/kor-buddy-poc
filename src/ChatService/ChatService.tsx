import {Configuration, OpenAIApi} from 'openai'

const config = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY
})

const chatConnection = new OpenAIApi(config);

export const chat = async(inquiry: string) => {
    
    const response = await chatConnection.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{"role": "user", "content":`${inquiry}`}],
        temperature: 1,
        max_tokens: 100,
    })

    return response;

}