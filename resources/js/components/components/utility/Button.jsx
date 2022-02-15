import styled from 'styled-components'

const Button = ({ bgColor = '#669935', text, noMarginTop, style, id, ...props }) => {

  return <B 
    {...{ 
      bgColor, 
      noMarginTop 
    }} 
    style={style}
    id={id}
    {...props}
  > { text } </B>
}

export default Button; 

const B = styled.button`
background-color: ${ props => props.bgColor }; 
color: white; 
padding: 10px 20px; 
display: inline-block;
max-width: 320px;
text-align: center;
margin-top: ${props => props.noMarginTop ? 0 : '20px'};
outline: none;
border: 0;

:hover {
    cursor: pointer;
}

@media screen and (max-width: 768px) {
  margin: 20px auto; 
}
`