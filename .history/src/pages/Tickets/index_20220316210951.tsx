import React from 'react'
import { ContainerTickets, ContentTickets, ContainerImage, ContentChange } from '../../styles/componetsStyles/tickets'

export default function Tickets() {
  return (
   
   <>
   <ContainerImage></ContainerImage>
   <ContainerTickets>
   <ContentChange>

   </ContentChange>
   <div>
      <ContentTickets>
       <div className='ticket'> 
         <div className='ticketFly'>

         </div>
         <div className='ticketPrice' >

         </div> 
        
        </div>
      </ContentTickets>

      <ContentTickets>
       <div className='ticket'> 
         <div className='ticketFly'>

         </div>
         <div className='ticketPrice' >

         </div> 
        
        </div>
      </ContentTickets>

      <ContentTickets>
       <div className='ticket'> 
         <div className='ticketFly'>

         </div>
         <div className='ticketPrice' >

         </div> 
        
        </div>
      </ContentTickets>

      <ContentTickets>
       <div className='ticket'> 
         <div className='ticketFly'>

         </div>
         <div className='ticketPrice' >

         </div> 
        
        </div>
      </ContentTickets>
      </div>
      
     
    </ContainerTickets>
    
    </>
    )
}
