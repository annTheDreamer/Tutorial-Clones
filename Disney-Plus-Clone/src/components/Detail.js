import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px);
	position: relative;
`;

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -1;
	opacity: 0.8;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const ImageTitle = styled.div`
	height: 30vh;
	width: 35vw;
	min-height: 170px;
	min-width: 200px;
	margin: 20px 0px;
	margin-left: 0;
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

const Controls = styled.div`
	display: flex;
	align-items: center;
`;

const PlayButton = styled.button`
	border-radius: 4px;
	font-size: 15px;
	display: flex;
	align-items: center;
	height: 56px;
	background-color: rgb(249, 249, 249);
	border: none;
	padding: 0 24px;
	margin-right: 22px;
	letter-spacing: 1.8px;
	cursor: pointer;
	&:hover {
		background-color: rgb(198, 198, 198);
	}
`;

const TrailerButton = styled(PlayButton)`
	background: rgba(0, 0, 0, 0.3);
	border: 1px solid rgb(249, 249, 249);
	color: rgb(249, 249, 249);
	text-transform: uppercase;
`;

const AddButton = styled.button`
	width: 44px;
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 2px solid white;
	background-color: rgba(0, 0, 0, 0.6);
	cursor: pointer;
	margin-right: 16px;
	span {
		font-size: 30px;
		color: white;
	}
`;

const GroupWatchButton = styled(AddButton)`
	background-color: black;
`;

const SubTitle = styled.div`
	color: rgb(249, 249, 249);
	font-size: 15px;
	min-height: 20px;
	margin-top: 26px;
`;

const Description = styled.div`
	line-height: 1.4;
	font-size: 20px;
	margin-top: 16px;
	color: rgb(249, 249, 249);
	max-width: 760;
`;

function Detail() {
	return (
		<Container>
			<Background>
				<img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9D8AEB7DE234898392BFD20E7D9B112B841E920AF9A3F54CCFB966722AFF3461/scale?width=1920&aspectRatio=1.78&format=jpeg" />
			</Background>
			<ImageTitle>
				<img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EF737B93E2F2ABE27C74CBBEB322F18A421E7986129E9989587CEF2295B0447F/scale?width=1344&aspectRatio=1.78&format=png" />
			</ImageTitle>
			<Controls>
				<PlayButton>
					<img src="/images/play-icon-black.png" />
					<span>PLAY</span>
				</PlayButton>
				<TrailerButton>
					<img src="/images/play-icon-white.png" />
					<span>Trailer</span>
				</TrailerButton>
				<AddButton>
					<span>+</span>
				</AddButton>
				<GroupWatchButton>
					<img src="/images/group-icon.png" />
				</GroupWatchButton>
			</Controls>
			<SubTitle>2018 • 7m • Family, Fantasy, Kids, Animation</SubTitle>
			<Description>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloribus
				eaque porro minima eum, totam placeat pariatur non soluta quos ipsum
				repudiandae! Facilis rerum cumque totam illo. Porro, repellendus sequi.
			</Description>
		</Container>
	);
}

export default Detail;
