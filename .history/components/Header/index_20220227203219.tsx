import React, { useState } from 'react';

import { Conatainer, ContentImg, ContentNav, HeaderContainer, MenuDiv } from './style';
import {GiHamburgerMenu} from 'react-icons/gi';
import {CgCloseO} from 'react-icons/cg';
import {IoIosAirplane} from 'react-icons/io';






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
         <Conatainer>
            
            <ContentImg>
              
               <img src='../../images/logo.png' alt="logo" />
            </ContentImg>
            <ContentNav>
               <nav>
                  <a className='active' >Home</a>
                  <a >Passagens</a>
                  <a>Pacotes</a>
                  <a >Seguros</a>
                  <a >Contatos</a>
               </nav>
            </ContentNav>


         </Conatainer> 
         
        </HeaderContainer>
        

      )

   }

}
