import styled from 'styled-components'

export const MainSearch = styled.main`
  width: 100%;
  height: 100%;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;

  h2 {
    padding: 1rem;
    color: ${(props) => props.theme['gray-100']};
  }
`
export const FormGroup = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  border-radius: 8px;
  background: ${(props) => props.theme['gray-500']};
  border: 1px solid ${(props) => props.theme['gold-500']};
`

export const RedesSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: 0.75s;

  a {
    color: ${(props) => props.theme['gold-300']};

    &:hover {
      color: ${(props) => props.theme['gray-100']};
    }
  }
`

export const DivBackground = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;

  input,
  textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid ${(props) => props.theme['gold-500']};
    background-color: ${(props) => props.theme['gray-300']};
    border-radius: 8px;
    resize: vertical;
  }

  label {
    padding: 0.75rem 0.75rem 0.75rem 1.875rem;
    display: inline-block;
    color: ${(props) => props.theme['gray-100']};
  }
`
export const Col25 = styled.div`
  float: left;
  width: 25%;
  margin-top: 0.375rem;
`

export const Col75 = styled.div`
  float: left;
  width: 75%;
  margin-top: 0.375rem;
`
export const SubmitButton = styled.div`
  float: right;
  padding-top: 1rem;

  input {
    background-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme['--white']};
    padding: 0.75rem 0.75rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      background-color: ${(props) => props.theme['green-300']};
    }
  }
`
