import React,{useState} from "react";
import styled from "styled-components";
import {Container} from "../../src/GlobalStyles";


import ProgressBar from "../components/ProgressBar";

const AnimalMatching: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const totalQuestions = 4;

      // 질문 변경 로직 추가

    return (
        <Container>
            <ProgressBar currentStep={currentQuestion} totalSteps={totalQuestions}/>
        </Container>
    );
};
export default AnimalMatching;