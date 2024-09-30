import React from "react";
import scrapNo from "../assets/images/scrap_no.svg";
import scrapYes from "../assets/images/scrap_yes.svg";
import rectangle from "../assets/images/Rectangle 21.svg";
import styled from "styled-components";

export const DataBox: React.FC = () => {
	return (
		<StyledBox>
			<div className="group">
				<div className="overlap">
					<div className="overlap-group-wrapper">
						<div className="overlap-button">
							<div className="text-wrapper">보호중</div>
						</div>
					</div>
				</div>
				<div className="div">
					<div className="overlap-2">
						<img className="scrapNo" alt="scrapNo" src={scrapNo} />
						<div className="frame-wrapper">
							<div className="frame">
								<div className="overlap-3">
									<div className="text-wrapper-2">중성화</div>
									<div className="text-wrapper-3">시도군</div>
									<div className="text-wrapper-4">성별</div>
									<div className="text-wrapper-5">나이</div>
								</div>
								<div className="overlap-group-2">
									<div className="text-wrapper-6">남아</div>
									<div className="text-wrapper-7">중성화 미완료</div>
								</div>
								<div className="text-wrapper-8">안산시</div>
								<div className="text-wrapper-9">1살</div>
							</div>
						</div>
					</div>
					<div className="text-wrapper-10">한국 고양이</div>
				</div>
			</div>
		</StyledBox>
	);
};
export default DataBox;

const StyledBox = styled.div`
		border: red solid 1px;


	.group {
		width: 205px;
		height: 357px;
		position: relative;
		border-radius: 20px;
		border: orange solid 2px;
		/* 
    height: 370px;
    left: 0;
    position: fixed;
    top: 0;
    width: 228px; */
	}

	//상단 박스
	.overlap {
		background-image: url(rectangle);
		background-position: 50% 50%;
		background-size: cover;
		height: 177px;
		left: 0;
		top: 0;
        position: absolute;
		width: 190px;
        margin-left: 6px;
	}

	.overlap-group-wrapper {
		position: relative;
		width: 100%;
		height: 177px;
		background-image: url(${rectangle});
		background-position: 50% 50%;
		background-size: cover;
	}

	.overlap-button {
		position: absolute;
		top: 10px;
		left: 10px;
		width: auto;
		height: auto;
		padding: 5px 10px;
		background-color: #47b2ff;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.overlap-button .text-wrapper {
		color: #ffffff;
		font-family: "Inter-Bold", Helvetica;
		font-size: 11px;
		font-weight: 600;
		letter-spacing: -0.44px;
        margin-top: 1px;
		white-space: nowrap;
	}
	//상단 박스 끝

	.rectangle {
		width: 189.527px;
		height: 176.929px;
		flex-shrink: 0;
		left: 0;
		/* position: absolute; */
		top: 13px;
		border-radius: 20px;
	}

	.div {
		height: 189px;
		left: 6px;
		position: absolute;
		top: 181px;
		width: 171px;
	}

	.overlap-2 {
		height: 176px;
		left: 0;
		position: absolute;
		top: 13px;
		width: 171px;
	}

	.scrapNo {
		height: 25px;
        width: 16px;
		left: 167px;
		position: absolute;
		top: 0;
	}

	.frame-wrapper {
		height: 156px;
		left: 0;
		position: absolute;
		top: 19px;
		width: 171px;
	}

	.frame {
		height: 156px;
		position: relative;
	}

	.overlap-3 {
		height: 108px;
		left: 0;
		position: absolute;
		top: 0;
		width: 86px;
	}

	.text-wrapper-2 {
		color: #7f7f7f;
		font-family: "Inter-Medium", Helvetica;
		font-size: 15px;
		font-weight: 500;
		left: 0;
		letter-spacing: -0.6px;
		line-height: 50px;
		position: absolute;
		top: 78px;
		white-space: nowrap;
		width: 86px;
	}

	.text-wrapper-3 {
		color: #7f7f7f;
		font-family: "Inter-Medium", Helvetica;
		font-size: 15px;
		font-weight: 500;
		left: 0;
		letter-spacing: -0.6px;
		line-height: 50px;
		position: absolute;
		top: 26px;
		white-space: nowrap;
		width: 72px;
	}

	.text-wrapper-4 {
		color: #7f7f7f;
		font-family: "Inter-Medium", Helvetica;
		font-size: 15px;
		font-weight: 500;
		left: 0;
		letter-spacing: -0.6px;
		line-height: 50px;
		position: absolute;
		top: 53px;
		white-space: nowrap;
		width: 78px;
	}

	.text-wrapper-5 {
		color: #7f7f7f;
		font-family: "Inter-Medium", Helvetica;
		font-size: 15px;
		font-weight: 500;
		left: 1px;
		letter-spacing: -0.6px;
		line-height: 50px;
		position: absolute;
		top: 0;
		white-space: nowrap;
		width: 71px;
	}

	.overlap-group-2 {
		height: 55px;
		left: 86px;
		position: absolute;
		top: 52px;
		width: 100px;
	}

	.text-wrapper-6 {
		color: #323232;
		font-family: "Inter-Medium", Helvetica;
		font-size: 15px;
		font-weight: 500;
		left: 17px;
		letter-spacing: -0.6px;
		line-height: 50px;
		position: absolute;
		text-align: right;
		top: 0;
		white-space: nowrap;
		width: 83px;
	}

	.text-wrapper-7 {
		color: #323232;
		font-family: "Inter-Medium", Helvetica;
		font-size: 15px;
		font-weight: 500;
		left: 0;
		letter-spacing: -0.6px;
		line-height: 50px;
		position: absolute;
		text-align: right;
		top: 26px;
		white-space: nowrap;
		width: 100px;
	}

	.text-wrapper-8 {
		color: #323232;
		font-family: "Inter-Medium", Helvetica;
		font-size: 15px;
		font-weight: 500;
		left: 94px;
		letter-spacing: -0.6px;
		line-height: 50px;
		position: absolute;
		text-align: right;
		top: 25px;
		white-space: nowrap;
		width: 92px;
	}

	.text-wrapper-9 {
		color: #323232;
		font-family: "Inter-Medium", Helvetica;
		font-size: 15px;
		font-weight: 500;
		left: 146px;
		letter-spacing: -0.6px;
		line-height: 50px;
		position: absolute;
		text-align: right;
		top: -1px;
		white-space: nowrap;
		width: 39px;
	}

	.text-wrapper-10 {
		color: #323232;
		font-family: "Inter-Bold", Helvetica;
		font-size: 20px;
		font-weight: 700;
		left: 1px;
		letter-spacing: -0.8px;
		line-height: 50px;
		position: absolute;
		top: 0;
		white-space: nowrap;
		width: 112px;
	}
`;
