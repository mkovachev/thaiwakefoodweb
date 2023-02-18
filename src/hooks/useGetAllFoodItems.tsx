import axios from 'axios';
import { useQuery } from 'react-query';
import { FoodItem } from '../data';

const getAllFoodItems = async (): Promise<FoodItem[]> => {
  const url = `${import.meta.env.VITE_SHEETSON_URL}/${import.meta.env.VITE_SPREADSHEET_MENU}`
  const params = {
    apiKey: import.meta.env.VITE_API_KEY,
    spreadsheetId: import.meta.env.VITE_SPREADSHEET_ID
  }

  const res = await axios.get(url, { params })
  return res.data.results as FoodItem[]
};

export const useGetAllFoodItems = () => {
  return useQuery<FoodItem[], Error>(
    ['all-food-items'],
    () => getAllFoodItems()
  )
}