import ListItems from "../../content/ListItems"
import DocumentLinks from "../../documents-links/DocumentLinks"
import PageScaffold from "../../scaffold/PageScaffold"
import Column from "../../utility/Column"
import Paragraph from "../../utility/Paragraph"

const RegulatoryCompliancePage = () => {
  return (
    <>
      <PageScaffold 
        heroImage='/images/smoke-stack-regulatory-compliance.jpg'
        headline='Regualatory Compliance'
      />
      <Column width='al-fu' center>
        <ListItems singular>
          <Paragraph>
            <b>Facilitating discussions on compliance and enforcement issues.</b> NESCAUM facilitates discussions between the U.S. Environmental Protection Agency (EPA) and states on several key aspects of regulatory compliance including EPA oversight of compliance programs via the State Review Framework (SRF) and data reporting tools such as EPA's Enforcement and Compliance History Online (ECHO) website, and the integrated Compliance Information System (ICIS). NESCAUM also works with states and the EPA to develop compliance and enforcement policies, such as the High Priority Violations policy and requirements for state Compliance Monitoring Strategy (CMS) commitments, and reviews and comments on federal proposals. 
          </Paragraph>
        </ListItems>
        <ListItems singular>
          <Paragraph>
            <b>Identifying regional areas of interest.</b> NESCAUM identifies regional areas of interest through it's regional network of contacts. Examples include emissions sectors of concern, new testing and assessment tools, and new approaches to enhance compliance with Clean Air Act requirements. 
          </Paragraph>
        </ListItems>
      </Column>
      <DocumentLinks documents={[
        {
          text: 'ICR Air Stationary Source Compliance and Enforcement Information Reporting', 
          href: 'https://www.nescaum.org/documents/nescaum-icr-air-sources-repting-comments-to-epa-20150211.pdf/'
        },
        {
          text: 'Information Collection Request for Air Stationary Source Compliance and Enforcement Information reporting', 
          href: 'https://www.nescaum.org/documents/nescaum-icr-comments-10-14-2014-final.pdf/'
        },
        {
          text: 'Comments on Proposed Revisions to Federally Reportable Violations Policy', 
          href: 'https://www.nescaum.org/documents/nescaum-frv-letter-to-epa-oeca-20140725.pdf/'
        }, 
        {
          text: 'EPA OECA Response to NESCAUM Letter on Enforcement and Compliance Data Policies', 
          href: 'https://www.nescaum.org/documents/epa-oeca-response-to-nescaum-letter-20140430.pdf/'
        }, 
        {
          text: 'Continuing issues with EPA Enforcement and Compliance Data Policies', 
          href: 'https://www.nescaum.org/topics/enforcement-and-compliance'
        }, 
        {
          text: 'Proposed Changes to Compliance Monitoring Strategy', 
          href: 'https://www.nescaum.org/documents/nescaum-epa-oeca-cms-comments-20131118-w-attach.pdf/'
        }, 
        {
          text: 'Concerns with EPA\'s State Review Framework Round 3', 
          href: 'https://www.nescaum.org/documents/nescaum-srf-r3-final-letter-20120508.pdf/'
        }, 
        {
          text: 'Conerns with EPAs Federally Reportable Violations Approach', 
          href: 'https://www.nescaum.org/documents/nescaum-frv-memo-to-epa-20120502-final.pdf/view?searchterm='
        }
      ]}/>
    </>
  )
}

export default RegulatoryCompliancePage