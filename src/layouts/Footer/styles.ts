import styled from 'styled-components'

export const FooterMain = styled.footer`
  background: ${(props) => props.theme['gray-600']};
`
export const ContainerFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 8rem;
  padding: 4rem;
`

export const LogoInspiration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Icon = styled.div`
  color: ${(props) => props.theme['gold-500']};
  transition: 0.7s;

  &:hover {
    color: ${(props) => props.theme['--white']};
  }
`

export const Logo = styled.div`
  color: ${(props) => props.theme['--white']};
  font-size: 2rem;
  padding-bottom: 1rem;

  transition: 0.7s;

  &:hover {
    font-size: 2.5rem;
  }

  p {
    color: ${(props) => props.theme['gray-300']};
    text-align: justify;
    text-justify: inter-word;
  }
`

export const LinksDirect = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8rem;
`

export const LinksHeader = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: ${(props) => props.theme['--white']};
    padding-bottom: 1rem;
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme['gold-500']};
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
`

export const LinksSocialRede = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: ${(props) => props.theme['--white']};
    padding-bottom: 1rem;
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme['gold-500']};
      padding-bottom: 1rem;
      text-decoration: none;
    }
  }
`

export const Contact = styled.div`
  color: ${(props) => props.theme['--white']};
  display: flex;
  flex-direction: column;
`
