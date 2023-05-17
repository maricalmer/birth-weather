import styled, { css } from 'styled-components';
import device from '../../utils/device_size_matcher'

const Button = styled.div`
	width: fit-content;
	height: 40px;
	padding: 8px 48px;
	border-radius: 48px;
	border: 0;
	background-color: #a8c7fa;
	color: #2364AA;
	font-size: 20px;
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: opacity .1s cubic-bezier(.2,0,0,1);
	opacity: 1;
	&:hover {
    opacity: 0.8;
  }

	@media ${device.tablet} { 
    height: 40px;
  }

	${props =>
    props.$restart &&
    css`
			margin: 18px auto;
			height: 16px;

			@media ${device.mobileM} { 
				height: 32px;
			}
		
			@media ${device.tablet} { 
				height: 48px;
			}

    `};
`;

export default Button;