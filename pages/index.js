import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import IceCreamList from '../components/IceCreamList'


export default function Home() {
  return (
    <div>
      

      <Head>
        <title>Little Kittens Ice Cream</title>
        <meta name="description" content="Best Ice Cream" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <IceCreamList/>
     </div>
  )
}