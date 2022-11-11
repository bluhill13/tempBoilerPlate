import React from 'react';
import styled from 'styled-components';

const StyledMenuArea = styled.div`
	padding: 37px 50px 15px 50px;
	font-weight: 100;
`;

interface MenuAreaProps {
	children?: JSX.Element;
}

export const MenuArea: React.FC<MenuAreaProps> = ({ children }) => {
	return (
		<StyledMenuArea>
			Her kommer en stripe med logo ++
			{children}
		</StyledMenuArea>
	);
};

export default MenuArea;
