import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import WordmarkLogo from '../../../../components/ui/WordmarkLogo/WordmarkLogo'
import LinkButton from '../../../../components/ui/LinkButton/LinkButton'

const Section = styled.section`
  height: 100vh;
  position: relative;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Foreground = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  ${media.greaterThan('medium')`
    padding: 0;
    display: block;
  `}
`

const HeadingsWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column-reverse;
  ${media.greaterThan('medium')`
    text-align: left;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 75%;
    flex-direction: row;
    align-items: stretch;
  `}
`

const LogoWrapper = styled.div`
  font-size: 8rem;
  line-height: 0;
  margin: 4rem 0;
  ${media.greaterThan('medium')`
    margin: 0;
    width: 0;
    flex: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: var(--line-height-base);
  `}
`

const TitlesWrapper = styled.h2`
  font-size: 1.125rem;
  margin: 0;
  ${media.greaterThan('medium')`
    width: 0;
    flex: auto;
    display: flex;
    font-size: 1.5rem;
  `}
`

const TitlesCell = styled.span`
  display: block;
  text-align: center;
  margin: 0.5rem 0;
  ${media.greaterThan('medium')`
    display: flex;
    width: 0;
    flex: auto;
    align-items: center;
    text-align: left;
    margin: 0;
  `}
`

const TitleContent = styled.span`
  ${media.greaterThan('medium')`
    display: block;
    width: 0;
    line-height: 1;
  `}
`

const CtaWrapper = styled.div`
  text-align: center;
  ${media.greaterThan('medium')`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
  `}
`

const Slogan = styled.div`
  font-family: var(--font-family-display);
  line-height: 1;
  font-size: 1.25rem;
  width: 15rem;
  margin: 0 auto;
  ${media.greaterThan('medium')`
    margin: 10% 0 0;
    width: auto;
  `}
`

const Cta = styled(LinkButton)`
  margin: 1rem 0 0;
  display: flex;
  ${media.greaterThan('medium')`
    margin: 0 1rem;
    display: inline-flex;
    width: 12rem;
  `}
`

const CtaContainer = styled.div`
  margin-top: 5%;
`

class LandingSection extends React.Component {
  state = {
    id: 'hello'
  }

  componentDidMount() {
    this.effect = window.VANTA.NET({
      el: `#${this.state.id}`,
      color: '#734369',
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
        <Foreground>
          <HeadingsWrapper>
            <LogoWrapper>
              <WordmarkLogo
                wordmarkType="full"
              />
            </LogoWrapper>
            <TitlesWrapper>
              <TitlesCell>
                <TitleContent>
                  White Cloak Technologies
                </TitleContent>
              </TitlesCell>
              <TitlesCell>
                <TitleContent>
                  Web Development Group
                </TitleContent>
              </TitlesCell>
            </TitlesWrapper>
          </HeadingsWrapper>
          <CtaWrapper>
            <Slogan>
              "Untangling the Multifaceted Web"
            </Slogan>
            <CtaContainer>
              <Cta
                to="mailto:wdg@whitecloak.com?subject=[Application]"
                variant="primary"
                absolute
              >
                Join Now
              </Cta>
              <Cta
                to="/about"
              >
                Learn More
              </Cta>
            </CtaContainer>
          </CtaWrapper>
        </Foreground>
      </Section>
    )
  }
}

export default LandingSection
