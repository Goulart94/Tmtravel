import React, { useEffect, useState } from 'react'
import { ContainerTickets, ContentTickets, ContainerImage, ContentChange, Button, Title } from '../../styles/componetsStyles/tickets';
import {GiAirplaneDeparture, GiRollingSuitcase, GiAirplaneArrival} from 'react-icons/gi';
import { currency } from '../../../services/currency';
import { Value } from 'sass';


interface currencyProps 
{
  EURBRL:
  {code:string;
  codein:string;
  name:string;
  high:string;
  low:string;
  varBid:string;
  pctChange:string;
  bid:string;
  ask:string;
  timestamp:string;
  create_date:string;
}
  USDBRL:
  {code:string;
    codein:string;
    name:string;
    high:string;
    low:string;
    varBid:string;
    pctChange:string;
    bid:string;
    ask:string;
    timestamp:string;
    create_date:string;
  } 

}


export default function Tickets() {

  const[currencyValue, setCurrencyValue]=useState<currencyProps>()

  useEffect(()=>{
   
      async function loadCoin(){
       try{
        const response = await currency.get('/')
       .then( response => {return setCurrencyValue(response.data)})
       }catch(err){
        console.log(err)
       }
    }
 
  
    loadCoin()
  },[]);

   console.log(currencyValue?.EURBRL);

   
  return (
   
   <>
   <ContainerImage></ContainerImage>
   <Title>Promoções</Title> 
   <ContainerTickets>
  
   <ContentChange> 
      <div className='container'>
          <div className='content'>
            <h2> Euro e Dolar hoje</h2> 
            <div className='contentCoin'>
              <div className='Coin'><label  > 1 Dólar</label></div>
              <div className='currencyValue' ><span >R$:{currencyValue?.USDBRL}</span></div>
            </div>
            <div className='contentCoin'>
              <label className='Coin' > 1 Euro</label>
              <span className='currencyValue' >R$:{currencyValue?.EURBRL}</span>
            </div>
          </div> 
          <div className='content'>
            <h2>Sobre nossas passagens</h2>
            <p>Todas as nossas passagens são pesquisadas por um de nossos consultores particular, assim garantindo a melhor oferta para os nossos clientes.   </p>
          </div> 
          <div className='content'>
            <h2>Defina a data de sua viagem</h2>
            <p>Fale com um de nossos consultores para definir sua data preferida para fazer a viagem dos sonhos.  </p>
            <Button>Conssutores</Button>

          </div>  
             
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
                <h2 >Rio de Janeiro</h2> 
                <div className='airPoint'><span>Brasil</span></div>
                </div>
                 <div>
                  <span>4h 10min</span>
                  <hr />
                  <span>voo direto</span>
                </div>
                <div>
                <h2>Porto</h2> 
                <div className='airPoint'><span >Portugal</span></div>
                </div>
              </div>
              <div className='suitcase'>
              
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
                <h2 >Porto</h2> 
                <div className='airPoint'><span>Portugal</span></div>
                </div>
                 <div>
                  <span>4h 10min</span>
                  <hr />
                  <span>voo direto</span>
                </div>
                <div>
                <h2>Rio de janeiro</h2> 
                <div className='airPoint'><span>Brasil</span></div>
                </div>
              </div>
              <div className='suitcase'>
              
              <span><GiRollingSuitcase className='iconSuitCase'/><br/>Bagagem de mão</span>
              </div>


            </div>

         </div>
         <div className='ticketPrice' >
            <div>
             <span>A partir:</span>
             <h2><span>Adulto/R$:</span>3,599</h2>
             <span>Total 1 passageiro</span>
             <Button>Consultar</Button>
             <span>Fale com um de nossos consultores para confirmar a oferta.</span>
            </div>
         </div> 
         
        
        </div>
      </ContentTickets>

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
                <h2 >São paulo</h2> 
                <div className='airPoint'><span>Brasil</span></div>
                </div>
                 <div>
                  <span>4h 10min</span>
                  <hr />
                  <span>voo direto</span>
                </div>
                <div>
                <h2>Barcelona</h2> 
                <div className='airPoint'><span >Espanha</span></div>
                </div>
              </div>
              <div className='suitcase'>
              
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
                <h2 >Barcelona</h2> 
                <div className='airPoint'><span>Espanha</span></div>
                </div>
                 <div>
                  <span>4h 10min</span>
                  <hr />
                  <span>voo direto</span>
                </div>
                <div>
                <h2>São paulo</h2> 
                <div className='airPoint'><span>Brasil</span></div>
                </div>
              </div>
              <div className='suitcase'>
              
              <span><GiRollingSuitcase className='iconSuitCase'/><br/>Bagagem de mão</span>
              </div>


            </div>

         </div>
         <div className='ticketPrice' >
           <div>
             <span>A partir:</span>
             <h2><span>Adulto/R$:</span>2,990</h2>
             <span>Total 1 passageiro</span>
             <Button>Consultar</Button>
             <span>Fale com um de nossos consultores para confirmar a oferta.</span>
            </div>
         </div> 
         
        
        </div>
      </ContentTickets>

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
                <h2 >Rio de Janeiro</h2> 
                <div className='airPoint'><span>Brasil</span></div>
                </div>
                 <div>
                  <span>4h 10min</span>
                  <hr />
                  <span>voo direto</span>
                </div>
                <div>
                <h2>Céara</h2> 
                <div className='airPoint'><span >Brasil</span></div>
                </div>
              </div>
              <div className='suitcase'>
              
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
                <h2 >Céara</h2> 
                <div className='airPoint'><span>Brasil</span></div>
                </div>
                 <div>
                  <span>4h 10min</span>
                  <hr />
                  <span>voo direto</span>
                </div>
                <div>
                <h2>Rio de janeiro</h2> 
                <div className='airPoint'><span>Brasil</span></div>
                </div>
              </div>
              <div className='suitcase'>
              
              <span><GiRollingSuitcase className='iconSuitCase'/><br/>Bagagem de mão</span>
              </div>


            </div>

         </div>
         <div className='ticketPrice' >
         <div>
             <span>A partir:</span>
             <h2><span>Adulto/R$:</span>2,799</h2>
             <span>Total 1 passageiro</span>
             <Button>Consultar</Button>
             <span>Fale com um de nossos consultores para confirmar a oferta.</span>
             </div>
            
         </div> 
         
        
        </div>
      </ContentTickets>

     
      </div>
      
     
    </ContainerTickets>
    
    </>
    )
}

