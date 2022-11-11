import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import showPwdImg from './show-password.svg';
import hidePwdImg from './hide-password.svg';

//https://stackblitz.com/edit/show-hide-password-react?file=src%2FApp.js

interface PasswordWithRevealProps {
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordWithReveal: React.FC<PasswordWithRevealProps> = ({
	handleChange,
}) => {
	const [isRevealPwd, setIsRevealPwd] = useState(false);

	return (
		<div style={{ position: 'relative' }}>
			<Form.Control
				style={{ float: 'left' }}
				type={isRevealPwd ? 'text' : 'password'}
				name="password"
				placeholder=""
				onChange={handleChange}
			/>
			<img
				style={{
					height: '20px',
					position: 'absolute',
					marginLeft: '-28px',
					marginTop: '9px',
				}}
				alt="Show/Hide password"
				title={isRevealPwd ? 'Hide password' : 'Show password'}
				src={isRevealPwd ? hidePwdImg : showPwdImg}
				onClick={() => setIsRevealPwd((prevState) => !prevState)}
			/>
		</div>
	);
};
