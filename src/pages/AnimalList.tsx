import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DataBox from "../components/DataBox";
import FliterDropDown from "../components/FliterDropDown";

import ArrowDropDown from "../assets/images/arrow_drop_down.svg";
import Arrow_left from "../assets/images/Arrow_left.svg";
import Arrow_left_blue from "../assets/images/Arrow_left_blue.svg";
import Arrow_right from "../assets/images/Arrow_right.svg";
import Arrow_right_blue from "../assets/images/Arrow_right_blue.svg";

type FilterOptionsType = {
    [key: string]: string[];
  };
  
  const filterOptions: FilterOptionsType = {
    '시도군': ['수원시', '성남시', '용인시', '부천시', '화성시', '평택시', '고양시', '남양주시', '오산시', '의정부시', '안양시', '광명시', '군포시', '이천시', '시흥시', '양주시', '하남시', '포천시', '여주시', '안산시', '김포시', '의왕시', '구리시', '동두천시'],
    '상태': ['전체', '보호중', '종료'],
    '나이': ['1살 미만', '1살~5살', '6살~9살', '10살 이상'],
    '성별': ['남아', '여아'],
    '중성화': ['완료', '미완료', '알수없음'],
    '품종': ['강아지', '고양이', '그외']
  };
  
  // 임시 데이터 생성 (60개의 더미 데이터)
  const mockAnimals = Array(58).fill(null).map((_, index) => ({
    id: index + 1,
    // 여기에 필요한 다른 속성들을 추가할 수 있습니다.
  }));
const AnimalList: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState<Array<{ id: number }>>([]);
    const itemsPerPage = 15;

    const handleMouseEnter = (filter: string) => {
        setActiveDropdown(filter);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    //이전 페이지와 다음 페이지로 이동할 수 있게 하는 함수
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // 현재 페이지의 아이템들을 계산
    useEffect(() => {
        const getCurrentPageItems = () => {
            const startIndex = (currentPage - 1) * itemsPerPage;
            return mockAnimals.slice(startIndex, startIndex + itemsPerPage);
        };
        setCurrentItems(getCurrentPageItems());
    }, [currentPage]);

    // 총 페이지 수 계산
    const totalPages = Math.ceil(mockAnimals.length / itemsPerPage);

    return (
        <Container>
            <Text1>공고기한이 하루 남은 친구들이에요!</Text1>
            <OnedayRemainContainer>
                {/* 여기에 하루 남은 동물들을 표시 */}
                <DataBox />
                <DataBox />
                <DataBox />
                <DataBox />
                <DataBox />
            </OnedayRemainContainer>

            <FilterContainer>
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

            <AnimalListContainer>
                {currentItems.map((animal) => (
                    <DataBox key={animal.id} />
                ))}
            </AnimalListContainer>

            <Pagination>
                <Arrow onClick={handlePrevPage}>
                    <img 
                        src={currentPage === 1 ? Arrow_left : Arrow_left_blue} 
                        alt="Previous page"
                    />
                </Arrow>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PageButton
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        active={currentPage === page}
                    >
                        {page}
                    </PageButton>
                ))}
                <Arrow onClick={handleNextPage}>
                    <img 
                        src={currentPage === totalPages ? Arrow_right : Arrow_right_blue} 
                        alt="Next page"
                    />
                </Arrow>
            </Pagination>
        </Container>
    );
};

export default AnimalList;

//페이지네이션
const Arrow = styled.div`
    width: 30px;
    height: 30px;
`;

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const PageButton = styled.button<{ active: boolean }>`
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    background-color: ${props => props.active ? '#007bff' : 'white'};
    color: ${props => props.active ? 'white' : 'black'};
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        background-color: ${props => props.active ? '#0056b3' : '#e9ecef'};
    }
`;

//메인 리스트
const AnimalListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    justify-content: center;
    margin: 0 0 20px 20px;
    border: yellow solid 2px;
`;


//아래 동물 전체 리스트 공간
const FilterBoxWrapper = styled.div`
    position: relative;
`;

const FilterContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    padding: 30px 0 10px 30px;
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

const OnedayRemainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
    margin: 0 0 20px 20px;
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
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -1.55px;
    padding-bottom: 20px;
`;