import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../logo.svg'
import styled from 'styled-components'

function UI_NAVBAR() {
	return (
		<div>
			<NavBar>
				<main>
					<Link to='/'>
						<img src={logo} alt='' />
					</Link>

					<Link to='/cart'>
						<AddToCart>
							<IconBasket
								width={30}
								height={30}
								fill={'var(--color-metal-6)'}
							/>
							0
						</AddToCart>
					</Link>
				</main>
			</NavBar>
		</div>
	)
}

const NavBar = styled.div`
	main {
		display: flex;
		padding: 20px 20px;
		max-width: 1440px;
		margin: auto;
		justify-content: space-between;
		align-items: center;
	}
`

const AddToCart = styled.div`
	align-items: center;
	background-color: var(--color-metal-1);
	border-radius: 50px;
	color: var(--color-metal-6);
	display: grid;
	font-size: 18px;
	font-weight: bold;
	gap: 2px;
	grid-auto-flow: column;
	grid-column: 2;
	grid-row: 1;
	padding: 2px 12px 2px 10px;
`

const IconBasket = props => {
	return (
		<svg
			width='30'
			height='30'
			viewBox='0 0 30 30'
			fill='#000'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M13.9355 7.06133C14.3375 6.44434 14.1632 5.61831 13.5462 5.21634C12.9292 4.81436 12.1032 4.98866 11.7012 5.60565L7.23107 12.4668H4.33334C3.91668 12.4668 3.52397 12.6616 3.27183 12.9933C3.0197 13.325 2.93714 13.7556 3.04866 14.157L5.40419 22.6365C5.57328 23.493 6.00243 24.2875 6.6536 24.8736C7.32108 25.4743 8.18086 25.8157 9.08732 25.7996H20.9127C21.8191 25.8157 22.6789 25.4743 23.3464 24.8736C23.9976 24.2875 24.4267 23.493 24.5958 22.6365L26.9513 14.157C27.0629 13.7556 26.9803 13.325 26.7282 12.9933C26.476 12.6616 26.0833 12.4668 25.6667 12.4668H22.7691L18.2989 5.60565C17.8969 4.98866 17.0709 4.81436 16.4539 5.21634C15.8369 5.61831 15.6626 6.44434 16.0646 7.06133L19.5864 12.4668H10.4138L13.9355 7.06133Z'
			/>
		</svg>
	)
}

export default UI_NAVBAR
