import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import WordmarkLogo from '../../../../components/brand/WordmarkLogo/WordmarkLogo'
import LinkButton from '../../../../components/ui/LinkButton/LinkButton'

const Section = styled.section`
  height: 100vh;
  position: relative;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${Section}:nth-child(2n) > & {
    background-color: var(--color-fg);
  }
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
  ${Section}:nth-child(2n) > & {
    color: var(--color-bg);
  }
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
  margin: 2rem 0;
  ${media.greaterThan('small')`
    @media (orientation: portrait) {
      margin: 4rem 0;
    }
    @media (orientation: landscape) {
      margin: 1rem 0;
    }
  `}
  ${media.greaterThan('medium')`
    font-size: 6rem;
    margin: 0;
    width: 0;
    flex: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: var(--line-height-base);
  `}
  ${media.greaterThan('large')`
    font-size: 10rem;
  `}
`

const TitlesWrapper = styled.h2`
  font-size: 1.125rem;
  margin: 0;
  ${media.greaterThan('small')`
    display: flex;
  `}
  ${media.between('small', 'medium')`
    width: 100%;
    max-width: 30rem;
    margin: 0 auto;
  `}
  ${media.greaterThan('medium')`
    width: 0;
    flex: auto;
    font-size: 1.5rem;
  `}
  ${media.greaterThan('large')`
    font-size: 1.75rem;
  `}
`

const TitlesCell = styled.span`
  display: block;
  text-align: center;
  margin: 0.5rem 0;
  ${media.greaterThan('small')`
    display: flex;
    width: 0;
    flex: auto;
    align-items: center;
    text-align: left;
    margin: 0;
  `}
`

const TitleContent = styled.span`
  ${media.greaterThan('small')`
    width: 11rem;
    margin: 0 auto;
    text-align: center;
  `}
  ${media.greaterThan('medium')`
    display: block;
    margin: 0;
    width: 0;
    line-height: 1;
    text-align: left;
  `}
`

const CtaWrapper = styled.div`
  text-align: center;
  margin: 0 -0.5rem;
  
  ${media.greaterThan('small')`
    width: 100%;
    margin: 0;
  `}
  
  ${media.greaterThan('medium')`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 55%;
    @media (min-aspect-ratio: 2/1) {
      height: 65%;
    }
  `}
`;

const Slogan = styled.div`
  line-height: 1;
  font-size: 1.5rem;
  width: 15rem;
  margin: 0 auto;
  font-family: var(--font-family-display);
  font-stretch: condensed;
  ${media.greaterThan('medium')`
    margin: 10% 0 0;
    width: auto;
    font-size: 2rem;
  `}
`

const Cta = styled(LinkButton)`
  margin: 1rem 0.5rem 0;
  display: flex;
  ${media.greaterThan('small')`
    display: inline-flex;
    width: 12rem;
    margin: 0 0.5rem;
  `}
  ${media.greaterThan('medium')`
    margin: 0 1rem;
  `}
`

const CtaContainer = styled.div`
  margin-top: 1rem;
  ${media.greaterThan('medium')`
    margin-top: 5%;
  `}
`

class LandingSection extends React.Component {
  state = {
    id: 'f'
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
        {...this.props}
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
                  Web Development Guild
                </TitleContent>
              </TitlesCell>
            </TitlesWrapper>
          </HeadingsWrapper>
          <CtaWrapper>
            <Slogan>
              Untangling the Multifaceted Web
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
