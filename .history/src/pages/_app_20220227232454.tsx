

import Header from '../components/Header';
import {ThemeLigthGlobal} from '../styles/global';
import {ThemeProvider} from 'styled-components';
import ligth from '../styles/theme/ligth';

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
