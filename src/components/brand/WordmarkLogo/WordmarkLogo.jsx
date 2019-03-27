import * as React from 'react'
import styled, { css, } from 'styled-components'
import media from 'styled-media-query'

import Logo from '../Logo/Logo'

const SvgBase = styled(Logo)`
  margin-bottom: 0.0625em;
  ${media.greaterThan('small')`
    margin-right: 0.125em;
    margin-bottom: 0;
  `}
`

const Wordmark = styled.h1`
  font-family: var(--font-family-display);
  font-size: 0.1875em;
  line-height: 1;
  text-align: center;
  margin: 0;
  ${props => props.wordmarkType === 'full' && css`
    width: 7.5em;
  `}
  
  ${media.greaterThan('small')`
    text-align: left;
    font-size: 0.28125em;
  `}
`

const Base = styled.div`
  display: inline-flex;
  vertical-align: top;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  user-select: none;
  cursor: default;
  flex-direction: column;
  ${media.greaterThan('small')`
    flex-direction: row;
  `}
`

function WordmarkLogo(props) {
  const { wordmarkType, } = props
  return (
    <Base
      {...props}
    >
      <SvgBase />
      {
        wordmarkType === 'full'
        && (
          <Wordmark
            wordmarkType={wordmarkType}
          >
            Order of the White Lotus
          </Wordmark>
        )
      }
      {
        wordmarkType === 'compact'
        && (
          <Wordmark
            wordmarkType={wordmarkType}
          >
            OWL
          </Wordmark>
        )
      }
    </Base>
  )
}

WordmarkLogo.defaultProps = {
  wordmarkLocation: 'right',
  wordmarkType: null,
}

export default WordmarkLogo
