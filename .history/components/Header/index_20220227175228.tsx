import React, { useState } from 'react';

import { Conatainer, ContentImg, HeaderContainer, MenuDiv } from './style';
import {GiHamburgerMenu} from 'react-icons/gi';
import {CgCloseO} from 'react-icons/cg';
import logo from '../../public/images/logo.png';






export default function Header()  {
 
    const[nav, setNav] =useState(false);
    
if(nav === false){
return  (
     <>
        <MenuDiv >
            <GiHamburgerMenu onClick={()=> setNav(true)} className='icon'/>
        </MenuDiv>   
     </>  
   )}
else{
return (
 
        <HeaderContainer>
           
         <Conatainer>
            <CgCloseO onClick={()=> setNav(false)} className='iconClose'/>
            <ContentImg>
               <img src='../../images/logo.png' alt="" />
            </ContentImg>
            


   
         </Conatainer> 
         
        </HeaderContainer>
        

      )

   }

}
