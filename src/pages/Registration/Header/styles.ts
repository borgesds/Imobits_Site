import styled from 'styled-components'

export const HeaderIMG = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url('https://images.pexels.com/photos/14423907/pexels-photo-14423907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  height: 6.25rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  border-bottom: 1px solid ${(props) => props.theme['gold-500']};
`
export const NavLinks = styled.nav`
  width: 34.375rem;
  list-style-type: none;
  border: 1px solid ${(props) => props.theme['gold-500']};
  margin-top: 6rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.55rem;
    background-color: ${(props) => props.theme['gray-600']};
  }

  li {
    display: inline;
    position: relative;
  }

  a {
    color: ${(props) => props.theme['gray-100']};
    text-decoration: none;
    padding: 0.625rem;

    &:hover {
      background-color: ${(props) => props.theme['gold-500']};
    }
  }

  /* sub menu */
  ul ul {
    display: none;
    position: absolute;
    width: 13rem;
    left: 0;
    font-size: small;
    margin-top: 0.55rem;
  }

  ul li:hover ul {
    display: block;
  }

  ul ul li a {
    display: block;
  }
`
