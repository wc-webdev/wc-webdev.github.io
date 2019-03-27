import * as React from 'react'

import View from '../../../../components/ui/View/View'

import MarketingSection from '../MarketingSection/MarketingSection'
import TribesSection from '../TribesSection/TribesSection'
import MissionSection from '../MissionSection/MissionSection'
import VisionSection from '../VisionSection/VisionSection'
import CoreValuesSection from '../CoreValuesSection/CoreValuesSection'

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
      <MarketingSection
        id={resolve(match, '')}
      />
      <MissionSection
        id={resolve(match, 'mission')}
      />
      <VisionSection
        id={resolve(match, 'vision')}
      />
      <TribesSection
        id={resolve(match, 'tribes')}
      />
      <CoreValuesSection
        id={resolve(match, 'core-values')}
      />
    </View>
  )
}

MainView.defaultProps = {

}

MainView.propTypes = {

}

export default MainView
