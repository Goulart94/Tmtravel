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
  image: string;
};

interface ContentOne{
  
  contentSaleOne : ContentSale[]
}



export default function  Home  ( {contentSaleOne} : ContentOne ){
 
 
  console.log(contentSaleOne.map(props=>{
     return props
  }));

  contentSaleOne.map(props =>{
    const sales = props
  });



  return (
    <>
      <Head>
        <title>TmTravel | Home</title>

      </Head>
    <ContainerSlider>
      <SlederShow/>
    </ContainerSlider>


  <ContainerSales />

  <Footer/>
   


    
    
     
    </>
  )
}




