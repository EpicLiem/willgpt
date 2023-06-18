import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

import { getLayout } from '@vercel/examples-ui'

import '@vercel/examples-ui/globals.css'

function App({ Component, pageProps }: AppProps) {

  return (
      <main>
        <title>WillGPT</title>
        <Component {...pageProps} />
      </main>
  )
}

export default App
