import { Exit, HeaderIMG, NavLinks } from './styles'
import {
  AddressBook,
  ArrowCircleLeft,
  ArrowCircleRight,
  Buildings,
  ChartLineUp,
  Checks,
  ClipboardText,
  Gear,
  House,
  SignOut,
  UserList,
} from 'phosphor-react'

export function HeaderRegistration() {
  return (
    <HeaderIMG>
      <NavLinks>
        <ul>
          <li>
            <a href="/registration">Imobits</a>
          </li>

          <li>
            <a href="#">Cliente</a>
            <ul>
              <li>
                <a href="/registration/customerregistration">
                  <div>
                    <UserList size={15} />
                    Cadastrar Cliente
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <div>
                    <AddressBook size={15} />
                    Lista de Clientes
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Imóveis</a>
            <ul>
              <li>
                <a href="#">
                  <div>
                    <Buildings size={15} />
                    Cadastrar Imóveis
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <div>
                    <ClipboardText size={15} />
                    Lista de Imóveis
                  </div>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Vendas</a>
            <ul>
              <li>
                <a href="#">
                  <div>
                    <Buildings size={15} />
                    Cadastrar Imóveis
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <div>
                    <ClipboardText size={15} />
                    Lista de Imóveis
                  </div>
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Locações</a>
            <ul>
              <li>
                <a href="#">
                  <div>
                    <House size={20} />
                    Cadastrar Locação de Imóveis
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <div>
                    <ClipboardText size={15} />
                    Lista de Locação
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <div>
                    <ArrowCircleRight size={15} />
                    Recebimentos
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <div>
                    <ArrowCircleLeft size={15} />
                    Repasses
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <div>
                    <ChartLineUp size={15} />
                    Reajustes
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <div>
                    <Checks size={15} />
                    Renovação
                  </div>
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Extrator</a>
          </li>

          <li>
            <a href="#">Minha conta</a>
            <ul>
              <li>
                <a href="#">
                  <div>
                    <Gear size={15} />
                    Configurações
                  </div>
                </a>
              </li>

              <li>
                <a href="/">
                  <Exit>
                    <SignOut size={15} />
                    Sair
                  </Exit>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </NavLinks>
    </HeaderIMG>
  )
}
