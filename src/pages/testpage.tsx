import React from "react";
import styled from "styled-components";
import vector from "../assets/images/Vector.svg";

const StyledBox = styled.div`
  height: 96px;
  width: 110px;

  .group {
    height: 96px;
    left: 0;
    position: fixed;
    top: 0;
    width: 116px;
  }

  .overlap-group {
    height: 96px;
    position: relative;
    width: 110px;
  }

  .rectangle {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #bbbbbb;
    border-radius: 20px;
    height: 87px;
    left: 0;
    position: absolute;
    top: 9px;
    width: 76px;
  }

  .vector {
    height: 1px;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 37px;
    width: 76px;
  }

  .img {
    height: 1px;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 66px;
    width: 76px;
  }

  .text-wrapper {
    color: #008bef;
    font-family: "Poppins-Bold", Helvetica;
    font-size: 14px;
    font-weight: 700;
    left: 24px;
    letter-spacing: -0.56px;
    line-height: 50px;
    position: absolute;
    top: 0;
    white-space: nowrap;
    width: 86px;
  }

  .div {
    color: #000000;
    font-family: "Poppins-Medium", Helvetica;
    font-size: 15px;
    font-weight: 500;
    left: 18px;
    letter-spacing: -0.6px;
    line-height: 50px;
    position: absolute;
    top: 28px;
    white-space: nowrap;
    width: 77px;
  }

  .text-wrapper-2 {
    color: #000000;
    font-family: "Poppins-Medium", Helvetica;
    font-size: 15px;
    font-weight: 500;
    left: 23px;
    letter-spacing: -0.6px;
    line-height: 50px;
    position: absolute;
    top: 55px;
    white-space: nowrap;
    width: 79px;
  }
`;

export const Box = (): JSX.Element => {
  return (
    <StyledBox className="box">
      <div className="group">
        <div className="overlap-group">
          <div className="rectangle" />
          <img className="vector" alt="Vector" src={vector} />
          <img className="img" alt="Vector" src={vector} />
          <div className="text-wrapper">전체</div>
          <div className="div">보호중</div>
          <div className="text-wrapper-2">종료</div>
        </div>
      </div>
    </StyledBox>
  );
};