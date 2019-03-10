import * as React from 'react'
import MarketingSection from '../MarketingSection/MarketingSection'
import MissionSection from '../MissionSection/MissionSection'
import VisionSection from '../VisionSection/VisionSection'
import CoreValuesSection from '../CoreValuesSection/CoreValuesSection'

function MainView(props) {
  return (
    <main>
      <MarketingSection />
      <MissionSection />
      <VisionSection />
      <CoreValuesSection />
    </main>
  )
}

MainView.defaultProps = {

}

MainView.propTypes = {

}

export default MainView
