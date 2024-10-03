import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../GlobalStyles";
import { PropagateLoader } from "react-spinners";

const MatchingLoading: React.FC = () => {
	const [currentQuestion, setCurrentQuestion] = useState(1);
	const totalQuestions = 4;
	const navigate = useNavigate();

	const handleNextStep = () => {
		navigate("/matching/result");
	};

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
                    transform: 'scale(2)'
                }}
                />			
			</Container2>
		</Container>
	);
};
export default MatchingLoading;
// 
const Explanation = styled.div`
	width: 761px;
	height: 105px;
	color: #323232;
	text-align: center;
	font-family: "Noto Sans";
	font-size: 35px;
	font-style: normal;
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
