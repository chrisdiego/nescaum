import { useState, useEffect } from 'react';
import styled from 'styled-components';
import FullWidthHeroImage from "../content/content-visuals/FullWidthHeroImage";
import BreadcrumbNavigation from "../breadcrumb/BreadcrumbNavigation";
import Column from "../utility/Column";
import useGetRouterParams from "../../../hooks/useGetRouterParams";
import pages from '../../mock-data/pages';
import Row from '../utility/Row';
import DescriptionWithPhotoSideBySideNoBackground from '../content/DescriptionWithPhotoSideBySideNoBackground';
import BulletPoint from '../content/content-visuals/BulletPoint';

const SubLanding = () => {

	// EG: our-work/criteria-pollutants-and-air-toxics
	const params = useGetRouterParams(); 
	const [ content, setContent ] = useState({}); 

	useEffect(() => {
		if (!pages[params.landing]) return; 
		if (!pages[params.landing][params.subLanding]) {
			const page = pages[params.subLanding]; 
			setContent(page);
		} else {
			setContent(pages[params.landing][params.subLanding]);
		}
	}, [ params, content?.title ])


	if (!content) return <> {console.log('NO CONTENT FOUND')} </>
	return (
		<>
			<FullWidthHeroImage imageSrc={ content['heroImage']} />
			<Column width={'al-fu'} center pb={ 40 }>
				<BreadcrumbNavigation />
				<Title> { content.headline } </Title>
				<Row>
					{ content['sideImage'] && (
						<Image src={ content['sideImage'] } alt="sub page photo"/> 
					)}
					<Column>
						<BoldP> { content['mainText'] } </BoldP>
						<P variant={'roboto'}> { content['subText'] } </P>
					</Column>
				</Row>
				{ content['subHeader'] && <SubHeader> {content['subHeader']} </SubHeader> }
			</Column>
			{ content['subArticles'] && (
				content['subArticles'].map((article, index) => (
					<DescriptionWithPhotoSideBySideNoBackground 
						key={ index }
						data={ article } 
						inverse={ index % 2 !== 0 } 
						firstEl={ index === 0 }
					/>
				))
			)}

			<Column width="al-fu" center>
				{	content.bodyText && (
					content.bodyText.map((text, index) => {
						return (
							<Item key={ index }>
								{ text.bullet && <BulletPoint/> }
								<P dangerouslySetInnerHTML={{
									__html: text.text
								}}></P>
							</Item>
						)			
					})	
				)}
			</Column>
		</>
	)
}

export default SubLanding; 

const Title = styled.h2`
	margin-bottom: 20px; 
`

const BoldP = styled.p`
	color: #003354; 
	font-size: 24px; 
	font-weight: bold;
	line-height: 30px; 
	font-family: Roboto, sans-serif; 
`

const P = styled.p`
	font-family: Roboto, sans-serif; 
	font-weight: 400; 
	font-size: 16px;

	a {
		color: blue; 
		text-decoration: underline;
		font-family: inherit; 
		font-size: 16px;
	}
`

const SubHeader = styled.h3`
	margin-top: 80px; 
	padding-bottom: 40px; 
	max-width: 800px; 
`

const Image = styled.img`
	max-width: 400px; 
	margin-right: 40px; 
`

const Item = styled.div`
	font-size: 16px; 
	display: flex; 

	&:first-child {
		margin-top: -20px;
	}

	&:last-child {
		margin-bottom: 60px;
	}
`
