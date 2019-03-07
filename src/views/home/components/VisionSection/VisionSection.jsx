import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  height: 100vh;
  background-color: var(--color-fg);
  color: var(--color-bg);
`

const CenteredContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: auto;
  padding: 0 8rem;
  font-weight: 300;
`

const Halfling = styled.div`
  flex: auto;
  padding: 0 5vw;
`

const ContentArea = styled.div`
  font-size: 1.25rem;
`

const Title = styled.h2`
  padding-left: 8rem;
  font-size: 5rem;
`

const PowerDescriptors = styled.mark`
  background-color: var(--color-bg);
  color: var(--color-fg);
  padding: 0.25em 0.5em;
`

function VisionSection() {
  return (
    <Section>
      <CenteredContent>
        <Halfling>
          <ContentArea>
            <Title>
              Vision
            </Title>
          </ContentArea>
        </Halfling>
        <Halfling>
          <ContentArea>
            The Guild orients itself to becoming a <PowerDescriptors>thriving</PowerDescriptors> community
            of <PowerDescriptors>passion-driven</PowerDescriptors> individuals, pushing the Web development towards the
            strong tradition
            of <PowerDescriptors>progressive</PowerDescriptors> and <PowerDescriptors>innovative</PowerDescriptors> nature
            of the Web platform.
          </ContentArea>
        </Halfling>
      </CenteredContent>
    </Section>
  )
}

export default VisionSection
