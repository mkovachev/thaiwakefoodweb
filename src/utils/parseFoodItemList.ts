import { FoodItem, FoodItemModel } from "../data"
import { parseOptions } from "./parseOptions"
import { parseOptionsWithPrices } from "./parsePricePerOption"

export const parseFoodItemList = (data: FoodItemModel[]) => {
  const foodItemList: FoodItem[] = data?.map((foodItem: FoodItemModel) => {
    return ({
      ...foodItem,
      options: parseOptionsWithPrices(parseOptions(foodItem?.options), parseOptions(foodItem?.prices)) || null,
      prices: parseOptions(foodItem?.prices),
      spicy: parseOptions(foodItem?.spicy)
    } as unknown as FoodItem)
  })

  return foodItemList
}