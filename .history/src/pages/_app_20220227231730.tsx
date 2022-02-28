
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import {ThemeLigthGlobal} from '../styles/global';
import {ThemeProvider} from 'styled-components';
import ligth from '../styles/theme/ligth';
import { Head } from 'next/document';

function MyApp({ Component, pageProps }:any) {
  return(
 <ThemeProvider theme={ligth}>
    <Head>

     <link rel="preconnect" href="https://fonts.googleapis.com"/> 
     <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"/>
     <title>Ig.News</title>
    </Head>
 
  <Header></Header>
  <Component {...pageProps} /> 
  <ThemeLigthGlobal/>
 </ThemeProvider>
  ) 
  

}

export default MyApp
