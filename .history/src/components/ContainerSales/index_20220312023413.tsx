import { GetStaticProps } from 'next';
import React from 'react'
import { getPlismicClient } from '../../../services/prismic';
import { Button, Container, ContentSale, Title } from './style';
import Prismic from "@prismicio/client";

interface prismic {
   slug: string;
   title: string;
   price: string;
 };
 

export default function ContainerSales(  title: string ) {
  return (
   <> 
    <Title>Produtos <span>Especiais</span> Europa </Title>
    <Container>
     
       <ContentSale>
          <div>
           <img src='/images/cardPorto.jpg' alt="" />
          </div>
          <h1>Porto-PT</h1>
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
export const getStaticProps : GetStaticProps = async () => {

   const prismic = getPlismicClient();

   const response = await prismic.query(
      [Prismic.predicates.at('document.type','saleone')], {
         fetch: ['saleone.title'],
 
       }
      );

      console.log(response);

   return{
      props:{}
   }
   
}