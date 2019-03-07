import * as React from 'react'
import styled from 'styled-components'

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
  padding: 0 8rem;
  font-weight: 300;
  flex-direction: row-reverse;
`

const Halfling = styled.div`
  flex: auto;
  padding: 0 5vw;
`

const ContentArea = styled.div`
  font-size: 1.25rem;
`

const Title = styled.h2`
  font-size: 5rem;
  padding-right: 4rem;
`

const Content = styled.p`
  
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
        <Halfling>
          <ContentArea>
            <Title>
              Mission
            </Title>
          </ContentArea>
        </Halfling>
        <Halfling>
          <ContentArea>
            <Content>
              The Guild; through <PowerDescriptors>uniting</PowerDescriptors> and <PowerDescriptors>synthesizing</PowerDescriptors> the paradigms and best practices of Web development, <PowerDescriptors>curates</PowerDescriptors> relevant knowledge to <PowerDescriptors>simplify</PowerDescriptors> challenges; and <PowerDescriptors>transform</PowerDescriptors> the Members, the Company, the industry, and the country towards the strong tradition of progressive and innovative nature of the Web platform.
            </Content>
          </ContentArea>
        </Halfling>
      </CenteredContent>
    </Section>
  )
}

export default MissionSection
