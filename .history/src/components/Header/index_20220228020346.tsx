import React, { useState } from 'react';
import { CgCloseO } from 'react-icons/cg';
import { FaSuitcase } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImAirplane, ImHome3, ImPhone } from 'react-icons/im';
import { MdAirlineSeatIndividualSuite } from 'react-icons/md';

import { Conatainer, ContentImg, ContentNav, HeaderContainer, MenuDiv } from './style';






export default function Header()  {
 
    const[nav, setNav] =useState(false);
    
if(nav === false){
return  (
     <>
        <MenuDiv >
            <GiHamburgerMenu onClick={()=> setNav(true)} className='icon'/><span> Menu</span>
            <Conatainer><ContentImg>
              
               <img src='../../images/logo.png' alt="logo" />
            </ContentImg>
            </Conatainer>
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
                  <a ><FaSuitcase fontSize={'1.1rem'}/> Seguros</a>
                  <a><ImPhone fontSize={'1.2rem'}/> Contatos</a>
               </nav>
            </ContentNav>


         </Conatainer> 
         
        </HeaderContainer>
        

      )

   }

}
