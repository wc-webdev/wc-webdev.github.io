import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  height: 100vh;
  position: relative;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-fg);
`

const Foreground = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: var(--color-bg);
`

function BenefitsSection() {
  return (
    <Section>
      <Background />
      <Foreground>
        Hello
      </Foreground>
    </Section>
  )
}

export default BenefitsSection
