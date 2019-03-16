import * as React from 'react'

import Footer from '../Footer/Footer'

function View(props) {
  const { children, } = props

  return (
    <React.Fragment>
      <main>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default View
