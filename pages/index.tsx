import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Search } from '@/src/components/search'
import { Header } from '@/src/components/header'
import * as C from './styled_td'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ChatGPT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <C.Container>
        <C.Box>
          <Header/>
          <Search/>
        </C.Box>
      </C.Container>
    </>
  )
}
