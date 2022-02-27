import styled from "styled-components";
import Column from "../utility/Column";
import Heading from "../utility/Heading";

const ResourceLibraryLinks = ({ documents }) => {
    console.log("DOCUMENTS: ", documents);
    return (
        <>
            <Column width="50%">
                <ContainerWithBorder>
                    <Heading text="Your Search Results" size={28} mb="0" />
                </ContainerWithBorder>

                {documents.map((document) => {
                    return <div key={document.id}>working</div>;
                })}
            </Column>
        </>
    );
};

export default ResourceLibraryLinks;

const ContainerWithBorder = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: flex-start;
    height: 50px;
    align-items: center;
`;
