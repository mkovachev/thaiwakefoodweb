import axios from 'axios';
import { useQuery } from 'react-query';
import { FoodItem } from '../data';

const getFeatured = async (): Promise<FoodItem[]> => {
  const url = `${import.meta.env.VITE_SHEETSON_URL}/${import.meta.env.VITE_SPREADSHEET_FEATURED}`
  const params = {
    apiKey: import.meta.env.VITE_API_KEY,
    spreadsheetId: import.meta.env.VITE_SPREADSHEET_ID
  }

  const res = await axios.get(url, { params })
  return res.data.results as FoodItem[]
};

export const useGetFeatured = () => {
  return useQuery<FoodItem[], Error>(
    ['featured'],
    () => getFeatured()
  )
}