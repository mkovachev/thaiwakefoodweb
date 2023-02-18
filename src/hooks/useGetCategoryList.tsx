import axios from 'axios';
import { useQuery } from 'react-query';
import { CategoryItem } from '../data';

const getCategoryList = async (): Promise<CategoryItem[]> => {
  const url = `${import.meta.env.VITE_SHEETSON_URL}/${import.meta.env.VITE_SPREADSHEET_CATEGORIES}`
  const params = {
    apiKey: import.meta.env.VITE_API_KEY,
    spreadsheetId: import.meta.env.VITE_SPREADSHEET_ID
  }

  const res = await axios.get(url, { params })
  return res.data.results as CategoryItem[]
};

export const useGetCategoryList = () => {
  return useQuery<CategoryItem[], Error>(
    ['categories'],
    () => getCategoryList()
  )
}