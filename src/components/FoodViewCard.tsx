import { CardContent, Typography, Card, CardProps, CardMedia, styled } from "@mui/material";
import { Box } from "@mui/system";
import { FoodItem } from "../data";
import { parseOptions, parsePriceOptions, parseOptionsWithPrice } from "../utils";


export interface FoodCardProps extends CardProps {
  foodItem: FoodItem
}

export const FoodViewCard = ({ foodItem, ...props }: FoodCardProps) => {
  const prices = parsePriceOptions(foodItem.price)
  const options = parseOptions(foodItem.option)
  const optionsWithPrice = parseOptionsWithPrice(options, prices)

  console.log(optionsWithPrice)

  return (
    <CardStyled elevation={0} {...props}>
      <CardMedia
        component="img"
        height="140"
        image='images/americano.jpg'
        alt={foodItem.title}
      />
      <CardContent>
        <Typography>{foodItem.description}</Typography>
        {Object.entries(optionsWithPrice).map(([option, price], i) =>
          <Box key={i}>
            <Typography>{`${option}: ${price}`}</Typography>
          </Box>
        )}
      </CardContent>
    </CardStyled>
  )
}

const CardStyled = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: theme.shape?.borderRadiusBox,
}));