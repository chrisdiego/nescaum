import ListItems from "../../content/ListItems";
import PageScaffold from "../../scaffold/PageScaffold";
import Column from "../../utility/Column";
import ResourceLibraryLink from "../../documents-links/ResourceLibraryLink";
import DocumentLinks from "../../documents-links/DocumentLinks";

const MonitoringPage = () => {
  return (
    <>
      <PageScaffold 
        heroImage="/assets/images/monitoring-banner.jpg"
        headline="Monitoring"
      />
      <Column width="al-fu" center mt={40} mb={40}>
        <ListItems singular>
          <b>Supporting the collection and distribution of criteria pollutant monitoring data.</b> NESCAUM facilitates communication among states and with EPA ensure uniform approaches to regional air monitoring and data assessment and to communicate those data to state air quality planners. NESCAUM also provides a forum for discussion and exchange of ideas regarding existing or emerging techniques and technologies, which, in turn can be used to inform policies, regulations, and strategies related to, or impacted by, air monitoring. 
        </ListItems>
        <ListItems singular>
          <b>Conducts research.</b>  NESCAUM coordinates specific monitoring or data assessment projects with member states and EPA regional offices, such as the Monitoring Collaborative, an effort to coordinate State monitoring network designs at the regional level.  NESCAUM has also adapted continuous PM measurement technologies, traditionally used for ambient monitoring, for stack testing to provide highly time resolved particulate matter data. NESCAUM works closely with instrumentation manufacturers to identify and resolve issues with these technologies to facilitate their use in this application. 
        </ListItems>
        <ListItems singular>
          <b>Enhance public awareness.</b> NESCAUM’s CAMNET work raises public awareness about the effects of air pollution on visibility. This is accomplished, in part, through a network of realtime visibility cameras located at scenic urban and rural locations. In addition, near-realtime air pollution and meteorological data are provided to help distinguish natural from man-made causes of poor visibility, and to provide health-relevant data to the public on current air pollution levels. 
        </ListItems>
      </Column>
      <DocumentLinks docFilter="monitoring"/>
      <ResourceLibraryLink docFilter="monitoring"/>
    </>
  )
}

export default MonitoringPage; 