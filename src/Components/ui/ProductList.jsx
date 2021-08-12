import React, {useContext} from 'react'
import {ProductContext} from '../../context'
import UI_PRODUCT_CARD from './ProductCard'
import styled from 'styled-components'
import {keyframes} from 'styled-components'

function UI_PRODUCT_LIST() {
	const product = useContext(ProductContext)

	return (
		<ProductGrid>
			{product.map((product, index) => (
				<ProductGridItem key={index}>
					<ProductThumbnail>
						<img src={product.img} />
						<div className='btn'>View</div>
					</ProductThumbnail>

					<main>
						<header>
							<h1>{product.title}</h1>
						</header>

						<footer>
							<h2>{product.id}</h2>
							<h1>${product.price}</h1>
						</footer>
					</main>
				</ProductGridItem>
			))}
		</ProductGrid>
	)
}

export default UI_PRODUCT_LIST

const ProductGrid = styled.div`
	display: grid;
	grid-gap: 20px;
	grid-template-columns: repeat(
		auto-fill,
		minmax(290px, 1fr)
	);
	max-width: 1340px;
	margin: auto;
	padding: 0 10px 0 10px;
`
const ProductGridItem = styled.div`
	cursor: pointer;
	background-color: #d9e3e830;
	border-radius: 5px;
	overflow: hidden;
	opacity: 1;
	transition: opacity 200ms;
	&:hover img {
		opacity: 0.5;
	}
	&:hover .btn {
		opacity: 1;
	}

	.btn {
		position: absolute;
		left: 50%;
		top: 50%;
		opacity: 0;
		transition: opacity 200ms;
		background-color: var(--color-metal-1);
		transform: translate(-50%, -50%);
		padding: 10px 22px;
		border-radius: 5px;
		font-weight: 600;
		color: var(--color-metal-6);
		border: 0;
	}

	main {
		padding: 15px 20px 15px 20px;
	}

	header {
		height: 50px;
		h1 {
			overflow: hidden;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			font-size: 18px;
			line-height: 24px;
			font-weight: 500;
		}
	}

	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		h1 {
			font-weight: 500;
		}
	}
`

const ProductThumbnail = styled.div`
	overflow: hidden;
	position: relative;

	img {
		position: absolute;
		object-fit: cover;
		width: 100%;
		height: 100%;
		left: 0%;
		top: 0%;
		right: 0%;
		bottom: 0%;
		transition: opacity 200ms;
	}

	&:before {
		content: '';
		display: block;
		padding-top: 56.25%;
		background-color: black;
	}
`

const ProductThumbnailButton = styled.div``
