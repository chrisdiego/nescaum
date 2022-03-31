import DescriptionWithPhotoSideBySideNoBackground from "../../content/DescriptionWithPhotoSideBySideNoBackground";
import PageScaffold from "../../scaffold/PageScaffold";
import Column from "../../utility/Column";
import Heading from "../../utility/Heading";
import Paragraph from "../../utility/Paragraph";
import DocumentLinks from "../../documents-links/DocumentLinks";

const RegionalModeling = () => {
  return (
    <>
      <PageScaffold 
        heroImage="/assets/images/stock/regional-modeling.jpg"
        headline="Regional Modeling"
        sideImage="/assets/images/stock/regional-modeling.jpg"
        mainText="NESCAUM supports its member states by conducting modeling simulations to better understand local, regional, and sectoral contributions to air quality problems and explore policy implications. "
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
    </>
  )
}

export default RegionalModeling; 

const descriptionData = [
  {
    title: "Long Island Sound Tropospheric Ozone Study (LISTOS)", 
    content: "The Long Island Sound Tropospheric Ozone Study investigates how interactions between land masses and water bodies impact ozone formation in and around Long Island Sound. Using the coupled meteorology-chemistry model WRF-CMAQ at a high resolution of 1.33 km by 1.33 km, NESCAUM is leveraging observations gathered during the summer 2018 LISTOS field campaign to conduct model performance evaluation and optimization. Sensitivity simulations are being used to test meteorology parameterizations and develop emissions reductions scenarios based on an improved understanding of formaldehyde to NOX ratios in the New York City/Long Island area.", 
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
    content: "NESCAUM uses modeling to evaluate the air quality benefits of progressive mobile source emission-reduction strategies. This includes, for instance, modeling the impacts of the Cleaner Trucks Initiative, which aims to reduce diesel NOX emissions from on-road trucks by up to 90% nationwide, in terms of  summertime ground-level ozone and wintertime fine particulate matter pollution concentrations.", 
    imageSrc: "/assets/images/stock/smokestack-small.jpg"
  }
]