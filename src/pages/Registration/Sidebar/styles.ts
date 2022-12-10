import styled from 'styled-components'

export const SidebarRegistration = styled.aside`
  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  border: 0.01rem solid ${(props) => props.theme['gray-600']};
  overflow: hidden;

  footer {
    display: flex;
    justify-content: center;
    border-top: 1px solid ${(props) => props.theme['gold-500']};
    margin-top: 1.5rem;
    padding: 1.5rem 2rem 2rem;

    div {
      display: flex;
      justify-content: center;
      color: ${(props) => props.theme['gold-500']};
      padding: 0.5rem;
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
`
