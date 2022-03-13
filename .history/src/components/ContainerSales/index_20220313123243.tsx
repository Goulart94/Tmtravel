
import React from 'react'
import { Button, Container, ContentSale, Title } from './style';




type ContentSale = {
   slug: string;
   title: string;
   price: string;
   image: string;
 };
 
 interface ContentOne{
   
   contentSaleOne : ContentSale[]
 }
export default function ContainerSales( {contentSaleOne} : ContentOne) {

 
  return (
   <> 
    <Title>Produtos <span>Especiais</span> Europa </Title>
    <Container>
       
     
       <ContentSale>
          <div>
           <img src='/images/cardPorto.jpg' alt="" />
          </div>
          <h1>{contentSaleOne[1].title}</h1>
          <h3>Desde R$3,599</h3>
          <Button>Ver oferta</Button>
       </ContentSale>
       <ContentSale>
          <div>
           <img src='/images/cardParis.jpg' alt="" />
          </div>
          <h1>Paris-FR</h1>
          <h3>Desde R$3,790</h3>
          <Button>Ver oferta</Button>
       </ContentSale>
       <ContentSale>
          <div>
           <img src='/images/cardMadrid.jpg' alt="" />
          </div>
          <h1>Madrid-ES</h1>
          <h3>Desde R$3,999</h3>        
          <Button>Ver oferta</Button>
          
       </ContentSale>
      
       
    </Container>
    <Title>Produtos <span>Especiais</span> Brasil </Title>

    <Container>
       <ContentSale>
          <div>
           <img src='/images/cardRecife.png' alt="" />
          </div>
          <h1>Recife-BR</h1>
          <h3>Desde R$2,599</h3>
          <Button>Ver oferta</Button>
       </ContentSale>
       <ContentSale>
          <div>
           <img src='/images/cardRio.jpg' alt="" />
          </div>
          <h1>Rio de Janeiro-BR</h1>
          <h3>Desde R$1,790</h3>
          <Button>Ver oferta</Button>
       </ContentSale>
       <ContentSale>
          <div>
           <img src='/images/cardFernado.jpg' alt="" />
          </div>
          <h1>Fernando de Noronha-BR</h1>
          <h3>Desde R$4,190</h3>        
          <Button>Ver oferta</Button>
          
       </ContentSale>
    </Container>
  </>
  )
}