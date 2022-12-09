import { HeaderIMG, NavLinks } from './styles'

export function HeaderRegistration() {
  return (
    <HeaderIMG>
      <NavLinks>
        <ul>
          <li>
            <a href="#">Cliente</a>
            <ul>
              <li>
                <a href="#">Cadastrar Cliente</a>
              </li>

              <li>
                <a href="#">Lista de Clientes</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Imóveis</a>
            <ul>
              <li>
                <a href="#">Cadastrar Imóveis</a>
              </li>

              <li>
                <a href="#">Lista de Imóveis</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Vendas</a>
            <ul>
              <li>
                <a href="#">Cadastrar Imóveis</a>
              </li>

              <li>
                <a href="#">Lista de Vendas</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Locações</a>
            <ul>
              <li>
                <a href="#">Cadastrar Locação de Imóveis</a>
              </li>

              <li>
                <a href="#">Lista de Locação</a>
              </li>

              <li>
                <a href="#">Recebimentos</a>
              </li>

              <li>
                <a href="#">Repasses</a>
              </li>

              <li>
                <a href="#">Reajustes</a>
              </li>

              <li>
                <a href="#">Renovação</a>
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
                <a href="#">Configurações</a>
              </li>

              <li>
                <a href="#">Sair</a>
              </li>
            </ul>
          </li>
        </ul>
      </NavLinks>
    </HeaderIMG>
  )
}
