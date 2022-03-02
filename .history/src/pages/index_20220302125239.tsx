import type { NextPage } from 'next'
import Head from 'next/head'
import ContainerSales from '../components/ContainerSales'
import { SlederShow } from '../components/SliderShow'
import { ContainerSlider } from './home'





const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TmTravel | Home</title>
      </Head>
    <ContainerSlider>
      <SlederShow/>
       
     
      
    </ContainerSlider>
    <ContainerSales>
      
    </ContainerSales>
   

     
    </>
  )
}

export default Home
