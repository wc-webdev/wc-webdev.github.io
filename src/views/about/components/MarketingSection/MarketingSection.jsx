import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import Logo from '../../../../components/brand/Logo/Logo'

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
`

const Foreground = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Content = styled.div`
  text-align: center;
  padding: 0 1rem;
`

const LogoWrapper = styled.div`
  font-size: 8em;
  line-height: 1;
  ${media.greaterThan('medium')`
    font-size: 10em;
  `}
`

const Text = styled.p`
  text-align: center;
  max-width: 40rem;
  font-size: 1.125rem;
  font-weight: 300;
  margin-bottom: 0;
  ${media.greaterThan('medium')`
    font-size: 1.5rem;
  `}
`

function MarketingSection() {
  return (
    <Section>
      <Background />
      <Foreground>
        <ContentWrapper>
          <Content>
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
            <Text>
              With over 27 members and counting, the Order of the White Lotus is a democratic
              guild committed to excellence and career growth of its Members and the Company through exercising its tenets and
              values.
            </Text>
          </Content>
        </ContentWrapper>
      </Foreground>
    </Section>
  )
}

export default MarketingSection
