import styled from 'styled-components';
import device from '../../utils/device_size_matcher'


const Card = styled.div`
	border-radius: 8px;
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
  display: flex;
  flex-direction: column;

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
