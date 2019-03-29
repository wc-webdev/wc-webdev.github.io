import * as React from 'react'
import { Link, } from 'react-router-dom'
import styled, { keyframes, css, } from 'styled-components'

const animatedBackground = keyframes`
  0% {
    background-position-x: 200%;
  }
  
  100% {
    background-position-x: -200%;
    
  }
`

const StyledLink = styled.a`
  height: 3rem;
  font-family: var(--font-family-display);
  font-size: 1.125rem;
  border-style: solid;
  border-width: 0.125rem;
  border-radius: 0.125rem;
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  animation-name: ${animatedBackground};
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-size: 800% auto;
  user-select: none;
  
  ${props => {
    let bgColor
    let borderColor
    let fgColor
    let borderWidth
  
    switch (props.variant) {
      case 'primary':
        bgColor = 'var(--color-fg)'
        borderColor = 'var(--color-fg)'
        fgColor = 'var(--color-bg)'
        borderWidth = '0'
        break
      default:
        bgColor = 'transparent'
        borderColor = 'var(--color-fg)'
        fgColor = 'var(--color-fg)'
        borderWidth = '0.125rem'
        break
    }
  
    return css`
      background-color: ${bgColor};
      border-color: ${borderColor};
      color: ${fgColor};
      border-width: ${borderWidth};
    `
  }}
  
  &:active {
    color: #fff;
    background-image: linear-gradient(to right, #C4984C, #CF633B, #B83E6C, #983BCF, #5961C4, #983BCF, #B83E6C, #CF633B, #C4984C);
    border: 0;
  }
`

function LinkButton(props) {
  const {
    children,
    to,
    variant,
    absolute,
    ...theProps
  } = props

  return (
    <StyledLink
      {...theProps}
      as={absolute ? 'a' : Link}
      to={to}
      variant={variant}
    >
      {children}
    </StyledLink>
  )
}

export default LinkButton
