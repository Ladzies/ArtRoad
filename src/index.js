import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import {S_GLOBAL} from './Components/styled/global'
import {ProductProvider} from './context'

ReactDOM.render(
	<React.StrictMode>
		<ProductProvider>
			<Router>
				<S_GLOBAL />
				<App />
			</Router>
		</ProductProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
