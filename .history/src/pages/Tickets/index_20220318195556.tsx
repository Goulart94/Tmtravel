import React from 'react'
import { ContainerTickets, ContentTickets, ContainerImage, ContentChange } from '../../styles/componetsStyles/tickets';
import {GiAirplaneDeparture} from 'react-icons/gi';
export default function Tickets() {
  return (
   
   <>
   <ContainerImage></ContainerImage>
   <ContainerTickets>
   <ContentChange>
         <div className='content'>

         </div>
   </ContentChange>
   <div className='divContainer'>
      <ContentTickets>
       <div className='ticket'> 
         <div className='ticketFly'>
            <div className='detailsUp'>
              <div>
                <h2><GiAirplaneDeparture className='iconsAirPlane'/>Ida</h2>
                 <span>7 de junho 2022</span>
              </div>
              <div>
                <div>
                <h2>GRU 22:15</h2> 
                <span>Guarulhos, São Paulo</span>
                </div>
                <span>_________</span>
                <div>
                <h2>GRU 22:15</h2> 
                <span>Guarulhos, São Paulo</span>
                </div>
              </div>
              <div>

              </div>

            </div>
            <div className='detailsDow'>

            </div>

         </div>
         <div className='ticketPrice' >
            
         </div> 
        
        </div>
      </ContentTickets>

      <ContentTickets>
       <div className='ticket'> 
          <div className='ticketFly'>
         
          <div className='detailsUp'>

          </div>

          <div className='detailsDow'>

          </div> 

         </div>
         <div className='ticketPrice' >

         </div> 
        
        </div>
      </ContentTickets>

      <ContentTickets>
      <div className='ticket'> 
          <div className='ticketFly'>
         
          <div className='detailsUp'>

          </div>

          <div className='detailsDow'>

          </div> 
          
         </div>
         <div className='ticketPrice' >

         </div> 
        
        </div>
      </ContentTickets>

      <ContentTickets>
      <div className='ticket'> 
          <div className='ticketFly'>
         
          <div className='detailsUp'>

          </div>

          <div className='detailsDow'>

          </div> 
          
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
