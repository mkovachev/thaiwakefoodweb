/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_SHEETSON_URL: string
  readonly VITE_API_KEY: string
  readonly VITE_SPREADSHEET_ID: string
  readonly VITE_SPREADSHEET_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}