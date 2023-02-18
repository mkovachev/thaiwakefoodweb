import { CategoryEnum } from "../enums/CategoryEnum"

export interface FoodItem {
  id: string
  title: string
  description: string
  category: CategoryEnum
  option: string
  price: string
  image: string
}