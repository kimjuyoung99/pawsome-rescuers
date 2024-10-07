/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_REACT_APP_SECRET_KEY: string
    readonly REACT_APP_KAKAOMAP_KEY: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }