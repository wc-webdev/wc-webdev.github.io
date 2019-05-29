import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import Logo from '../../../../components/brand/Logo/Logo'
import TribeLogo from '../../../../components/brand/TribeLogo/TribeLogo'
import Section from '../../../../components/ui/Section/Section'

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
  ${media.greaterThan('large')`
    width: 0;
    flex: auto;
    padding-top: 2rem;
    &:last-child {
      padding-bottom: 2rem;
    }
  `}
`

const SectionContent = styled.div`
  position: relative;
  align-items: center;
  ${SectionDivision}:nth-child(2n) > ${SectionDivisionForeground} > & {
    margin-left: auto;
  }
  
  ${media.greaterThan('medium')`
    width: 60%;
    min-height: 100vh;
    display: flex;
    ${SectionDivision}:nth-child(2n) > ${SectionDivisionForeground} > & {
      width: 50%;
    }
  `}

  ${media.greaterThan('large')`
    margin-left: 0;
    ${SectionDivision}:nth-child(2n) > ${SectionDivisionForeground} > & {
      margin-left: auto;
      margin-right: 0;
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
  
  ${media.greaterThan('large')`
    display: none;
  `}
`

const SectionDivisionLogoContainer = styled.div`
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

const SectionDivisionWrapper = styled.div`
`

const SectionDivisionContainer = styled.div`
  ${media.greaterThan('large')`
    width: 80%;
    display: flex;
    align-items: center;
    margin: 0 auto;
  `}
`

const SectionLogoContainer = styled.div`
  font-size: 55rem;
  opacity: 0.25;
  line-height: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: none;
  ${media.greaterThan('large')`
    display: flex;
  `}
`

function TribesSection(props) {
  return (
    <Section
      {...props}
      background={
        <SectionLogoContainer>
          <Logo1 />
        </SectionLogoContainer>
      }
    >
      <SectionDivisionWrapper>
        <SectionDivisionContainer>
          <SectionDivision>
            <SectionDivisionBackground>
              <SectionDivisionLogoContainer>
                <Logo1 />
              </SectionDivisionLogoContainer>
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
                      Water rushes through rivers, from the small streams to the mighty oceans.
                      As the cousin of Fire, the apps that are crafted in this tribe are reactive, however
                      Water can turn anything into many forms, and it too, exhibits not just a single appearance.
                      Technologies such as Electron, Ionic, React Native, and Vue Native are the tools of the Water Guild.
                    </p>
                    <p>
                      Members of this tribe are expected to have a knowledge in cross-platform development using Web
                      technologies.
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
                      The air we breathe is everywhere. The technologies of Web protocols, HTML, and CSS blows over the
                      land, breathing life to the platform of collaboration and communication.
                    </p>
                    <p>
                      Members of this tribe are knowledgeable with the fundamentals of Web design.
                    </p>
                  </Subsection>
                </div>
              </SectionContent>
            </SectionDivisionForeground>
          </SectionDivision>
          <SectionDivision>
            <SectionDivisionBackground>
              <SectionDivisionLogoContainer>
                <Logo1 />
              </SectionDivisionLogoContainer>
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
                      As stable as the ground where the tallest mountains stand on, the dwellers of this tribe live
                      simply, for they work on the methods that proved effective since the inception of the platform:
                      server-side rendering. Technologies that are relevant to this tribe include Laravel, WordPress,
                      Drupal, and Express to name a few.
                    </p>
                    <p>
                      Members of this tribe know how to work on server-side rendering of Web content.
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
                      The greatest weapons are forged from finest metals. Many a warrior would have his trusty sword
                      to prepare himself for battle. Through Metal, all the complex things can be created as evidence of
                      simpler existence of tools like machines and scaffolds. For the Web platform, projects are
                      built on top of Webpack, Rollup, and Yeoman as examples.
                    </p>
                    <p>
                      Members of this sub-discipline are composed of elite forces of project setup and ensuring of
                      development best practices.
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
                      Watch how the tongues of fire turn everything into ash; put them in torches and they light up the
                      way. Like Epimetheus giving fire to the humans that opened them to many possibilities, it is the
                      tribe of Fire that opened the platform to apps that have never imagined before, from technologies
                      such as React, Vue, Angular, and Polymer.
                    </p>
                    <p>
                      Members of this tribe are well-versed with development of single-page apps (SPAs).
                    </p>
                  </Subsection>
                </div>
              </SectionContent>
            </SectionDivisionForeground>
          </SectionDivision>
        </SectionDivisionContainer>
      </SectionDivisionWrapper>
    </Section>
  )
}

export default TribesSection
