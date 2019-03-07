import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import Logo from '../../../../components/Logo/Logo'

const Section = styled.section`
  height: 100vh;
  position: relative;
`

const CenteredContent = styled.div`
  height: 0;
  display: flex;
  justify-content: center;
  flex: auto;
  padding: 0 1rem;
  align-items: flex-end;
  ${media.greaterThan('large')`
    width: 0;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
  `}
`

const WideCenteredContent = styled(CenteredContent)`
  height: 75%;
  flex: 0 1 auto;
  justify-content: center;
  align-items: center;
  ${media.greaterThan('large')`
    width: 50%;
    height: auto;
    justify-content: center;
  `}
`

const Brand = styled.div`
  text-align: center;
`

const LogoWrapper = styled.div`
  font-size: 4.5rem;
  ${media.between('small', 'large')`
    font-size: 7.25rem;
  `}
  ${media.greaterThan('large')`
    font-size: 9rem;
  `}
`

const VerticalFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  position: relative;
`

const HorizontalFlex = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 65%;
  ${media.greaterThan('large')`
    flex-direction: row;
    height: 35%;
  `}
`

const ShortParagraphs = styled.div`
  font-family: var(--font-family-display);
  font-size: 1rem;
  line-height: 1;
  text-align: center;
  ${media.greaterThan('large')`
    width: 5rem;
    text-align: left;
    font-size: 1.5rem;
  `}
`

const SloganWrapper = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-family: var(--font-family-display);
`

const Slogan = styled.div`
  width: 65%;
  line-height: 1;
  font-size: 1.5rem;
  max-width: 13rem;
  ${media.greaterThan('large')`
    font-size: 2rem;
    max-width: none;
    width: auto;
  `}
`

const SloganEmphasis = styled.mark`
  display: inline-block;
  background-color: var(--color-fg);
  color: var(--color-bg);
  padding: 0.25em 0.35em 0.25em;
  margin-left: -0.35em;
  line-height: 1;
  text-align: left;
  width: 100%;
  ${media.greaterThan('large')`
    width: auto;
    padding: 4.5em 0.35em 0.25em;
    margin: 0;
  `}
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const SloganEmphasisFragment = styled.span`
  display: block;
  ${media.greaterThan('large')`
    display: inline;
  `}
`

class LandingSection extends React.Component {
  state = {
    id: 'hello'
  }

  componentDidMount() {
    this.effect = window.VANTA.NET({
      el: '#hello',
      color: '#8080a2',
      backgroundColor: '#272739',
    })
  }

  componentWillUnmount() {
    this.effect.destroy()
  }

  render() {
    const { id, } = this.state
    return (
      <Section
        id={id}
      >
        <Background
          id={id}
        />
        <VerticalFlex>
          <HorizontalFlex>
            <WideCenteredContent>
              <div>
                <Brand>
                  <LogoWrapper>
                    <Logo
                      wordmarkType="full"
                    />
                  </LogoWrapper>
                </Brand>
              </div>
            </WideCenteredContent>
            <CenteredContent>
              <ShortParagraphs>
                White Cloak Technologies
              </ShortParagraphs>
            </CenteredContent>
            <CenteredContent>
              <ShortParagraphs>
                Web Development Guild
              </ShortParagraphs>
            </CenteredContent>
          </HorizontalFlex>
          <SloganWrapper>
            <Slogan>
              Untangling the <SloganEmphasis><SloganEmphasisFragment>Multi</SloganEmphasisFragment><SloganEmphasisFragment>faceted</SloganEmphasisFragment></SloganEmphasis> Web
            </Slogan>
          </SloganWrapper>
        </VerticalFlex>
      </Section>
    )
  }
}

export default LandingSection
