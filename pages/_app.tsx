import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'

import { getLayout } from '@vercel/examples-ui'

import '@vercel/examples-ui/globals.css'

function App({ Component, pageProps }: AppProps) {

  return (
      <div>
        <Head>
          <title>WillGPT</title>
        </Head>
        <Component {...pageProps} />
      </div>
  )
}

export default App
