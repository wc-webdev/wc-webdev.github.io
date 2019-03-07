import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

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
  font-weight: 300;
  flex-direction: column;
  ${media.greaterThan('large')`
    flex-direction: row;
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

const TitleHalfling = styled(Halfling)`
  display: flex;
  align-items: flex-end;
  ${media.greaterThan('large')`
    display: block;
  `}
`

const Title = styled.h2`
  font-size: 3rem;
  margin: 0;
  ${media.greaterThan('large')`
    padding-left: 8rem;
    font-size: 5rem;
  `}
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
        <TitleHalfling>
          <ContentArea>
            <Title>
              Vision
            </Title>
          </ContentArea>
        </TitleHalfling>
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
