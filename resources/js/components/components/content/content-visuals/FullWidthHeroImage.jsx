import styled from 'styled-components';

const FullWidthHeroImage = ({ imageSrc, width, ...props }) => {
	return (
		<Container className='FullWidthHeroImage' width={width} {...props}>
			<Image src={ imageSrc } alt='hero image'/>
		</Container>
	)
}

export default FullWidthHeroImage; 

const Container = styled.div`
	width: ${props => props.width ? props.width : '100vw'}; 
	height: 400px; 
`

const Image = styled.img`
	object-fit: cover; 
	max-width: 100%; 
    width: 100%;
	height: 100%; 
`