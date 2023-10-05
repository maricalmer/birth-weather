import styled from 'styled-components';

const Clouds = styled.div`
	width: 100%;
	height: 100%;
	// background-image: url("https://i.giphy.com/media/67uxmHhIF3uh6Ph8ew/giphy.webp");
	// background-image: url("https://i.giphy.com/media/ABMCiYH9MoVy0/200w.webp");
	background-image: url("https://i.giphy.com/media/k3CeSrt9IZ6aorWCy1/200w.webp");
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
