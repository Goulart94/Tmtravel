import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { CgCloseO } from 'react-icons/cg';
import { FaSuitcase } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImAirplane, ImHome3, ImPhone } from 'react-icons/im';
import { MdAirlineSeatIndividualSuite } from 'react-icons/md';

import { Conatainer, ContentImg, ContentNav, HeaderContainer, MenuDiv } from './style';






export default function Header()  {
 
    const[nav, setNav] =useState(false);

    const {asPath} = useRouter();
    
if(nav === false){
return  (
    
        <MenuDiv >
            
            <div className='Container'>
               <div onClick={()=> setNav(true)} >
                  <label ><GiHamburgerMenu className='icon'/>Menu</label>
               </div>
                 <img src='../../images/logo.png' alt="logo" className='configImg'/>
               </div>  
        </MenuDiv>   

   )}
else{
return (
 
        <HeaderContainer>
            
         <Conatainer>
           
            <ContentImg>
               <CgCloseO onClick={()=> setNav(false)} className='iconClose'/>
               <img src='../../images/logo.png' alt="logo" />
            </ContentImg>
            <ContentNav>
               <nav>
                  <Link href='./'><a className={asPath === '/' ? 'active' : ''}><ImHome3 fontSize={'1.3rem'}/> Home</a></Link>
                  <Link href="./Tickets"><a className={asPath === '/Tickets' ? 'active' : ''}><ImAirplane fontSize={'1rem'}/> Passagens</a></Link>
                  <Link href='./Packages'><a className={asPath === '/Packages' ? 'active' : ''}><MdAirlineSeatIndividualSuite className='iconBed'/> Pacotes</a></Link>
                  <Link href='./Insurance'><a className={asPath === '/Insurance' ? 'active' : ''}><FaSuitcase fontSize={'1.1rem'}/> Seguros</a></Link>
                  <Link href='./Contact'><a className={asPath === '/Contact' ? 'active' : ''}><ImPhone fontSize={'1.2rem'}/> Contatos</a></Link>
               </nav>
            </ContentNav>


         </Conatainer> 
         
        </HeaderContainer>
        

      )

   }

}
