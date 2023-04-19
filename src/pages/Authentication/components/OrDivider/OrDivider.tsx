import React from 'react';
import './styles/OrDivider.css';

export interface OrDividerProps {
	extraClassName?: string
}

const OrDivider : React.FC<OrDividerProps> = ({extraClassName}) => {
	return (
		<div className={`orContainer ${extraClassName}`}>
			<span className='dividerLeft' aria-hidden={true}></span>
			<p className="orDivider">or</p>
			<span className='dividerRight' aria-hidden={true}></span>
		</div>
	);
};

export default OrDivider;
