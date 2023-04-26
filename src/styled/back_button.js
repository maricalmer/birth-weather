import styled from 'styled-components';

const BackButton = styled.div`
	width: fit-content;
	height: 48px;
	padding: 8px 48px;
	border-radius: 48px;
	border: 0;
	background-color: #a8c7fa;
	color: #2364AA;
	font-size: 20px;
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: opacity .1s cubic-bezier(.2,0,0,1);
	opacity: 1;
	margin: 24px auto 0 auto;
	&:hover {
    opacity: 0.8;
  }
`;

export default BackButton;