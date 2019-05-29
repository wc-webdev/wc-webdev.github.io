import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import Section from '../../../../components/ui/Section/Section'

const Content = styled.div`
  max-width: 60rem;
  padding: 0 1rem;
  margin: 0 auto;
  min-height: 100%;
  &::before {
    // to prevent margin collapsing
    content: ' ';
    overflow: hidden;
    height: 0;
    width: 0;
    display: inline-block;
  }
  &::after {
    // to prevent margin collapsing
    content: ' ';
    overflow: hidden;
    height: 0;
    width: 0;
    display: inline-block;
  }
  ${media.greaterThan('medium')`
    padding: 0 2rem;
  `}
`

const CoreValuesWrapper = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    flex-wrap: wrap;
    margin: -2rem -2rem 0;
  `}
`

const CoreValueCell = styled.div`
  margin: 2rem 0;
  ${media.greaterThan('medium')`
    width: 50%;
    padding: 0 2rem;
  `}
`

const CoreValueTitle = styled.h3`
  margin: 1rem 0;
  font-size: 1.5rem;
  ${media.greaterThan('medium')`
    margin: 0 0 2rem;
  `}
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-stretch: condensed;
  ${media.greaterThan('medium')`
    font-size: 3rem;
    margin: 0 0 4rem;
    padding-top: 4rem;
  `}
`

const CoreValueDescription = styled.p`
  margin: 0;
`

function CoreValuesSection(props) {
  return (
    <Section
      {...props}
    >
      <Content>
        <SectionTitle>
          Core Values
        </SectionTitle>
        <CoreValuesWrapper>
          <CoreValueCell>
            <CoreValueTitle>
              Eloquence
            </CoreValueTitle>
            <CoreValueDescription>
              A Guild Member is encouraged to speak up their perspectives fluently and clearly during discourse. One may find themselves in an argumentative position, and are expected to make a resolution accounting all of the relevant insights of the Guild.
            </CoreValueDescription>
          </CoreValueCell>
          <CoreValueCell>
            <CoreValueTitle>
              Proactiveness
            </CoreValueTitle>
            <CoreValueDescription>
              A Guild Member, besides having autonomy through taking up responsibility are also expected to act on their own decisions while being mindful of effects from interpersonal contexts, to the Company and its place in the industry.
            </CoreValueDescription>
          </CoreValueCell>
          <CoreValueCell>
            <CoreValueTitle>
              Introspection
            </CoreValueTitle>
            <CoreValueDescription>
              The Guild emphasizes introspection—the examination or observation of one’s own mental or emotional processes. Taking a step back to be conscious of differences allows ideas to be considered, improved, and reconciled.
            </CoreValueDescription>
          </CoreValueCell>
          <CoreValueCell>
            <CoreValueTitle>
              Curiosity
            </CoreValueTitle>
            <CoreValueDescription>
              The Guild encourages open and undying desire in continuous learning, from daily experiences to its members. This applies not just to different methodologies, emerging technologies, and varying practices in the field, but also for personal growth.
            </CoreValueDescription>
          </CoreValueCell>
        </CoreValuesWrapper>
      </Content>
    </Section>
  )
}

export default CoreValuesSection
