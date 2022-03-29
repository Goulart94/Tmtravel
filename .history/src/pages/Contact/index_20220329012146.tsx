import React from 'react'
import { AreaText, BoxMensange, ContainerImage, ContainerText, DadosContact, Form, SubmitButton } from '../../styles/componetsStyles/contact';
import { RiMailSendLine, RiPhoneFill } from "react-icons/ri";
import { BsWhatsapp,BsInstagram} from "react-icons/bs";

export default function Contact() {
  return (
    <>
       <ContainerImage/>
       <AreaText>
         <ContainerText>
           <h1> <span>#</span>Precisa dos meus serviços ?</h1>
           <ul>
             <li>
               <RiMailSendLine className='icon'/> Email : Maycon_pbi@hotmail.com
             </li>
             <li>
               <RiPhoneFill className='icon'/>Telefone: 936353484
             </li>
           </ul>
           <p>ou</p>
           <section>
             <BsWhatsapp  className='iconSection'
              onClick={()=> window.open( "https://wa.me/351936353458")}>
            </BsWhatsapp>
            <BsInstagram className='iconSection'
            onClick={()=> window.open( "https://www.instagram.com/tmt.ravel/")} >
            </BsInstagram>
           </section>
         </ContainerText>
        
    
          <Form>
           <h1>Deixe sua mensagem</h1>

           <label>Nome:</label>
           <DadosContact type={"text"} name="nome" placeholder='Digite seu nome' />

           <label>Email:</label>
           <DadosContact type={"email"} name="email" placeholder='Digite seu email' />

           <label>Telefone:</label>
           <DadosContact type={"number"} name="fone" placeholder='Digite seu telefone' />

           <label>Mensagen:</label>
           <BoxMensange type={"text"} placeholder="Digite sua mensagen"></BoxMensange>
           <div>
             <SubmitButton>Enviar</SubmitButton>
          </div>
           
           
          </Form>
       
    
    </AreaText>
    </>
  )
}
