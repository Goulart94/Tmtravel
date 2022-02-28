

import Header from '../components/Header';
import {ThemeLigthGlobal} from '../styles/global';
import {ThemeProvider} from 'styled-components';
import ligth from '../styles/theme/ligth';
import styled from 'styled-components';

export const ContainerFont = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Praise&display=swap');

font: 400 1rem "Praise", sans-serif;

`



function MyApp({ Component, pageProps }:any) {
  return(
 <ThemeProvider theme={ligth}>
 <ContainerFont>
  <Header></Header>
  <Component {...pageProps} /> 
  <ThemeLigthGlobal/>
  </ContainerFont>
 </ThemeProvider>
  ) 
  

}

export default MyApp
