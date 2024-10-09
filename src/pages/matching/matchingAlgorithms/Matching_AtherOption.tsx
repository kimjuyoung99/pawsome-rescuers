// Matching_AtherOption.tsx

export interface RawAnimalData {
  SPECIES_NM: string;
  SEX_NM: string;
  BDWGH_INFO: string;
  AGE_INFO?: string;
}

export interface TransformedAnimalData {
  species: 'Dog' | 'Cat' | 'Other';
  sex: 'F' | 'M' | 'Unknown';
  weightCategory: 'AA' | 'BB' | 'CC' | 'DD' | 'Unknown';
  age?: string;
  SPECIES_NM: string;  // 원본 데이터의 SPECIES_NM을 유지
  AGE_INFO?: string;   // 원본 데이터의 AGE_INFO를 유지
  IMAGE_COURS?: string;
}

export function transformAnimalData(rawData: RawAnimalData): TransformedAnimalData {
  return {
    ...rawData,  // 원본 데이터의 모든 필드를 포함
    species: transformSpecies(rawData.SPECIES_NM),
    sex: transformSex(rawData.SEX_NM),
    weightCategory: transformWeight(rawData.BDWGH_INFO),
    age: rawData.AGE_INFO,
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