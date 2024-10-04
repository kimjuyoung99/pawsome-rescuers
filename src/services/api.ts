//공공 api 가져오는 파일
import axios from "axios";

// 환경 변수에서 API 키를 가져옴 Vite와 일반 React 환경 모두 지원, API의 기본 URL 정의
const API_KEY = import.meta.env.VITE_REACT_APP_SECRET_KEY || process.env.REACT_APP_SECRET_KEY;
const BASE_URL = 'https://openapi.gg.go.kr/AbdmAnimalProtect';

// API 응답에서 받을 수 있는 동물 데이터의 구조를 정의
export interface AnimalData {
    LIST_TOTAL_COUNT: number; // 행총건수
    CODE: string; // 응답결과코드
    MESSAGE: string; // 응답결과메시지
    API_VERSION: string; // API버전
    SIGUN_CD: string; // 시군코드
    SIGUN_NM: string; // 시군명
    ABDM_IDNTFY_NO: string; // 유기고유번호
    RECEPT_DE: string; // 접수일자
    DISCVRY_PLC_INFO: string; // 발견장소
    STATE_NM: string; // 상태
    PBLANC_IDNTFY_NO: string; // 공고고유번호
    PBLANC_BEGIN_DE: string; // 공고시작일자
    PBLANC_END_DE: string; // 공고종료일자
    SPECIES_NM: string; // 품종
    COLOR_NM: string; // 색상
    AGE_INFO: string; // 나이
    BDWGH_INFO: string; // 체중
    SEX_NM: string; // 성별
    NEUT_YN: string; // 중성화여부
    SFETR_INFO: string; // 특징
    SHTER_NM: string; // 보호소명
    SHTER_TELNO: string; // 보호소전화번호
    PROTECT_PLC: string; // 보호장소
    REFINE_ROADNM_ADDR: string; // 보호소도로명주소
    REFINE_LOTNO_ADDR: string; // 보호소지번주소
    REFINE_ZIP_CD: string; // 보호소우편번호
    JURIS_INST_NM: string; // 관할기관
    CHRGPSN_NM: string; // 담당자
    CHRGPSN_CONTCT_NO: string; // 담당자연락처
    PARTCLR_MATR: string; // 특이사항
    IMAGE_COURS: string; // 이미지경로
    THUMB_IMAGE_COURS: string; // 썸네일이미지경로
    REFINE_WGS84_LAT: string; // WGS84위도
    REFINE_WGS84_LOGT: string; // WGS84경도
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

        // axios를 사용하여 GET 요청을 request
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