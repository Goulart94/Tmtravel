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
         <div className='.ContainerImg'>
            <CgCloseO onClick={()=> setNav(false)} className='iconClose'/>
            <img src='../../images/logo.png' alt="" />
         </div> 
        </HeaderContainer>
        

      )

   }

}
