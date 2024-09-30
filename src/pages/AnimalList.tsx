import React from "react";
import styled from "styled-components";
import DataBox from "../components/DataBox";
import Fliter from "../components/Fliter";

import ArrowDropDown from "../assets/images/arrow_drop_down.svg";


const AnimalList: React.FC = () => {
    return (
        <Container>
            <Text1>공고기한이 하루 남은 친구들이에요!</Text1>
            <BoxContainer>
                <DataBox />
                <DataBox />
                <DataBox />
                <DataBox />                
                <DataBox />                
            </BoxContainer>
            <FilterContainer>
                <FilterBox>
                    시도군
                    <img src={ArrowDropDown} alt="dropdown" className="arrow-drop-down" />
                </FilterBox>
                <FilterBox>
                    상태
                    <img src={ArrowDropDown} alt="dropdown" className="arrow-drop-down" />
                </FilterBox>
                <FilterBox>
                    품종
                    <img src={ArrowDropDown} alt="dropdown" className="arrow-drop-down" />
                </FilterBox>
                <FilterBox>
                    나이
                    <img src={ArrowDropDown} alt="dropdown" className="arrow-drop-down" />
                </FilterBox>
                <FilterBox>
                    성별
                    <img src={ArrowDropDown} alt="dropdown" className="arrow-drop-down" />
                </FilterBox>
            </FilterContainer>
        </Container>
    )
};

export default AnimalList;

const FilterContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    padding: 30px 0 30px 30px;

    border: 3px solid blue;
`;

const FilterBox = styled.div`
    width: 76px;
    height: 32px;
    position: relative;
    background-image: url(./rectangle-414.svg);
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 10px 0 10px;
    font-size: 14px;
    color: #333;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    // 새로 추가된 스타일
    // 수정된 스타일
    border-radius: 16px;  // 높이의 절반 값
    border: 2px solid #BBBBBB;
    font-weight: 600;

    .arrow-drop-down {
        width: 15px;
        height: 15px;
    }
`;

const BoxContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
    margin: 0 0 0 20px;
    border: yellow solid 2px;
`;

const Container = styled.div`
    padding: 20px;
    max-width: 1200px;
    margin: 10px 10px 10px 120px;
    border: red solid 2px;
`;

const Text1 = styled.div`
    width: 100%;
    max-width: 638px;
    color: #323232;
    font-family: "Noto Sans", sans-serif;
    font-size: 31px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -1.55px;
    padding-bottom: 20px;
`;