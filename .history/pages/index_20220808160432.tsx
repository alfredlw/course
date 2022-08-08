import HomeSection from '@src/components/sections/Home'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Innov | Bootcamp pour devenir fullStack developpeur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
       <section className="py-28">
        {/* section Home */}
        <HomeSection/>

       </section>
      </main>

      <footer className="">
        
      </footer>
    </div>
  )
}

export default Home
