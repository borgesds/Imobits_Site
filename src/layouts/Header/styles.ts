import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-800']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`

export const Logo = styled.div`
  color: ${(props) => props.theme['--white']};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LogoHouse = styled.div`
  padding-right: 1rem;
  color: ${(props) => props.theme['gold-500']};
`

export const NoteLinks = styled.div`
  a {
    color: ${(props) => props.theme['gray-400']};
    font-weight: bold;
    cursor: pointer;
    padding: 0.5rem;
    text-decoration: none;

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:hover {
      color: ${(props) => props.theme['gold-500']};
      border-bottom: 2px solid ${(props) => props.theme['gold-500']};
    }
  }
`
