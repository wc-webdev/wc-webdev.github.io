import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import LinkButton from '../../../../components/ui/LinkButton/LinkButton';

const Section = styled.section`
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
  padding: 2rem 1rem;
  margin: 0 auto;
  position: relative;
  text-align: center;
  ${media.greaterThan('medium')`
    padding: 2rem 2rem;
  `}
`

const Cta = styled(LinkButton)`
  margin: 1rem 0.5rem 0;
  display: flex;
  ${media.greaterThan('small')`
    display: inline-flex;
    width: 12rem;
    margin: 0 0.5rem;
  `}
  ${media.greaterThan('medium')`
    margin: 0 1rem;
  `}
`

const CtaStatement = styled.strong`
  display: block;
  font-size: 1.75rem;
  margin-bottom: 2rem;
  font-family: var(--font-family-display);
  line-height: 1;
`

function CtaSection(props) {
  return (
    <Section
      {...props}
    >
      <Background />
      <Foreground>
        <Content>
          <CtaStatement>
            Get involved. Become the best.
          </CtaStatement>
          <Cta
            to="mailto:wdg@whitecloak.com?subject=[Application]"
            variant="primary"
            absolute
          >
            Join Now
          </Cta>
          <Cta
            to="/about"
          >
            Learn More
          </Cta>
        </Content>
      </Foreground>
    </Section>
  )
}

export default CtaSection
