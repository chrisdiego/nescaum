import PageScaffold from "../../scaffold/PageScaffold";
import Column from "../../utility/Column";
import Paragraph from "../../utility/Paragraph";
import DocumentLinks from "../../documents-links/DocumentLinks";

const WoodHeatPage = () => {
  return (
    <>
      <PageScaffold
        headline='Wood Heating'
        heroImage='/assets/images/stock/wood-burning.jpg'
        sideImage='/assets/images/stock/woodheat1.jpg'
        mainText='Wood heating is a significant source of fine particulate matter (PM2.5), carbon monoxide (CO), and nitrogen dioxide (NO2). Based on EPA’s 2017 National Emission Inventory (NEI), residential wood combustion emits approximately 340,000 tons of primary PM2.5 annually, making it the largest direct source of particulate matter pollution in the country, after road dust and fires (wildfire and prescribed burning).'
      />
      <Column width='al-fu' center mt={60} mb={60}>
        <Paragraph>
          Other studies have concluded that the level of wood-burning may be significantly higher than assumed in the NEI data. Further, analysis by states has found that many residential wood heating appliances emit at levels far above the certified numbers, which EPA uses as inputs in the NEI.  
        </Paragraph>
        <Paragraph>
          Wood smoke also contains carcinogenic and other toxic air pollutants, such as benzene, formaldehyde, acrolein, and polycyclic aromatic hydrocarbons (PAHs). A 2017 study determined that residential wood heating accounts for 10,000 premature deaths annually in the U.S.  
        </Paragraph>
        <Paragraph>
          Wood heating is most prevalent in rural communities, many of which have a high percentage of low-income residents, and few have air quality monitors. Counties with per-capita income below the federal poverty threshold have almost three times more wood heat users than counties above the federal poverty threshold. Additionally, an EIA study of wood use patterns found that lower-income households consume more wood annually than higher-income households. Consequently, residents of these low-income communities are more affected by adverse public health outcomes associated with exposure to wood smoke. 
        </Paragraph>
        <Paragraph>
          NESCAUM’s work in this area includes original research into wood heat-related emissions; leading multi-state workgroups focused on residential wood heating emissions and test methods; commenting on federal proposals and actions; and constructive engagement with EPA on wood heating issues. 
        </Paragraph>
      </Column>
      <DocumentLinks docFilter="wood_heat"/>
    </>
  )
}

export default WoodHeatPage; 

