// ProgressBar.tsx
import React from "react";
import styled from "styled-components";

interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
}

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

const StyledElementProgressBar = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  height: 18px;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const ElementBarActive = styled.div`
  background-color: #47b1ff;
  border-radius: 50px 8px 8px 50px;
  height: 100%;
  position: relative;
`;

const ElementBar = styled.div`
  background-color: #e5e5e5;
  border-radius: 8px;
  flex-grow: 1;
  height: 100%;
  position: relative;
`;

