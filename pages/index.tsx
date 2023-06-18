import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'
import Head from 'next/head'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <Head>
        <title>WillGPT</title>
        <meta name="description" content="WillGPT" />
      </Head>
      <section className="flex flex-col gap-6">
        {/* put logo to the right of the title */}
        <Text variant="h1">WillGPT</Text>
        <Text className="text-zinc-600">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
          A model fintuned on Will's messages and tweets.
        </Text>
      </section>

      <section className="flex flex-col gap-3">
        <Text variant="h2">AI Chat Bot:</Text>
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
