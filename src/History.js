import { createBrowserHistory, } from 'history'

function History() {
  const history = createBrowserHistory()
  history.listen(() => {
    window.scrollTo(0, 0)
  })
  return history
}

export default History
