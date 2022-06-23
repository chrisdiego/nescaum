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
        
        <Heading text='Key Documents' mb='10px' />

        <Heading text='Signatory Jurisdictions' mb='10px' />
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