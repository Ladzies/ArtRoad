import {Switch, Route} from 'react-router'
import React from 'react'

import UI_NAVBAR from './Components/ui/Navbar'
import UI_PRODUCT_LIST from './Components/ui/ProductList'
import UI_PRODUCT_DETAILS from './Components/ui/ProductDetails'
import UI_NOT_FOUND from './Components/ui/NotFound'
import UI_CART from './Components/ui/Cart'

function App() {
	return (
		<React.Fragment>
			<UI_NAVBAR />
			<Switch>
				<Route exact path='/' component={UI_PRODUCT_LIST} />
				<Route
					path='/details'
					component={UI_PRODUCT_DETAILS}
				/>
				<Route path='/cart' component={UI_CART} />
				<Route component={UI_NOT_FOUND} />
			</Switch>
		</React.Fragment>
	)
}

export default App
