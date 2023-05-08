import styled, { css } from 'styled-components';
import device from '../../utils/device_size_matcher'

const Title = styled.div`
	font-family: 'Sora', sans-serif;
	font-size: 1.5em;
	font-weight: bold;
	color: #e3e3e3;
	text-align: center;
  z-index: 3;

	@media ${device.tablet} { 
    font-size: 2.5em;
  }
	
	@media ${device.laptop} { 
    font-size: 48px;
		margin-top: 8px;
  }

	${props =>
    props.$hidden &&
    css`
			font-size: 0px !important;
			position: absolute;
    `};
`;

export default Title;