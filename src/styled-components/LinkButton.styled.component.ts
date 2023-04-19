import styled from 'styled-components';

export const LinkButton = styled.a`
	background-color: transparent;
	color: var(--grey700);
	font-size: 1rem;
	font-weight: 500;
	margin: 15px;
	padding: 0.5rem;
	white-space: nowrap;

	&:hover {
		background-color: var(--grey50);
		border-color: transparent;
		border-radius: 3px;
		box-shadow: none;
		cursor: pointer;
		outline: none;
	}
`;
