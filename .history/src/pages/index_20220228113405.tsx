import type { NextPage } from 'next'
import Head from 'next/head'
import { SlederShow } from '../components/SliderShow'





const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TmTravel | Home</title>
      </Head>
    <div >
      <SlederShow/>
      <section>
        <h1>hello World</h1>
      </section>
      
     
    </div>
      

     
    </>
  )
}

export default Home
