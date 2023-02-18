import { Box, ImageList, styled } from "@mui/material";
import { CategoryEnum, CategoryItem, FoodItem } from "../data";
import { useGetMenu } from "../hooks";
import { Category } from "./Category";
import { Food } from "./Food";



export const Home = () => {
  const { data: menu, isLoading } = useGetMenu()
  //const { data: categories, isLoading } = useGetCategoryList()

  if (isLoading || !menu) {
    return null;
  }

  //const categories = [...new Set(menu.foodItems.map(item => item.category))]
  const categories: CategoryItem[] = [
    {
      title: CategoryEnum.DRINKS,
      image: 'images/americano.jpg'
    },
    {
      title: CategoryEnum.FAST_FOOD,
      image: 'images/americano.jpg'
    }
  ]

  return (
    <Box>
      <ImageListStyled>
        {categories.map((category) => (
          <Category category={category}></Category>
        ))}
      </ImageListStyled>
      <ImageList gap={1}>
        {menu?.foodItems.map((foodItem: FoodItem, index: number) =>
          <Food foodItem={foodItem} />
        )}
      </ImageList>
      {/* <Grid container spacing={1}>
        {data?.foodItems.map((foodItem: FoodItem, index: number) =>
          <Grid item sm={2} md={6} key={index}>
            <FoodViewCard foodItem={foodItem} />
          </Grid>
        )}
      </Grid> */}
    </Box>
  )
}

const ImageListStyled = styled(ImageList)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  background: 'transparent'
}));