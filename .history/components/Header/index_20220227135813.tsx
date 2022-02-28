import React, { useState } from 'react'
import { HeaderContainer } from './style';





export default function Header()  {
 
    const[nav, setNav] =useState(false);
    
if(nav === false){
return  (
     <>
        <HeaderContainer>
        
        </HeaderContainer>   
     </>  
   )}
else{
return (
     <>
         <HeaderContainer>
           
        </HeaderContainer>   
    </>  
      )

   }

}
