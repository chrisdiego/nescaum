import Column from "../utility/Column";
import Paragraph from "../utility/Paragraph";
import styled from "styled-components";
import { API_URL } from "../../../constants/constants";
import { useEffect, useState } from "react";
import ExternalLink from "../links/ExternalLink";
import Row from "../utility/Row";
import Heading from "../utility/Heading";

const DocumentLinks = ({ docFilter }) => {
    const [documents, setDocuments] = useState([]);
        
    useEffect(async () => {
        if (!documents?.length) {
            let url = `${API_URL}/assets/documents?limit=999999999`;
            const response = await fetch(url);
            const results = await response.json();
            setDocuments(results.data);
        }
    }, [documents]);

    const filteredResults = documents?.filter(result => result?.display_on?.some(page => (page["key"] == docFilter) && result?.show_document_preview_on_page));
    
    if(!filteredResults.length)
        return null;
    
    return (
                <Column width="al-fu" center>
                    <Heading
                        text="Resources"
                        size="24"
                        mt="20px"
                        mb="20px"
                        align="center"
                        width="100%"
                    />
                    <Row wrap>
                        {filteredResults.map(document => (
                            <Document>
                                <ExternalLink href={document.url} aria_label={`Link to ${document.formatted_title} Document`}>
                                    <h5>{document.formatted_title}</h5>
                                    <Paragraph>{document.description} <i><small>{document.date}</small></i></Paragraph>
                                    <Image src={document.thumbnail?.url} alt={document.alt_tex}/>
                                </ExternalLink>
                            </Document>
                        ))}
                    </Row>
                </Column>
    );
};

export default DocumentLinks;

const Container = styled.div`
    min-width: 100vw;
    min-height: 400px;
    background-color: #daebf5;
    padding: 40px;
    margin-top: 40px;

    & > p {
        color: #006cb3;
    }
`;

const Image = styled.img`
  max-width: 350px; 
  margin: 0 auto;
  display: block;
  border-bottom: 1px solid black;
  padding-bottom: 25px;
`

const Document = styled.div`
    max-width: 400px;
    padding-top: 20px;

    h5 {
        text-align: center;
    }
`;
