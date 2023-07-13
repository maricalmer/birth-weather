import styled from 'styled-components';
import device from '../../utils/device_size_matcher'

const Title = styled.div`
	font-family: 'DM Sans', sans-serif;
	font-weight: bold;
	color: black;
	text-align: center;
  z-index: 3;
	position: absolute;

	@media ${device.laptop} {
		margin-top: 8px;
  }
`;

export default Title;
