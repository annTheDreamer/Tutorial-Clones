import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	height: calc(100vh - 70px);
	display: flex;
	align-items: top;
	justify-content: center;

	&:before {
		position: absolute;
		content: '';
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-image: url('/images/login-background.jpg');
		background-position: top;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: -1;
		opacity: 0.7;
	}
`;

const ContentBox = styled.div`
	max-width: 650px;
	padding: 80px 40px;
	width: 80%;
	display: flex;
	flex-direction: column;
	margin-top: 3%;
	align-items: center;
`;
const LogoOne = styled.img``;

const SignUp = styled.a`
	width: 100%;
	background-color: #0063e5;
	font-weight: bold;
	padding: 17px 0;
	color: #f9f9f9;
	border-radius: 4px;
	text-align: center;
	font-size: 18px;
	cursor: pointer;
	transition: all 250ms;
	letter-spacing: 1.5px;
	margin-top: 8px;
	margin-bottom: 12px;
	&:hover {
		background: #0483ee;
	}
`;

const Description = styled.p`
	font-size: 11px;
	letter-spacing: 1.5px;
	text-align: center;
	line-height: 1.5;
`;

const LogoTwo = styled.img`
	width: 90%;
`;

function Login() {
	return (
		<Container>
			<ContentBox>
				<LogoOne src="/images/cta-logo-one.svg" />
				<SignUp>GET ALL THERE</SignUp>
				<Description>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
					doloribus eaque porro minima eum, totam placeat pariatur non soluta
					quos ipsum repudiandae! Facilis rerum cumque totam illo. Porro,
					repellendus sequi.
				</Description>
				<LogoTwo src="/images/cta-logo-two.png" />
			</ContentBox>
		</Container>
	);
}

export default Login;
