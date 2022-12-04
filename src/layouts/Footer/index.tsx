import { HouseLine } from 'phosphor-react'
import {
  Contact,
  ContainerFooter,
  FooterMain,
  Icon,
  LinksDirect,
  LinksHeader,
  LinksSocialRede,
  Logo,
  LogoInspiration,
} from './styles'

export function Footer() {
  return (
    <FooterMain>
      <ContainerFooter>
        <LogoInspiration>
          <Icon>
            <HouseLine size={62} />
          </Icon>
          <Logo>
            <strong>Imobits</strong>
          </Logo>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
            exercitationem vel harum quod impedit iure totam laudantium a
            assumenda ipsa nemo autem quasi, reprehenderit temporibus aliquam
            rerum minima alias eaque.
          </p>
        </LogoInspiration>

        <LinksDirect>
          <LinksHeader>
            <a href="#">Home</a>
            <a href="#">Sobre</a>
            <a href="#">Serviços</a>
            <a href="#">Pesquisar Imóveis</a>
            <a href="#">Contato</a>
            <a href="#">Privacy Policy</a>
          </LinksHeader>

          <LinksSocialRede>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </LinksSocialRede>

          <Contact>
            <strong>Contato:</strong>
            <p>email@example.com</p>
          </Contact>
        </LinksDirect>
      </ContainerFooter>
    </FooterMain>
  )
}
