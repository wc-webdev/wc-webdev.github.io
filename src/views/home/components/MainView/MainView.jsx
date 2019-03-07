import * as React from 'react'
import LandingSection from '../LandingSection/LandingSection'
import VisionSection from '../VisionSection/VisionSection'
import MissionSection from '../MissionSection/MissionSection'

function MainView(props) {
  return (
    <main>
      <LandingSection />
      <VisionSection />
      <MissionSection />
    </main>
  )
}

MainView.defaultProps = {

}

MainView.propTypes = {

}

export default MainView
