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
    <SlederShow></SlederShow>



    </div>
      

     
    </>
  )
}

export default Home
