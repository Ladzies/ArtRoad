import styled from 'styled-components'

export const S_NAVBAR = styled.div`
	main {
		display: flex;
		padding: 20px 20px;
		max-width: 1440px;
		margin: auto;
		justify-content: space-between;
		align-items: center;
	}
`

export const S_ADD_TO_CART = styled.div`
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
