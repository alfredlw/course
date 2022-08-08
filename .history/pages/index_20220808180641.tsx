import Footer from '@src/components/Footers/Footer'
import ContentSection from '@src/components/sections/Content'
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
       <section className="bg-primary pt-28 pb-14 md:pb-28">
        {/* section Home */}
        <HomeSection/>
       </section>
       
       {/* section content */}
       <section className="py-20">
        <ContentSection/>
       </section>
      </main>

      <Footer/>
    </div>
  )
}

export default Home
