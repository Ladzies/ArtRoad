import React, {useContext} from 'react'
import {ProductContext} from '../../context'
import UI_PRODUCT_CARD from './ProductCard'

function UI_PRODUCT_LIST() {
	const product = useContext(ProductContext)
	console.log(product)

	return (
		<div>
			{product.map((product, index) => (
				<div key={index}>
					<div>{product.title}</div>
				</div>
			))}
			<UI_PRODUCT_CARD />
		</div>
	)
}

export default UI_PRODUCT_LIST
