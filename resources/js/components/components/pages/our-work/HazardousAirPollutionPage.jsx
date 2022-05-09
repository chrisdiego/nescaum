import PageScaffold from '../../scaffold/PageScaffold';
import Column from '../../utility/Column';
import Paragraph from '../../utility/Paragraph';
import { Link } from 'react-router-dom';
import ResourceLibraryLink from "../../documents-links/ResourceLibraryLink";
import DocumentLinks from "../../documents-links/DocumentLinks";

const HazardousAirPollutionPage = () => {
  return (
    <>
      <PageScaffold 
        heroImage="/assets/images/stock/chap.jpg"
        headline="Criteria and Hazardous Air Pollutants"
      />
      <Column width="al-fu" center mt={20} mb={40}>
        <Paragraph>
          The Clean Air Act requires EPA to regulate two categories of air pollutants. EPA sets National Ambient Air Quality Standards (NAAQS) for six air pollutants, which are known as <b>criteria pollutants.</b> Those pollutants are ozone, particulate matter, sulfur dioxide, nitrogen dioxide, carbon monoxide, and lead.   
        </Paragraph>
        <Paragraph>
          EPA also has identified 187 <b>hazardous air pollutants (HAPs)</b> which are known or suspected to cause cancer or other serious health effects. EPA regulates HAPs with technology-based rules which are called National Emissions Standards for Hazardous Air Pollutants (NESHAPs). Although EPA has not set air quality standards for HAPs, many states have developed health-based standards and guidelines for evaluating air quality impacts of the federal HAPs and other toxic air pollutants.  
        </Paragraph>
        <Paragraph>
          NESCAUM supports state criteria and toxic air pollutant <Link style={{color: '#003354'}} href="/our-work/monitoring" to="/our-work/monitoring">monitoring programs</Link>. NESCAUM’s other criteria and toxic air pollutant activities include: 
        </Paragraph>
        
      </Column>
      <DocumentLinks docFilter="air_toxics"/>
      <ResourceLibraryLink docFilter="air_toxics"/>
    </>
  )
}

export default HazardousAirPollutionPage