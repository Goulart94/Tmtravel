import { Container, Content, FooterContainer } from "./style";
import {BsInstagram} from 'react-icons/bs';


export default function Footer() {
  return (
      <FooterContainer>
          <h1 className="title">TmTravel</h1>
          <Container>

              <Content>
                  <h1 >Sobre</h1>
                  <p>Somos o operador turístico independente no Brasil e Portugal, que entende a personalização e a proximadade e a eleva ao seu grau máximo: como a criação conjunta da viagem com as agências e seus clientes. Trabalhamos para que uma experiência que comece na imaginação termine nas melhores recordações.</p>

              </Content>
              <Content>
                 <BsInstagram></BsInstagram>
                
              </Content>
          </Container>
          
      </FooterContainer>

  )
  
}
