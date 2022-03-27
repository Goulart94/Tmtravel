
import React from 'react';
import { ContainerPackages, ContainerImage, PackagesSection } from '../../styles/componetsStyles/packages';

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
    <h1>Pacotes</h1>
    <ContainerPackages>
      
      <PackagesSection>
        {sale1?.image}
   
        
      </PackagesSection>

    </ContainerPackages>
    
    </>
  )
}

