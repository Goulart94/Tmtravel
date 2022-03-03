import React from 'react'
import { Button, Container, ContentSale, Title } from './style';


export default function ContainerSales() {
  return (
   <> 
    <Title>Produtos <span>Especiais</span> </Title>
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
       <ContentSale>
          <div>
           <img src='/images/cardRecife.png' alt="" />
          </div>
          <h1>Porto-PT</h1>
          <h3>Desde R$3,599</h3>
          <Button>Ver oferta</Button>
       </ContentSale>
       <ContentSale>
          <div>
           <img src='/images/cardRio.jpg' alt="" />
          </div>
          <h1>Paris-FR</h1>
          <h3>Desde R$3,790</h3>
          <Button>Ver oferta</Button>
       </ContentSale>
       <ContentSale>
          <div>
           <img src='/images/cardFernado.jpg' alt="" />
          </div>
          <h1>Madrid-ES</h1>
          <h3>Desde R$3,999</h3>        
          <Button>Ver oferta</Button>
          
       </ContentSale>
    </Container>
  </>
  )
}
