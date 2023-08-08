import styled from 'styled-components';

const Clouds = styled.div`
	width: 100%;
	height: 100%;
	background-image: url("https://i.giphy.com/media/RpwupnbQE5nK6iRkYJ/giphy.webp");
	background-repeat: no-repeat;
  background-size: cover;
	border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  filter: blur(5px)
`;

export default Clouds;
