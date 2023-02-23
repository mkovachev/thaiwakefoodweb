import { Box } from "@mui/material"
import { CategoryItem, FoodItem } from "../../data"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { FoodItemList } from "./FoodItemList"

interface MenuProps {
  categories: CategoryItem[]
  foodItems: FoodItem[]
}

export const Home = ({ categories, foodItems }: MenuProps) => {

  return (
    <Box>
      <Navbar categories={categories} />
      <FoodItemList foodItems={foodItems} />
      <Footer />
    </Box >
  )
}