interface RawAnimalData {
    SPECIES_NM: string;
    SEX_NM: string;
    BDWGH_INFO: string;
  }
  
  interface TransformedAnimalData {
    species: 'Dog' | 'Cat' | 'Other';
    sex: 'F' | 'M' | 'Unknown';
    weightCategory: 'AA' | 'BB' | 'CC' | 'DD' | 'Unknown';
  }
  
  export function transformAnimalData(rawData: RawAnimalData): TransformedAnimalData {
    return {
      ...rawData,
      species: transformSpecies(rawData.SPECIES_NM),
      sex: transformSex(rawData.SEX_NM),
      weightCategory: transformWeight(rawData.BDWGH_INFO),
    };
  }
  
  function transformSpecies(speciesNm: string): 'Dog' | 'Cat' | 'Other' {
    if (speciesNm.includes('[개]')) return 'Dog';
    if (speciesNm.includes('[고양이]')) return 'Cat';
    return 'Other';
  }
  
  function transformSex(sexNm: string): 'F' | 'M' | 'Unknown' {
    if (sexNm === 'F') return 'F';
    if (sexNm === 'M') return 'M';
    return 'Unknown';
  }
  
  function transformWeight(bdwghInfo: string): 'AA' | 'BB' | 'CC' | 'DD' | 'Unknown' {
    const weight = parseFloat(bdwghInfo);
    if (isNaN(weight)) return 'Unknown';
    if (weight > 0 && weight < 2) return 'AA';
    if (weight >= 2 && weight < 4) return 'BB';
    if (weight >= 4 && weight < 10) return 'CC';
    if (weight >= 10) return 'DD';
    return 'Unknown';
  }
  
  // 사용 예시
  const rawData: RawAnimalData = {
    SPECIES_NM: "[개] 믹스견",
    SEX_NM: "M",
    BDWGH_INFO: "1.70(Kg)",
    // 다른 필드들...
  };
  
  const transformedData = transformAnimalData(rawData);
  console.log(transformedData);
  // 출력:
  // {
  //   ...rawData,
  //   species: 'Dog',
  //   sex: 'M',
  //   weightCategory: 'AA',
  // }