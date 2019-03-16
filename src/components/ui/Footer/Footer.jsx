import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import WordmarkLogo from '../../brand/WordmarkLogo/WordmarkLogo'
import WhiteCloakLogo from '../../brand/WhiteCloakLogo/WhiteCloakLogo'

const Base = styled.footer`
  --color-bg: #000;
  --color-fg: #fff;
  
  background-color: var(--color-bg);
  
  color: var(--color-fg);
  padding: 2rem 0;
`

const Container = styled.div`
  padding: 0 0.5rem;
  max-width: 48rem;
  margin: 0 auto;
  ${media.greaterThan('medium')`
    padding: 0 2rem;
  `}
`

const Row = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`

const Cell = styled.div`
`

const FooterContent = styled.div`
  display: flex;
  line-height: 1.5;
  align-items: center;
  justify-content: center;
  ${media.greaterThan('medium')`
    justify-content: flex-start;
  `}
`

const LogoWrapper = styled.div`
  font-size: 4rem;
  margin-right: 0.5rem;
`

const WhiteCloakLogoWrapper = styled.div`
  font-size: 3rem;
  line-height: 1;
`

const StyledWordmarkLogo = styled(WordmarkLogo)`
  display: flex;
`

const StyledWhiteCloakLogo = styled(WhiteCloakLogo)`
`

const WhiteCloakFooterContent = styled.div`
  text-align: center;
  margin: 2rem 0;
  ${media.greaterThan('medium')`
    margin: 0;
    text-align: right;
  `}
`

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  line-height: 1.5;
`

const WhiteCloakWordmark = styled.div`
  font-family: var(--font-family-display);
`

function Footer() {
  const now = new Date()
  const startYear = 2019
  const thisYear = now.getFullYear()

  const copyrightYear = startYear === thisYear ? startYear : `${startYear}-${thisYear}`

  return (
    <Base>
      <Container>
        <Row>
          <Cell>
            <FooterContent>
              <LogoWrapper>
                <StyledWordmarkLogo />
              </LogoWrapper>
              <div>
                <WhiteCloakWordmark>
                  Order of the White Lotus
                </WhiteCloakWordmark>
                <div>
                  Web Development Guild
                </div>
                <div>
                  wdg@whitecloak.com
                </div>
              </div>
            </FooterContent>
          </Cell>
          <Cell>
            <WhiteCloakFooterContent>
              <WhiteCloakLogoWrapper>
                <StyledWhiteCloakLogo />
              </WhiteCloakLogoWrapper>
              <WhiteCloakWordmark>
                White Cloak Technologies
              </WhiteCloakWordmark>
            </WhiteCloakFooterContent>
          </Cell>
        </Row>
        <Copyright>
          Copyright &copy; {copyrightYear} Order&nbsp;of&nbsp;the&nbsp;White&nbsp;Lotus. All&nbsp;Rights&nbsp;Reserved.
        </Copyright>
      </Container>
    </Base>
  )
}

export default Footer
