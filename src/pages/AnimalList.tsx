import React,{useState} from "react";
import styled from "styled-components";
import DataBox from "../components/DataBox";
import FliterDropDown from "../components/FliterDropDown";

import ArrowDropDown from "../assets/images/arrow_drop_down.svg";

const AnimalList: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const handleMouseEnter = (filter:string) => {
        console.log("Mouse enter:", filter); // 디버깅을 위한 로그
        setActiveDropdown(filter);
    };

    const handleMouseLeave = () => {
        console.log("Mouse leave"); // 디버깅을 위한 로그
        setActiveDropdown(null);
    }

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
                {['시도군', '상태', '품종', '나이', '성별'].map((filter) => (
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
                            <div style={{ position: 'relative' }}>
                                <FliterDropDown />
                            </div>
                        )}
                    </FilterBoxWrapper>
                ))}
            </FilterContainer>
        </Container>
    )
};

export default AnimalList;

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