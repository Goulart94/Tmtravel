
import React from 'react'
import { Button, Container, ContentSale, Title } from './style';




interface ContentSale{
   slug: string;
   title: string;
   price: string;
   image: string;
  
 };
 
 interface ContentOne{
   
   contentSaleOne : ContentSale[]
 }
export default function ContainerSales( {contentSaleOne} : ContentOne) {



 const sale1 = contentSaleOne.find(e => e.slug === 'card1');
 const sale2 = contentSaleOne.find(e => e.slug === 'card2');
 const sale3 = contentSaleOne.find(e => e.slug === 'card3');
 const sale4 = contentSaleOne.find(e => e.slug === 'card4');
 const sale5 = contentSaleOne.find(e => e.slug === 'card5');
 const sale6 = contentSaleOne.find(e => e.slug === 'card6');


  return (
   <> 
    <Title>Produtos <span>Especiais</span> Europa </Title>
    <Container>
       
     
       <ContentSale>
          <div>
           <img src={sale1?.image} alt="" />
          </div>
          <span className='title'>{sale1?.title}</span>
          <span className='price'>Desde R$: {sale1?.price}</span>
          <Button>Ver oferta</Button>
       </ContentSale>
       <ContentSale>
          <div>
           <img src={sale2?.image} alt="" />
          </div>
          <h1>{sale2?.title}</h1>
          <h3>Desde R$: {sale2?.price}</h3>
          <Button>Ver oferta</Button>
       </ContentSale>
       <ContentSale>
          <div>
           <img src={sale3?.image} alt="" />
          </div>
          <h1>{sale3?.title} </h1>
          <h3>Desde R$: {sale3?.price} </h3>        
          <Button>Ver oferta</Button>
          
       </ContentSale>
      
       
    </Container>
    <Title>Produtos <span>Especiais</span> Brasil </Title>

    <Container>
       <ContentSale>
          <div>
           <img src={sale4?.image} alt="" />
          </div>
          <h1>{sale4?.title}</h1>
          <h3>Desde R$: {sale4?.price}</h3>
          <Button>Ver oferta</Button>
       </ContentSale>
       <ContentSale>
          <div>
           <img src={sale5?.image} alt="" />
          </div>
          <h1>{sale5?.title}</h1>
          <h3>Desde R$: {sale5?.price}</h3>
          <Button>Ver oferta</Button>
       </ContentSale>
       <ContentSale>
          <div>
           <img src={sale6?.image} alt="" />
          </div>
          <h1>{sale6?.title}</h1>
          <h3>Desde R$: {sale6?.price}</h3>        
          <Button>Ver oferta</Button>
          
       </ContentSale>
    </Container>
  </>
  )
}
