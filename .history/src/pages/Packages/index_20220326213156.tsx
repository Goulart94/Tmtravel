import { GetStaticProps } from 'next';
import { RichText } from 'prismic-dom';
import React from 'react'
import { getPlismicClient } from '../../../services/prismic';
import { ContainerPackages, ContainerImage, PackagesSection } from '../../styles/componetsStyles/packages'

export default function Packages() {
  return (
    <>
    <ContainerImage/>
    <h1>Pacotes</h1>
    <ContainerPackages>
      
      <PackagesSection>
        
      </PackagesSection>

    </ContainerPackages>
    
    </>
  )
}

