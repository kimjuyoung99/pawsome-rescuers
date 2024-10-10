import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../components/store';
import { Container } from '../GlobalStyles';
import Paw from "../assets/images/Paw_blue.svg";
import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";

interface IProps {
    setShelterName?: React.Dispatch<React.SetStateAction<string>>;
}

const AnimalMap: React.FC<IProps> = ({ setShelterName }) => {
    const { data: shelterData, status } = useSelector((state: RootState) => state.shelter);
    const GYEONGGI_CENTER = { lat: 37.2750, lng: 127.0094 };
    const [selectedShelter, setSelectedShelter] = useState<string | null>(null);

    if (status === 'loading') {
        return <LoadingContainer>데이터를 불러오는 중입니다...</LoadingContainer>;
    }

    if (status === 'failed') {
        return <LoadingContainer>데이터를 불러오는데 실패했습니다.</LoadingContainer>;
    }

    return (
        <Container2>
            <ContentWrapper>
                <Explanation>나와 가까운 보호소를 클릭해 보세요</Explanation>
                <MapContainer>
                    <Map
                        center={GYEONGGI_CENTER}
                        style={{
                            width: "100%",
                            height: "430px",
                            borderRadius: "40px",
                            border: "2px solid #e0e0e0",
                        }}
                        level={10}
                    >
                        {shelterData.map((shelter, index) => (
                            <MapMarker
                                key={index}
                                position={{
                                    lat: shelter.REFINE_WGS84_LAT,
                                    lng: shelter.REFINE_WGS84_LOGT
                                }}
                                image={{
                                    src: Paw,
                                    size: {
                                        width: 30,
                                        height: 30
                                    },
                                }}
                                onClick={() => {
                                    console.log(shelter.SHTER_NM);
                                    setSelectedShelter(shelter.SHTER_NM);
                                    if (setShelterName) {
                                        setShelterName(shelter.SHTER_NM);
                                    }
                                }}
                            />
                        ))}
                    </Map>
                </MapContainer>
            </ContentWrapper>
            {selectedShelter && (
                <Text2>{selectedShelter}에서 친구들이 기다리고 있어요</Text2>
            )}
        </Container2>
    );
};

export default AnimalMap;

const Container2 = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    margin-bottom: 20px;
`;

const MapContainer = styled.div`
    width: 100%;
    margin-top: 20px;
`;

const Explanation = styled.div`
    color: #323232;
    font-size: 30px;
    font-family: "NanumSquareNeo", sans-serif;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: -1.95px;
    text-align: left;
    margin-bottom: 20px;
`;

const Text2 = styled.div`
    color: #323232;
    font-family: "NanumSquareNeo", sans-serif;
    font-size: 28px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -2.4px;
    margin-top: 20px;
    text-align: center;
`;

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 20px;
    font-weight: bold;
`;