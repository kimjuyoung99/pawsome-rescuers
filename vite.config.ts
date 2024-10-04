// ▶ 비트(Vite) 설정 파일
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ▶ 작성 → 빌드 → 완성본 → 작업1
//    완성본 → 사용자에게 전달 → 렌더링 → CSR
//    완성본 → 렌더링 → 사용자에게 전달 → SSR

export default defineConfig({
  plugins: [react()],        // 추가 애드온
  root: ".",      // .tsx 가 들어갈 폴더
  base: "/",                 // www.naver.com/뒤에/경로 (SSL전용 옵션) - 베이스 경로
  build: {                   // 빌드에 관한 설정
    outDir: "dist"
  },
  server: {                  // 내장 서버 설정 (SSR❌)
    port: 3000,              // → 포트번호 수정
    open: true               // → vite 명령어로 개발 시작 시 자동으로 서버 열리게 함
  }
});

//Vite 템플릿을 사용해서 프로젝트 생성시 기본 localhost 주소는 http://localhost:5173으로 지정됨
//흔히 사용하는 CRA 환경의 localhost 주소인 http://locahost:3000을 사용하기 위해 server port를 3000으로 수정