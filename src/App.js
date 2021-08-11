import './App.css'
import {Switch, Route} from 'react-router'
import React from 'react'
import Navbar from './Components/ui/Navbar'
import ProductList from './Components/ui/ProductList'
import ProductDetails from './Components/ui/ProductDetails'
import Cart from './Components/ui/Cart'

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route exact path='/' component={ProductList} />
				<Route path='/details' component={ProductDetails} />
				<Route path='/cart' component={Cart} />
			</Switch>
		</React.Fragment>
	)
}

export default App
