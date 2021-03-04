import Head from 'next/head'
import { Main } from '../components'

function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  )
}

export default Home
