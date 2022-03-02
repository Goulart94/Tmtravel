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
       <ContentSale></ContentSale>
       <ContentSale></ContentSale>
    </Container>
  )
}
