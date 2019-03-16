import * as React from 'react'

import View from '../../../../components/ui/View/View'

import MarketingSection from '../MarketingSection/MarketingSection'
import MissionSection from '../MissionSection/MissionSection'
import VisionSection from '../VisionSection/VisionSection'
import CoreValuesSection from '../CoreValuesSection/CoreValuesSection'

function MainView(props) {
  return (
    <View>
      <MarketingSection />
      <MissionSection />
      <VisionSection />
      <CoreValuesSection />
    </View>
  )
}

MainView.defaultProps = {

}

MainView.propTypes = {

}

export default MainView
