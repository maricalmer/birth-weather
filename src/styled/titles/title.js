import styled from 'styled-components';
import device from '../../utils/device_size_matcher'

const Title = styled.div`
	font-family: 'Sora', sans-serif;
	font-weight: bold;
	color: #e3e3e3;
	text-align: center;
  z-index: 3;
	position: absolute;
	
	@media ${device.laptop} { 
		margin-top: 8px;
  }
`;

export default Title;