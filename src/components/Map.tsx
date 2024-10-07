import React from 'react';
import { Map, MapProps } from "react-kakao-maps-sdk";

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
    style = { width: '100%', height: '100px' },
    level = 3
    }) => {
    return (
        <Map
        center={center}
        style={style}
        level={level}
        />
    );
}
export default KakaoMap;