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
       </ContentSale>
       <ContentSale>
          <div>
           <img src='/images/cardParis.jpg' alt="" />
          </div>
       </ContentSale>
       <ContentSale>
          <div>
           <img src='/images/cardMadrid.jpg' alt="" />
          </div>
          <h1>Paris-França</h1>
          <h2>Desde R$3,600</h2>
       </ContentSale>
    </Container>
  )
}
