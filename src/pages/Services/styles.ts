import styled from 'styled-components'

export const Article = styled.article`
  background: ${(props) => props.theme['--white']};
`

export const AboutContainerMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;
  padding: 5rem;
`

export const BoxStyled = styled.div`
  background: ${(props) => props.theme['gray-600']};
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid var(--gold-300);
`

export const BoxHeader = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.8rem;

  p {
    color: ${(props) => props.theme['gold-500']};
    font-weight: bold;
  }
`

export const Icon = styled.div`
  padding-right: 0.8rem;
  color: ${(props) => props.theme['gold-500']};
`

export const Comment = styled.div`
  color: ${(props) => props.theme['gray-100']};
  padding-left: 3rem;
  text-align: justify;
  text-justify: inter-word;
`
