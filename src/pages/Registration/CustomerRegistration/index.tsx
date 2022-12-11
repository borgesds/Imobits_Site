import { CustomerRegistrationMain } from './styled'

export function CustomerRegistration() {
  return (
    <CustomerRegistrationMain>
      <div>
        <h2>Geral</h2>
      </div>
      <form action="">
        <div>
          <div>
            <label className="icon" htmlFor="name"></label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
              required
            />

            <label className="icon" htmlFor="name">
              Tipo de cliente
            </label>
            <select>
              <option value="">Cliente</option>
              <option value="1">Administradora</option>
              <option value="2">Incorporadora</option>
              <option value="3">Fornecedor</option>
              <option value="4">Parceiro</option>
            </select>

            <input
              type="text"
              name="code"
              id="code"
              placeholder="Código interno"
              required
            />
          </div>

          <div>
            <div>
              <input
                type="checkbox"
                value="none"
                id="check_1"
                name="checklist"
                required
              />
              <label htmlFor="check_1" className="check">
                <span>Pessoa física</span>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                value="none"
                id="check_2"
                name="checklist"
                required
              />
              <label htmlFor="check_2" className="check">
                <span>Pessoa jurídica</span>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                value="none"
                id="check_3"
                name="checklist"
                required
              />
              <label htmlFor="check_3" className="check">
                <span>Pessoa estrangeira</span>
              </label>
            </div>

            <div>
              <div>
                <div>
                  <label className="icon" htmlFor="name"></label>
                  <input
                    type="number"
                    name="cpf"
                    id="cpf"
                    placeholder="CPF"
                    required
                  />
                </div>

                <div>
                  <label className="icon" htmlFor="name"></label>
                  <input
                    type="text"
                    name="RG"
                    id="RG"
                    placeholder="RG"
                    required
                  />
                </div>

                <div>
                  <input type="date" name="bdate" required />
                </div>

                <div>
                  <div>
                    <label className="icon" htmlFor="name">
                      Gênero
                    </label>
                    <select>
                      <option value="">Não informado</option>
                      <option value="1">Masculino</option>
                      <option value="2">Feminino</option>
                    </select>
                  </div>

                  <div>
                    <label className="icon" htmlFor="name">
                      Estado civil
                    </label>
                    <select>
                      <option value="">Não informado</option>
                      <option value="1">Amasiado</option>
                      <option value="2">Casado</option>
                      <option value="3">Divorciado</option>
                      <option value="4">Separado</option>
                      <option value="5">Solteiro</option>
                      <option value="6">Viúvo</option>
                    </select>
                  </div>

                  <div>
                    <label className="icon" htmlFor="name"></label>
                    <input
                      type="text"
                      name="nacionalidade"
                      id="nacionalidade"
                      placeholder="Nacionalidade"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <div>
                      <h4>Contato</h4>
                    </div>

                    <div>
                      <div>
                        <label className="icon" htmlFor="name"></label>
                        <input
                          type="number"
                          name="celular"
                          id="celular"
                          placeholder="Celular"
                          required
                        />
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          value="none"
                          id="check_1"
                          name="checklist"
                          required
                        />
                        <label htmlFor="check_1" className="check">
                          <span>WhatsApp</span>
                        </label>
                      </div>

                      <div>
                        <label className="icon" htmlFor="name"></label>
                        <input
                          type="number"
                          name="telresidencial"
                          id="telresidencial"
                          placeholder="Telefone residencial"
                          required
                        />
                      </div>

                      <div>
                        <label className="icon" htmlFor="name"></label>
                        <input
                          type="number"
                          name="telcomercial"
                          id="telcomercial"
                          placeholder="Telefone comercial"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <div>
                        <label className="icon" htmlFor="name"></label>
                        <input
                          type="email"
                          name="emailprincipal"
                          id="emailprincipal"
                          placeholder="E-mail principal"
                          required
                        />
                      </div>

                      <div>
                        <label className="icon" htmlFor="name"></label>
                        <input
                          type="email"
                          name="emailsecundario"
                          id="emailsecundario"
                          placeholder="E-mail secundário"
                          required
                        />
                      </div>

                      <div>
                        <label className="icon" htmlFor="name"></label>
                        <input
                          type="text"
                          name="blogsite"
                          id="blogsite"
                          placeholder="Blog/Site"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </form>
    </CustomerRegistrationMain>
  )
}
