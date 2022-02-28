import Document, {Html, Head, Main, NextScript} from "next/document"

export default class MyDocument extends Document{
    
    render(){
        return(
           <Html>

               <Head>

                   <link rel="preconnect" href="https://fonts.googleapis.com"/> 
                   <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" rel="stylesheet"/>

                   <title>Ig.News</title>
               </Head>
               <body>
                   <Main/>
                   <NextScript/>
               </body>
           
           
           </Html>

        
        )
    }
}
