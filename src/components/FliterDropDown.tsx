import React from "react";
import styled from "styled-components";
// [React.FC 가 아니라 JSX.Element 사용한 이유]
// JSX.Element : 
// JSX.Element는 JSX를 반환하는 모든 것의 타입을 나타냄
// 이는 컴포넌트 함수의 반환 타입으로 사용될 수 있으며, 컴포넌트가 단순히 JSX를 반환한다는 것을 명시한다
// JSX.Element는 props의 타입을 명시적으로 정의해야 한다

// React.FC(Function Component)를 사용하는 경우:
// React.FC는 함수형 컴포넌트를 위한 타입이다
// 이는 암시적으로 children prop을 포함하며, 반환 타입이 ReactElement | null이다
// React.FC는 제네릭을 사용하여 props의 타입을 정의할 수 있다

// -> React.FC를 사용하면 제네릭을 사용할 때 일부 문제가 발생할 수 있다
// -> 함수 선언만으로도 충분히 컴포넌트의 의도를 전달할 수 있다

export const FliterDropDown = ({ options }: { options: string[] }): JSX.Element => {
  // FliterDropDown 컴포넌트가 props로 options를 받아 동적으로 옵션을 렌더링하도록 수정
    return (
      <StyledBox className="box">
        <div className="group">
          <div className="overlap-group">
            {options.map((option, index) => (
              <div key={index} className="option">
                {option}
              </div>
            ))}
          </div>
        </div>
      </StyledBox>
    );
  };

export default FliterDropDown;

const StyledBox = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 8px 0;
  min-width: 120px;

  .group {
    width: 100%;
  }

  .overlap-group {
    width: 100%;
  }

  .option {
    padding: 8px 16px;
    font-family: "NanumSquareNeo", sans-serif;
    font-size: 14px;
    color: #333;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;