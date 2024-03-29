import styled, { css } from 'styled-components';
import device from '../../utils/device_size_matcher'

const Button = styled.div`
	width: fit-content;
	height: 40px;
	padding: 8px 48px;
	border-radius: 48px;
	border: 0;
	background-color: #565366;
	font-size: 20px;
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: opacity .1s cubic-bezier(.2,0,0,1);
	opacity: 1;
	&:hover {
    background-color: #3a3942;
    color: rgba(239, 246, 238)
  }

	${props =>
    props.$restart &&
    css`
			margin: 8vh auto 3vh auto;
			height: 16px;

			@media ${device.mobileM} {
				height: 32px;
				margin: 5vh auto 2vh auto;
			}

			@media ${device.tablet} {
				height: 48px;
			}

    `};
`;

export default Button;
