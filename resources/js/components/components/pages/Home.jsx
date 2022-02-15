import PhotoWithTransparentBox from "../content/PhotoWithTransparentBox";
import React from "react";
import styled from 'styled-components'; 
import Heading from "../utility/Heading";
import Column from "../utility/Column";
import Row from "../utility/Row";
import ColorUnderlinedText from "../content/ColorUnderlinedText";
import DescriptionWithPhotoSideBySide from "../content/DescriptionWithPhotoSideBySide";
import { Link } from 'react-router-dom';
import Paragraph from "../utility/Paragraph";
import Button from "../utility/Button";

const Home = () => {
	const pngList = [
		'/assets/images/memberstates/massdep.png',
		'/assets/images/memberstates/cte.png',
		'/assets/images/memberstates/nhdes.png',
		'/assets/images/memberstates/nys.png',
		'/assets/images/memberstates/njs.png',
		'/assets/images/memberstates/dem.png',
	]

	const homeData = [
		{
			title: 'Zero-Emission Medium- and Heavy-Duty Vehicle Initiative', 
			content: 'Truck and bus electrification is a top priority for many states. In 2020, the governors of fifteen states and the mayor of the District of Columbia committed to work together as part of a multi-state coalition, facilitated by NESCAUM, to spur truck electrification.', 
			imageSrc: '/assets/images/stock/electricbus.jpg',
			href: '/our-work/clean-transportation/adoption-of-electric-cars'
		}, 
		{
			title: 'Residential/Commerical Wood Combustion', 
			content: 'Emissions from wood heating have serious public health consequences. NESCAUM evaluated the current certification process for wood stoves and recommended changes to reduce emissions and protect public health.', 
			imageSrc: '/assets/images/stock/wood-on-fire-pexels.jpg',
		}, 
		{
			title: 'Long Island Sound Tropospheric Ozone Study (LISTOS)', 
			content: 'Air quality problems in the greater New York City metropolitan area impact the health of over 20 million people. Launched in 2017, NESCAUM’s LISTOS initiative brings together a large group of researchers and marshalls a wide array of data sources to help air quality regulators understand and address pollution in and around the NYC metro area.', 
			imageSrc: '/assets/images/stock/listos.jpg',
			href: '/initiatives/listos'
		}, 
	]

	return (
		<>
			<PhotoWithTransparentBox />
			<Row width="al-fu" p="80px 0 40px 0" center>
				<Column width='half'>
					<Heading text='The Northeast States for Coordinated Air Use Management' bold/>
					<Heading text='(NESCAUM)'/>
					<Paragraph primary>NESCAUM catalyzes and guides state action to improve air quality, curb climate-disrupting greenhouse gas emissions and enable a rapid transition to clean energy. Building on more than fifty years of experience, NESCAUM’s special expertise lies in using scientific and technical analysis to target approaches to improve air quality and to coordinate and support collaboration across states to devise, implement, and scale effective solutions.</Paragraph>
					<StyledLink href='/aboutUs' to='/aboutUs'>
						<Button text='LEARN MORE ABOUT US' />
					</StyledLink>
				</Column>
				<Column width='half'>
						<Img src='/assets/images/maps/color-map.png' alt='map'/>
				</Column>
			</Row >
			<ColorUnderlinedText 
				center 
				text="FEATURED INITIATIVES"
				bgColor="#ececec"
				padding="80px 0"
			/>
			{
				homeData.map((data, index) => (
					<DescriptionWithPhotoSideBySide 
						key={ index }
						data={ data }
						index={ index }
						inverse={ index % 2 !== 0 }
						nullBorderBottom={ index === homeData.length - 1 }
					/>
				))
			}
			<Column pt={ 40 } pb={ 40 } center>
				<ColorUnderlinedText center text={'NESCAUM MEMBER STATES'}/>
				<PngContainer>
					{ pngList.map((src) => <Png key={ src } src={ src } alt='environmental backer logo'/>)}
				</PngContainer>
			</Column>
		</>
	);
}

export default Home;

const OrangeSpan = styled.span`
    color: #d95c14;
    margin-left: 100px;
    font-size: 36px; 
		margin-bottom: 10px;

		@media screen and (max-width: 768px) {
			font-size: 24px; 
			margin: 20px auto 20px auto; 
			max-width: 100vw; 
			
		}
`
const Img = styled.img`
	width: 100%; 
	max-width: 100vw; 

	@media screen and (max-width: 768px) {
		width: 90%; 
		margin: 0 auto; 
	}
`

const StyledLink = styled(Link)`
	@media screen and (max-width: 768px) {
		margin: 0 auto; 
	}
`

const Png = styled.img`
    width: 100%; 
    height: 100%; 
    margin: 10px 20px; 
    max-height: 150px; 
    max-width: 100px;

    @media screen and (max-width: 768px) {
        max-width: 75px; 
    }
`

const PngContainer = styled.div`
		display: flex; 
		flex-wrap: wrap; 
		justify-content: center; 
		align-items: center; 
		margin: 0 auto; 
		width: 90%; 
		max-width: 1200px; 
`
