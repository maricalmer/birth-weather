import styled, { css } from 'styled-components';
import device from '../../utils/device_size_matcher'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
	position: absolute;
	width: 100%;
	@media ${device.tablet} {
    width: 500px;
  }
	@media ${device.laptop} {
    width: 650px;
  }

  ${props => {
    if (props.$top_full_width && css) {
      return `
        top: 0;
        left: 0;
        width: 100% !important;
        height: 100%;
    `
    } else if (props.$small_height && css) {
      return `
        top: 0;
        min-height: 100px;
        width: 100%;
        height: 15%;
    `
    } else if (props.$purlple_screen && css) {
      return `
        position: relative;
        width: 100% !important;
        height: 100%;
        z-index: 1;
        background-color: #7C778D;
        opacity: 0.9;
        border-radius: 25px;
    `
    }
  }}
`;

export default Container;
