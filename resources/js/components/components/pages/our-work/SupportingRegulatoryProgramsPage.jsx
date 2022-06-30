import PageScaffold from "../../scaffold/PageScaffold";
import Column from "../../utility/Column";
import Heading from "../../utility/Heading";
import Paragraph from "../../utility/Paragraph";
import Row from "../../utility/Row";
import styled from 'styled-components';
import ResourceLibraryLink from "../../documents-links/ResourceLibraryLink";
import DocumentLinks from "../../documents-links/DocumentLinks";
import { Link } from "react-router-dom";

const SupportingRegulatoryProgramsPage = () => {
  return (
    <>
      <PageScaffold 
        heroImage="/assets/images/stock/airplane.jpg"
        headline="Supporting Regulatory Programs"
      />
      <Column width="al-fu" center mb={40}>
        <Paragraph>
          NESCAUM provides regulatory and technical support to its member states on policies for controlling air pollutants emitted by on-road and off-road vehicles, such as cars, buses, trucks, construction equipment, locomotives, and airplanes. Implementing effective pollution control regulations for these mobile sources is vitally important for improving air quality, protecting public health, and addressing the climate crisis.  
        </Paragraph>
        <Paragraph>
          Some recent examples of NESCAUM’s work in this area include supporting state adoption and implementation of California’s Advanced Clean Cars regulations, conducting in-use emissions testing for trucks, analyzing the emissions benefits of adopting California emission standards for medium- and heavy-duty trucks, and pushing for strong federal standards.
        </Paragraph>
        <Heading text="Working with Section 177 States" mb="20px" mt="20px"/>
        <Row>
          <Column>
            <Paragraph>
              With support from NESCAUM, the Northeast states became the first states to exercise their right under Section 177 of the Clean Air Act to adopt California’s Low Emission Vehicle (LEV) standards and Zero-Emission Vehicle (ZEV) standards. This action was part of a coordinated regional effort to reduce motor vehicle pollution and drive the rapid adoption of  electric vehicle technology.
            </Paragraph>
            <Paragraph>
              With NESCAUM’s technical and policy support, these “Section 177 states” are continuing to work closely together as they update and implement LEV and ZEV standards in coordination with California and consider adopting California’s emissions standards for trucks. NESCAUM’s <Link to="/about-us/committees">Mobile Sources Committee</Link> creates a unique forum for this cross-state coordination. As other states throughout the country have adopted California standards, this group has expanded to include states beyond the Northeast region and continues to welcome new Section 177 states.     
            </Paragraph>
          </Column>
          <Image src="/assets/images/stock/lev-zev.png"/>
        </Row>
      </Column>
      <DocumentLinks docFilter="supporting_regulatory_programs"/>
      <ResourceLibraryLink docFilter="supporting_regulatory_programs"/>
    </>
  )
}

export default SupportingRegulatoryProgramsPage; 

const Image = styled.img`
  max-width: 300px;
  margin-right: 40px;
`;