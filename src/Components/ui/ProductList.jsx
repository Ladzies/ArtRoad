import React, {useState} from 'react'
import {digitalProducts} from '../../data'
import UI_PRODUCT_CARD from './ProductCard'

function UI_PRODUCT_LIST() {
	const [products, setProducts] = useState(digitalProducts)
	console.log(products)

	return (
		<div>
			{products.map((product, index) => (
				<div key={index}>
					<div>{product.title}</div>
				</div>
			))}
			<UI_PRODUCT_CARD />
		</div>
	)
}

export default UI_PRODUCT_LIST
