import styled, { css } from 'styled-components';

const Title = styled.div`
	font-family: 'Sora', sans-serif;
	font-size: 48px;
	font-weight: bold;
	color: #e3e3e3;
	text-align: center;
  z-index: 3;
	margin-top: 8px;
	${props =>
    props.$hidden &&
    css`
			font-size: 0px;
			position: absolute;
    `};
`;

export default Title;