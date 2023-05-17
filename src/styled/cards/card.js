import styled from 'styled-components';
import device from '../../utils/device_size_matcher'


const Card = styled.div`
	background-color: rgba(150, 167, 181, .5);
	border-radius: 24px;
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;

	@media ${device.mobileL} { 
    width: 400px;
		height: 75%;
  }

	@media ${device.tablet} { 
    width: 500px;
  }

	@media ${device.laptop} { 
    width: 650px;
  }
`;

export default Card;
