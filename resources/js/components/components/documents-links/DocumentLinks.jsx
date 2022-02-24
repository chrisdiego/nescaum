import Column from "../utility/Column";
import Paragraph from "../utility/Paragraph";
import styled from "styled-components";

const DocumentLinks = ({ documents, children }) => {
    return (
        <Container>
            <Column width={"al-fu"} center>
                {children}

                <PdfGrid className="pdfGrid">
                    {documents.map((document, index) => {
                        return (
                            <a
                                key={index}
                                href={document.href}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <DocumentDiv>
                                    <Paragraph align="center" size="30px">
                                        {document.type || "PDF"}
                                    </Paragraph>
                                    <br />
                                    <Paragraph>Open link in new tab</Paragraph>
                                </DocumentDiv>
                                <Paragraph bold align="center" size="20px">
                                    {document.text}
                                </Paragraph>
                            </a>
                        );
                    })}
                </PdfGrid>
            </Column>
        </Container>
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

const PdfGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: minmax(100, 300);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
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
