import Column from "../../utility/Column";
import Heading from "../../utility/Heading";
import Paragraph from "../../utility/Paragraph";
import { API_URL } from "../../../../constants/constants";
import { useEffect, useState } from "react";
import styled from "styled-components";

const PressPage = () => {
    const [documents, setDocuments] = useState([]);
        
    useEffect(async () => {
        if (!documents?.length) {
            let url = `${API_URL}/assets/documents?limit=999999999`;
            const response = await fetch(url);
            const results = await response.json();
            setDocuments(results.data);
        }
    }, [documents]);
    
    const filteredResults = documents?.filter(result => result?.document_type?.some(type => type["key"] == 'press_release'))
    console.log(documents)
    console.log(filteredResults)
  return (
    <Column width='al-fu' center mt={60} mb={80}>
      <Heading bold text='Press' />
                <PdfList className="pdfGrid">
                    {filteredResults?.map((document, index) => {
                        const lastUpdated = new Date(document?.last_modified)
                        return (
                            <a
                                key={index}
                                href={document.url}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Paragraph bold align="center" size="20px">
                                    {document.formatted_title}
                                </Paragraph>
                                <Paragraph  align="center" size="16px">
                                    Last Updated: {`${lastUpdated.getMonth()+1}-${lastUpdated.getDate().toString()}-${lastUpdated.getFullYear().toString()}`}
                                </Paragraph>
                                
                            </a>
                        );
                    })}
                </PdfList>
    </Column>
  )
}

export default PressPage;


const PdfList = styled.div`
    width: 100%;
`;


const DocumentDiv = styled.div`
    width: 200px;
    min-height: 250px;
    border: 2px solid white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin: 0 auto 20px auto;

    &:hover {
        cursor: pointer;
    }
`;