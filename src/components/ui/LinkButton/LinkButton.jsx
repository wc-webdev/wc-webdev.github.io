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
  line-height: 1;
  vertical-align: top;
  box-sizing: border-box;
  
  ${props => {
    let bgColor
    let borderColor
    let fgColor
  
    switch (props.variant) {
      case 'primary':
        bgColor = 'var(--color-fg)'
        borderColor = 'var(--color-fg)'
        fgColor = 'var(--color-bg)'
        break
      default:
        bgColor = 'transparent'
        borderColor = 'var(--color-fg)'
        fgColor = 'var(--color-fg)'
        break
    }
  
    return css`
      background-color: ${bgColor};
      border-color: ${borderColor};
      color: ${fgColor}; 
    `
  }}
  
  &:active {
    color: #fff;
    background-image: linear-gradient(to right, #C4984C, #CF633B, #B83E6C, #983BCF, #5961C4, #983BCF, #B83E6C, #CF633B, #C4984C);
    border-color: transparent;
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
      to={absolute ? null : to}
      href={absolute ? to : null}
      target={absolute ? '_blank' : null}
      variant={variant}
    >
      {children}
    </StyledLink>
  )
}

export default LinkButton
