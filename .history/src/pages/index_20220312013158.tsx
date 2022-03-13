import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { getPlismicClient } from '../../services/prismic'
import ContainerSales from '../components/ContainerSales'
import Footer from '../components/Footer'
import { SlederShow } from '../components/SliderShow'
import { ContainerSlider } from '../styles/componetsStyles/home';
import Prismic from "@prismicio/client";
import {RichText} from 'prismic-dom';

interface ContentSale {
  slug: string;
  title: string;
  price: string;
};










const Home = ( contentSaleOne: ContentSale ) => {
  return (
    <>
      <Head>
        <title>TmTravel | Home</title>

      </Head>
    <ContainerSlider>
      <SlederShow/>
    </ContainerSlider>

    <ContainerSales/>

    <h1>{contentSaleOne.title}</h1>

    <Footer/>
    


    
    
     
    </>
  )
}

export default Home

export const getStaticProps : GetStaticProps = async () => {

  const prismic = getPlismicClient();

  const response = await prismic.query<any>(
     [Prismic.predicates.at('document.type','saleone')]
     );

     console.log(JSON.stringify(response, null, 2))

    const contentSaleOne = response.results.map( contentSale  =>{
      return{
        slug: contentSale.uid,
        title: RichText.asText(contentSale.data.title),
        price: RichText.asText(contentSale.data.price)
      

      };
    });

  return{
     props:{contentSaleOne}
  }
  
}
