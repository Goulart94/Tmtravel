import React from 'react'
import { Container, ContentSale } from './style'

export default function ContainerSales() {
  return (
    <Container>
       <ContentSale>
         <div>
           <img src="../../../public/images/cardPorto.jpg" alt="" />
         </div>
       </ContentSale>
       <ContentSale></ContentSale>
       <ContentSale></ContentSale>
    </Container>
  )
}
