import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import Logo from '../../../../components/Logo/Logo'

const Section = styled.section`
  height: 100vh;
  position: relative;
`

const CenteredContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 0;
  flex: auto;
  padding: 0 1rem;
`

const WideCenteredContent = styled(CenteredContent)`
  width: 50%;
  flex: 0 1 auto;
  justify-content: center;
`

const Brand = styled.div`
  text-align: center;
`

const LogoWrapper = styled.div`
  font-size: 2.5rem;
  ${media.between('medium', 'large')`
    font-size: 5rem;
  `}
  ${media.greaterThan('large')`
    font-size: 7.5rem;
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
  height: 35%;
`

const ShortParagraphs = styled.div`
  font-family: var(--font-family-display);
  font-size: 1.5rem;
  line-height: 1;
  width: 5rem;
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

const Slogan = styled.mark`
  display: inline-block;
  background-color: var(--color-fg);
  color: var(--color-bg);
  padding: 5rem 0.5rem 0.5rem;
  line-height: 1;
  text-align: right;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
            <div>
              Untangling the <Slogan>Multifaceted</Slogan> Web
            </div>
          </SloganWrapper>
        </VerticalFlex>
      </Section>
    )
  }
}

export default LandingSection
