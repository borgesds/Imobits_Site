import keys from '../../assets/img/keys.jpg'
import {
  AboutText,
  ArticleAbout,
  ContainerMain,
  HeaderAbout,
  MainArticle,
} from './styles'

export function About() {
  return (
    <>
      <ArticleAbout>
        <HeaderAbout>
          <p>Sobre</p>
        </HeaderAbout>

        <MainArticle>
          <ContainerMain>
            <AboutText>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                magnam? Fugiat cumque tempora facilis maiores. Perspiciatis
                atque nam corrupti recusandae porro, aliquam iusto quo! Tenetur
                perferendis nisi nulla autem dolorem? Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Alias asperiores corrupti
                doloremque, delectus necessitatibus veniam placeat pariatur.
                Odio iusto, molestias quisquam velit nihil incidunt itaque harum
                aspernatur ad dolorum eligendi. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Eaque incidunt quasi fuga quod
                voluptatum obcaecati rem. Eaque, et labore quibusdam, quasi
                earum nesciunt neque natus amet tempore corrupti veritatis quas?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                magnam? Fugiat cumque tempora facilis maiores. Perspiciatis
                atque nam corrupti recusandae porro, aliquam iusto quo! Tenetur
                perferendis nisi nulla autem dolorem? Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Alias asperiores corrupti
                doloremque, delectus necessitatibus veniam placeat pariatur.
                Odio iusto, molestias quisquam velit nihil incidunt itaque harum
                aspernatur ad dolorum eligendi. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Eaque incidunt quasi fuga quod
                voluptatum obcaecati rem. Eaque, et labore quibusdam, quasi
                earum nesciunt neque natus amet tempore corrupti veritatis quas?
              </p>
            </AboutText>

            <div>
              <img src={keys} alt="Chaves na porta" />
            </div>
          </ContainerMain>
        </MainArticle>
      </ArticleAbout>
    </>
  )
}
