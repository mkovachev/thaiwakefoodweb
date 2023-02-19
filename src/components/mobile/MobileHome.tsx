import { Box } from "@mui/system";
import { CategoryItem, FoodItem } from "../../data";
import { Menu } from "../shared";
import { MobileFooter } from "./MobileFooter";
import { MobileNavbar } from "./MobileNavbar";

interface MobileHomeProps {
  categories: CategoryItem[]
  foodItems: FoodItem[]
}

export const MobileHome = ({ categories, foodItems }: MobileHomeProps) => {

  return (
    <Box>
      <MobileNavbar categories={categories} />
      <Menu foodItems={foodItems} />
      <MobileFooter />
    </Box >
  )
}

