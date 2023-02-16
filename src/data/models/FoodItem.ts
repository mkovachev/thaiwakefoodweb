import { CategoryEnum } from "../enums/CategoryEnum"

export interface FoodItem {
  _id?: string
  name: string
  description: string
  category: CategoryEnum
  options: string[]
  price: string
  imgUrl: string
}