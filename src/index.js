import React from 'react'
import ReactDOM from 'react-dom'
import './normalize.css'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import {S_GLOBAL} from './Components/styled/global'
import {S_NORMALIZE} from './Components/styled/normalize'

ReactDOM.render(
	<Router>
		<S_GLOBAL />
		<S_NORMALIZE />
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Router>,
	document.getElementById('root')
)
