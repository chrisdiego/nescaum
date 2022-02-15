import { useState, useEffect } from 'react';
import styled from 'styled-components';
import FullWidthHeroImage from "../content/content-visuals/FullWidthHeroImage";
import BreadcrumbNavigation from "../breadcrumb/BreadcrumbNavigation";
import Column from "../utility/Column";
import useGetRouterParams from "../../../hooks/useGetRouterParams";
import pages from '../../mock-data/pages';
import PageHeading from '../content/PageHeading';
import DescriptionWithPhotoSideBySideNoBackground from '../content/DescriptionWithPhotoSideBySideNoBackground';

const SupportingPage = () => {

	const { supportingPage } = useGetRouterParams(); 
	const [ content, setContent ] = useState({}); 

	useEffect(() => {
		if ( !supportingPage ) return; 
		setContent(pages[supportingPage]);
	}, [ supportingPage ])

	if (!content) return <></>
	return (
		<>
			<FullWidthHeroImage imageSrc={ content['heroImage']} />
			<Column width={'al-fu'} center pb={ 40 }>
				<BreadcrumbNavigation />
				<Title> { content.headline } </Title>
				<PageHeading image={content['sideImage']} alt={"sub page photo"} title={content["mainText"]} desc={content["subText"]} />

				<SubHeader> {content['subHeader']} </SubHeader>
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
		</>
	)
}

export default SupportingPage; 

const Title = styled.h2`
	margin-bottom: 20px; 
`

const SubHeader = styled.h3`
	margin-top: 80px; 
	padding-bottom: 40px; 
	max-width: 800px; 
`

