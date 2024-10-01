import React from "react";
import scrapNo from "../assets/images/scrap_no.svg";
import scrapYes from "../assets/images/scrap_yes.svg";
import { Container} from "../GlobalStyles";
import styled from "styled-components";
import rectangle from "../assets/images/Rectangle 21.svg";

const ScrapComponent: React.FC<ScrapProps> = ({ isScraped }) => (
    <Scrap>
        <ScrapImage src={isScraped ? scrapYes : scrapNo} alt={isScraped ? "scrapYes" : "scrapNo"} />
    </Scrap>
);

const DetailPage: React.FC = () => {

 return (
    <Container1>
        <AnnouncementNumber><ScrapComponent isScraped={false} />
                공고번호 경기-평택-2024-01466</AnnouncementNumber>
        <Section>
            <Section1>
                <Section1_1>
                    <Image></Image>
                </Section1_1>
                <Section1_2>
                    <Info>
                        <A></A>
                        <B></B>
                    </Info>
                </Section1_2>
            </Section1>

            <Line/>

            <Section2>
                <SectorName></SectorName>
                <Map></Map>
            </Section2>
        </Section>
     </Container1>
 );
};
export default DetailPage;

const Container1 = styled(Container)`
    display: flex;
  flex-direction: column;  // 세로 방향으로 요소들을 배치
  justify-content: flex-start;  // 요소들을 위에서부터 배치
  align-items: center;  // 가로 방향으로 중앙 정렬
  height: 100vh;  // 뷰포트의 전체 높이를 사용
  width: 100%;  // 전체 너비를 사용
  padding: 20px;  // 상하 여백 추가
  gap: 20px;  // 요소들 사이의 간격
`;
// Scrap 컴포넌트 수정
const Scrap = styled.div`
    width: 42px;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top:5px;
`;

const ScrapImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

// ScrapComponent 생성
interface ScrapProps {
    isScraped: boolean;
}
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
const Section = styled.div`
  width: 900px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid red;
  `;
const Section1 = styled.div``;
const Section1_1 = styled.div``;
const Image = styled.div``;
const Section1_2 = styled.div``;
const Info = styled.div``;
const A = styled.div``;
const B = styled.div``;

const Line = styled.div``;

const Section2 = styled.div``;
const SectorName = styled.div``;
const Map = styled.div``;