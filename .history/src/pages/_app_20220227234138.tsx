

import Header from '../components/Header';
import {ThemeLigthGlobal} from '../styles/global';
import {ThemeProvider} from 'styled-components';
import ligth from '../styles/theme/ligth';
import styled from 'styled-components';

export const ContainerFont = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Praise&display=swap');

font-family: 'Praise', sans-serif;

`



function MyApp({ Component, pageProps }:any) {
  return(
 <ThemeProvider theme={ligth}>
 
  <Header></Header>
  <Component {...pageProps} /> 
  <ThemeLigthGlobal/>
 </ThemeProvider>
  ) 
  

}

export default MyApp
