// Dependencies
import {Switch, Route} from 'react-router'
import React from 'react'

// Components
import Navbar from './Components/ui/Navbar'
import AllProducts from './Components/ui/AllProducts'
import ProductDetails from './Components/ui/ProductDetails'
import NotFound from './Components/ui/NotFound'
import Cart from './Components/ui/Cart'

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route exact path='/' component={AllProducts} />
				<Route path='/details' component={ProductDetails} />
				<Route path='/cart' component={Cart} />
				<Route component={NotFound} />
			</Switch>
		</React.Fragment>
	)
}

export default App
