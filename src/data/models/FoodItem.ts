import { CategoryEnum } from "./CategoryEnum"

export interface FoodItem {
  id: number
  title: string
  description: string
  category: CategoryEnum
  option: string
  price: string
  image: string
}