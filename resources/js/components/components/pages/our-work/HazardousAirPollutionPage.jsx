import ListItems from '../../content/ListItems';
import ExternalLink from '../../links/ExternalLink';
import PageScaffold from '../../scaffold/PageScaffold';
import Column from '../../utility/Column';
import Heading from '../../utility/Heading';
import Paragraph from '../../utility/Paragraph';
import { Link } from 'react-router-dom';

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
        <Heading text="Criteria Air Pollutants" mb="20px" style={{textDecoration: 'underline'}}/>
        <ListItems singular>
          <b>National Ambient Air Quality Standards (NAAQS)</b>. National Ambient Air Quality Standards (NAAQS). The Clean Air Act requires EPA to conduct periodic reviews of the NAAQS for the six criteria air pollutants. The NAAQS are the foundation of a wide range of air quality programs, so it is essential that those standards are protective of the public health and welfare of all communities.  NESCAUM reviews and comments on EPA proposals concerning NAAQS standard setting, including: 
        </ListItems>
        <ListItems singular>
            Procedures that affect the derivation of the NAAQS,
        </ListItems>
        <ListItems singular>
          Planning, science, and policy assessments developed by EPA and its advisory committees during the mandated periodic reviews, and
        </ListItems>
        <ListItems singular>
          NAAQS proposed subsequent to the reviews.
        </ListItems>
        <ListItems singular>
          Recent NECAUM comments have addressed EPA proposals concerning{' '}
          <ExternalLink href='https://www.nescaum.org/documents/nescaum-transparency-snprm-comments-2020518-final.pdf/' >cost-benefit analyses, the use of scientific study data</ExternalLink>
          , and the NAAQS for fine particulate matter{' '}
          <ExternalLink href='https://www.nescaum.org/documents/nescaum-pm2-5-naaqs-comments-final-20200629.pdf/'>(PM<span style={{fontSize: 8}}>2.5</span>)</ExternalLink>{' '}
          and{' '}
          <ExternalLink href='https://www.nescaum.org/documents/nescaum-ozone-naaqs-comments-final-20201001.pdf/'>
            ozone
          </ExternalLink>
        </ListItems>
        <ListItems singular>
          <b>Supporting state air quality planning efforts.</b> NESCAUM facilitates state discussions and information sharing to support the development of State Implementation Plans, which are designed to enable air quality to attain and maintain the NAAQS. Interstate coordination is particularly essential for ozone, particulate matter, and regional haze, which are highly impacted by regional and long-range pollutant transport. 
        </ListItems>

        <Heading text="HAPs/Toxic Air Pollutants" mb="20px" mt="20px" style={{textDecoration: 'underline'}}/>

        <ListItems singular>
          <b>EPA HAP proposals.</b> Working with member states, NESCAUM assesses the impact of proposed EPA actions regarding HAPs and, where appropriate, prepares comments on those proposals. EPA actions reviewed include proposed NESHAPs, the risk and technology assessments that underly the NESHAPs, and risk-related science and policy documents. In 2020, <ExternalLink href="https://www.nescaum.org/documents/nescaum-mon-rtr-comments-final-20200218.pdf/" rel="noopener noreferrer">NESCAUM commented</ExternalLink> on the proposed Residual Risk and Technology Review for the Miscellaneous Organic Chemical Manufacturing NESHAP.
        </ListItems>
        <ListItems singular>
          <b>Supporting state air toxics programs.</b> NESCAUM coordinates the exchange of about air toxics information among member states and with federal partners.  Focus issues include state air toxics program development; the derivation of health-based ambient air benchmarks; air-related impacts of per- and polyfluoroalkyl substances (PFAS;, and the toxics impacts of emissions from sources like ports, petroleum terminals, ethylene oxide sterilizers, and drycleaners. [I have presentations from the February ATPH meeting on almost all of these issues if you want to link to them.] 
        </ListItems>
        <ListItems singular>
          In April 2021, NESCAUM, working with state partners, submitted a letter to EPA urging the agency to publicly release an updated National Air Toxics Assessment (NATA). The letter details the ways that state programs use those data, including in the identification of communities that are disproportionately impacted by stationary and mobile air toxics sources.
        </ListItems>
      </Column>
    </>
  )
}

export default HazardousAirPollutionPage