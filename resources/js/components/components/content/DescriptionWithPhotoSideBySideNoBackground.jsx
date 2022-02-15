import styled from 'styled-components';
import ArrowWithBox from '../content/content-visuals/ArrowWithBox';
import Heading from '../utility/Heading';
import Row from '../utility/Row';

const DescriptionWithPhotoSideBySideNoBackground = ({ 
	inverse,
	data, 
	firstEl
}) => {

	const { title, content, imageSrc, href } = data;

	return (
		<Container {...{ inverse, firstEl }} className='DescriptionWithPhotoSideBySideNoBackground'>
			<TextContainer {...{ inverse }}>
				<Heading text={ title } mb={'20px'} size={32}/>
				<Span > { content } </Span>
				{href && (
					<Row>
						<P>Learn More </P>
						<ArrowWithBox color={'#669935'} href={href}/>
					</Row>
				)}
			</TextContainer>
			<PhotoContainer>
				<Image src={ imageSrc } />
			</PhotoContainer>
		</Container>
	)
}

export default DescriptionWithPhotoSideBySideNoBackground;

DescriptionWithPhotoSideBySideNoBackground.defaultProps = {
	imageSrc: '',
	data: {},
}

const Container = styled.div`
	min-width: 90%
	min-height: 400px; 	
	max-width: 1200px; 
	width: 90%;
	margin: 0 auto;
	justify-content: center;
	display: flex; 
	border-top: ${ props => props.firstEl ? '1px solid rgba(0, 0, 0, .5)' : 0 };
	border-bottom: 1px solid rgba(0, 0, 0, .5);
	flex-direction: ${ props => !props.inverse ? 'row' : 'row-reverse'};
	padding: 40px 0;
	overflow: hidden;
`

const TextContainer = styled.div`
	width: 100%;
	height: 100%; 
	display: flex; 
	flex-direction: column; 
	${ props => {
		if (props.inverse) return `
			margin-left: 100px; 
		`
		return `
			margin-right: 100px; 
		`
	}}
`	

const PhotoContainer = styled.div`
	width: 300px; 
	height: 300px; 
	max-width: 300px; 
	min-width: 300px;
`

const Image = styled.img`
	height: 100%; 
	width: 100%; 
	min-width: 100%;
	object-fit: cover; 
`

const Span = styled.span`
	margin-bottom: 40px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
`

const P = styled.p`
	margin-right: 20px; 
	font-family: Roboto, sans-serif;
	font-weight: 500;
`