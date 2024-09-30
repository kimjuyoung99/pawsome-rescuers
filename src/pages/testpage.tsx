import React from "react";
import icon from "./icon.svg";
import rectangle457 from "./rectangle-457.svg";
import styled from "styled-components";

const StyledBox = styled.div`
  height: 370px;
  position: relative;
  width: 226px;

  .group {
    height: 370px;
    left: 0;
    position: fixed;
    top: 0;
    width: 228px;
  }

  .overlap {
    background-image: url(./rectangle-21.png);
    background-position: 50% 50%;
    background-size: cover;
    height: 177px;
    left: 0;
    position: absolute;
    top: 0;
    width: 190px;
  }

  .overlap-group-wrapper {
    height: 33px;
    left: 17px;
    position: relative;
    width: 51px;
  }

  .overlap-group {
    height: 33px;
    position: relative;
    width: 49px;
  }

  .rectangle {
    height: 20px;
    left: 0;
    position: absolute;
    top: 13px;
    width: 49px;
  }

  .text-wrapper {
    color: #ffffff;
    font-family: "Inter-Bold", Helvetica;
    font-size: 11px;
    font-weight: 700;
    left: 5px;
    letter-spacing: -0.44px;
    line-height: 50px;
    position: absolute;
    text-align: center;
    top: 0;
    white-space: nowrap;
    width: 38px;
  }

  .div {
    height: 189px;
    left: 6px;
    position: absolute;
    top: 181px;
    width: 171px;
  }

  .overlap-2 {
    height: 176px;
    left: 0;
    position: absolute;
    top: 13px;
    width: 171px;
  }

  .icon {
    height: 20px;
    left: 155px;
    position: absolute;
    top: 0;
    width: 16px;
  }

  .frame-wrapper {
    height: 156px;
    left: 0;
    position: absolute;
    top: 19px;
    width: 171px;
  }

  .frame {
    height: 156px;
    position: relative;
  }

  .overlap-3 {
    height: 108px;
    left: 0;
    position: absolute;
    top: 0;
    width: 86px;
  }

  .text-wrapper-2 {
    color: #7f7f7f;
    font-family: "Inter-Medium", Helvetica;
    font-size: 15px;
    font-weight: 500;
    left: 0;
    letter-spacing: -0.6px;
    line-height: 50px;
    position: absolute;
    top: 78px;
    white-space: nowrap;
    width: 86px;
  }

  .text-wrapper-3 {
    color: #7f7f7f;
    font-family: "Inter-Medium", Helvetica;
    font-size: 15px;
    font-weight: 500;
    left: 0;
    letter-spacing: -0.6px;
    line-height: 50px;
    position: absolute;
    top: 26px;
    white-space: nowrap;
    width: 72px;
  }

  .text-wrapper-4 {
    color: #7f7f7f;
    font-family: "Inter-Medium", Helvetica;
    font-size: 15px;
    font-weight: 500;
    left: 0;
    letter-spacing: -0.6px;
    line-height: 50px;
    position: absolute;
    top: 53px;
    white-space: nowrap;
    width: 78px;
  }

  .text-wrapper-5 {
    color: #7f7f7f;
    font-family: "Inter-Medium", Helvetica;
    font-size: 15px;
    font-weight: 500;
    left: 1px;
    letter-spacing: -0.6px;
    line-height: 50px;
    position: absolute;
    top: 0;
    white-space: nowrap;
    width: 71px;
  }

  .overlap-group-2 {
    height: 55px;
    left: 86px;
    position: absolute;
    top: 52px;
    width: 100px;
  }

  .text-wrapper-6 {
    color: #323232;
    font-family: "Inter-Medium", Helvetica;
    font-size: 15px;
    font-weight: 500;
    left: 17px;
    letter-spacing: -0.6px;
    line-height: 50px;
    position: absolute;
    text-align: right;
    top: 0;
    white-space: nowrap;
    width: 83px;
  }

  .text-wrapper-7 {
    color: #323232;
    font-family: "Inter-Medium", Helvetica;
    font-size: 15px;
    font-weight: 500;
    left: 0;
    letter-spacing: -0.6px;
    line-height: 50px;
    position: absolute;
    text-align: right;
    top: 26px;
    white-space: nowrap;
    width: 100px;
  }

  .text-wrapper-8 {
    color: #323232;
    font-family: "Inter-Medium", Helvetica;
    font-size: 15px;
    font-weight: 500;
    left: 94px;
    letter-spacing: -0.6px;
    line-height: 50px;
    position: absolute;
    text-align: right;
    top: 25px;
    white-space: nowrap;
    width: 92px;
  }

  .text-wrapper-9 {
    color: #323232;
    font-family: "Inter-Medium", Helvetica;
    font-size: 15px;
    font-weight: 500;
    left: 146px;
    letter-spacing: -0.6px;
    line-height: 50px;
    position: absolute;
    text-align: right;
    top: -1px;
    white-space: nowrap;
    width: 39px;
  }

  .text-wrapper-10 {
    color: #323232;
    font-family: "Inter-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    left: 1px;
    letter-spacing: -0.8px;
    line-height: 50px;
    position: absolute;
    top: 0;
    white-space: nowrap;
    width: 112px;
  }
`;

export const Box = (): JSX.Element => {
  return (
    <StyledBox>
      <div className="group">
        <div className="overlap">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <img className="rectangle" alt="Rectangle" src={rectangle457} />
              <div className="text-wrapper">보호중</div>
            </div>
          </div>
        </div>
        <div className="div">
          <div className="overlap-2">
            <img className="icon" alt="Icon" src={icon} />
            <div className="frame-wrapper">
              <div className="frame">
                <div className="overlap-3">
                  <div className="text-wrapper-2">중성화</div>
                  <div className="text-wrapper-3">시도군</div>
                  <div className="text-wrapper-4">성별</div>
                  <div className="text-wrapper-5">나이</div>
                </div>
                <div className="overlap-group-2">
                  <div className="text-wrapper-6">남아</div>
                  <div className="text-wrapper-7">중성화 미완료</div>
                </div>
                <div className="text-wrapper-8">안산시</div>
                <div className="text-wrapper-9">1살</div>
              </div>
            </div>
          </div>
          <div className="text-wrapper-10">한국 고양이</div>
        </div>
      </div>
    </StyledBox>
  );
};