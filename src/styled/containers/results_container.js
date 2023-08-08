import styled from 'styled-components';
import device from '../../utils/device_size_matcher'

const ResultsContainer = styled.div`
  text-align: center;
  position: relative;
  top: 0;
	width: 100%;
	@media ${device.mobileL} {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
	@media ${device.tablet} {
    width: 500px;
  }
	@media ${device.laptop} {
    width: 650px;
  }
`;

export default ResultsContainer;
