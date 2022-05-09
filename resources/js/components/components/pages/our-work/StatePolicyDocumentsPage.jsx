import ListItems from "../../content/ListItems";
import ResourceLibraryLink from "../../documents-links/ResourceLibraryLink";
import PageScaffold from "../../scaffold/PageScaffold";
import Column from "../../utility/Column";
import Heading from "../../utility/Heading";
import Paragraph from "../../utility/Paragraph";
import Row from "../../utility/Row";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DocumentLinks from "../../documents-links/DocumentLinks";

const StatePolicyDocumentsPage = () => {

  return (
    <>
      <PageScaffold 
        heroImage="assets/images/stock/statepolicybanner.jpg"
        headline="State Policy Documents"
      />
      <Column width="al-fu" center>
        <Paragraph>
        This page provides links to a selection of recent NESCAUM documents that present policy and program recommendations for supporting state transportation electrification efforts. Additional documents can be found <Link to="/resource-library">here</Link>. 
        </Paragraph>
      </Column>
      <DocumentLinks docFilter="state_policy_documents"/>
      <ResourceLibraryLink docFilter="state_policy_documents"/>
    </>
  )
}

export default StatePolicyDocumentsPage; 