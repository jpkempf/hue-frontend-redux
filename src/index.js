import React from 'react'
import ReactDOM from 'react-dom'

import api from './config/api'
import App from './App'

ReactDOM.render(
  <App api={api} />,
  document.getElementById('root')
)
