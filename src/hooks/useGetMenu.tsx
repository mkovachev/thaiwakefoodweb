import axios from 'axios';
import { useQuery } from 'react-query';
import { Menu } from '../data/models';


interface MenuProps {
  id?: string
}

const getMenu = async ({ id }: MenuProps): Promise<Menu> => {
  const url = `/menu/${id}`;
  return await axios.get(url);
};

export const useGetMenu = (props: MenuProps) => {
  return useQuery<Menu, Error>(
    ['menu', props.id],
    () => getMenu(props),
    {
      enabled: !!props.id && props.id !== 'add'
    }
  )
}