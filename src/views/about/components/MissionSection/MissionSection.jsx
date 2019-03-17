import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const Section = styled.section`
  position: relative;
  height: 100vh;
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
  height: 100%;
  position: relative;
  ${Section}:nth-child(2n) > & {
    color: var(--color-bg);
  }
`

const ContentWrapper = styled.div`
  max-width: 60rem;
  padding: 0 1rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  ${media.greaterThan('medium')`
    flex-direction: row-reverse;
    text-align: left;
    padding: 0 2rem;
  `}
`

const Title = styled.h2`
  font-size: 2rem;
  margin: 0;
  ${media.greaterThan('small')`
    font-size: 3.5rem;
  `}
  ${media.greaterThan('medium')`
    font-size: 5rem;
    display: flex;
    flex: auto;
    justify-content: center;
    align-items: center;
    width: 0;
    height: 100%;
  `}
`

const Content = styled.p`
  font-weight: var(--font-weight-normal-base);
  font-size: 1.125rem;
  ${media.greaterThan('medium')`
    font-weight: var(--font-weight-light-base);
    font-size: 1.5rem;
    margin: 0 2rem 0 0;
    width: 0;
    flex: auto;
    display: flex;
    align-items: center;
    height: 100%;
    @media (min-aspect-ratio: 2/1) { 
      font-size: 1.125rem;
      font-weight: var(--font-weight-normal-base);
    }
  `}
  ${media.greaterThan('large')`
    @media (min-aspect-ratio: 2/1) {
      font-weight: var(--font-weight-light-base);
      font-size: 1.5rem;
    }
  `}
`

function MissionSection(props) {
  return (
    <Section
      {...props}
    >
      <Background />
      <Foreground>
        <ContentWrapper>
          <Title>
            Mission
          </Title>
          <Content>
            The Guild; through uniting and synthesizing the paradigms and best practices of Web development, curates
            relevant knowledge to simplify challenges; and transform the Members, the Company, the industry, and the
            country towards the strong tradition of progressive and innovative nature of the Web platform.
          </Content>
        </ContentWrapper>
      </Foreground>
    </Section>
  )
}

export default MissionSection
