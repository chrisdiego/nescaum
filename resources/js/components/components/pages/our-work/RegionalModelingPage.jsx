import DescriptionWithPhotoSideBySideNoBackground from "../../content/DescriptionWithPhotoSideBySideNoBackground";
import PageScaffold from "../../scaffold/PageScaffold";
import Column from "../../utility/Column";
import Paragraph from "../../utility/Paragraph";
import ResourceLibraryLink from "../../documents-links/ResourceLibraryLink";
import DocumentLinks from "../../documents-links/DocumentLinks";

const RegionalModeling = () => {
  return (
    <>
      <PageScaffold 
        heroImage="/assets/images/stock/regional-modeling.jpg"
        headline="Regional Modeling"
        sideImage="/assets/images/stock/regional-modeling.jpg"
        mainText="NESCAUM supports its member states by conducting modeling simulations to better understand local, regional, and sectoral contributions to air quality problems and explore policy implications. "
        heroWidth="500"
      />
      <Column width="al-fu" center mt={40}>
        <Paragraph>
          NESCAUM uses the Community Multi-Scale Air Quality (CMAQ) model to simulate the transport and behavior of ozone, fine particulate matter, and ozone precursor pollutants. CMAQ simulates air pollution using a complex set of meteorological and atmospheric chemistry equations, utilizing representative emissions inputs to produce estimates of ambient pollutant concentrations. Our modeling supplements work performed to prepare state implementation plans for meeting air quality standards; we test emission reduction scenarios based on pollution mitigation strategies and leverage observations from regional field campaigns to optimize model performance for the region. Specific examples of projects that utilize this  modeling platform are listed below. To learn more about the sources and sectors that contribute to air pollution across our member states, NESCAUM has the capacity to rapidly design, implement, and analyze sensitivity scenarios as the need arises, including scenarios designed to explore how bulk local or sectoral contributions and targeted emission-sector adjustments work. 
        </Paragraph>

        
        
      </Column>
      {descriptionData.map((data) => (
        <DescriptionWithPhotoSideBySideNoBackground 
          data={data}
        />
      ))}
      <DocumentLinks docFilter="regional_modeling"/>
      <ResourceLibraryLink docFilter="regional_modeling"/>
    </>
  )
}

export default RegionalModeling; 

const descriptionData = [
  {
    title: "Long Island Sound Tropospheric Ozone Study (LISTOS)", 
    content: "The Long Island Sound Tropospheric Ozone Study investigates how interactions between land masses and water bodies impact ozone formation in and around Long Island Sound.", 
    href: "/initiatives/listos", 
    imageSrc: "/assets/images/stock/listos.jpg"
  }, 
  {
    title: "Mobile Sources", 
    content: "NESCAUM uses modeling to evaluate the air quality benefits of progressive mobile source emission-reduction strategies. This includes, for instance, modeling the impacts of the Cleaner Trucks Initiative, which aims to reduce diesel NOX emissions from on-road trucks by up to 90% nationwide, in terms of  summertime ground-level ozone and wintertime fine particulate matter pollution concentrations.", 
    imageSrc: "/assets/images/stock/electric-buses-unsplash.jpg"
  }, 
  {
    title: "Electricity Sources", 
    content: "With the Ozone Transport Commission (OTC) Modeling Committee, NESCAUM is contributing modeling to understand the pollution impacts specifically from electricity generating units used during peak electricity demand conditions. A series of simulations targeting peak and non-peak plants have been designed through coordination with the Stationary and Area Sources Committee of the OTC.", 
    imageSrc: "/assets/images/stock/smokestack-small.jpg"
  }
]