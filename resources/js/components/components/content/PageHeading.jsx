import Column from "../utility/Column";
import Row from '../utility/Row';
import styled from 'styled-components';

const PageHeading = ({ image, alt, title, desc, props}) => {
    console.log(props)
    return (
        <Row>
            { image && (
                <Image src={ image } alt={alt}/> 
            )}
            <Column>
                <BoldP> { title } </BoldP>
                <P variant={'roboto'}> { desc } </P>
            </Column>
        </Row>
    );
}


const BoldP = styled.p`
	color: #003354; 
	font-size: 24px; 
	font-weight: bold;
	line-height: 30px; 
	font-family: Roboto, sans-serif; 
`

const P = styled.p`
	font-family: Roboto, sans-serif; 
	font-weight: bold; 
    color: #003354;
`

const Image = styled.img`
	max-width: 400px; 
	margin-right: 40px; 
`


export default PageHeading;