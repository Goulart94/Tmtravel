import styled, { ThemeProvider } from 'styled-components';
import Router from 'next/router';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { ThemeLigthGlobal } from '../styles/global';
import ligth from '../styles/theme/ligth';



export const ContainerFont = styled.div`
@import url('"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"');

font: 400 1rem "Roboto", sans-serif;


`



function MyApp({ Component, pageProps }:any) {

  Router.events.on('routeChangeStart', ()=>{
    console.log("router is changing...")
  });
  Router.events.on('routeChangeComplete', ()=>{
    console.log("new router")
  });

  return(
 <ThemeProvider theme={ligth}>

 <ContainerFont>
  <Header></Header>
  
  <Component {...pageProps} /> 
  <ThemeLigthGlobal/>
  
  <Footer></Footer>
  </ContainerFont>
 
  
 </ThemeProvider>
  ) 
  

}

export default MyApp
