import { createHashHistory, } from 'history'

function History() {
  const history = createHashHistory()
  history.listen(() => {
    window.scrollTo(0, 0)
  })
  return history
}

export default History
