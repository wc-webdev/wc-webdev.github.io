import * as React from 'react'

import View from '../../../../components/ui/View/View'

import LandingSection from '../LandingSection/LandingSection'
import BenefitsSection from '../BenefitsSection/BenefitsSection'
import CtaSection from '../CtaSection/CtaSection'

const resolve = (match, url) => {
  return [
    match.url,
    url,
  ]
    .filter(s => s.length > 0)
    .join('/')
}

function MainView(props) {
  const { match, } = props

  return (
    <View
      {...props}
    >
      <LandingSection
        id={resolve(match, '')}
      />
      <BenefitsSection
        id={resolve(match, 'benefits')}
      />
      <CtaSection />
    </View>
  )
}

MainView.defaultProps = {

}

MainView.propTypes = {

}

export default MainView
