import React, { useState, useEffect } from "react";
import { Container, Arrow, Text1, Pagination, PageButton } from '../GlobalStyles';
import { ScrapAnimalListContainer } from '../GlobalStyles';  // 새로운 스타일 컴포넌트 import
import styled from "styled-components";
import DataBox from "../components/DataBox";

import Arrow_left from "../assets/images/Arrow_left.svg";
import Arrow_left_blue from "../assets/images/Arrow_left_blue.svg";
import Arrow_right from "../assets/images/Arrow_right.svg";
import Arrow_right_blue from "../assets/images/Arrow_right_blue.svg";

// 임시 데이터 생성 (예: 58개의 더미 데이터)
const mockAnimals = Array(58).fill(null).map((_, index) => ({
  id: index + 1,
  // 여기에 필요한 다른 속성들을 추가할 수 있습니다.
}));

const ScrapPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // 5열 2행이므로 10개로 유지

    // 현재 페이지의 아이템들을 계산
    const getCurrentPageItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return mockAnimals.slice(startIndex, startIndex + itemsPerPage);
    };

    // 총 페이지 수 계산
    const totalPages = Math.ceil(mockAnimals.length / itemsPerPage);

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

    return(
        <Container>
            <Text1>친구들에게 관심을 가져 주셔서 감사해요!</Text1>

            <ScrapAnimalListContainer>
                {getCurrentPageItems().map((animal) => (
                    <DataBox key={animal.id} />
                ))}
            </ScrapAnimalListContainer>

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

export default ScrapPage;