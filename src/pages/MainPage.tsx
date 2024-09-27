import React,{useEffect} from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchAnimalData, AnimalData } from "../services/api";

import GogAndCat from "../assets/images/MainPage_Dog_and_Cat.svg"

const MainPage: React.FC = () => {
    const {data: animalData, isLoading, isError, error} = useQuery<AnimalData[],Error>({
        queryKey:['animalData'],
        queryFn: () => fetchAnimalData(),
    });

    //콘솔로 찍어보고 싶으면 uesEffect 사용하기
    useEffect(()=> {
        if (animalData) {
            console.log("Animal Data:", animalData);
        }
    },[animalData]);

    // if (isLoading) return <Loading>Loading</Loading>;
    // if (isError) return <Loading>Error: {error.message}</Loading>

        return (
        <PageContainer>
            <ContentWrapper>
                <TextContent>
                <Title>
                    버려진 아이들과 <LineBreak />
                    당신의<BlueTitle>운명적 만남</BlueTitle>, 찾고계신가요?
                </Title>
                <Subtitle>
                    지금 당신의 따뜻한 마음을 기다리는 친구들이 있습니다.
                    <br /> 유기동물 입양으로 가족이 되어주세요.
                </Subtitle>
                <Button>
                    나의 반려동물 찾기
                    <PawIcon>🐾</PawIcon>
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



// const Loading = styled.div`
//     border-color: #7ECDFF;
// `

// 새로운 스타일 컴포넌트들
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 45px;
`;

const TextContent = styled.div`
  flex: 1;
`;

// PageContainer: 전체 페이지 레이아웃을 담당합니다.
const PageContainer = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 40px;
  background-color: white;
`;


// Title: 메인 제목을 스타일링합니다.
const Title = styled.h1`
  color: #323232;
  font-size: 65px;
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
font-size: 33px;
font-family: Noto Sans;
font-weight: 400;
line-height: 43px;
word-wrap: break-word;
`;

// Button: "나의 반려동물 찾기" 버튼을 스타일링합니다.
const Button = styled.button`
    display: inline-flex;
    height: 80px;
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
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1.44px;

    // 옵션: 포커스 시 나타나는 기본 아웃라인도 제거하고 싶다면 추가
    &:focus {
        outline: none;
    }
    &:hover {
        background: #7ECDFF;
    }
`;
// PawIcon: 버튼 내의 발바닥 아이콘을 위한 컴포넌트입니다.
const PawIcon = styled.span`
    margin-left: 8px;
`;

// AnimalsContainer: 동물 이미지들을 감싸는 컨테이너입니다.
const AnimalsContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
    width: 50vw; // 뷰포트 너비의 40%
    max-width: 650px; // 최대 너비 제한
    height: auto;
    object-fit: contain;
}
`;

// AnimalImage: 동물 이미지의 기본 스타일을 정의합니다.
const AnimalImage = styled.div<{ bgColor: string }>`
    width: 100px;
    height: 100px;
    background-color: ${props => props.bgColor};
    border-radius: 20px;
    margin: 0 10px;
    position: relative;
    overflow: hidden;
    
`;

// Dog: AnimalImage를 확장하여 개 이미지를 표현합니다.
const Dog = styled(AnimalImage)`
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 80%;
    background-image: url('path_to_dog_image.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom right;
  }
`;

// Cat: AnimalImage를 확장하여 고양이 이미지를 표현합니다.
const Cat = styled(AnimalImage)`
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background-image: url('path_to_cat_image.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom left;
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