
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { GlobalStyle } from '../styles/global.style';
import {ThemeProvider} from 'styled-components';
import ligth from '../styles/theme/ligth'

function MyApp({ Component, pageProps }: AppProps) {
  return(
 <ThemeProvider theme={ligth}>
  <GlobalStyle/>
  <Header></Header>
  <Component {...pageProps} />
 </ThemeProvider>
  ) 
  

}

export default MyApp
