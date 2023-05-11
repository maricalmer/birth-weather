import styled from 'styled-components';
import device from '../../utils/device_size_matcher'

const CalendarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
	position: absolute;
  top: 0;
	width: 100%;
	height: 100%;
	@media ${device.tablet} { 
    width: 500px;
  }
	@media ${device.laptop} { 
    width: 650px;
  }
`;

export default CalendarContainer;