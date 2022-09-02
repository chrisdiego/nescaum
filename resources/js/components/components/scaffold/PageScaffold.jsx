import styled from 'styled-components';
import FullWidthHeroImage from "../content/content-visuals/FullWidthHeroImage";
import BreadcrumbNavigation from "../breadcrumb/BreadcrumbNavigation";
import Column from "../utility/Column";
import Row from '../utility/Row';
import DescriptionWithPhotoSideBySideNoBackground from '../content/DescriptionWithPhotoSideBySideNoBackground';
import Paragraph from '../utility/Paragraph';
import Heading from '../utility/Heading';

const PageScaffold = ({
  heroImage, 
  headline, 
	subHeadline, 
  mainText, 
  sideImage, 
  subHeader, 
  subText, 
  subArticles, 
  heroWidth,
}) => {
	return (
		<>
			{heroImage && <FullWidthHeroImage imageSrc={ heroImage } />}
			<Column width={'al-fu'} center>

				<BreadcrumbNavigation />

				{ headline && (
					<Heading 
						text={headline.toUpperCase()} 
						bold
						mb={subHeadline ? 0 : "40px" }
						width="80%"
					/>
				)}	

				{ subHeadline && (
					<Paragraph style={{marginBottom: 40}}>
						{ subHeadline.toUpperCase() }
					</Paragraph>
				)}

				{ sideImage && (
					<Row>
							<Image src={ sideImage } alt="sub page photo" heroWidth={heroWidth}/> 
						<Column mobileFull>
							<Paragraph bold color='#003354'> { mainText } </Paragraph>
							<Paragraph variant={'roboto'}> { subText } </Paragraph>
						</Column>
					</Row>
				)}

				{!sideImage && mainText && (
					<Column>
						<Paragraph bold color='#003354'> { mainText } </Paragraph>
						<Paragraph variant={'roboto'}> { subText } </Paragraph>
					</Column>
				)}
				
				{ subHeader && <SubHeader> { subHeader } </SubHeader> }
				
			</Column>
      { subArticles && (
        subArticles.map((article, index) => (
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

export default PageScaffold; 

const SubHeader = styled.h3`
	margin-top: 80px; 
	max-width: 800px; 
	margin-bottom: 40px;
`

const Image = styled.img`
	max-width: 600px;
    width: ${props => props.heroWidth ? props.heroWidth + 'px' : '100%'};
	margin-right: 60px; 

    @media (max-width: 768px) {
        margin: 0;
    }
`
