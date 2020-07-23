import * as React from 'react'
import styled from 'styled-components'

const Base = styled.section`
  min-height: calc(100vh + 8.8vw);
  position: relative;
  :first-child {
    min-height: calc(100vh + 4.4vw);
  }
  :last-child {
    min-height: calc(100vh + 4.4vw);
  }
  :nth-child(2n) {
    --color-bg: var(--color-positive);
    --color-fg: var(--color-negative);
  }
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: skewY(5deg);
  background-color: var(--color-bg);
  ${Base}:first-child > & {
    height: calc(100% + 8.8vw);
    top: -4.4vw;
  }
  ${Base}:first-child > &::after {
    top: 0;
  }
  ${Base}:last-child > & {
    height: calc(100% + 8.8vw);
  }
`

const Foreground = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  position: relative;
  padding-top: 2rem;
  color: var(--color-fg);
`

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
  transform: skewY(-5deg);
`

function Section(props) {
  const { children, background, ...etcProps } = props
  return (
    <Base
      {...etcProps}
    >
      <Background>
        <BackgroundContainer>
          {background}
        </BackgroundContainer>
      </Background>
      <Foreground>
        {children}
      </Foreground>
    </Base>
  )
}

export default Section
