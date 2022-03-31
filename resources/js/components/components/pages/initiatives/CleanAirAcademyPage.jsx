import FullWidthHeroImage from "../../content/content-visuals/FullWidthHeroImage";
import ListItems from "../../content/ListItems";
import ExternalLink from "../../links/ExternalLink";
import PageScaffold from "../../scaffold/PageScaffold";
import Column from "../../utility/Column";
import Heading from "../../utility/Heading";
import Paragraph from "../../utility/Paragraph";
import styled from 'styled-components';
import DocumentLinks from "../../documents-links/DocumentLinks";

const CleanAirAcademyPage = () => {
  return (
    <>
      <PageScaffold 
        heroImage='/assets/images/stock/classroom.jpg'
        headline='NESCAUM’s Clean Air Academy'
        mainText='NESCAUM’s Clean Air Academy provides air pollution training for staff in our member state air quality agencies. Courses are provided by EPA’s National Air Quality Training Program through EPA’s Learning Management System (LMS) or by private training contractors. NESCAUM operates the program with federal funding.'
      />
      <Column width='al-fu' center>

        <Heading text='EPA’s Learning Management System' />

        <Paragraph>
          In 2021, EPA launched a new <ExternalLink href='https://epaapti.csod.com/client/epaapti/default.aspx'>Learning Management System</ExternalLink> (LMS) to better deliver technical training to air pollution professionals in state, local government, and tribal air agencies. The LMS is part of the National Air Quality Training Program that EPA operates in collaboration with multi-jurisdictional organizations (MJOs) like NESCAUM. The new LMS delivers a modernized user experience and is organized around eight air quality curricula or “functional areas”: 
        </Paragraph>

        <ListItems list={[
          'Air Pollution Basics', 
          'Air Quality Modeling',
          'Air Quality Planning',
          'Air Toxics Rule Development and Implementation', 
          'Ambient Air Monitoring ',
          'Emissions Inventories ',
          'Permitting',
          'Source Emissions Testing and Source Emissions Monitoring',
        ]} />

        <FullWidthHeroImage imageSrc='/assets/images/stock/learning-computer.jpg' width='100%' style={{margin: '40px 0'}}/>

        <Heading text='National Joint Training Committee (JTC)'  />

        <Paragraph>
          The National Joint Training Committee (JTC) consists of multijurisdictional organizations, EPA OAQPS staff and state representatives to engage in national training initiatives to improve how training is being delivered to state/local air programs. The JTC additionally responds to emerging and current training needs. The initiatives are identified and planned within the JTC Steering Committee and executed by the JTC workgroups. For more information on JTC activities, please click <ExternalLink href='https://www.ladco.org/wiki/index.php?title=National_Air_Pollution_Training_Program'>here.</ExternalLink>
        </Paragraph>

        <Heading text='NESCAUM Training Calendar' mt='20px' />

        <Paragraph>
          The schedule below shows upcoming NESCAUM training courses. Agency staff may register for any of these courses through EPA’s LMS or through NESCAUM’s Training Coordinator. For more information, contact NESCAUM’s Training Coordinator Kara Murphy at <a href='mailto:kmurphy@nescaum.org'>kmurphy@nescaum.org</a>.
        </Paragraph>

        <Image src='/assets/images/stock/training-schedule.png'/>
      </Column>
      <DocumentLinks docFilter="clean_air_academy"/>
    </>
  )
}

export default CleanAirAcademyPage; 

const Image = styled.img`
  margin-bottom: 40px;
`