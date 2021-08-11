import React from 'react'
import {useState} from 'react'

import {digitalProducts} from './data'

export const ProductContext = React.createContext()

export function ProductProvider({children}) {
	const [products, setProducts] = useState(digitalProducts)

	return (
		<ProductContext.Provider value={products}>
			{children}
		</ProductContext.Provider>
	)
}
