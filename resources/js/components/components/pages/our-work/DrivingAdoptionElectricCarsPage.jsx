import ListItems from "../../content/ListItems";
import DocumentLinks from "../../documents-links/DocumentLinks";
import PageScaffold from "../../scaffold/PageScaffold";
import Column from "../../utility/Column";
import Heading from "../../utility/Heading";
import Paragraph from "../../utility/Paragraph";
import Row from "../../utility/Row";
import styled from 'styled-components';

const DrivingAdoptionElectricCarsPage = () => {

  const listItems = [
    
  ]

  return (
    <>
      <PageScaffold 
        heroImage="/images/electric-bmw.jpg"
        headline="DRIVING THE ADOPTION OF ELECTRIC CARS"
      />
      <Column width="al-fu" center>
        <Paragraph>
          Accelerating the transition to zero-emission passenger vehicles is critically important for curbing greenhouse gas emissions and tackling the global climate crisis. Further, wide-scale adoption of electric cars is needed to reduce tailpipe emissions of smog-forming pollutants that cause air quality and public health problems in many communities across the United States. 
        </Paragraph>
        <Heading 
          text='Forming the Multi-State Task Force'
          mt="40px"
          mb="20px"
        />
        <Row>
          <Paragraph>
            In 2013, NESCAUM spearheaded the launch of a coalition of states committed to coordinating state policies and programs to propel growth in the market for electric cars and support their zero-emission vehicle (ZEV) regulatory programs (LINK TO REGULATIONS PAGE).  A governor’s Memorandum of Understanding (LINK TO PDF) officially launched the Multi-State ZEV Task Force. NESCAUM facilitates and guides the Task Force, which serves as a unique forum for galvanizing state leadership on transportation electrification.
          </Paragraph>
          <Image src='/images/map-10-nescaum.png'/>
        </Row>
        <Heading 
          text='A Track Record of Effective Action'
          mt='40px'
          mb='20px'
        />
        <Row justify='space-between'>
          <Column width='70%'>
            <Paragraph>
              NESCAUM worked with the Task Force to develop two ZEV Action Plans (LINK to most recent Action Plan). Guided by the Action Plans, Task Force states have mobilized many market-enabling actions, including:
            </Paragraph>
            <ListItems singular>
              <Paragraph>
                electric car purchase incentive programs
              </Paragraph>
            </ListItems>
            <ListItems singular>
              <Paragraph >
                a regional consumer education and awareness campaign (LINK)
              </Paragraph>
            </ListItems>
            <ListItems singular>
              <Paragraph>
                collaboration with electric utilities to support greater investments in charging infrastructure; and 
              </Paragraph>
            </ListItems>
            <ListItems singular>
              <Paragraph>
                development of policies to ensure that emerging charging networks are accessible and convenient for consumers.
              </Paragraph>
            </ListItems>
            <Paragraph>
              Today, The Task Force is working more aggressively than ever to hasten a tipping point in the electric car market.
            </Paragraph>
          </Column>

          <ImageContainer>
            <ZedImage 
              src='/images/zev-mutli-state.jpg'
            />
          </ImageContainer>
        </Row>
      </Column>
      <DocumentLinks documents={[
        {
          href: 'https://www.nescaum.org/files/mhd-zev-comments.php', 
					text: 'Action Plan Development Process and Public Comments'
        }, {
          href: 'https://www.nescaum.org/files/mhd-zev-comments.php', 
					text: 'Action Plan Development Process and Public Comments'
        }
      ]}/>
    </>
  )
}

export default DrivingAdoptionElectricCarsPage; 

const Image = styled.img`
	max-width: 600px; 
	margin-right: 40px; 
  width: 100%; 
  min-width: 400px; 
  margin-left: 60px;
`

const ImageContainer = styled.div`
  max-width: 300px; 
  width: 300px; 
`

const ZedImage = styled(Image)`
  width: 100%; 
  max-width: 100%; 
  min-width: unset; 
  margin-left: 0;
`