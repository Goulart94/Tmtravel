import React, { useState } from 'react';

import { HeaderContainer } from './style';
import {GiHamburgerMenu} from 'react-icons/gi';






export default function Header()  {
 
    const[nav, setNav] =useState(false);
    
if(nav === false){
return  (
     <>
        <div onChange={()=> setNav(true)}>
            <GiHamburgerMenu >

            </GiHamburgerMenu>
        </div>   
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
