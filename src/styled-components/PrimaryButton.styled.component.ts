import styled from 'styled-components';

export const PrimaryButton = styled.button`
	align-items: center;
	background-color: var(--primary600);
	border: 1px solid var(--primary600);
	border-radius: 3px;
	color: var(--grey00);
	display: flex;
	justify-content: center;
	font-size: 1rem;
	font-weight: 500;
	padding: 0.75rem 1rem;
	transition: ease-out 0.5s;
	-webkit-transition: ease-out 0.5s;
	-moz-transition: ease-out 0.5s;

	&:hover {
		background-color: var(--primary500);
		border-color: var(--primary500);
		box-shadow: 0px 2px 8px rgba(78, 145, 233, 0.3),
			0px 2px 2px rgba(78, 145, 233, 0.3), 0px 1px 1px rgba(45, 113, 213, 0.4);
		cursor: pointer;
		outline: none;
		border-color: var(--$grey100);
		color: var(--grey00);
	}
`;
