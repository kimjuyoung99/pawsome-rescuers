//공공 api 가져오는 파일
import axios from "axios";

const API_KEY = '1d4ba10e6ecc4b029f128a91cea7f088';
const BASE_URL = 'https://openapi.gg.go.kr/AbdmAnimalProtect';

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

export const fetchAnimalData = async (pIndex: number = 1, pSize: number = 10): Promise<AnimalData[]> => {
    const response = await axios.get(BASE_URL, {
        params: {
            Key: API_KEY,
            Type: 'json',
            pIndex,
            pSize,
        }
    });
    return response.data.AbdmAnimalProtect[1].row;
}