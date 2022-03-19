import React from 'react'
import { ContainerTickets, ContentTickets, ContainerImage, ContentChange } from '../../styles/componetsStyles/tickets';
import {GiAirplaneDeparture, GiRollingSuitcase, GiAirplaneArrival} from 'react-icons/gi';
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
            <div className='details'>
              <div>
                <h2><GiAirplaneDeparture className='iconsAirPlane'/>Ida</h2>
                 <span>7 de junho 2022</span>
              </div>
              <div className='ContentCenter'>
                <div>
                <h3 >Rio de Janeiro-br</h2> 
                
                </div>
                 <div>
                  <span>4h 10min</span>
                  <hr />
                  <span>voo direto</span>
                </div>
                <div>
                <h2></h2> 
                <div className='airPoint'><span className='jss2706 MuiTypography-caption-2458'>Comodoro Arturo Merino Benítez, Santiago</span></div>
                </div>
              </div>
              <div>
              
              <span><GiRollingSuitcase className='iconSuitCase'/><br/>Bagagem de mão</span>
              </div>

            </div>

            <div className='details'>
            <div>
                <h2><GiAirplaneArrival className='iconsAirPlane'/>Volta</h2>
                 <span>sex, 11 de Nov</span>
              </div>
              <div className='ContentCenter'>
                <div>
                <h2 >SCL 15:20</h2> 
                <div className='airPoint'><span>Guarulhos, São Paulo</span></div>
                </div>
                 <div>
                  <span>4h 10min</span>
                  <hr />
                  <span>voo direto</span>
                </div>
                <div>
                <h2>GRU 19:30</h2> 
                <div className='airPoint'><span className='jss2706 MuiTypography-caption-2458'>Comodoro Arturo Merino Benítez, Santiago</span></div>
                </div>
              </div>
              <div>
              
              <span><GiRollingSuitcase className='iconSuitCase'/><br/>Bagagem de mão</span>
              </div>


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
