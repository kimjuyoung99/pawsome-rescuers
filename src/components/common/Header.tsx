import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/SavePawLogo.svg';

const Header: React.FC = () => {
    return (
        <Headerspan>
            <HeaderLogo><img src={Logo} alt="SavePaw Logo"/></HeaderLogo>
            <HeadreBar>
                <HeadreMenu>유기동물 보기</HeadreMenu>
                <HeadreMenu>털친소</HeadreMenu>
                <HeadreMenu>주변 보호소 찾기</HeadreMenu>
                <HeadreMenu>나의 관심동물</HeadreMenu>
            </HeadreBar>
        </Headerspan>
    )
}            

export default Header;

const Headerspan = styled.div`
    width: 1410px;
    height: 80px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    box-sizing: border-box;
    margin: 0 auto;
`;

const HeaderLogo = styled.div`
    width: 200px;
    height: 30px;
    display: flex;
    align-items: center;
    margin-left: 50px;
    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`;

const HeadreBar = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    margin-right: 100px;
`;

const HeadreMenu = styled.div`
    color: #323232;
    font-family: "Noto Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px; 
    letter-spacing: -0.5px;
    cursor: pointer;

    &:hover {
        color: #008BF0;
    }
`;