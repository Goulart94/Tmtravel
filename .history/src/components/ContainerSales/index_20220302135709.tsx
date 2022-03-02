import React from 'react'
import { Container, ContentSale } from './style';
import cardPorto from '../../../public/images/cardPorto.jpg';

export default function ContainerSales() {
  return (
    <Container>
       <ContentSale>
         
           <img src= '../../../public/images/cardPorto.jpg' alt="" />
        
       </ContentSale>
       <ContentSale></ContentSale>
       <ContentSale></ContentSale>
    </Container>
  )
}
