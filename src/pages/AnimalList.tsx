import React from "react";
import styled from "styled-components";

const AnimalList: React.FC = () => {
    return (
        <Container>
            <Text1>공고기한이 하루 남은 친구들이에요!</Text1>
            
        </Container>
    )
};

export default AnimalList;

const Container = styled.div`
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
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
`;