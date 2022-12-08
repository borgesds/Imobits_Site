import {
  Col25,
  Col75,
  DivBackground,
  Form,
  FormGroup,
  MainSearch,
  RedesSocial,
  SubmitButton,
} from './styles'
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from 'phosphor-react'

export function Contact() {
  return (
    <MainSearch>
      <Form>
        <FormGroup>
          <RedesSocial>
            <div>
              <a
                href="https://pt-br.facebook.com/login/device-based/regular/login/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookLogo size={32} />
              </a>
            </div>

            <div>
              <a
                href="https://www.linkedin.com/login/pt"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinLogo size={32} />
              </a>
            </div>

            <div>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <TwitterLogo size={32} />
              </a>
            </div>

            <div>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramLogo size={32} />
              </a>
            </div>
          </RedesSocial>

          <DivBackground>
            <h2>Entre em contato</h2>
            <div>
              <Col25>
                <label htmlFor="name">Nome</label>
              </Col25>

              <Col75>
                <input id="fame" name="yourname" placeholder="Your name..." />
              </Col75>
            </div>

            <div>
              <div>
                <Col25>
                  <label htmlFor="">E-mail</label>
                </Col25>

                <Col75>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your e-mail..."
                  />
                </Col75>
              </div>
            </div>

            <div>
              <Col25>
                <label htmlFor="subject">Assunto</label>
              </Col25>

              <Col75>
                <textarea
                  name="subject"
                  id="subject"
                  cols="30"
                  rows="10"
                  placeholder="Write something..."
                ></textarea>
              </Col75>
            </div>

            <SubmitButton>
              <input type="submit" value="Enviar" />
            </SubmitButton>
          </DivBackground>
        </FormGroup>
      </Form>
    </MainSearch>
  )
}
