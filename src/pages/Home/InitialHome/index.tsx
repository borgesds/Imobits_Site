import { HouseLine } from 'phosphor-react'

import house from '../../../assets/img/house.jpg'
import {
  ContainerLogin,
  FormLogin,
  HomeContainer,
  HomeImg,
  StylesContainer,
  WrapLogin,
} from './styles'
import { LoginScreen } from '../LoginScreen'

export function InitialHome() {
  return (
    <HomeContainer>
      <HomeImg>{<img src={house} alt="Tela de fundo é uma casa" />}</HomeImg>

      <StylesContainer>
        <ContainerLogin>
          <WrapLogin>
            <FormLogin>
              <span>Bem - Vindo!</span>

              <span>
                <HouseLine size={32} />
              </span>

              {/* Tela de login */}
              <LoginScreen />
            </FormLogin>
          </WrapLogin>
        </ContainerLogin>
      </StylesContainer>
    </HomeContainer>
  )
}
