import ListItems from "../../content/ListItems"
import ResourceLibraryLink from "../../documents-links/ResourceLibraryLink"
import PageScaffold from "../../scaffold/PageScaffold"
import Column from "../../utility/Column"
import Paragraph from "../../utility/Paragraph"
import DocumentLinks from "../../documents-links/DocumentLinks";
import styled from "styled-components";

const RegulatoryCompliancePage = () => {
  return (
    <>
      <PageScaffold 
        heroImage='/assets/images/stock/smoke-stack-regulatory-compliance.jpg'
        headline='Regulatory Compliance'
      />
      <Column width='al-fu' center>
          <Image src="/assets/images/stock/compliance.jpg" alt="Image of smoke stack" />
        <ListItems singular>
          <Paragraph>
            <b>Facilitating discussions on compliance and enforcement issues.</b> NESCAUM facilitates discussions between the U.S. Environmental Protection Agency (EPA) and states on several key aspects of regulatory compliance, including EPA oversight of compliance programs via the State Review Framework (SRF) and data reporting tools such as EPA's Enforcement and Compliance History Online (ECHO) website and the Integrated Compliance Information System (ICIS). NESCAUM also works with states and the EPA to develop compliance and enforcement policies, such as the High Priority Violations policy and requirements for state Compliance Monitoring Strategy (CMS) commitments, and reviews and comments on federal proposals.
          </Paragraph>
        </ListItems>
        <ListItems singular>
          <Paragraph>
            <b>Identifying regional areas of interest.</b> NESCAUM identifies regional areas of interest through its regional network of contacts. Examples include emissions sectors of concern, new testing and assessment tools, and new approaches to enhance compliance with Clean Air Act requirements.
          </Paragraph>
        </ListItems>
      </Column>
      <DocumentLinks docFilter="regulatory_compliance"/>
      <ResourceLibraryLink docFilter="regulatory_compliance"/>
    </>
  )
}

export default RegulatoryCompliancePage;

const Image = styled.img`
  margin: 0 auto;
  margin-bottom: 15px;
  max-width: 100%;
`;