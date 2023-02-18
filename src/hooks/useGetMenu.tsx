import axios from 'axios';
import { useQuery } from 'react-query';
import { MenuModel } from '../data';
import { parseData } from '../utils/parseData';

const getMenu = async (): Promise<MenuModel> => {
  const url = `${import.meta.env.VITE_SHEETSON_URL}/${import.meta.env.VITE_SPREADSHEET_NAME}`
  const params = {
    apiKey: import.meta.env.VITE_API_KEY,
    spreadsheetId: import.meta.env.VITE_SPREADSHEET_ID
  }

  const res = await axios.get(url, { params })
  return parseData(res.data.results);
};

export const useGetMenu = () => {
  return useQuery<MenuModel, Error>(
    ['menu'],
    () => getMenu()
  )
}