import Column from "../utility/Column";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const ResourceLibraryLink = ({ children, docFilter }) => {

    return (
        <Container>
            <Column width={"al-fu"} center>
            <StyledResourceLibraryLink>
                <Link to={`/resource-library/${docFilter}`}>
                    Learn More    
                </Link>
            </StyledResourceLibraryLink>
            </Column>
        </Container>
    );
};

export default ResourceLibraryLink;

const Container = styled.div`
    min-width: 100vw;
    min-height: 110px;
    background-color: #daebf5;
    padding: 40px;
    margin-top: 40px;

    & > p {
        color: #006cb3;
    }

    @media screen and (min-width: 768px) and (max-width: 1200px) {
        margin-left: -15px;
    }
`;

const StyledResourceLibraryLink = styled.h3`
    font-weight: bold;
    text-align: center;
    width: 100%;
`;
