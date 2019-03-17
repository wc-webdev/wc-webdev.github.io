import * as React from 'react'

import View from '../../../../components/ui/View/View'

import LandingSection from '../LandingSection/LandingSection'
import BenefitsSection from '../BenefitsSection/BenefitsSection'

function MainView(props) {
  return (
    <View
      {...props}
    >
      <LandingSection
        id="sectionLanding"
      />
      <BenefitsSection
        id="sectionBenefits"
      />
    </View>
  )
}

MainView.defaultProps = {

}

MainView.propTypes = {

}

export default MainView
