import React from 'react'
import ReactDOM from 'react-dom'
import './normalize.css'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import {S_GLOBAL} from './Components/styled/global'
import {S_NORMALIZE} from './Components/styled/normalize'
import {ProductProvider} from './context'

ReactDOM.render(
	<React.StrictMode>
		<ProductProvider>
			<Router>
				<S_GLOBAL />
				<S_NORMALIZE />
				<App />
			</Router>
		</ProductProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
