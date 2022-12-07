import { DivBackground, Form, FormGroup, MainSearch } from './styles'
import map from '../../assets/img/map.png'

export function Contact() {
  return (
    <MainSearch>
      <Form>
        <FormGroup>
          <DivBackground>
            <img src={map} alt="Chaves na porta" />

            <h2>Entre em contato</h2>
            <div>
              <div>
                <label htmlFor="name">Nome</label>
              </div>

              <div>
                <input id="fame" name="yourname" placeholder="Your name..." />
              </div>
            </div>

            <div>
              <div>
                <div>
                  <label htmlFor="">E-mail</label>
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your e-mail..."
                  />
                </div>
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="subject">Assunto</label>
              </div>

              <div>
                <textarea
                  name="subject"
                  id="subject"
                  cols="30"
                  rows="10"
                  placeholder="Write something..."
                ></textarea>
              </div>
            </div>

            <div>
              <input type="submit" value="submit" />
            </div>
          </DivBackground>
        </FormGroup>
      </Form>
    </MainSearch>
  )
}
