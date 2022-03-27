
import { GetStaticProps } from 'next';
import { RichText } from 'prismic-dom';
import React from 'react';
import { getPlismicClient } from '../../../services/prismic';
import { ContainerPackages, ContainerImage, PackagesSection } from '../../styles/componetsStyles/packages';
import Prismic from "@prismicio/client";

interface ContentSale{
  slug: string;
  title: string;
  price: string;
  image: string;
}

interface ContentOne{
  
  contentSaleOne : ContentSale[]
}


export default function Packages( {contentSaleOne} : ContentOne) {

console.log(contentSaleOne)
  
 

  return (
    <>
    <ContainerImage/>
    <h1>Pacotes</h1>
    <ContainerPackages>
      
      <PackagesSection>
        
       
        
      </PackagesSection>

    </ContainerPackages>
    
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
     props:{contentSaleOne},revalidate: 60 * 60 * 8//8hrs
  }
   
  
}

