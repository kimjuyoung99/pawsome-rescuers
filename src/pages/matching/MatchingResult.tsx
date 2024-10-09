import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../GlobalStyles";
import Vector from "../../assets/images/Vector_2.svg";
import Paw from "../../assets/images/Paw_blue.svg";
import { fetchAnimalData, AnimalData } from "../../services/api";
import {
	transformAnimalData,
	TransformedAnimalData,
	ColorCategory
} from "../matching/matchingAlgorithms/Matching_AtherOption";

const colorMap: Record<Exclude<ColorCategory, 'Unknown'>, string[]> = {
  White: ['아이보리', '크림', '백색', '백', '흰색', '흰'],
  BlackWhite: ['검백색', '얼룩', '검/흰', '검.백', '검정흰색', '검줄/흰', '백흑색'],
  ThreeColor: ['삼색', '백흑갈색'],
  Mackerel: ['고등어', '반점무늬', '고등어태비'],
  Black: ['흑색', '흑갈', '검정', '회흑', '흑', '블랙탄'],
  Gold: ['노랑색', '황색', '크림색', '치즈색', '치즈', '황갈색'],
  Brown: ['베이지색', '흑갈', '초코', '초코색', '갈', '흑갈색', '연갈색', '갈백'],
  Gray: ['회백색', '쥐색', '검정회색']
};

const MatchingResult: React.FC = () => {
	const [matchingAnimals, setMatchingAnimals] = useState<TransformedAnimalData[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		const species = localStorage.getItem('species');
		const sex = localStorage.getItem('sex');
		const weight = localStorage.getItem('weight');
		const colors = JSON.parse(localStorage.getItem('colors') || '[]') as ColorCategory[];
		console.log('LocalStorage values in MatchingResult:', { species, sex, weight, colors });
	
		const fetchData = async () => {
			try {
				const { data, totalCount } = await fetchAnimalData();
				console.log(`Total data count: ${totalCount}`);
				const transformedData: TransformedAnimalData[] = data.map(transformAnimalData);
				const filteredData = transformedData.filter(animal => {
					const speciesMatch = animal.species === species;
					const sexMatch = animal.sex === sex;
					const weightMatch = animal.weightCategory === weight;
					
					// Color matching logic
					const colorMatch = colors.some(selectedColor => 
						animal.colorCategories.includes(selectedColor) ||
						(animal.COLOR_NM && colorMap[selectedColor as keyof typeof colorMap]?.some(keyword => 
							animal.COLOR_NM?.includes(keyword)
						))
					);
					
					console.log(`Animal: ${animal.SPECIES_NM}, Species: ${animal.species}, Sex: ${animal.sex}, Weight: ${animal.weightCategory}, Color: ${animal.COLOR_NM}`);
					console.log(`Matches: Species: ${speciesMatch}, Sex: ${sexMatch}, Weight: ${weightMatch}, Color: ${colorMatch}`);
					
					return speciesMatch && sexMatch && weightMatch && colorMatch;
				});

				setMatchingAnimals(filteredData.slice(0, 3)); // 최대 3개의 결과만 표시
				console.log("Filtered animals:", filteredData);
			} catch (error) {
				console.error("Error fetching animal data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<Container>
			<Container2>
				<Explanation>당신의 운명의 반려동물을 찾았어요! 🎊</Explanation>
				<Container3>
					<AnimalResultContainer>
						{matchingAnimals.length > 0 ? (
							matchingAnimals.map((animal, index) => (
								<AC key={index}>
									<Cercle src={animal.IMAGE_COURS}></Cercle>
									<ACWrapper>
										<Name>
											{animal.SPECIES_NM}
											<Line src={Vector} />
											{animal.AGE_INFO}
										</Name>
									</ACWrapper>
									<GoDetail>
										보러가기
										<PawIcon as="img" src={Paw} alt="Paw icon" />
									</GoDetail>
								</AC>
							))
						) : (
							<p>매칭되는 동물이 없습니다.</p>
						)}
					</AnimalResultContainer>
					<ButtonContainer>
						<ButtonWrapper>
							<B1>결과 설명듣기</B1>
							<B2>테스트 다시하기</B2>
						</ButtonWrapper>
					</ButtonContainer>
				</Container3>
			</Container2>
		</Container>
	);
};

export default MatchingResult;
const PawIcon = styled.svg`
	width: 17px;
	height: 17px;
`;
const B2 = styled.button`
	display: flex;
	width: 208px;
	height: 50px;
	padding: 16px 32px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	color: var(--Pure-white, var(--Schemes-On-Primary, #fff));
	font-family: Inter;
	font-size: 20px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	letter-spacing: -0.92px;
	border-radius: 35px;
	background: #323232;
	font-family: "NanumSquareNeo", sans-serif;
`;
const B1 = styled.button`
	display: flex;
	width: 208px;
	height: 50px;
	padding: 16px 32px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	color: #7f7f7f;
	font-family: Inter;
	font-size: 22px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	letter-spacing: -0.92px;
	border-radius: 61px;
	border: 1px solid #7f7f7f;
	font-family: "NanumSquareNeo", sans-serif;
`;
const ButtonContainer = styled.div`
	/* border: 2px solid blue; */
	height: 80px;
	width: 500px;
	max-height: 450px;
	max-width: 1000px;
	margin: 8% 40% 0% 40%;
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const GoDetail = styled.button`
	display: flex;
	width: 100px;
	height: 30px;
	padding: 16px 15px;
	justify-content: center;
	align-items: center;
	gap: 1px;
	flex-shrink: 0;
	border-radius: 999px;
	border: 1px solid #47b2ff;
	color: #47b2ff;
	font-family: Inter;
	font-size: 13px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	letter-spacing: -0.72px;
	margin-left: 27%;
`;
const ButtonWrapper = styled.div`
	display: flex;
	gap: 20px; // 버튼 사이의 간격
`;
const Line = styled.img`
	margin: 15% 5% 0 5%;
`;
const Name = styled.div`
	width: 200px;
	color: #323232;
	font-family: Inter;
	font-size: 22px;
	font-style: normal;
	font-family: "NanumSquareNeo", sans-serif;

	font-weight: 600;
	line-height: 30px; /* 166.667% */
	padding-bottom: 5%;
	margin-top: -10%;
`;
const Cercle = styled.img`
	width: 214px;
	height: 200px;
	flex-shrink: 0;
	border-radius: 300px;
	border: 8px solid #47b2ff;
	background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 0.09) 0%,
			rgba(0, 0, 0, 0.09) 100%
		),
		url(<path-to-image>) lightgray 50% / cover no-repeat;
`;
const ACWrapper = styled.div`
	display: flex;
	margin-left: 15%;
`;
const AC = styled.div`
	/* border: 2px solid yellow; */
	padding: 0 20px 0 20px;
`;
const AnimalResultContainer = styled.div`
	display: flex;
`;
const Container3 = styled.div`
	/* border: 2px solid red; */
	height: 550px;
	width: 800px;
	max-height: 750px;
	max-width: 1200px;
	margin: 0% 40% 2% 40%;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Explanation = styled.div`
	width: 761px;
	height: 105px;
	color: #323232;
	text-align: center;
	font-size: 30px;
	font-style: normal;
	font-family: "NanumSquareNeo", sans-serif;
	font-weight: 700;
	margin-top: 20px;
	line-height: 42px; /* 107.692% */
	letter-spacing: -1.95px;
`;
const Container2 = styled.div`
	height: 550px;
	width: 900px;
	max-height: 1000px;
	max-width: 1200px;
	margin-left: 10%;
	margin-right: 10%;
	border: 2px solid #e5e5e5;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
