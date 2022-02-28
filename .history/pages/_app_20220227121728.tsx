
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { GlobalStyle } from '../styles/global.style'

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <>
  <GlobalStyle/>
  <Header></Header>
  <Component {...pageProps} />
  </>
  ) 
  

}

export default MyApp
