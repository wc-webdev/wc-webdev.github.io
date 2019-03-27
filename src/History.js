import { createHashHistory, } from 'history'
//
//function animatedScrollTo(fromX, fromY, toX, toY, duration) {
//  const refTimestamp = Date.now()
//  const interpFunction = (a, b, ratio) => {
//    return a + ((b - a) * ratio)
//  }
//
//  const handle = window.setInterval(() => {
//    const theTimeStamp = Date.now()
//    const ratio = (theTimeStamp - refTimestamp) / duration
//    const theX = interpFunction(fromX, toX, ratio)
//    const theY = interpFunction(fromY, toY, ratio)
//    console.log(ratio, theX, theY)
//    window.scrollTo(theX, theY)
//    if (theTimeStamp - refTimestamp > duration) {
//      window.scrollTo(toX, toY)
//      window.clearInterval(handle)
//    }
//  }, 1)
//}

function History() {
  const history = createHashHistory()
  history.listen(() => {
    window.setTimeout(() => {
      //const fromScrollX = window.scrollX
      //const fromScrollY = window.scrollY

      let scrollX = 0
      let scrollY = 0

      const targetElement = window.document.getElementById(history.location.pathname)

      if (targetElement) {
        scrollX = targetElement.offsetLeft
        scrollY = targetElement.offsetTop
      }

      window.scrollTo(scrollX, scrollY)

      //animatedScrollTo(fromScrollX, fromScrollY, scrollX, scrollY, 1000)
    })
  })
  return history
}

export default History
