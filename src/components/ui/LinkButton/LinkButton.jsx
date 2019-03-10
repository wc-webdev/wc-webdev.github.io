import * as React from 'react'
import { Link, } from 'react-router-dom'
import styled from 'styled-components'

const StyledAbsoluteLink = styled.a`
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
  
    return `
        background-color: ${bgColor};
        border-color: ${borderColor};
        color: ${fgColor};
      `
  }}
  
  &:active {
    background-color: var(--color-bg-active);
    border-color: var(--color-bg-active);
    color: var(--color-fg-active);
  }
`

const StyledLink = styled(Link)`
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
    
    return `
      background-color: ${bgColor};
      border-color: ${borderColor};
      color: ${fgColor};
    `
  }}
  
  &:active {
    background-color: var(--color-bg-active);
    border-color: var(--color-bg-active);
    color: var(--color-fg-active);
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

  if (absolute) {
    return (
      <StyledAbsoluteLink
        {...theProps}
        href={to}
        variant={variant}
      >
        {children}
      </StyledAbsoluteLink>
    )
  }

  return (
    <StyledLink
      {...theProps}
      to={to}
      variant={variant}
    >
      {children}
    </StyledLink>
  )
}

export default LinkButton
