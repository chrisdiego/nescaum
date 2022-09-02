import PageScaffold from "../../scaffold/PageScaffold";
import ResourceLibraryLink from "../../documents-links/ResourceLibraryLink";
import ListItems from "../../content/ListItems";
import ExternalLink from "../../links/ExternalLink";
import Column from "../../utility/Column";
import Paragraph from "../../utility/Paragraph";
import DocumentLinks from "../../documents-links/DocumentLinks";

const TestMethodDevelopmentPage = () => {
    return (
        <>
            <PageScaffold
                heroImage="/assets/images/stock/tmd.png"
                headline="Residential Wood Heater Test Method Development"
            />
            <Column width='al-fu' center>
                <Paragraph>
                State and local air quality agencies rely on EPA's emission certification program under the 2015 Residential Wood Heater New Source Performance Standards (NSPS) for standards and testing of residential wood heaters. The NSPS program is intended to reduce emissions from new wood-burning devices, protect public health, and assist states in attaining and maintaining the National Ambient Air Quality Standards (NAAQS) for particulate matter (PM2.5). Current federal test methods for residential wood heaters are based on burning a 100 percent fuel load under steady-state conditions. This approach, however, does not reflect how appliances are used since significant fluctuations in operating conditions are more typical of “real-world” stove use. Because of this, current test methods may not accurately characterize appliance emissions and efficiency performance in the real world.<sup>${"(1)"}</sup>
                </Paragraph>
                <br />
                <Paragraph>
                In an effort to develop next generation testing protocols that accurately characterize real world stove use and emissions, NESCAUM is researching operating and fueling protocols for stoves and central heating units. The research focuses on a group of tests collectively known as the Integrated Duty Cycle (IDC) test methods. The IDC includes a test method for certification of cordwood or pellet-fired hydronic heating appliances based on a real-world load profile that measures PM, carbon monoxide, and heating efficiency. The IDC methods are widely accepted as providing a robust approach to assessing wood heater emissions. For example, EPA’s “Discussion Paper on Cordwood Test Methods” stated: “The EPA believes that [the IDC method]is a reasonable approach to further the science and to develop cordwood methods that reflect in-home use, improve the precision of wood stove testing, and be protective of human health and the environment as the cornerstone of the NSPS certification program.”
                </Paragraph>
                <hr />
                <br />
                <Paragraph>For more information on the IDC method and NESCAUM work in this area, see:</Paragraph>
                <br />
            <ListItems singular>
                <ExternalLink href="https://www.nescaum.org/documents/nyserda-idc-protocols-for-epa-wood-stove-test-method-research/nyserda-idc-protocols-for-epa-wood-stove-test-method-research/">
                    NYSERDA IDC Protocols for EPA Wood Stove Test Method Research
                </ExternalLink>
            </ListItems>
            <ListItems singular>
                <ExternalLink href="/assets/documents/pellet-boiler-idc-draft-jan-2021.pdf">
                    Integrated Duty Cycle Test Method for Automatic-Feed Hydronic Heating Appliances with External Thermal Storage
                </ExternalLink>
            </ListItems>
            <ListItems singular>
                <ExternalLink href="/assets/documents/nescaum-standard-operating-procedures-for-using-teom-1405-in-a-dilution-tunnel-20-07-20.pdf">
                    NESCAUM Standard Operating Procedures for Using TEOM 1405 in a Dilution Tunnel
                </ExternalLink>
            </ListItems>
            </Column>
            <DocumentLinks docFilter="test_method_development"/>
            <ResourceLibraryLink docFilter="test_method_development"/>
        </>
    );
};

export default TestMethodDevelopmentPage;
