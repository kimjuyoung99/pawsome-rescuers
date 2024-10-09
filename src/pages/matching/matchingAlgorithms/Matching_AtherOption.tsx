// Matching_AtherOption.tsx
export interface RawAnimalData {
  SPECIES_NM: string;
  SEX_NM: string;
  BDWGH_INFO: string;
  AGE_INFO?: string;
  COLOR_NM?: string; 
  ABDM_IDNTFY_NO: string;
}

export type ColorCategory = 'White' | 'BlackWhite' | 'ThreeColor' | 'Mackerel' | 'Black' | 'Gold' | 'Brown' | 'Gray' | 'Unknown';

export interface TransformedAnimalData {
  species: 'Dog' | 'Cat' | 'Other';
  sex: 'F' | 'M' | 'Unknown';
  weightCategory: 'AA' | 'BB' | 'CC' | 'DD' | 'Unknown';
  age?: string;
  SPECIES_NM: string;
  AGE_INFO?: string;
  IMAGE_COURS?: string;
  colorCategories: ColorCategory[]; 
  COLOR_NM?: string; 
  ABDM_IDNTFY_NO: string;
}

const colorMap: Record<Exclude<ColorCategory, 'Unknown'>, string[]> = {
  White: ['아이보리', '크림', '백색', '백', '흰색', '흰'],
  BlackWhite: ['검백색', '얼룩', '검/흰', '검.백', '검정흰색', '검줄/흰', '백흑색'],
  ThreeColor: ['삼색', '백흑갈색'],
  Mackerel: ['고등어', '반점무늬', '고등어태비'],
  Black: ['흑색', '흑갈', '검정', '회흑', '흑', '블랙탄'],
  Gold: ['노랑색', '황색', '크림색', '치즈색', '치즈', '황갈색'],
  Brown: ['베이지색', '흑갈', '초코', '초코색', '갈', '흑갈색', '연갈색', '갈백'],
  Gray: ['회백색', '쥐색', '검정회색']
};

function normalizeColor(color: string): ColorCategory[] {
  const normalizedColors: ColorCategory[] = [];
  
  const subColors = color.split(/[,\/]/).map(c => c.trim());
  for (const subColor of subColors) {
    let matched = false;
    for (const [category, keywords] of Object.entries(colorMap)) {
      if (keywords.some(keyword => subColor.includes(keyword))) {
        normalizedColors.push(category as ColorCategory);
        matched = true;
        break;
      }
    }
    if (!matched) {
      normalizedColors.push('Unknown');
    }
  }
  
  if (subColors.length >= 3 || normalizedColors.length >= 3) {
    return ['ThreeColor'];
  }
  
  return normalizedColors.length > 0 ? normalizedColors : ['Unknown'];
}

export function getColorCategories(colorNm: string): ColorCategory[] {
  return normalizeColor(colorNm);   
}

export function transformAnimalData(rawData: RawAnimalData): TransformedAnimalData {
  return {
    ...rawData,
    species: transformSpecies(rawData.SPECIES_NM),
    sex: transformSex(rawData.SEX_NM),
    weightCategory: transformWeight(rawData.BDWGH_INFO),
    age: rawData.AGE_INFO,
    colorCategories: rawData.COLOR_NM ? getColorCategories(rawData.COLOR_NM) : ['Unknown'],
    COLOR_NM: rawData.COLOR_NM, // 원본 색상 데이터 유지
    ABDM_IDNTFY_NO: rawData.ABDM_IDNTFY_NO,
  };
}

function transformSpecies(speciesNm: string): TransformedAnimalData['species'] {
  if (speciesNm.includes('[개]')) return 'Dog';
  if (speciesNm.includes('[고양이]')) return 'Cat';
  return 'Other';
}

function transformSex(sexNm: string): TransformedAnimalData['sex'] {
  if (sexNm === 'F') return 'F';
  if (sexNm === 'M') return 'M';
  return 'Unknown';
}

function transformWeight(bdwghInfo: string): TransformedAnimalData['weightCategory'] {
  const weight = parseFloat(bdwghInfo);
  if (isNaN(weight)) return 'Unknown';
  if (weight > 0 && weight < 2) return 'AA';
  if (weight >= 2 && weight < 4) return 'BB';
  if (weight >= 4 && weight < 10) return 'CC';
  if (weight >= 10) return 'DD';
  return 'Unknown';
}