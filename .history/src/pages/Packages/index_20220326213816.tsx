
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
  const pack = contentSaleOne.map(p =>{return p.image});
  

  return (
    <>
    <ContainerImage/>
    <h1>Pacotes</h1>
    <ContainerPackages>
      
      <PackagesSection>
        {pack}
   
        
      </PackagesSection>

    </ContainerPackages>
    
    </>
  )
}

