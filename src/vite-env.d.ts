/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_SHEETSON_URL: string
  readonly VITE_API_KEY: string
  readonly VITE_SPREADSHEET_ID: string
  readonly VITE_SPREADSHEET_MENU: string
  readonly VITE_SPREADSHEET_CATEGORIES: string
  readonly VITE_SPREADSHEET_FEATURED: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}