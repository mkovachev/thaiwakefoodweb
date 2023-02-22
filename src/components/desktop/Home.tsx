import { Box } from "@mui/material"
import { CategoryItem, FoodItem } from "../../data"
import { Menu } from "../shared/Menu";
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
      {/* <Menu foodItems={foodItems} /> */}
      <FoodItemList foodItems={foodItems} />
      <Footer />
    </Box >
  )
}