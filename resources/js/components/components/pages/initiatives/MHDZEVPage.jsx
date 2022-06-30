import ListItems from "../../content/ListItems";
import ExternalLink from "../../links/ExternalLink";
import PageScaffold from "../../scaffold/PageScaffold";
import Column from "../../utility/Column";
import Heading from "../../utility/Heading";
import Paragraph from "../../utility/Paragraph";
import styled from 'styled-components';
import ResourceLibraryLink from "../../documents-links/ResourceLibraryLink";
import DocumentLinks from "../../documents-links/DocumentLinks";

const jurisdictions = [
    {
        jurisdiction: "California",
    },
    {
        jurisdiction: "Colorado",
        link: "https://sites.google.com/state.co.us/cotriporgfreight/clean-truck-strategy"
    },
    {
        jurisdiction: "Connecticut",
        link: "https://portal.ct.gov/DEEP/Air/Mobile-Sources/EVConnecticut/EVConnecticut---CTs-EV-Commitment"
    },
    {
        jurisdiction: "District of Columbia",
        link: "https://doee.dc.gov/service/mhd-ze-vehicles"
    },
    {
        jurisdiction: "Hawaii",
    },
    {
        jurisdiction: "Maine",
    },
    {
        jurisdiction: "Maryland",
        link: "https://mde.maryland.gov/programs/air/mobilesources/pages/zev.aspx"
    },
    {
        jurisdiction: "Massachusetts",
    },
    {
        jurisdiction: "New Jersey",
        link: "https://www.nj.gov/dep/stopthesoot/"
    },
    {
        jurisdiction: "New York",
        link: "https://www.dec.ny.gov/chemical/121209.html"
    },
    {
        jurisdiction: "North Carolina",
    },
    {
        jurisdiction: "Oregon",
        link: "https://www.oregon.gov/deq/aq/programs/Pages/mdhdZev.aspx"
    },
    {
        jurisdiction: "Pennsylvania",
    },
    {
        jurisdiction: "Province of Québec",
    },
    {
        jurisdiction: "Rhode Island",
    },
    {
        jurisdiction: "Vermont",
    },
    {
        jurisdiction: "Virginia",
    },
    {
        jurisdiction: "Washington",
    },
];

const announcements = [
    {
        announcement: "NESCAUM Extends Period for Public Comment on Draft Multi-State Medium- and Heavy-Duty Zero-Emission Vehicle Action Plan",
        link: "https://www.nescaum.org/documents/mhd-zev-ap-draft-comment-extension.pdf/"
    },
    {
        announcement: "NESCAUM Welcomes Nevada's Participation in the Multi-State Zero-Emission Electric Trucks Initiative",
        link: "https://www.nescaum.org/documents/nescaum-welcomes-nevada-s-participation-in-the-multi-state-zero-emission-electric-trucks-initiative/"
    },
    {
        announcement: "Draft Multi-State Medium- and Heavy-Duty Zero-Emission Vehicle Action Plan",
        link: "/assets/documents/announcement-mhd-zev-ap-public-draft.pdf"
    },
    {
        announcement: "NESCAUM Welcomes the Province of Quebec to the Multi-State MHD Zero-Emission Vehicle Initiative",
        link: "/assets/documents/quebec-statement_9-22-2021.pdf"
    },
    {
        announcement: "15 States and the District of Columbia Join Forces to Accelerate Bus and Truck Electrification",
        link: "/assets/documents/multistate-truck-zev-mou-media-release-20200714.pdf"
    },
];

const key_documents = [
    {
        document: "Multi-State Medium- and Heavy-Duty Zero Emission Vehicle Memorandum of Understanding",
        link: "/assets/documents/mhdv-zev-mou-20220329.pdf",
    },
    {
        document: "Draft Multi-State Medium- and Heavy-Duty Zero Emission Vehicle Action Plan",
        link: "/assets/documents/mhd-zev-action-plan-public-draft-03-10-2022.pdf",
    }
];

