import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

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

const Content = styled.div`
  max-width: 60rem;
  padding: 0 1rem;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  ${media.greaterThan('medium')`
    padding: 0 2rem;
  `}
`

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  padding-top: 4rem;
  ${media.greaterThan('medium')`
    font-size: 2rem;
  `}
`

const SectionTitleDummy = styled.div`
  height: 6rem;
  padding-top: 4rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const SectionContentWrapper = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    align-items: center;
  `}
`

const SectionContentWrapperAlt = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
  `}
`

const SectionContent = styled.div`
  ${media.greaterThan('medium')`
    width: 40%;
  `}
`

const SectionSubtitle = styled.h3`
  font-size: 2rem;
  font-stretch: condensed;
  width: 0;
  ${media.greaterThan('medium')`
    font-size: 3rem;
  `}
`

const SectionDescription = styled.p`
  ${media.greaterThan('medium')`
    font-size: 1.5rem;
    font-weight: var(--font-weight-light-base);
  `}
`

const ContentBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

const ContentForeground = styled.div`
  position: relative;
`

function BenefitsSection(props) {
  return (
    <Section
      {...props}
    >
      <Background />
      <Foreground>
        <Content>
          <ContentBackground />
          <ContentForeground>
            <SectionTitle>
              What's in it for me?
            </SectionTitle>
            <SectionContentWrapper>
              <SectionContent>
                <SectionSubtitle>
                  Focused conducive learning.
                </SectionSubtitle>
                <SectionDescription>
                  Engage in a mentor-mentee approach
                  on learning and sharing useful knowledge.
                </SectionDescription>
              </SectionContent>
            </SectionContentWrapper>
          </ContentForeground>
        </Content>
        <Content>
          <ContentBackground />
          <ContentForeground>
            <SectionTitleDummy/>
            <SectionContentWrapperAlt>
              <SectionContent>
                <SectionSubtitle>
                  Enticing sponsored events.
                </SectionSubtitle>
                <SectionDescription>
                  Keep up-to-date in latest Web trends
                  from events endorsed by the Guild.
                </SectionDescription>
              </SectionContent>
            </SectionContentWrapperAlt>
          </ContentForeground>
        </Content>
        <Content>
          <ContentBackground/>
          <ContentForeground>
            <SectionTitleDummy/>
            <SectionContentWrapper>
              <SectionContent>
                <SectionSubtitle>
                  Friendly approachable peers.
                </SectionSubtitle>
                <SectionDescription>
                  Build and strengthen connections
                  with people from various projects.
                </SectionDescription>
              </SectionContent>
            </SectionContentWrapper>
          </ContentForeground>
        </Content>
        <Content>
          <ContentBackground />
          <ContentForeground>
            <SectionTitleDummy/>
            <SectionContentWrapperAlt>
              <SectionContent>
                <SectionSubtitle>
                  Rewarding fruitful membership.
                </SectionSubtitle>
                <SectionDescription>
                  Earn points for purchasing exclusive items
                  from being an outstanding member of the Guild.
                </SectionDescription>
              </SectionContent>
            </SectionContentWrapperAlt>
          </ContentForeground>
        </Content>
      </Foreground>
    </Section>
  )
}

export default BenefitsSection
