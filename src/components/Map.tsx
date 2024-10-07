import React from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk";
import Paw from "../assets/images/Paw_blue.svg";

interface KakaoMapProps {
    center?: {
        lat: number;
        lng: number;
    };
    style?: React.CSSProperties;
    level?: number;
}

const KakaoMap: React.FC<KakaoMapProps> = ({ 
    center = { lat: 33.450701, lng: 126.570667 },
    style = { width: '90%', height: '100px' },
    level = 3
    }) => {
    return (
        <Map
        center={center}
        style={style}
        level={level}
        >
            <MapMarker
                position={center}
                image={{
                    src:Paw,
                    // src={Paw}안되는 이유
                    // src 속성은 문자열을 기대하는데, 객체 형태로 값을 전달하고 있어서 타입 오류가 발생
                    size:{
                        width : 50,
                        height: 70
                    },
                }}
            />
        </Map>
    );
}
export default KakaoMap;