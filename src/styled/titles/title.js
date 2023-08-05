import styled from 'styled-components';
import device from '../../utils/device_size_matcher'

const Title = styled.div`
	font-family: 'DM Sans', sans-serif;
	font-weight: 600;
  font-style: italic;
	color: black;
	text-align: center;
  z-index: 3;
	position: absolute;
  .title--emphasize {
    font-weight: 1000;
    font-style: normal;
    margin-left: 1rem;
    margin-right: 1rem;
  }

	@media ${device.laptop} {
		margin-top: 8px;
  }
`;

export default Title;
