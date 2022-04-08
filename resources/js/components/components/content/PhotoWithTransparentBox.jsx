import styled from 'styled-components';
import ArrowWithBox from '../content/content-visuals/ArrowWithBox';
import useIsMobile from '../../../hooks/useIsMobile';
import Column from '../utility/Column';

const PhotoWithTransparentBox = () => {

	const isMobile = useIsMobile(1000); 

	return (
		!isMobile ? (
			<Section>
				<TransparentBox>
					<CenteredContent>
						<H2>Empowering States Through Collaboration</H2>
						<Span> Learn More </Span>
						<ArrowWithBox color='white' position='center' href='/our-work' />
					</CenteredContent>
				</TransparentBox>
			</Section>
		) : (
			<MobileSection>
				<Column pt={ 100 }>
					<MobileHeader>
						Empowering States Through Collaboration
					</MobileHeader>
					<Span>Learn More</Span>
					<ArrowWithBox />
				</Column>
			</MobileSection>
		)
	)
}

export default PhotoWithTransparentBox; 

const Section = styled.section`
	min-width: 100vw; 
	height: 600px;
	background-image: url("/assets/images/stock/banner.jpg"); 
	background-size: cover; 
	background-repeat: no-repeat;
	background-position: center center;
`

const TransparentBox = styled.div`
	min-height: 100%; 
	height: 100%; 
	width: 40%; 
	display: flex; 
	background-color: rgba(23, 78, 150, .5); 
	justify-content: flex-end; 
	align-items: center;

	@media screen and (max-width: 1250px) {
		width: 50%;
	}

`

const CenteredContent = styled.div`
	color: white; 
	min-width: 500px; 
	display: flex; 
	flex-direction: column; 
	min-height: 80%;
	height: 80%; 
	padding: 0 15px;
`

const H2 = styled.h2`
	font-weight: 700; 
	max-width: 300px;
	font-size: 48px; 
	line-height: 56px;

	@media screen and (max-width: 768px) {
		font-size: 26px;
	}
`

const Span = styled.span`
	font-size: 36px; 
	margin: 40px 0 20px 0;

	@media screen and (max-width: 1000px) {
		color: white; 
		font-size: 24px;
		margin: 60px 0 20px 0;
	}
`

const MobileSection = styled.section`
	width: 100vw; 
	background-image: url("/assets/images/stock/banner.jpg"); 
	background-size: cover; 
	background-repeat: no-repeat;
	background-position: center center;
	min-height: 600px; 
	padding: 20px;
	margin-bottom: 40px;
`

const MobileHeader = styled.h2`
	color: white; 
	font-weight: bold; 
	max-width: 360px;
`