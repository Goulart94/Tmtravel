import React, { useState } from 'react';

import { HeaderContainer, MenuDiv } from './style';
import {GiHamburgerMenu} from 'react-icons/gi';






export default function Header()  {
 
    const[nav, setNav] =useState(false);
    
if(nav === false){
return  (
     <>
        <MenuDiv onClick={()=> setNav(true)}>
            <GiHamburgerMenu >

            </GiHamburgerMenu>
        </MenuDiv>   
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
