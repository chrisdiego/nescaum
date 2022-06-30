import PageScaffold from "../../scaffold/PageScaffold";
import Column from "../../utility/Column";
import Paragraph from "../../utility/Paragraph";
import ResourceLibraryLink from "../../documents-links/ResourceLibraryLink";
import DocumentLinks from "../../documents-links/DocumentLinks";
import styled from "styled-components";
import Heading from "../../utility/Heading";

const BuildingElectrificationPage = () => {
  return (
    <>
      <PageScaffold
        headline='Building Electrification'
        heroImage='/assets/images/stock/building-electrification.jpg'
        sideImage='/assets/images/stock/building-electrification2.jpg'
        mainText='Emissions from fossil fuel combustion in commercial and residential buildings account for approximately one third of greenhouse gas (GHG) and nitrogen oxide (NOx) emissions in the Northeast. In addition, on-site combustion of fossil fuels results in particulate matter (PM2.5) and air toxics emissions.'
        subText="A transition from fossil fuel powered space and water heating, cooking, and other building-related fossil fuel combustion is essential to lowering GHG and criteria air emissions. To assist states in evaluating approaches to effect this transition, NESCAUM launched its Building Electrification Initiative (BEI). As part of this effort, NESCAUM has convened a multi-state Building Electrification Task Force of state air program and climate staff."
        heroWidth="500"
      />
      <Column width='al-fu' center mt={60} mb={60}>
        <Heading 
            text="Building Electrification Task Force"
          size="24"
          mt="20px"
          mb="40px" />
        <Paragraph>
        Facilitated and guided by NESCAUM, the Task Force serves as forum for states to discuss building electrification technologies and policies. Task Force states are undertaking actions to accelerate the transition to all-electric buildings, such as providing purchase incentives for ground and air-source heat pumps for space and water heating; incentivizing building envelope improvements in existing buildings; updating codes to require more energy efficient buildings; and establishing emission standards for fuels and building systems. The BEI Task Force of state air and climate program staff is exploring policy options within the broader context of state, federal, and local efforts to advance cleaner, more energy-efficient building technologies—beginning with communities that have been disproportionately burdened by air pollution and are most vulnerable to the impacts of climate change. The Task Force will consider the technical, market and policy landscapes and the implications that new regulations could have on public health, the economy, and state environmental goals.
        </Paragraph>
        <Paragraph>
        NESCAUM is supporting Task Force states by estimating the emissions benefits that result from conversion of homes from fossil fuel heating systems to heat pumps; developing emission inventories for commercial and residential buildings; inventorying boilers and other building systems; and evaluating the costs and cost-savings associated with building electrification.
        </Paragraph>
      </Column>
      <DocumentLinks docFilter="building-electrification"/>
      <ResourceLibraryLink docFilter="building-electrification"/>
    </>
  )
}

export default BuildingElectrificationPage; 

const Image = styled.img`
  margin: 0 auto;
  margin-bottom: 15px
`;