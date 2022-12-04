import { HouseLine } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer, Logo, LogoHouse, NoteLinks } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <LogoHouse>
          <HouseLine size={32} />
        </LogoHouse>

        <strong> Imobits</strong>
      </Logo>

      <NoteLinks>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Sobre</NavLink>
          <NavLink to="/services">Serviços</NavLink>
          <NavLink to="/searchproperties">Pesquisar Imóveis</NavLink>
          <NavLink to="/contact">Contato</NavLink>
        </nav>
      </NoteLinks>
    </HeaderContainer>
  )
}
