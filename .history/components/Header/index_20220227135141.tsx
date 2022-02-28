import React, { useState } from 'react'
import { HeaderContainer } from './style';

export default function Header() {

    const[nav, setNav] =useState(false);

return nav=== false ? (
     <>
        <HeaderContainer>
        
        </HeaderContainer>   
     </>  
   ):
(
    <h1>helo</h1>
)
}
