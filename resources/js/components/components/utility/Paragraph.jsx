import styled from 'styled-components'; 

const Paragraph = ({ 
  children, 
  primary,
  bold, 
  align, 
  color, 
  size, 
  ...props 
}) => {

  if (bold) {
    return <BoldP {...{ align, size, color, primary }} {...{ props }} bold>{ children }</BoldP>
  }

  return (
    <P {...{ align, size, color, primary }} {...props}>{ children }</P>
  )
}

export default Paragraph; 

const P = styled.p`
  font-family: ${ props => props.primary ? 'Termina, sans-serif' : 'Roboto, sans-serif' };
  color: ${ props => props.color ? props.color : 'inherit' }; 
  font-weight: ${ props => props.bold ? 'bold' : 'inherit' };
  text-align: ${ props => props.align || 'left' };
  font-size: ${ props => props.size || 'inherit' };

  a {
		color: blue; 
		text-decoration: underline;
		font-family: inherit; 
		font-size: 16px;
	}
`

const BoldP = styled(P)`
  font-size: 20px; 
  font-family: Roboto, sans-serif;
  font-weight: 700; 
`