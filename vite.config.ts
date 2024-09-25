import * as path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
  server: {
    port: 3000,
  },
  resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});

//Vite 템플릿을 사용해서 프로젝트 생성시 기본 localhost 주소는 http://localhost:5173으로 지정됨
//흔히 사용하는 CRA 환경의 localhost 주소인 http://locahost:3000을 사용하기 위해 server port를 3000으로 수정