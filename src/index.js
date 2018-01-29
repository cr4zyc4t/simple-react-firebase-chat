import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ChatApp from './components/ChatApp'
import { configureStore } from './store'

import registerServiceWorker from './registerServiceWorker'
import './index.css'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ChatApp />
  </Provider>, document.getElementById('root'))
registerServiceWorker()
