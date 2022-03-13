import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { getPlismicClient } from '../../services/prismic'
import ContainerSales from '../components/ContainerSales'
import Footer from '../components/Footer'
import { SlederShow } from '../components/SliderShow'
import { ContainerSlider } from '../styles/componetsStyles/home';
import Prismic from "@prismicio/client";
import {RichText} from 'prismic-dom';

type ContentSale = {
  slug: string;
  title: string;
  price: string;
};

interface ContentOne{
  
  contentSaleOne : ContentSale[]
}










export default function  Home  ( {contentSaleOne} : ContentOne ){
  console.log(contentSaleOne)
  return (
    <>
      <Head>
        <title>TmTravel | Home</title>

      </Head>
    <ContainerSlider>
      <SlederShow/>
    </ContainerSlider>


  <ContainerSales title = {contentSaleOne[0].price}/>

    
  
    

    <Footer/>
   


    
    
     
    </>
  )
}



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
