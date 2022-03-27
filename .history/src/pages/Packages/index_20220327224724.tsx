
import { GetStaticProps } from 'next';
import { RichText } from 'prismic-dom';
import React from 'react';
import { getPlismicClient } from '../../../services/prismic';
import { ContainerImage, PackagesSection, Title, Button} from '../../styles/componetsStyles/packages';
import Prismic from "@prismicio/client";

interface ContentSale{
  slug: string;
  title: string;
  price: string;
  image: string;
  details: string;
}

interface ContentOne{
  
  contentSaleOne : ContentSale[]
}


export default function Packages( {contentSaleOne} : ContentOne) {

  const sale1 = contentSaleOne.find(e => e.slug === 'card1');
  const sale2 = contentSaleOne.find(e => e.slug === 'card2');
  const sale3 = contentSaleOne.find(e => e.slug === 'card3');
  const sale4 = contentSaleOne.find(e => e.slug === 'card4');
  const sale5 = contentSaleOne.find(e => e.slug === 'card5');
  const sale6 = contentSaleOne.find(e => e.slug === 'card6');
  
 

  return (
    <>
    <ContainerImage/>
    <Title>Pacotes</Title>
    
    <PackagesSection>
      <div>
        <img src={sale1?.image} alt="" />
      </div>
      <div className='ContainerText'>
       <div>
         <p>
          {sale1?.details}
         </p>
         <h2>{sale1?.title}</h2>
         <h3><span className='spanPrice'>Desde </span>R$: {sale1?.price}</h3>
         <span>Estadia 7 noites hotel + Vooo</span><br />
         <span>*preço por passageiro</span>
       </div> 

        <Button>Entre em contato</Button>
        
      </div>

    </PackagesSection>


    
    </>
  )
}


export const getStaticProps : GetStaticProps = async () => {

  const prismic = getPlismicClient();

  const response = await prismic.query<any>(
    [Prismic.Predicates.at('document.type','saleone')],{
      fetch: ['saleone.image','saleone.title', 'saleone.price', 'saleone.details' ]
    }


     );

    const contentSaleOne = response.results.map( contentSale  =>{
      return{
        slug: contentSale.uid || null,
        title: RichText.asText(contentSale.data.title) || null,
        price: RichText.asText(contentSale.data.price) || null,
        image: contentSale.data.image.url || null,
        details: contentSale.data.details || null,
        
      };
    });

  return{
     props:{contentSaleOne},revalidate: 60 * 60 * 8//8hrs
  }
   
  
}

