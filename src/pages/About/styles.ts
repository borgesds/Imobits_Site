import styled from 'styled-components'

export const ArticleAbout = styled.article`
  width: 100%;
  height: 100%;
`
export const HeaderAbout = styled.header`
  padding-top: 2rem;
  padding-left: 2rem;
  color: ${(props) => props.theme['gold-500']};
  font-size: 2rem;
  font-weight: bold;
`

export const MainArticle = styled.main`
  padding: 2rem;
`

export const ContainerMain = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  img {
    width: 100%;
    height: 100%;
  }
`

export const AboutText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['gray-100']};
  padding: 1.5rem;

  p {
    color: ${(props) => props.theme['gray-600']};
  }
`
