import styled from "styled-components";
import Column from "../utility/Column";
import Heading from "../utility/Heading";
import ExternalLink from "../links/ExternalLink";

const ResourceLibraryLinks = ({ documents }) => {
    return (
        <>
            <Column width="50%">
                <ContainerWithBorder>
                    <Heading text="Your Search Results" size={28} mb="0" />
                </ContainerWithBorder>

                {documents.map((document, index) => {
                    return (
                        <StyledLinkContainer
                            key={document.id}
                            isOdd={index % 2 === 1}
                        >
                            <ExternalLink href={document.permalink}>
                                <StyledDocumentHeading>
                                    {document.formatted_title || document.title}
                                </StyledDocumentHeading>
                            </ExternalLink>
                        </StyledLinkContainer>
                    );
                })}
            </Column>
        </>
    );
};

export default ResourceLibraryLinks;

const ContainerWithBorder = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: flex-start;
    height: 50px;
    align-items: center;
`;

const StyledLinkContainer = styled.div`
    width: 100%;
    padding: 10px 15px;
    background-color: ${(props) =>
        props.isOdd ? "rgba(0, 0, 0, .03)" : "inherit"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100px;
`;

const StyledDocumentHeading = styled.h3`
    color: #003354;
    font-weight: bold;
`;
