import { ImageListItem, ImageListItemBar, IconButton } from "@mui/material";
import { FoodItem } from "../data";
import { parseOptions, parsePriceOptions, parseOptionsWithPrice } from "../utils";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export interface FoodCardProps {
  foodItem: FoodItem
}

export const Food = ({ foodItem }: FoodCardProps) => {
  const prices = parsePriceOptions(foodItem.price)
  const options = parseOptions(foodItem.option)
  const optionsWithPrice = parseOptionsWithPrice(options, prices)

  //TODO: map price and option in dropdown
  return (
    <ImageListItem key={foodItem.id}>
      <ImageListItemBar sx={{ background: 'transparent' }}
        position='top'
        title={foodItem.title}
        actionIcon={<IconButton sx={{ color: 'white' }}>
          <FavoriteBorderOutlinedIcon />
        </IconButton>}
        actionPosition="right" />
      <img
        src={'images/americano.jpg'} //${foodItem.image}
        alt={foodItem.title}
        loading="lazy" />
      <ImageListItemBar
        subtitle={foodItem.description}
        position='bottom' />
    </ImageListItem>
  )
}

  //    {Object.entries(optionsWithPrice).map(([option, price], i) => <Box key={i}>
  //       <Typography>{`${option}: ${price}`}</Typography>
  //     </Box>
  //     )}