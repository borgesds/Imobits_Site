import styled from 'styled-components'

export const SidebarRegistration = styled.aside`
  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  border: 0.01rem solid ${(props) => props.theme['gray-600']};
  overflow: hidden;

  p {
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.2rem;
  }

  footer {
    display: flex;
    justify-content: center;
    border-top: 1px solid ${(props) => props.theme['gold-500']};
    margin-top: 1.5rem;
    padding: 2rem 2rem 2rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: 100%;
      background: transparent;
      color: ${(props) => props.theme['gold-300']};
      border: 1px solid ${(props) => props.theme['gold-500']};
      border-radius: 8px;
      height: 40px;
      font-weight: bold;
      text-decoration: none;
      transition: 0.1s;

      &:hover {
        background: ${(props) => props.theme['gold-500']};
        color: ${(props) => props.theme['gray-100']};
        cursor: pointer;
      }
    }
  }
`

export const Cover = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  div {
    color: ${(props) => props.theme['gold-500']};
  }
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    box-sizing: initial;
    width: 8rem;
    height: 8rem;
    border-radius: 9999px;
    border: 4px solid ${(props) => props.theme['gray-600']};
    outline: 2px solid ${(props) => props.theme['gold-500']};
  }

  strong {
    margin-top: 1rem;
    color: ${(props) => props.theme['gray-100']};
    line-height: 1.6;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-400']};
  }
`
