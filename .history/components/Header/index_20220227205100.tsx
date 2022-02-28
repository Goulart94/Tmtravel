import React, { useState } from 'react';

import { Conatainer, ContentImg, ContentNav, HeaderContainer, MenuDiv } from './style';
import {GiHamburgerMenu} from 'react-icons/gi';
import {CgCloseO} from 'react-icons/cg';
import {ImAirplane, ImHome3} from 'react-icons/im';
import {MdAirlineSeatIndividualSuite} from 'react-icons/md';
import {FaSuitcase} from 'react-icons/fa'






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
                  <a className='active' ><ImHome3 fontSize={'1.3rem'}/> Home</a>
                  <a><ImAirplane fontSize={'1rem'}/>  Passagens</a>
                  <a><MdAirlineSeatIndividualSuite className='iconBed'/> Pacotes</a>
                  <a >Seguros</a>
                  <a >Contatos</a>
               </nav>
            </ContentNav>


         </Conatainer> 
         
        </HeaderContainer>
        

      )

   }

}
