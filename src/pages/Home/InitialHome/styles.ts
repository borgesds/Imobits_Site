import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`

export const HomeImg = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`

export const StylesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  background-color: ${(props) => props.theme['gray-600']};
`

export const ContainerLogin = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  padding: 2.5rem;
`

export const WrapLogin = styled.div`
  width: 20rem;
  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 10px;

  overflow: hidden;
  padding: 4.8rem 3.43rem 2.06rem 3.43rem;
  box-shadow: 0 5px 10px 0 ${(props) => props.theme['gray-900']};
`

export const FormLogin = styled.form`
  span {
    display: block;
    font-size: 2rem;
    color: ${(props) => props.theme['gray-100']};

    line-height: 1.2;
    text-align: center;
    padding-bottom: 1rem;
  }
`
