import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import Section from '../../../../components/ui/Section/Section'
import LinkButton from '../../../../components/ui/LinkButton/LinkButton'

const Content = styled.div`
  max-width: 60rem;
  padding: 0 1rem;
  margin: 0 auto;
  min-height: 100%;
  &::before {
    // to prevent margin collapsing
    content: ' ';
    overflow: hidden;
    height: 0;
    width: 0;
    display: inline-block;
  }
  &::after {
    // to prevent margin collapsing
    content: ' ';
    overflow: hidden;
    height: 0;
    width: 0;
    display: inline-block;
  }
  ${media.greaterThan('medium')`
    padding: 0 2rem;
  `}
`

const CoreValuesWrapper = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    flex-wrap: wrap;
    margin: -2rem -2rem 4rem;
  `}
`

const CoreValueCell = styled.div`
  margin: 2rem 0 4rem;
  ${media.greaterThan('medium')`
    width: 50%;
    padding: 0 2rem;
    margin: 2rem 0;
  `}
`

const CoreValueTitle = styled.h3`
  margin: 1rem 0;
  font-size: 1.5rem;
  ${media.greaterThan('medium')`
    margin: 0 0 2rem;
  `}
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-stretch: condensed;
  ${media.greaterThan('medium')`
    font-size: 3rem;
    margin: 0 0 4rem;
    padding-top: 4rem;
  `}
`

const CoreValueDescription = styled.p`
  margin: 0 0 1rem 0;
`

const CoreValueCtaWrapper = styled.div`

`

const Cta = styled(LinkButton)`
  display: flex;
  ${media.greaterThan('small')`
    display: inline-flex;
    width: 12rem;
  `}
`


function CommitteesSection(props) {
  return (
    <Section
      {...props}
    >
      <Content>
        <SectionTitle>
          Staff
        </SectionTitle>
        <CoreValuesWrapper>
          <CoreValueCell>
            <CoreValueTitle>
              Core Committee
            </CoreValueTitle>
            <CoreValueDescription>
              Stewards of the Guild. The Core Committee plans and carries out actions which brings value to the Guild's
              Members, and oversees the rest of the Committees to ensure coordination within the Guild's staff.
            </CoreValueDescription>
            <CoreValueCtaWrapper>
              <Cta
                to="/about"
              >
                Learn More
              </Cta>
            </CoreValueCtaWrapper>
          </CoreValueCell>
          <CoreValueCell>
            <CoreValueTitle>
              Technical Committee
            </CoreValueTitle>
            <CoreValueDescription>
              Responsible for recommendations on the Company's best practices. The Technical Committee is essential to
              keep the company up-to-date with the latest trends and paradigms of the industry.
            </CoreValueDescription>
            <CoreValueCtaWrapper>
              <Cta
                to="/about"
              >
                Apply
              </Cta>
            </CoreValueCtaWrapper>
          </CoreValueCell>
          <CoreValueCell>
            <CoreValueTitle>
              Training Committee
            </CoreValueTitle>
            <CoreValueDescription>
              In charge of formulating, preparing, and promulgating learning materials for trainees' and new hires'
              consumption. The Training Committee keeps the caliber of the Company's at a competitive baseline.
            </CoreValueDescription>
            <CoreValueCtaWrapper>
              <Cta
                to="/about"
              >
                Apply
              </Cta>
            </CoreValueCtaWrapper>
          </CoreValueCell>
          <CoreValueCell>
            <CoreValueTitle>
              Interview Committee
            </CoreValueTitle>
            <CoreValueDescription>
              Facilitates and assesses prospective Web developers and Guild staff. The Interview Committee helps find
              culture-fit, exceptional, and determined people to deliver world-class output.
            </CoreValueDescription>
            <CoreValueCtaWrapper>
              <Cta
                to="/about"
              >
                Apply
              </Cta>
            </CoreValueCtaWrapper>
          </CoreValueCell>
        </CoreValuesWrapper>
      </Content>
    </Section>
  )
}

export default CommitteesSection
