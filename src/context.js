import React from 'react'

export const ProductContext = React.createContext()

export function ProductProvider({children}) {
	return (
		<ProductContext.Provider value='hello from context'>
			{children}
		</ProductContext.Provider>
	)
}