const resources = [
    {
        resource: "Understanding the Truck Market, Multi-State ZEV Task Force Webinar, October 29, 2020",
        link: "https://www.nescaum.org/documents/understanding-the-truck-market-webinar-20201029.mp4",
    },
    {
        resource: "Early Experiences in Truck Electrification: A Panel Discussion with Commercial and Public Sector Fleets, November 24, 2020",
        link: "https://www.nescaum.org/documents/mhd-zev-commercial-and-public-fleets-webinar-2-20201124-2002-1.mp4",
    },
    {
        resource: "Transit and School Bus Electrification, December 17, 2020",
        link: "https://www.nescaum.org/documents/transit-and-school-bus-electrification-webinar-20201217-2013-1.mp4",
    },
    {
        resource: "The Role of Utilities in Accelerating Electrification of Medium- and Heavy-Duty Vehicles, January 7, 2021",
        link: "https://www.nescaum.org/documents/the-role-of-utilities-in-accelerating-electrification-of-medium-and-heavy-duty-vehicles-webinar-1-20210107-2003-1.mp4",
    },
    {
        resource: "The Utility Role in MHDV Electrification: Building the Infrastructure and Managing Costs, January 21, 2021",
        link: "https://www.nescaum.org/documents/the-utility-role-in-mhdv-electrification-webinar-20210121-2002-1.mp4",
    },
    {
        resource: "Innovative Finance to Accelerate Truck and Bus Electrification, April 1, 2021",
        link: "https://www.nescaum.org/documents/innovative-finance-to-accelerate-truck-and-bus-electrification-webinar-20210401-1902-1.mp4",
    },
    {
        resource: "Prioritizing Transportation Policy for Health and Equity, December 9, 2021",
        link: "https://www.nescaum.org/documents/prioritizing-transportation-policy-for-health-and-equity-webinar-20211209-2006-1.mp4",
    },
];

const MHDZEVPage = () => {
  return (
    <>
      <PageScaffold 
        headline='Medium- and Heavy-Duty Zero-Emission Vehicles: Action Plan Development Process'
        heroImage='/assets/images/stock/electric-bus1.png'
      />
      <Column width='al-fu' center>
        <Paragraph>
        Through a memorandum of understanding, 16 states, the District of Columbia, and the Canadian province of Quebec are working collaboratively to advance and accelerate the market for electric medium- and heavy-duty (MHD) vehicles, including large pickup trucks and vans, delivery trucks, box trucks, school and transit buses, and long-haul delivery trucks. The goal is to ensure that 100 percent of all new truck and bus sales are zero-emission vehicles (ZEVs) by 2050, with an interim target of at least 30 percent by 2030.
        </Paragraph>
        <br />
        <Paragraph>
        To provide a framework for meeting these goals, the signatory jurisdictions are working through the Multi-State ZEV Task Force facilitated by NESCAUM to develop a MHD ZEV Action Plan. This page provides information about the process for developing the Action Plan and includes the following:
        </Paragraph>
        <br />
        <Heading text='Announcements' mb='10px' />
            {announcements.map(({ announcement, link }) => {
                return (
                    <ListItems singular>
                        <ExternalLink href={link} target="_blank">
                            {announcement}
                        </ExternalLink>
                    </ListItems>
                );
            })}
        <Heading text='Key Documents' mb='10px' mt='10px' />
            {key_documents.map(({ document, link }) => {
                return (
                    <ListItems singular>
                        <ExternalLink href={link} target="_blank">
                            {document}
                        </ExternalLink>
                    </ListItems>
                );
            })}
        <Heading text='Signatory Jurisdictions' mb='10px' mt='10px' />
        <Paragraph>
            The signatory jurisdictions are listed below. To access an individual jurisdiction's MHD ZEV website, please click on the jurisdiction name. You will then be redirected to the corresponding website.
        </Paragraph>
        <br />
        {jurisdictions.map(({ jurisdiction, link }) => {
            return (
                <ListItems singular>
                    {
                    link ? <ExternalLink href={link}>
                        {jurisdiction}
                    </ExternalLink> : jurisdiction
                    }
                </ListItems>
            );
        })}
        <br />
        <Heading text='Online Learning Resources' mb='10px'  />
        <Paragraph>
            NESCAUM is holding a series of webinars for the multi-state ZEV Task Force to inform the development of the Action Plan. Recordings of the webinars will be posted here as they become available:
        </Paragraph>
            {resources.map(({ resource, link }) => {
                return (
                    <ListItems singular>
                        <ExternalLink href={link} target="_blank">
                            {resource}
                        </ExternalLink>
                    </ListItems>
                );
            })}
        <br />
        <Heading text='Portal for Public Input' mb='10px'  />
        <Paragraph>
        You can submit comments, ideas, or suggestions for the MHD ZEV Action Plan on the portal for public input.
        <br />
        You can also view the collected stakeholder submissions.
        </Paragraph>
        <br />
      </Column>
      <DocumentLinks docFilter="mhd_zev_initiative"/>
      <ResourceLibraryLink docFilter="mhd_zev_initiative"/>
    </>
  )
}

export default MHDZEVPage; 

const Image = styled.img`
  margin-bottom: 40px;
`