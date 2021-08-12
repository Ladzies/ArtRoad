import {createGlobalStyle} from 'styled-components'

export const S_GLOBAL = createGlobalStyle`
:root {
	--color-vegi-10: #014d40;
	--color-vegi-9: #0c6b58;
	--color-vegi-8: #147d64;
	--color-vegi-7: #199473;
	--color-vegi-6: #27ab83;
	--color-vegi-5: #3ebd93;
	--color-vegi-4: #65d6ad;
	--color-vegi-3: #8eedc7;
	--color-vegi-2: #c6f7e2;
	--color-vegi-1: #effcf6;

	--color-metal-10: #1f2c33;
	--color-metal-9: #2f424c;
	--color-metal-8: #3e5765;
	--color-metal-7: #4e6d7e;
	--color-metal-6: #5d8398;
	--color-metal-5: #7497aa;
	--color-metal-4: #8daab9;
	--color-metal-3: #a6bdc9;
	--color-metal-2: #c0d0d8;
	--color-metal-1: #d9e3e8;
}

body {
	font-family: -apple-system, 'Inter', sans-serif;
	color: var(--color-metal-10);
}

h1,h2,h3,h4,h5,h6 {
	margin:0
}

a{
	text-decoration: none;
}

`
