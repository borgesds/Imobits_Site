import styled from 'styled-components'

export const MainSearch = styled.main`
  width: 100%;
  height: 100%;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  background: red;

  h2 {
    padding: 1rem;
    color: ${(props) => props.theme['gold-500']};
  }
`
export const FormGroup = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 2rem 10rem 2rem 10rem;
  background: blue;
`

export const DivBackground = styled.div`
  width: 100%;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
  }
`