import * as React from 'react'
import styled from 'styled-components'
import generateTexture from '../../../services/generateTexture'

const EVEN_TEXTURE_PARAMS = {
  items: [
    [0, "clouds", { "rgba": [192, 192, 192, 255], "roughness": 5 }],
    [0, "contrast", { "adjust": 255 }],
    [0, "threshold"],
    [0, "invert"],
    [0, "dots", {
      "gridX": 32,
      "gridY": 32,
      "size": 64,
      "rgba": [255, 255, 255, 255],
      "shape": "circle",
      "xsines": 1,
      "ysines": 1,
      "dynamic": true
    }],
    [0, "to_alpha", {"rgba": [39, 39, 57, 255], }],
  ]
}

const ODD_TEXTURE_PARAMS = {
  items: [
    [0, "clouds", { "rgba": [192, 192, 192, 255], "roughness": 5 }],
    [0, "contrast", { "adjust": 255 }],
    [0, "threshold"],
    [0, "invert"],
    [0, "dots", {
      "gridX": 24,
      "gridY": 24,
      "size": 64,
      "rgba": [255, 255, 255, 255],
      "shape": "circle",
      "xsines": 0.5,
      "ysines": 0.5,
      "dynamic": true
    }],
    [0, "to_alpha", {"rgba": [0, 0, 0, 255], }],
  ]
}

const Base = styled.section`
  min-height: 100vh;
  position: relative;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: skewY(5deg);
  &::after {
    content: ' ';
    background-image: url('${generateTexture(ODD_TEXTURE_PARAMS)}');
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    opacity: 0.15;
    transform: skewY(-5deg);
  }
  ${Base}:nth-child(2n) > & {
    background-color: var(--color-fg);
    &::after {
      background-image: url('${generateTexture(EVEN_TEXTURE_PARAMS)}');
      opacity: 0.045;
    }
  }
`

const Foreground = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  position: relative;
  padding-top: 2rem;
  ${Base}:nth-child(2n) > & {
    color: var(--color-bg);
  }
`

function Section(props) {
  const { children, background, ...etcProps } = props
  return (
    <Base
      {...etcProps}
    >
      <Background>
        {background}
      </Background>
      <Foreground>
        {children}
      </Foreground>
    </Base>
  )
}

export default Section
