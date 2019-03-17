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

const SectionTitle = styled.h2`
  font-size: 2rem;
  padding-top: 4rem;
  ${media.greaterThan('medium')`
    font-size: 3rem;
    margin: 0 0 4rem;
  `}
`

function TribesSection(props) {
  return (
    <Section
      {...props}
    >
      <Background />
      <Foreground>
        <Content>
          <SectionTitle>
            Tribes
          </SectionTitle>
        </Content>
      </Foreground>
    </Section>
  )
}

export default TribesSection
