import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FixedOverlayHandleClick = ({ closeHandler, cb }) => {

  const handleClick = useCallback(() => {
    closeHandler();

    if (cb) {
      cb(); 
    }

  }, [closeHandler, cb]) 
  

  useEffect(() => {
    const el = document.querySelector('.click-handler-modal');
    el.addEventListener('click', handleClick); 

    return () => {
      el.removeEventListener('click', handleClick);
    }
  }, [handleClick])

  return (
    <Container onClick={handleClick} className='click-handler-modal'/>
  )
}

FixedOverlayHandleClick.propTypes = {
  closeHandler: PropTypes.func.isRequired, 
  cb: PropTypes.func,
}

export default FixedOverlayHandleClick; 

const Container = styled.div`
  position: fixed; 
  min-width: 100vw; 
  min-height: 100vh; 
  z-index: 2; 
  top: 0; 
  left: 0; 
`
