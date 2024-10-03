import React,{useState} from "react";
import styled from "styled-components";
import {Container, Text1} from "../../GlobalStyles";
import DogAndHuman1 from "../../assets/images/DogAndHuman1.png";
import DogAndHuman2 from "../../assets/images/DogAndHuman2.png";
import DogAndHuman3 from "../../assets/images/DogAndHuman3.png";
import Cat1 from "../../assets/images/Cat1.png";

import ProgressBar from "../../components/ProgressBar";

const AnimalMatching: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const totalQuestions = 4;

      // 질문 변경 로직 추가

    return (
        <Container1>
            <Container2>
                {/* <ProgressBar currentStep={currentQuestion} totalSteps={totalQuestions}/> */}
                <Text2>테스트를 통해<br/>당신의 털친구를 찾아드릴게요!</Text2>
                <ImageContainer>
                <Image><img src={DogAndHuman1}/></Image>
                <Image><img src={DogAndHuman2}/></Image>
                <Image><img src={DogAndHuman3}/></Image>
                <Image><img src={Cat1}/></Image>
            </ImageContainer>
            </Container2>
        </Container1>
    );
};
export default AnimalMatching;

// 전체 컨테이너 스타일링 커스텀
const Container1 = styled(Container)`
  display: flex;
  flex-direction: column;  // 세로 방향으로 요소 배치
  justify-content: flex-start;  // 요소들을 위에서부터 배치
  align-items: center;  // 가로 방향으로 중앙 정렬
  height: 100vh;  // 뷰포트 전체 높이 사용
  width: 100%;  // 전체 너비 사용
  padding: 20px;  // 내부 여백
  gap: 20px;  // 요소들 사이의 간격
`;
const Container2 = styled.div`
    display: flex;
`;
const ImageContainer = styled.div`
    display: flex;
`;
const Text2 = styled(Text1)`
    justify-content: center;
    margin-left: 20%;
    width: 700px;
    font-size: 30px;
    margin-top: 200px; // 이 줄을 추가합니다. 원하는 만큼 픽셀 값을 조정하세요.
`;
const Image = styled.div`
    height: 300px;
    width: 300px;
`;
