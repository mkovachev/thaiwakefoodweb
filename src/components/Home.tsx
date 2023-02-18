import { Box, ImageList, styled } from "@mui/material";
import { FoodItem } from "../data";
import { useGetFeatured } from "../hooks";
import { useGetCategoryList } from "../hooks/useGetCategoryList";
import { Category } from "./Category";
import { Food } from "./Food";


export const Home = () => {
  const { data: categories, isLoading: isLoadingCategories } = useGetCategoryList()
  const { data: featured, isLoading: isLoadingFeatured } = useGetFeatured()

  if (isLoadingCategories || !categories || isLoadingFeatured || !featured) {
    return null;
  }

  return (
    <Box>
      <Navbar gap={2}>
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </Navbar>
      <FeaturedMenu gap={2}>
        {featured?.map((foodItem: FoodItem) =>
          <Food key={foodItem.id} foodItem={foodItem} />
        )}
      </FeaturedMenu>
    </Box>
  )
}

const Navbar = styled(ImageList)(({ theme }) => ({
  background: 'transparent',
  gridAutoFlow: "column",
  gridTemplateColumns: "repeat(auto-fill,minmax(100px,1fr)) !important",
  gridAutoColumns: "minmax(100px, 1fr)",
  //scrollbar: 'hidden'
}));

const FeaturedMenu = styled(ImageList)(({ theme }) => ({
}));