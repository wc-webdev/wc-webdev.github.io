import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import Section from '../../../../components/ui/Section/Section'

const Content = styled.div`
  max-width: 60rem;
  padding: 0 1rem;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  ${media.greaterThan('medium')`
    padding: 0 2rem;
    min-height: 0;
  `}
`

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  padding-top: 4rem;
  ${media.greaterThan('medium')`
    font-size: 2rem;
  `}
`

const SectionContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  ${media.greaterThan('medium')`
    flex-direction: row;
    ${Content}:nth-child(2n) & {
      flex-direction: row-reverse;
    }
  `}
`

const SectionImage = styled.img`
  display: block;
  width: 100%;
`

const SectionContent = styled.div`
  flex-shrink: 0;
  flex-grow: 1;
  ${media.greaterThan('medium')`
    width: 40%;
    margin-right: 4rem;
    ${Content}:nth-child(2n) & {
      margin-right: 0;
      margin-left: 4rem;
    }
  `}
`

const SectionGraphics = styled.div`
  flex: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SectionSubtitle = styled.h3`
  font-size: 2rem;
  font-stretch: condensed;
  width: 0;
  ${media.greaterThan('medium')`
    font-size: 3rem;
  `}
`

const SectionSubtitleText = styled.span`
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
      <Content>
        <ContentBackground />
        <ContentForeground>
          <SectionTitle>
            What's in it for me?
          </SectionTitle>
          <SectionContentWrapper>
            <SectionContent>
              <SectionSubtitle>
                <SectionSubtitleText>
                  Focused
                </SectionSubtitleText> <SectionSubtitleText>
                  conducive
                </SectionSubtitleText> <SectionSubtitleText>
                  learning.
                </SectionSubtitleText>
              </SectionSubtitle>
              <SectionDescription>
                Engage in a mentor-mentee approach
                on learning and sharing useful knowledge.
              </SectionDescription>
            </SectionContent>
            <SectionGraphics>
              <SectionImage
                src="/img/benefits1.svg"
                alt="Focused conducive learning"
              />
            </SectionGraphics>
          </SectionContentWrapper>
        </ContentForeground>
      </Content>
      <Content>
        <ContentBackground />
        <ContentForeground>
          <SectionContentWrapper>
            <SectionContent>
              <SectionSubtitle>
                <SectionSubtitleText>
                  <SectionSubtitleText>Enticing</SectionSubtitleText> <SectionSubtitleText>sponsored</SectionSubtitleText> <SectionSubtitleText>events.</SectionSubtitleText>
                </SectionSubtitleText>
              </SectionSubtitle>
              <SectionDescription>
                Keep up-to-date in latest Web trends
                from events endorsed by the Guild.
              </SectionDescription>
            </SectionContent>
            <SectionGraphics>
              <SectionImage
                src="/img/benefits2.svg"
                alt="Enticing sponsored events"
              />
            </SectionGraphics>
          </SectionContentWrapper>
        </ContentForeground>
      </Content>
      <Content>
        <ContentBackground/>
        <ContentForeground>
          <SectionContentWrapper>
            <SectionContent>
              <SectionSubtitle>
                <SectionSubtitleText>
                  <SectionSubtitleText>Friendly</SectionSubtitleText> <SectionSubtitleText>approachable</SectionSubtitleText> <SectionSubtitleText>peers.</SectionSubtitleText>
                </SectionSubtitleText>
              </SectionSubtitle>
              <SectionDescription>
                Build and strengthen connections
                with people from various projects.
              </SectionDescription>
            </SectionContent>
            <SectionGraphics>
              <SectionImage
                src="/img/benefits3.svg"
                alt="Friendly approachable peers"
              />
            </SectionGraphics>
          </SectionContentWrapper>
        </ContentForeground>
      </Content>
      <Content>
        <ContentBackground />
        <ContentForeground>
          <SectionContentWrapper>
            <SectionContent>
              <SectionSubtitle>
                <SectionSubtitleText>
                  <SectionSubtitleText>Rewarding</SectionSubtitleText> <SectionSubtitleText>fruitful</SectionSubtitleText> <SectionSubtitleText>membership.</SectionSubtitleText>
                </SectionSubtitleText>
              </SectionSubtitle>
              <SectionDescription>
                Earn points for purchasing exclusive items
                from being an outstanding member of the Guild.
              </SectionDescription>
            </SectionContent>
            <SectionGraphics>
              <SectionImage
                src="/img/benefits4.svg"
                alt="Rewarding fruitful membership"
              />
            </SectionGraphics>
          </SectionContentWrapper>
        </ContentForeground>
      </Content>
    </Section>
  )
}

export default BenefitsSection
