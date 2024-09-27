declare namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      PUBLIC_URL: string
      REACT_APP_SECRET_KEY: string
      // 여기에 다른 환경 변수들을 추가할 수 있습니다
    }
  }