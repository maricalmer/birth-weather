import styled from 'styled-components';
import device from '../../utils/device_size_matcher'


const Card = styled.div`
	background-color: rgba(150, 167, 181, .5);
	border-radius: 24px;
	width: 200px;
	height: 375px;
	padding: 3rem;
	position: relative;
	overflow: hidden;

	@media ${device.mobileM} { 
    width: 100%;
		padding: 4rem 0;
  }

	@media ${device.mobileL} { 
    width: 400px;
  }

	@media ${device.tablet} { 
    width: 500px;
  }

	@media ${device.laptop} { 
    width: 650px;
  }
`;

export default Card;
