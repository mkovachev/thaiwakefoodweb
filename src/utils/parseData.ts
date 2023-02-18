import { FoodItem, MenuModel } from "../data";

export const parseData = (data: FoodItem[]) => {
  const menu: MenuModel = {
    foodItems: data
  }

  return menu;
}
