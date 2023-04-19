import styled from 'styled-components';
import '../styles/base/_colorsPalette.css';
import '../styles/tokens/_fonts.css';
import '../styles/tokens/_sizing.css';

export const OutlinedButton = styled.button`
	align-items: center;
	background-color: transparent;
	border: 1px solid var(--grey400);
	border-radius: 3px;
	cursor: pointer;
	color: var(--grey700);
	display: flex;
	justify-content: center;
	font-size: var(--font-size-button-m);
	font-weight: var(--font-weight-button);
	padding: 0.75rem 1rem;
	transition: ease-out 0.5s;
	-webkit-transition: ease-out 0.5s;
	-moz-transition: ease-out 0.5s;

	z-index: 1;

	&:hover {
		animation: pulse 2s ease-out 0.4s;
		border: 1px solid var(--grey100);
		background-color: var(--grey100);
		border-color: var(--grey100);
		box-shadow: 0px 2px 8px rgba(var(--grey2100), 0.3),
			0px 2px 2px rgba(var(--grey100), 0.3),
			0px 1px 1px rgba(var(--grey100), 0.4);
		cursor: pointer;
		color: var(--grey800);
	}
`;
