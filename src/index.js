import React from 'react'
import ReactDOM from 'react-dom'

import './style/style.css'

import App from './App'
import registerServiceWorker from './registerServiceWorker.js'

registerServiceWorker()

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
