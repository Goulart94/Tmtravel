import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { getPlismicClient } from '../../services/prismic'
import ContainerSales from '../components/ContainerSales'
import { SlederShow } from '../components/SliderShow'
import { ContainerSlider } from '../styles/componetsStyles/home';
import Prismic from "@prismicio/client";
import {RichText} from 'prismic-dom';
import Loading from '../components/screenLoading'

interface ContentSale{
  slug: string;
  title: string;
  price: string;
  image: string;
}

interface ContentOne{
  
  contentSaleOne : ContentSale[]
}



export default function  Home  ( {contentSaleOne} : ContentOne ){
 

  return (
    <>
      <Head>
        <title>TmTravel | Home</title>
      </Head>
    <ContainerSlider>
      <SlederShow/>
    </ContainerSlider>


  <ContainerSales contentSaleOne={contentSaleOne.map(p => {
    return p
  })} />

   
    </>
  )
}
export const getStaticProps : GetStaticProps = async () => {

  const prismic = getPlismicClient();

  const response = await prismic.query<any>(
     [Prismic.Predicates.at('document.type','saleone')],{
       fetch: ['saleone.image','saleone.title', 'saleone.price', ]
     }

     );

    const contentSaleOne = response.results.map( contentSale  =>{
      return{
        slug: contentSale.uid || null,
        title: RichText.asText(contentSale.data.title) || null,
        price: RichText.asText(contentSale.data.price) || null,
        image: contentSale.data.image.url || null,
        
      };
    });

  return{
     props:{contentSaleOne},revalidate: 60 * 60 * 8//24hrs
  }
   
  
}



