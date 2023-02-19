/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string
  readonly VITE_SPREADSHEET_ID: string
  readonly VITE_SHEETSON_URL: string
  readonly VITE_SPREADSHEET_MENU: string
  readonly VITE_SPREADSHEET_CATEGORIES: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}