import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../logo.svg'
import {S_ADD_TO_CART, S_NAVBAR} from '../styled'
import {U_ICON_BASKET} from '../utilities/Icons'

function UI_NAVBAR() {
	return (
		<div>
			<S_NAVBAR>
				<main>
					<Link to='/'>
						<img src={logo} alt='' />
					</Link>

					<Link to='/cart'>
						<S_ADD_TO_CART>
							<U_ICON_BASKET
								width={30}
								height={30}
								fill={'var(--color-metal-6)'}
							/>
							0
						</S_ADD_TO_CART>
					</Link>
				</main>
			</S_NAVBAR>
		</div>
	)
}

export default UI_NAVBAR
