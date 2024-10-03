import React from "react";
import scrapNo from "../assets/images/scrap_no.svg";
import scrapYes from "../assets/images/scrap_yes.svg";
import { Container} from "../GlobalStyles";
import styled from "styled-components";
import rectangle from "../assets/images/Rectangle 21.svg";

// Dummy data (통신 후 삭제)
const dogInfo = {
    품종: "포메라니안",
    성별: "수컷",
    중성화여부: "미완료",
    나이: "1살",
    체중: "2kg",
    접수일시: "2024-09-20",
    발견장소: "경기도 여주군 지저구",
    특징: "5개월 추정, 귀엽고 사랑스럽다",
    공고기한: "2024-09-06 ~ 2024-09-19",
    보호센터: "경기도 유기동물보호소",
    센터주소: "경기도 평택시 진위면 야막길 69",
    연락처: "031-8024-3849"
  };

  // ScrapComponent 생성
interface ScrapProps {
    isScraped: boolean;
}

const ScrapComponent: React.FC<ScrapProps> = ({ isScraped }) => (
    <Scrap>
        <ScrapImage src={isScraped ? scrapYes : scrapNo} alt={isScraped ? "scrapYes" : "scrapNo"} />
    </Scrap>
);

const DetailPage: React.FC = () => {

 return (
    <Container1>
        <Section>
            <Section1>
                <Section1_1>
                <AnnouncementNumber><ScrapComponent isScraped={false} />
                공고번호 경기-평택-2024-01466
        </AnnouncementNumber>
                <StyledImage src={rectangle} alt="rectangle" />
                </Section1_1>
                <Section1_2>                   
                    {Object.entries(dogInfo).map(([key, value])=>(
                        <Info key={key}>
                            <A>{key}</A>
                            <B>{value}</B>
                        </Info>
                    ))}
                </Section1_2>
            </Section1>

            <Line/>

            <Section2>
                <SectorName>
                      <span className="shelter-name">"보호소이름"</span>
                      <span className="waiting-text">에서 기다리고 있어요</span>
                </SectorName>
                <MapContainer>
                  <Map></Map>
                </MapContainer>
            </Section2>
        </Section>
     </Container1>
 );
};
export default DetailPage;

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

// 스크랩 버튼 컨테이너 스타일링
const Scrap = styled.div`
  width: 42px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;  // 상단 패딩 추가
`;

// 스크랩 이미지 스타일링
const ScrapImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;  // 이미지 비율 유지하며 컨테이너에 맞춤
`;

// 공고 번호 스타일링
const AnnouncementNumber = styled.div`
  display: flex;
  color: #323232;
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -1.5px;
`;

// 메인 섹션 컨테이너 스타일링
const Section = styled.div`
  width: 900px;
  height: auto;  // 내용에 따라 높이 자동 조정
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid red;  // 임시 테두리 (개발 중 시각화용) */

`;

// 상단 섹션 (이미지와 정보) 스타일링
const Section1 = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;  // 최대 너비 증가
  margin: 0 auto;  // 중앙 정렬
`;

// 이미지 컨테이너 스타일링
const Section1_1 = styled.div`
  flex: 1.2;  // 이미지 섹션의 비율 증가
  padding-right: 5%;
  margin-left: 7px;
  display: fixed;  // 추가
  justify-content: center;  // 추가
  align-items: center;  // 추가
`;

// 정보 리스트 컨테이너 스타일링
const Section1_2 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;  // 섹션의 절반 너비 차지 (유지)
  gap: 8px;  // 정보 항목 사이 간격 (유지)
  padding: 20px;  // 내부 여백 (유지)
  padding-left: 10px;  // 100px에서 80px로 감소
  margin-top: 10px;
`;
// 동물 이미지 스타일링
const StyledImage = styled.img`
  width: 100%;  // 부모 컨테이너에 맞춤
  max-width: 700px;  // 최대 너비 설정
  height: auto;  // 비율 유지
  border-radius: 20px;
  margin-top: 5px;  // 상단 여백 조정
`;

// 개별 정보 항목 스타일링
const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;  // 라벨과 값 사이 간격
`;

// 정보 라벨 스타일링
const A = styled.div`
  min-width: 90px;
  padding: 5px 10px;
  border-radius: 69.5px;
  background: #47B2FF;
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: -0.56px;
`;

// 정보 값 스타일링
const B = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.64px;
`;

// 섹션 구분선 스타일링
const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #E0E0E0;
  margin: 20px 0;
`;

// 하단 섹션 컨테이너 스타일링
const Section2 = styled.div`
  width: 100%;
`;

// 섹터 이름 스타일링 (추후 구현 예정)
const SectorName = styled.div`
width: 638px;
height: 56px;
color: #109AFF;
font-family: "Noto Sans";
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 37.5px */
letter-spacing: -1.25px;

.shelter-name {
  color:#109AFF;
}
.waiting-text {
  color:#323232;
}
`;
const MapContainer = styled.div`
 padding-bottom: 8%;
`;
// 지도 컨테이너 스타일링 (추후 구현 예정)
const Map = styled.div`
width: 916px;
height: 462px;
border-radius: 20px;
background-color: #79c7ff;
`;