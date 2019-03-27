import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import Logo from '../../../../components/brand/Logo/Logo'
import TribeLogo from '../../../../components/brand/TribeLogo/TribeLogo'

const Section = styled.section`
  min-height: 100vh;
  position: relative;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${Section}:nth-child(2n) > & {
    background-color: var(--color-fg);
  }
`

const Foreground = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
  ${Section}:nth-child(2n) > & {
    color: var(--color-bg);
  }
`

const SectionDivisionForeground = styled.div`
  max-width: 60rem;
  padding: 0 1rem;
  margin: 0 auto;
  ${media.greaterThan('medium')`
    padding: 0 2rem;
  `}
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  padding-top: 4rem;
  font-stretch: condensed;
  ${media.greaterThan('medium')`
    font-size: 3rem;
    margin: 0 0 4rem;
  `}
`

const SectionDivision = styled.div`
  &:last-child {
    padding-bottom: 2rem;
  }
  ${media.greaterThan('medium')`
    position: relative;
    overflow: hidden;
    &:last-child {
      padding-bottom: 4rem;
    }
  `}
`

const SectionContent = styled.div`
  min-height: 100vh;
  position: relative;
  align-items: center;
  ${SectionDivision}:nth-child(2n) > ${SectionDivisionForeground} > & {
    margin-left: auto;
  }
  
  ${media.greaterThan('medium')`
    width: 60%;
    display: flex;
    ${SectionDivision}:nth-child(2n) > ${SectionDivisionForeground} > & {
      width: 50%;
    }
  `}
`

const SectionDivisionBackground = styled.div`
  position: absolute;
  top: 0;
  right: -23rem;
  align-items: center;
  height: 100%;
  display: none;
  
  ${SectionDivision}:nth-child(2n) > & {
    right: auto;
    left: -23rem;
  }
  
  ${media.greaterThan('medium')`
    display: flex;
  `}
`

const SectionLogoContainer = styled.div`
  font-size: 45rem;
  opacity: 0.25;
  line-height: 1;
`

const Logo1 = styled(Logo)`
  transform: rotate(232deg);
`

const Subsection = styled.section`
  margin: 2rem 0;
`

const SubsectionTitle = styled.h3`
  margin: 1rem 0;
  font-size: 1.5rem;
  ${media.greaterThan('medium')`
    margin: 0 0 2rem;
  `}
`

const SubsectionLogo = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.25em;
  font-size: 2em;
`

function TribesSection(props) {
  return (
    <Section
      {...props}
    >
      <Background />
      <Foreground>
        <SectionDivision>
          <SectionDivisionBackground>
            <SectionLogoContainer>
              <Logo1 />
            </SectionLogoContainer>
          </SectionDivisionBackground>
          <SectionDivisionForeground>
            <SectionContent>
              <div>
                <SectionTitle>
                  Tribes
                </SectionTitle>
                <Subsection>
                  <SubsectionTitle>
                    <SubsectionLogo>
                      <TribeLogo
                        tribe="water"
                      />
                    </SubsectionLogo>
                    Water
                  </SubsectionTitle>
                  <p>
                    Water flows through rivers, from the small streams to the mighty oceans blah blah blah blah, fire is the
                    cousin of water blah blah blah
                  </p>
                  <p>
                    Expected to have knowledge on web-based cross platform technology
                    Electron, Ionic, Cordova, React Native, Vue Native
                  </p>
                </Subsection>
                <Subsection>
                  <SubsectionTitle>
                    <SubsectionLogo>
                      <TribeLogo
                        tribe="air"
                      />
                    </SubsectionLogo>
                    Air
                  </SubsectionTitle>
                  <p>
                    The air we breathe is everywhere blah blah blah
                  </p>
                  <p>
                    Members of this tribe are knowledgeable with the fundamentals of Web development.
                    HTML, CSS, HTTP concepts
                  </p>
                </Subsection>
              </div>
            </SectionContent>
          </SectionDivisionForeground>
        </SectionDivision>
        <SectionDivision>
          <SectionDivisionBackground>
            <SectionLogoContainer>
              <Logo1 />
            </SectionLogoContainer>
          </SectionDivisionBackground>
          <SectionDivisionForeground>
            <SectionContent>
              <div>
                <Subsection>
                  <SubsectionTitle>
                    <SubsectionLogo>
                      <TribeLogo
                        tribe="earth"
                      />
                    </SubsectionLogo>
                    Earth
                  </SubsectionTitle>
                  <p>
                    As stable as the ground where the tallest mountains stand on blah blah blah
                  </p>
                  <p>
                    Expected to have knowledge on serverside technologies
                    Laravel, WordPress, Drupal, Express
                  </p>
                </Subsection>
                <Subsection>
                  <SubsectionTitle>
                    <SubsectionLogo>
                      <TribeLogo
                        tribe="metal"
                      />
                    </SubsectionLogo>
                    Metal
                  </SubsectionTitle>
                  <p>
                    The greatest swords are forged from finest metals blah blah blah
                  </p>
                  <p>
                    Members of this subdiscipline composes of elite forces of project setup and web development best practices.
                    Webpack, Yeoman, Plop, Grunt, Gulp, Rollup
                  </p>
                </Subsection>
                <Subsection>
                  <SubsectionTitle>
                    <SubsectionLogo>
                      <TribeLogo
                        tribe="fire"
                      />
                    </SubsectionLogo>
                    Fire
                  </SubsectionTitle>
                  <p>
                    Watch how the tongues of fire turn everything into ash; put them in torches and they light up the way
                  </p>
                  <p>
                    Members of this tribe are knowledgeable with development of single-page apps (SPAs).
                    React, Vue, Angular
                  </p>
                </Subsection>
              </div>
            </SectionContent>
          </SectionDivisionForeground>
        </SectionDivision>
      </Foreground>
    </Section>
  )
}

export default TribesSection
