import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link, } from 'react-router-dom'

import WordmarkLogo from '../../brand/WordmarkLogo/WordmarkLogo'
import WhiteCloakLogo from '../../brand/WhiteCloakLogo/WhiteCloakLogo'

const Base = styled.footer`
  --color-bg: #000;
  --color-fg: #fff;
  
  background-color: var(--color-bg);
  
  color: var(--color-fg);
  padding: 2rem 0;
`

const Container = styled.div`
  padding: 0 1rem;
  max-width: 48rem;
  margin: 0 auto;
  ${media.greaterThan('medium')`
    padding: 0 2rem;
  `}
`

const Row = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`

const Cell = styled.div`
`

const FooterContent = styled.div`
  display: flex;
  line-height: 1.5;
  align-items: center;
  justify-content: center;
  ${media.greaterThan('medium')`
    justify-content: flex-start;
  `}
`

const LogoWrapper = styled.div`
  font-size: 4rem;
  margin-right: 0.5rem;
  ${media.greaterThan('small')`
    margin-right: 0;
  `}
`

const WhiteCloakLogoWrapper = styled.div`
  font-size: 3rem;
  line-height: 1;
`

const StyledWordmarkLogo = styled(WordmarkLogo)`
  display: flex;
`

const StyledWhiteCloakLogo = styled(WhiteCloakLogo)`
`

const WhiteCloakFooterContent = styled.div`
  text-align: center;
  margin: 2rem 0;
  ${media.greaterThan('medium')`
    margin: 0;
    text-align: right;
  `}
`

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  line-height: 1.5;
`

const WhiteCloakWordmark = styled.div`
  font-family: var(--font-family-display);
  white-space: nowrap;
`

const NavRow = styled.nav`
  margin: 0.5rem 0 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const NavColumn = styled.div`
  margin: 0.5em 0;
  width: 50%;
  ${media.greaterThan('medium')`
    width: auto;
  `}
`

const NavItem = styled.div`
  margin: 0;
`

const NavHeader = styled.h2`
  font-size: 1.25rem;
  margin: 1rem 0;
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-light-base);
`

const NavLink = styled(Link)`
  &:link {
    color: inherit;
  }
  
  &:visited {
    color: inherit;
  }
`

const NavAbsoluteLink = styled.a`
   &:link {
    color: inherit;
  }
  
  &:visited {
    color: inherit;
  }
`

function Footer() {
  const now = new Date()
  const startYear = 2019
  const thisYear = now.getFullYear()

  const copyrightYear = startYear === thisYear ? startYear : `${startYear}-${thisYear}`

  return (
    <Base>
      <Container>
        <Row>
          <Cell>
            <FooterContent>
              <LogoWrapper>
                <StyledWordmarkLogo />
              </LogoWrapper>
              <div>
                <WhiteCloakWordmark>
                  Order of the White Lotus
                </WhiteCloakWordmark>
                <div>
                  Web Development Guild
                </div>
                <div>
                  wdg@whitecloak.com
                </div>
              </div>
            </FooterContent>
          </Cell>
          <Cell>
            <WhiteCloakFooterContent>
              <WhiteCloakLogoWrapper>
                <StyledWhiteCloakLogo />
              </WhiteCloakLogoWrapper>
              <WhiteCloakWordmark>
                White Cloak Technologies
              </WhiteCloakWordmark>
            </WhiteCloakFooterContent>
          </Cell>
        </Row>
        <NavRow>
          <NavColumn>
            <NavHeader>
              Guild
            </NavHeader>
            <NavItem>
              <NavLink
                to="/about"
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/home#sectionBenefits"
              >
                Benefits
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/about#sectionMembership"
              >
                Membership
              </NavLink>
            </NavItem>
          </NavColumn>
          <NavColumn>
            <NavHeader>
              Charter
            </NavHeader>
            <NavItem>
              <NavLink
                to="/about#sectionMission"
              >
                Mission &amp; Vision
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/about#sectionCoreValues"
              >
                Core Values
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/about#sectionTribes"
              >
                Tribes
              </NavLink>
            </NavItem>
          </NavColumn>
          <NavColumn>
            <NavHeader>
              Members
            </NavHeader>
            <NavItem>
              <NavLink
                to="/events"
              >
                Events
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/downloads"
              >
                Downloads
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/blog"
              >
                Blog
              </NavLink>
            </NavItem>
          </NavColumn>
          <NavColumn>
            <NavHeader>
              Links
            </NavHeader>
            <NavItem>
              <NavAbsoluteLink
                href="https://github.com/wc-webdev"
                target="_blank"
              >
                GitHub
              </NavAbsoluteLink>
            </NavItem>
            <NavItem>
              <NavAbsoluteLink
                href="https://www.whitecloak.com"
                target="_blank"
              >
                Company Website
              </NavAbsoluteLink>
            </NavItem>
            <NavItem>
              <NavAbsoluteLink
                href="mailto:wdg@whitecloak.com"
              >
                Email
              </NavAbsoluteLink>
            </NavItem>
          </NavColumn>
        </NavRow>
        <Copyright>
          Copyright &copy; {copyrightYear} Order&nbsp;of&nbsp;the&nbsp;White&nbsp;Lotus. All&nbsp;Rights&nbsp;Reserved.
        </Copyright>
      </Container>
    </Base>
  )
}

export default Footer
