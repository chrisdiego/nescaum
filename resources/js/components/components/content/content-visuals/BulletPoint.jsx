import React from 'react'; 
import styled from 'styled-components'; 

const BulletPoint = () => {
  return (
    <Bullet></Bullet>
  )
}

export default BulletPoint; 

const Bullet = styled.span`
  min-width: 12px; 
  min-height: 12px; 
  max-width: 12px; 
  max-height: 12px; 
  margin-right: 10px; 
  background-color: #669935; 
  border-radius: 75%; 
  margin-top: 2px;
`