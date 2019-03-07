import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query';

const Section = styled.section`
  height: 100vh;
  background-color: var(--color-bg);
  color: var(--color-fg);
`

const CenteredContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: auto;
  font-weight: 300;
  flex-direction: column;
  ${media.greaterThan('large')`
    flex-direction: row-reverse;
    padding: 0 8rem;
  `}
`

const Halfling = styled.div`
  flex: auto;
  padding: 0 5vw;
  text-align: center;
  ${media.greaterThan('large')`
    text-align: left;
  `}
`

const ContentArea = styled.div`
  font-size: 1rem;
  ${media.greaterThan('small')`
    font-size: 1.25rem;
  `}
`

const Title = styled.h2`
  font-size: 3rem;
  margin: 0;
  ${media.greaterThan('large')`
    padding-right: 4rem;
    font-size: 5rem;
  `}
`

const TitleHalfling = styled(Halfling)`
  display: flex;
  align-items: flex-end;
  ${media.greaterThan('large')`
    display: block;
  `}
`

const PowerDescriptors = styled.mark`
  background-color: var(--color-fg);
  color: var(--color-bg);
  padding: 0.25em 0.5em;
`

function MissionSection() {
  return (
    <Section>
      <CenteredContent>
        <TitleHalfling>
          <ContentArea>
            <Title>
              Mission
            </Title>
          </ContentArea>
        </TitleHalfling>
        <Halfling>
          <ContentArea>
            The Guild; through <PowerDescriptors>uniting</PowerDescriptors> and <PowerDescriptors>synthesizing</PowerDescriptors> the paradigms and best practices of Web development, <PowerDescriptors>curates</PowerDescriptors> relevant knowledge to <PowerDescriptors>simplify</PowerDescriptors> challenges; and <PowerDescriptors>transform</PowerDescriptors> the Members, the Company, the industry, and the country towards the strong tradition of progressive and innovative nature of the Web platform.
          </ContentArea>
        </Halfling>
      </CenteredContent>
    </Section>
  )
}

export default MissionSection
