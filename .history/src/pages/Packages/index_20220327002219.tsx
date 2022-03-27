
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
          A Índia é um extenso país do Sul da Ásia com geografia diversificada, incluindo desde os picos do Himalaia até a costa do Oceano Índico, e uma história que remonta a cinco milênios. No norte, alguns dos monumentos do império mogol são o complexo do Forte Vermelho, em Délhi, e a imponente mesquita Jama Masjid, bem como o clássico mausoléu Taj Mahal, em Agra. Os peregrinos tomam banho no Ganges, em Varanasi. Rishikesh é um centro de ioga que serve de base para trilhas no Himalaia.
        
         </p>
         <h2>{sale1?.title}</h2>
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

