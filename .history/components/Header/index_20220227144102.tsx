import React, { useState } from 'react';

import { HeaderContainer, MenuDiv } from './style';
import {GiHamburgerMenu} from 'react-icons/gi';
import {GrClose} from 'react-icons/gr';






export default function Header()  {
 
    const[nav, setNav] =useState(false);
    
if(nav === false){
return  (
     <>
        <MenuDiv >
            <GiHamburgerMenu onClick={()=> setNav(true)} className='icon'>

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
