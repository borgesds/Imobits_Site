import {
  MapPinLine,
  UsersThree,
  ChartPieSlice,
  CurrencyEth,
} from 'phosphor-react'

import {
  AboutContainerMain,
  Article,
  BoxStyled,
  BoxHeader,
  Icon,
  Comment,
} from './styles'

export function Services() {
  return (
    <Article>
      <AboutContainerMain>
        <BoxStyled>
          <BoxHeader>
            <Icon>
              <MapPinLine size={32} />
            </Icon>
            <p>Localização</p>
          </BoxHeader>

          <Comment>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
              ullam beatae inventore necessitatibus similique consectetur
              debitis voluptatem commodi aliquid eos a ratione repellendus nisi
              consequuntur molestias dolor quas veritatis deserunt.
            </p>
          </Comment>
        </BoxStyled>
        <BoxStyled>
          <BoxHeader>
            <Icon>
              <UsersThree size={32} />
            </Icon>
            <p>Time Profissional</p>
          </BoxHeader>

          <Comment>
            <p>
              Lorem, ipsum dolor consectetur debitis voluptatem commodi aliquid
              eos a ratione repellendus nisi consequuntur molestias dolor quas
              veritatis deserunt.
            </p>
          </Comment>
        </BoxStyled>
        <BoxStyled>
          <BoxHeader>
            <Icon>
              <ChartPieSlice size={32} />
            </Icon>
            <p>Business Home</p>
          </BoxHeader>

          <Comment>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
              ullam beatae inventore necessitatibus similique consectetur
              debitis voluptatem commodi .
            </p>
          </Comment>
        </BoxStyled>
        <BoxStyled>
          <BoxHeader>
            <Icon>
              <CurrencyEth size={32} />
            </Icon>
            <p>Marketing</p>
          </BoxHeader>

          <Comment>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
              ullam beatae inventore necessitatibus similique consectetur
              debitis voluptatem commodi aliquid eos a ratione repellendus nisi
              consequuntur molestias dolor quas veritatis deserunt.
            </p>
          </Comment>
        </BoxStyled>
        <BoxStyled>
          <BoxHeader>
            <Icon>
              <CurrencyEth size={32} />
            </Icon>
            <p>Marketing</p>
          </BoxHeader>

          <Comment>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
              ullam beatae inventore necessitatibus similique consectetur
              debitis voluptatem commodi aliquid eos a ratione repellendus nisi
              consequuntur molestias dolor quas veritatis deserunt.
            </p>
          </Comment>
        </BoxStyled>
        <BoxStyled>
          <BoxHeader>
            <Icon>
              <CurrencyEth size={32} />
            </Icon>
            <p>Marketing</p>
          </BoxHeader>

          <Comment>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
              ullam beatae inventore necessitatibus similique consectetur
              debitis voluptatem commodi aliquid eos a ratione repellendus nisi
              consequuntur molestias dolor quas veritatis deserunt.
            </p>
          </Comment>
        </BoxStyled>
      </AboutContainerMain>
    </Article>
  )
}
