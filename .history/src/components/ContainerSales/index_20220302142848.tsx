import React from 'react'
import { Container, ContentSale } from './style';
import cardPorto from '../../../public/images/cardPorto.jpg';

export default function ContainerSales() {
  return (
    <Container>
       <ContentSale>
          <div>
           <img src='/images/cardPorto.jpg' alt="" />
          </div>
          <h1>Porto-PT</h1>
          <h3>Desde R$3,599</h3>
       </ContentSale>
       <ContentSale>
          <div>
           <img src='/images/cardParis.jpg' alt="" />
          </div>
          <h1>Paris-FR</h1>
          <h3>Desde R$3,790</h3>
       </ContentSale>
       <ContentSale>
          <div>
           <img src='/images/cardMadrid.jpg' alt="" />
          </div>
          <h1>Madrid-ES</h1>
          <h3>Desde R$3,999</h3>
       </ContentSale>
    </Container>
  )
}
