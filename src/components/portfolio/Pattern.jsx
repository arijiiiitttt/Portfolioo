import React from 'react';
import styled from 'styled-components';

const Pattern = ({ children }) => {
  return (
    <StyledWrapper>
      <div className="container">
        {children}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    width: 100%;
    height: 100%;
    background: white radial-gradient(rgba(0, 0, 0, 0.1) 20%, transparent 1%);
    background-size: 11px 11px;
  }
`;

export default Pattern;
