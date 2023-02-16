import axios from 'axios';
import { useQuery } from 'react-query';
import { Menu } from '../data/models';

const getMenu = async (): Promise<Menu> => {
  const id = '3a44ff49-2e5b-41f3-b4e6-2931277d5564'
  const url = `https://sheet.best/api/sheets/${id}`
  return await axios.get(url);
};

export const useGetMenu = () => {
  return useQuery<Menu, Error>(
    ['menu'],
    () => getMenu()
  )
}