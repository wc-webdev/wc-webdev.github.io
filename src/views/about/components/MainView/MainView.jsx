import * as React from 'react'

import View from '../../../../components/ui/View/View'

import MarketingSection from '../MarketingSection/MarketingSection'
import TribesSection from '../TribesSection/TribesSection'
import MissionSection from '../MissionSection/MissionSection'
import VisionSection from '../VisionSection/VisionSection'
import CoreValuesSection from '../CoreValuesSection/CoreValuesSection'

function MainView(props) {
  return (
    <View
      {...props}
    >
      <MarketingSection
        id="sectionMarketing"
      />
      {/*<TribesSection*/}
        {/*id="sectionTribes"*/}
      {/*/>*/}
      <MissionSection
        id="sectionMission"
      />
      <VisionSection
        id="sectionVision"
      />
      <CoreValuesSection
        id="sectionCoreValues"
      />
    </View>
  )
}

MainView.defaultProps = {

}

MainView.propTypes = {

}

export default MainView
