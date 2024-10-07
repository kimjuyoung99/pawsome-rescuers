import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../GlobalStyles";
import { PropagateLoader } from "react-spinners";

import Cat1 from "../../assets/images/Cat1.png";

const MatchingLoading: React.FC = () => {
	const [currentQuestion, setCurrentQuestion] = useState(1);
	const totalQuestions = 4;
	const navigate = useNavigate();

	useEffect(() => {
		const timer = setTimeout(() => {
			navigate("/matching/result");
		}, 3000); // 3000ms = 3초

		// 컴포넌트가 언마운트되면 타이머를 정리합니다.
		return () => clearTimeout(timer);
	}, []); // 빈 의존성 배열은 이 효과가 마운트 시에만 실행됨을 의미합니다.


	return (
		<Container>
			<Container2>
				<Explanation>
					어떤 동물이
					<br />
					당신에게 찾아올까요?
				</Explanation>

				<PropagateLoader
					color="#7ECDFF"
					cssOverride={{
						transform: "scale(2) translateY(-20px)", //위치 조정
					}}
				/>
				<Cat src={Cat1}></Cat>
			</Container2>
		</Container>
	);
};
export default MatchingLoading;

const Cat = styled.img`
	margin-left: 10%;
	margin-top: 6%;
	width: 200px;
	height: 200px;
`;
const Explanation = styled.div`
	width: 761px;
	height: 105px;
	color: #323232;
	text-align: center;
	font-family: "NanumSquareNeo";
	font-size: 35px;
	font-family: 'NanumSquareNeo', sans-serif;
	font-weight: 700;
	margin-top: 20px;
	line-height: 42px;
	letter-spacing: -1.95px;
	margin: 10% 0 8% 3%;
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
