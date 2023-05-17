import styled from 'styled-components';
import device from '../../utils/device_size_matcher'


const Card = styled.div`
	background-color: rgba(150, 167, 181, .5);
	border-radius: 24px;
	padding: 4rem 0;
	width: 100%;
	height: 80%;
	position: relative;
	overflow: hidden;

	@media ${device.mobileL} { 
    width: 400px;
		height: 50%;
  }

	@media ${device.tablet} { 
    width: 500px;
  }

	@media ${device.laptop} { 
    width: 650px;
  }
`;

export default Card;
