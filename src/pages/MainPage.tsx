import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchAnimalData, AnimalData } from "../services/api";

import GogAndCat from "../assets/images/MainPage_Dog_and_Cat.svg"
import Paw from '../assets/images/pow.svg';

const MainPage: React.FC = () => {
    const navigate = useNavigate();
    const {data: animalData} = useQuery<AnimalData[],Error>({
        queryKey:['animalData'],
        queryFn: () => fetchAnimalData(),
    });

    //콘솔로 찍어보고 싶으면 uesEffect 사용하기
    useEffect(()=> {
        if (animalData) {
            console.log("Animal Data:", animalData);
        }
    },[animalData]);

    const handleMatching = () => {
      navigate("/matching");
    }

        return (
        <PageContainer>
            <ContentWrapper>
                <TextContent>
                <Title>
                    버려진 아이들과 <LineBreak />
                    당신의<BlueTitle>운명적 만남</BlueTitle>, 찾고 계신가요?
                </Title>
                <Subtitle>
                    지금 당신의 따뜻한 마음을 기다리는 친구들이 있습니다.
                    <br /> 유기동물 입양으로 가족이 되어주세요.
                </Subtitle>
                <Button onClick={handleMatching}>
                    나의 반려동물 찾기
                    <PawIcon><img src={Paw}/></PawIcon>
                </Button>
                </TextContent>
                <AnimalsContainer>
                <img src={GogAndCat} alt="강아지와 고양이" />
                </AnimalsContainer>
            </ContentWrapper>
        </PageContainer>
        );
};

export default MainPage;


const PageContainer = styled.div`
  width: 1410px;
  height: 1080px;
  margin: 0 auto;
  padding: 0 40px; // 좌우 패딩을 줄임
  background-color: white;
  box-sizing: border-box; // 패딩을 너비에 포함
  overflow-x: hidden; // 가로 스크롤 방지
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  padding-top: 5%;
  max-width: 1360px; // 패딩을 고려한 최대 너비
  margin: 0 auto;
`;

const TextContent = styled.div`
  flex: 1;
  padding-left: 80px;
  max-width: 60%; // 텍스트 영역의 최대 너비 제한
  margin-top: -100px;
`;


// Title: 메인 제목을 스타일링합니다.
const Title = styled.h1`
  color: #323232;
  font-size: 42px;
  font-family: NanumSquare Neo OTF;
  font-weight: 500;
  word-wrap: break-word;
  line-height: 1.2; // 줄 간격 조정

`;

const BlueTitle = styled.span`
  color: #008BF0;
  margin-left: 10px; // '당신의'와 '운명적 만남' 사이 간격 조정
`;

const LineBreak = styled.br``;

// Subtitle: 부제목을 스타일링합니다.
const Subtitle = styled.p`
color: #575757;
font-size: 18px;
font-family: Noto Sans;
font-weight: 400;
line-height: 25px;
word-wrap: break-word;
`;

// Button: "나의 반려동물 찾기" 버튼을 스타일링합니다.
const Button = styled.button`
    display: inline-flex;
    height: 60px;
    padding: 16px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 999px;
    background: #008BF0;
    border: none; // 테두리 제거

    color: #FFF;
    font-family: "Noto Sans";
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -1.44px;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.2);//그림자
    transition: all 0.3s ease;
	// 옵션: 포커스 시 나타나는 기본 아웃라인도 제거하고 싶다면 추가
	&:focus {
		outline: none;
	}
    &:hover {
  background: #7ecdff;
  box-shadow: 0px 6px 7px rgba(0, 0, 0, 0.2);
    }
    &:active {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transform: translateY(2px);
}
`;
// PawIcon: 버튼 내의 발바닥 아이콘을 위한 컴포넌트입니다.
const PawIcon = styled.span`
    /* margin-left: 10px; */
    color:white;

    img {
        width: 32px;
        height:32px;
        object-fit: contain;
    }
`;

// AnimalsContainer: 동물 이미지들을 감싸는 컨테이너입니다.
const AnimalsContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* padding-top: 100px; */
  max-width: 40%; // 이미지 영역의 최대 너비 제한
    padding-right: 5%;
  img {
    width: 85%;
    max-width: 500px; // 이미지 최대 너비 조정
    height: auto;
    object-fit: contain;
  }
`;



// Loading: 로딩 상태를 표시하는 컴포넌트입니다.
const Loading = styled.div`
  color: #7ECDFF;
  font-size: 18px;
  text-align: center;
  margin-top: 50px;
`;



{/* <div>
            <h1>유기동물 보호 정보</h1>
            {
                animalData && (
                    <ul>
                        {animalData.map((animal)=> (
                            <li key={animal.ABDM_IDNTFY_NO}>
                                {animal.SPECIES_NM} - {animal.COLOR_NM} - {animal.AGE_INFO}
                            </li>
                        ))}
                    </ul>
                )}
        </div> */}