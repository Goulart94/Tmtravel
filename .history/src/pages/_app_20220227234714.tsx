

import Header from '../components/Header';
import {ThemeLigthGlobal} from '../styles/global';
import {ThemeProvider} from 'styled-components';
import ligth from '../styles/theme/ligth';
import styled from 'styled-components';






function MyApp({ Component, pageProps }:any) {
  return(
 <ThemeProvider theme={ligth}>
  <ThemeLigthGlobal/>
  <Header></Header>
  <Component {...pageProps} /> 
  
 

 </ThemeProvider>
  ) 
  

}

export default MyApp
