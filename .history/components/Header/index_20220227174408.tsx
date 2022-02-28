import React, { useState } from 'react';

import { HeaderContainer, MenuDiv } from './style';
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
           <CgCloseO onClick={()=> setNav(false)} className='iconClose'/>
         <div className='ContainerImg'>
            <img src='../../images/logo.png' alt="" />
         </div> 
         <nav>
            <a>Home</a>
            <a>Dicas</a>
            <a>Contatos</a>
         </nav>
        </HeaderContainer>
        

      )

   }

}
