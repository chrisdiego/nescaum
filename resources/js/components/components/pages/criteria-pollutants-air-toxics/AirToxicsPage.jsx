import PageScaffold from "../../scaffold/PageScaffold";
import DocumentLinks from "../../documents-links/DocumentLinks";
import Column from "../../utility/Column";
import ListItems from "../../content/ListItems";
import Heading from "../../utility/Heading";
import ExternalLink from "../../links/ExternalLink";
const AirToxicsPage = () => {
    return (
        <>
            <PageScaffold
                headline='Hazardous Air Pollutants and Toxic Air Pollution'
            />
            <Column width="al-fu" center mt={20} mb={40}>
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
            <DocumentLinks docFilter="air_toxics"/>
        </>
    )
}

export default AirToxicsPage;