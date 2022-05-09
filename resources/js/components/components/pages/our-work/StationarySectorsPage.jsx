import DescriptionWithPhotoSideBySide from "../../content/DescriptionWithPhotoSideBySide";
import PageScaffold from "../../scaffold/PageScaffold";
import Column from "../../utility/Column";
import ResourceLibraryLink from "../../documents-links/ResourceLibraryLink"
import DocumentLinks from "../../documents-links/DocumentLinks";

const StationarySectorsPage = () => {
  return (
    <> 
      <PageScaffold 
        heroImage="/assets/images/stock/smokestack-pexels.jpg"
        headline="Stationary Sectors"
        sideImage="/assets/images/stock/street-smoke.jpg"
        mainText="Various types of stationary sources emit pollutants that affect air quality. This is a particular issue when sources are located near homes or other sensitive places, such as schools and hospitals, and when an area is impacted by multiple sources. NESCAUM is involved in several activities that target emissions from stationary sources:"
      />

      <Column mt={80}>
        {subArticles.map((data, index) => {
          return (
            <DescriptionWithPhotoSideBySide
              {...{data, index}}
              inverse={index % 2 === 0}
            />
          )
        })}
      </Column>
      <DocumentLinks docFilter="stationary_sectors"/>
      <ResourceLibraryLink docFilter="stationary_sectors"/>
    </>
  )  
}

export default StationarySectorsPage; 

const subArticles = [
  {
    title: 'Permitting and enforcement', 
    content: 'NESCAUM works with states and the EPA to coordinate discussions and facilitate communication on critical permitting, permit modeling, compliance, and enforcement issues. Topics include states’ testing of EPA air quality model updates, emissions calculations, permitting and enforcement issues, and addressing concerns about overburdened communities.', 
    imageSrc: '/assets/images/stock/paperwork-pexels.jpg', 
    href: '#' 
  },
  {
    title: 'Building electrification', 
    content: 'Fossil-fuel use in residential and commercial buildings accounts for  approximately 36 percent of criteria pollutants and greenhouse gases. Switching thermal heating, cooling, and water heating systems to electricity can substantially reduce emissions from buildings. To help states develop policies, NESCAUM is estimating the emissions reduction potential of residential and commercial heating systems.', 
    imageSrc: '/assets/images/stock/ge-pexels.jpg', 
  },
  {
    title: 'Emerging issues:', 
    content: 'As emissions from major stationary sources decline, the relative impact of smaller sources, often referred to as “area sources”, has increased. Reducing emissions from these sources presents unique challenges. NESCAUM’s work has focused on industrial, commercial, and institutional (ICI) boilers; home heating oil; residential wood heating; dry cleaners; and gasoline stations. NESCAUM also reviews and comments on federal proposals. ', 
    imageSrc: '/assets/images/stock/boiler-pexels.jpg', 
  },
  {
    title: 'Wood heating', 
    content: 'NESCAUM works regionally and nationally on issues related to the use of wood for thermal energy for residential, commercial, and institutional applications. Specific areas of focus include test method development, inventory analysis, emission factor development, and policy strategies.', 
    imageSrc: '/assets/images/stock/wood-on-fire-pexels.jpg', 
    href: '#' 
  },
]
