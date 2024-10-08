type ColorCategory = 'White' | 'BlackWhite' | 'ThreeColor' | 'Mackerel' | 'Black' | 'Gold' | 'Brown' | 'Gray' | 'Unknown';

//colorMap 객체는 : 각 색상 카테고리에 대한 키워드 목록을 포함
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

//normalizeColor 함수 : 주어진 색상 문자열을 정규화하여 해당하는 색상 카테고리 배열을 반환
function normalizeColor(color: string): ColorCategory[] {
        const normalizedColors: ColorCategory[] = [];
    
    // 콤마나 슬래시로 분리된 복합 색상 처리
    const subColors = color.split(/[,\/]/).map(c => c.trim());
    //각 부분 색상에 대해 colorMap의 키워드와 일치하는지 확인
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
    
    // 세 가지 이상의 색상이 포함된 경우 'ThreeColor'로 분류
    if (subColors.length >= 3 || normalizedColors.length >= 3) {
        return ['ThreeColor'];
    }
    
    return normalizedColors.length > 0 ? normalizedColors : ['Unknown'];
}

export function getColorCategories(colorNm: string): ColorCategory[] {
    return normalizeColor(colorNm);   
}