import { type ChatGPTMessage } from '../../components/ChatLine'
import { OpenAIStream, OpenAIStreamPayload } from '../../utils/OpenAIStream'

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing Environment Variable OPENAI_API_KEY')
}

export const config = {
  runtime: 'edge',
}

const handler = async (req: Request): Promise<Response> => {
  const body = await req.json()

  let messages: string = `A conversation with Will Luttrell\n\n`
  for (const message of body?.messages) {
    if (message.role === 'user' && message.content !== '') {
        messages += `Liem: ${message.content}\n\n`
    }
    if (message.role === 'system') {
        messages += `Thi: ${message.content}\n\n`
    }
    if (message.role === 'assistant') {
        messages += `Will: ${message.content}\n\n`
    }
  }
  messages += 'Will:'

  // @ts-ignore
  const payload: OpenAIStreamPayload = {
    model: 'davinci:ft-personal:will-bot-v1-1-2023-06-18-15-59-53',
    prompt: messages,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS)
      : 100,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0.1,
    stream: true,
    stop: ['Thi:','Liem:', 'Will:'],
    n: 1,
    logit_bias: {
        '83': -10,
        '13': -10,
        '1073': -10,
        '5450': -10,
        '4023': -10,
        '14181': -50,
    }
  }

  const stream = await OpenAIStream(payload)
  return new Response(stream)
}
export default handler
