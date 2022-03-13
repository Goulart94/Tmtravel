import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { getPlismicClient } from '../../services/prismic'
import ContainerSales from '../components/ContainerSales'
import Footer from '../components/Footer'
import { SlederShow } from '../components/SliderShow'
import { ContainerSlider } from '../styles/componetsStyles/home';
import Prismic from "@prismicio/client";
import { json } from 'stream/consumers'








const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TmTravel | Home</title>

      </Head>
    <ContainerSlider>
      <SlederShow/>
    </ContainerSlider>

    <ContainerSales/>

    <Footer/>
    


    
    
     
    </>
  )
}

export default Home

export const getStaticProps : GetStaticProps = async () => {

  const prismic = getPlismicClient();

  const response = await prismic.query(
     [Prismic.predicates.at('document.type','saleone')]
     );

   
    

  return{
     props:{}
  }
  
}
