//공공 api 가져오는 파일
import axios from "axios";

// 환경 변수에서 API 키를 가져옴 Vite와 일반 React 환경 모두 지원, API의 기본 URL 정의
const API_KEY = import.meta.env.VITE_REACT_APP_SECRET_KEY || process.env.REACT_APP_SECRET_KEY;
const BASE_URL = 'https://openapi.gg.go.kr/AbdmAnimalProtect';

// API 응답에서 받을 수 있는 동물 데이터의 구조를 정의
export interface AnimalData {
    LIST_TOTAL_COUNT: number;
    CODE: string;
    MESSAGE: string;
    API_VERSION: string;
    SIGUN_CD: string;
    SIGUN_NM: string;
    ABDM_IDNTFY_NO: string;
    RECEPT_DE: string;
    DISCVRY_PLC_INFO: string;
    STATE_NM: string;
    PBLANC_IDNTFY_NO: string;
    PBLANC_BEGIN_DE: string;
    PBLANC_END_DE: string;
    SPECIES_NM: string;
    COLOR_NM: string;
    AGE_INFO: string;
    BDWGH_INFO: string;
    SEX_NM: string;
    NEUT_YN: string;
    SFETR_INFO: string;
    SHTER_NM: string;
    SHTER_TELNO: string;
    PROTECT_PLC: string;
    REFINE_ROADNM_ADDR: string;
    REFINE_LOTNO_ADDR: string;
    REFINE_ZIP_CD: string;
    JURIS_INST_NM: string;
    CHRGPSN_NM: string;
    CHRGPSN_CONTCT_NO: string;
    PARTCLR_MATR: string;
    IMAGE_COURS: string;
    THUMB_IMAGE_COURS: string;
    REFINE_WGS84_LAT: string;
    REFINE_WGS84_LOGT: string;
    }

// 동물 데이터를 가져오는 비동기 함수
export const fetchAnimalData = async (pIndex: number = 1, pSize: number = 10): Promise<AnimalData[]> => {
    // API 키를 콘솔에 출력 (디버깅 목적, 실제 프로덕션에서는 제거해야 함)
    console.log('API_KEY:', API_KEY);
    
    try {
        // API 키가 정의되지 않았다면 에러 throw
        if (!API_KEY) {
            throw new Error('API key is not defined. Please check your environment variables.');
        }

        // axios를 사용하여 GET 요청을 보낸다
        const response = await axios.get(BASE_URL, {
            params: {
                Key: API_KEY,
                Type: 'json',
                pIndex,  // 페이지 인덱스 명세서 대로 기본 1
                pSize,   // 페이지 크기 명세서 대로 기본 10
            }
        });

        // API 응답 구조를 확인하고 데이터를 추출
        if (response.data && response.data.AbdmAnimalProtect && response.data.AbdmAnimalProtect[1]) {
            return response.data.AbdmAnimalProtect[1].row;
        } else {
            // 예상치 못한 응답 구조일 경우 에러 로그를 출력하고 빈 배열을 반환
            console.error('Unexpected API response structure:', response.data);
            return [];
        }
    } catch (error) {
        // 에러 발생 시 콘솔에 로그를 출력하고 에러를 다시 throw
        console.error('Error fetching animal data:', error);
        throw error;
    }
}