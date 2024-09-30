import React, { useState } from "react";
import styled from "styled-components";
import DataBox from "../components/DataBox";
import FliterDropDown from "../components/FliterDropDown";
import ArrowDropDown from "../assets/images/arrow_drop_down.svg";

type FilterOptionsType = {
  [key: string]: string[];
};

// filterOptions 객체를 사용하여 각 필터의 옵션을 정의
const filterOptions: FilterOptionsType = {
  '시도군': ['수원시', '성남시', '용인시', '부천시', '화성시', '평택시', '고양시', '남양주시', '오산시', '의정부시', '안양시', '광명시', '군포시', '이천시', '시흥시', '양주시', '하남시', '포천시', '여주시', '안산시', '김포시', '의왕시', '구리시', '동두천시'],
  '상태': ['전체', '보호중', '종료'],
  '나이': ['1살 미만', '1살~5살', '6살~9살', '10살 이상'],
  '성별': ['남아', '여아'],
  '중성화': ['완료', '미완료', '알수없음'],
  '품종': ['강아지', '고양이', '그외']
};

const AnimalList: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const handleMouseEnter = (filter: string) => {
        setActiveDropdown(filter);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

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
            {/* AnimalList 컴포넌트에서 Object.keys(filterOptions)를 사용하여 필터 목록을 동적으로 생성 */}
                {Object.keys(filterOptions).map((filter) => (
                    <FilterBoxWrapper
                        key={filter}
                        onMouseEnter={() => handleMouseEnter(filter)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <FilterBox>
                            {filter}
                            <img src={ArrowDropDown} alt="dropdown" className="arrow-drop-down" />
                        </FilterBox>
                        {activeDropdown === filter && (
                            <FliterDropDown options={filterOptions[filter]} />
                        )}
                    </FilterBoxWrapper>
                ))}
            </FilterContainer>
        </Container>
    );
};

export default AnimalList;

// ... (나머지 스타일 컴포넌트는 이전과 동일)

const FilterBoxWrapper = styled.div`
    position: relative;
`;

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
    border-radius: 16px;
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