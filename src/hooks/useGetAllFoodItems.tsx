import axios from 'axios';
import { useQuery } from 'react-query';
import { FoodItem } from '../data';
import { parseFoodItemList } from '../utils/parseFoodItemList';

const getAllFoodItems = async (): Promise<FoodItem[]> => {
  const url = `${import.meta.env.VITE_SHEETSON_URL}/${import.meta.env.VITE_SPREADSHEET_MENU}`
  const params = {
    apiKey: import.meta.env.VITE_API_KEY,
    spreadsheetId: import.meta.env.VITE_SPREADSHEET_ID
  }

  const res = await axios.get(url, { params })
  const foodItems = parseFoodItemList(res.data.results)
  return foodItems
};

export const useGetAllFoodItems = () => {
  return useQuery<FoodItem[], Error>(
    ['food-items-list'],
    () => getAllFoodItems()
  )
}