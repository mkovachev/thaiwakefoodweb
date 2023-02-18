import { Grid } from "@mui/material";
import { FoodItem } from "../data";
import { useGetMenu } from "../hooks";
import { FoodViewCard } from "./FoodViewCard";


export const Home = () => {
  const { data, isLoading } = useGetMenu()

  if (isLoading || !data) {
    return null;
  }

  return (
    <Grid container spacing={1}>
      {data?.foodItems.map((foodItem: FoodItem, index: number) =>
        <Grid item sm={2} md={6} key={index}>
          <FoodViewCard foodItem={foodItem} />
        </Grid>
      )}
    </Grid>
  )

}