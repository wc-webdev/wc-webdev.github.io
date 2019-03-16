import * as React from 'react'
import styled from 'styled-components'

const SvgBase = styled.svg`
  display: inline-block;
  vertical-align: top;
  height: 1em;
`

const StyledPolygon1 = styled.polygon`
  fill: currentColor;
`

const StyledPolygon2 = styled.polygon`
  fill: currentColor;
`

function WhiteCloakLogo(props) {
  return (
    <SvgBase
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 315.86 147.56"
    >
      <StyledPolygon1
        points="145.92 0.49 82.38 147.5 125.25 147.5 188.79 0.49 145.92 0.49"
      />
      <StyledPolygon2
        points="205.3 101.12 208.7 102.19 252.66 0.49 210.72 0.49 147.19 147.5 189.12 147.5 197.54 128.03 205.3 101.12"
      />
      <StyledPolygon1
        points="79.84 0.49 16.3 147.5 59.17 147.5 122.71 0.49 79.84 0.49"
      />
      <StyledPolygon2
        points="56.85 0.44 13.98 0 0 31.56 36.88 43.44 56.85 0.44"
      />
      <StyledPolygon2
        points="264.9 24.3 300.47 35.76 315.86 0.15 275.34 0.15 275.15 0.49 275.2 0.49 264.9 24.3"
      />
      <StyledPolygon2
        points="228.56 108.4 211.66 147.48 253.18 147.56 265.16 119.85 228.56 108.4"
      />
      <StyledPolygon2
        points="205.3 101.12 197.54 128.03 208.7 102.19 205.3 101.12"
      />
    </SvgBase>
  )
}

export default WhiteCloakLogo
