import React from "react";
import styled from "styled-components";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const StyledElementProgressBar = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  height: 130px;
  min-width: 830px;
  position: relative;
  width: 100%;
`;

const ElementBarActive = styled.div`
  background-color: #47b1ff;
  border-radius: 50px 8px 8px 50px;
  flex: 1;
  flex-grow: 1;
  height: 23px;
  position: relative;
`;

const ElementBar = styled.div`
  background-color: #e5e5e5;
  border-radius: 8px;
  flex: 1;
  flex-grow: 1;
  height: 23px;
  position: relative;
`;

const ElementThBar = styled.div`
  background-color: #e5e5e5;
  border-radius: 8px 50px 50px 8px;
  flex: 1;
  flex-grow: 1;
  height: 23px;
  position: relative;
`;

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <StyledElementProgressBar>
      <ElementBarActive style={{ width: `${progress}%` }} />
      {Array.from({ length: totalSteps - 1 }, (_, index) => (
        <ElementBar 
          key={index} 
          style={{ 
            backgroundColor: index < currentStep - 1 ? '#47b1ff' : '#e5e5e5',
            borderRadius: index === totalSteps - 2 ? '8px 50px 50px 8px' : '8px'
          }} 
        />
      ))}
    </StyledElementProgressBar>
  );
};

export default ProgressBar;