import styled from 'styled-components';
import device from '../../utils/device_size_matcher'

const CardContainer = styled.div`
	width: 90%;
	// width: 85%;
	height: 80%;
  overflow: hidden;
	// background-image: url("https://i.giphy.com/media/RpwupnbQE5nK6iRkYJ/giphy.webp");
	// background-repeat: no-repeat;
  // background-size: cover;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
  position: relative;
  @media ${device.mobileL} {
    width: 70%;
  }
`;

export default CardContainer;
