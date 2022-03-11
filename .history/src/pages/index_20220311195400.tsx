import type { NextPage } from 'next'
import Head from 'next/head'
import { MdEditAttributes } from 'react-icons/md'
import ContainerSales from '../components/ContainerSales'
import Footer from '../components/Footer'
import { SlederShow } from '../components/SliderShow'
import { ContainerSlider } from '../styles/componetsStyles/home'



interface Props {
  content: { attributes: HomeAttributes };
}

interface HomeAttributes{
  title:string;
date:string;

cats: string;
  description: string;
  name: string;
 
}


const Home: NextPage<Props> = ({content}) => {
  const { attributes } = content;
  return (
    <>
      <Head>
        <title>content.}</title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
    <ContainerSlider>
      <SlederShow/>
    </ContainerSlider>

    <ContainerSales/>

    <Footer/>


    
    
     
    </>
  )
}

export default Home
