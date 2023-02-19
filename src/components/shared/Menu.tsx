import { ImageListItem, ImageListItemBar, IconButton, ImageList } from "@mui/material";
import { FoodItem } from "../../data";
import { parseOptions, parsePriceOptions, parseOptionsWithPrice } from "../../utils";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export interface MenuProps {
  foodItems: FoodItem[]
}

export const Menu = ({ foodItems }: MenuProps) => {
  //const prices = parsePriceOptions(foodItem.price)
  //const options = parseOptions(foodItem.option)
  //const optionsWithPrice = parseOptionsWithPrice(options, prices)

  //TODO: map price and option in dropdown
  return (
    <ImageList gap={2}>
      {foodItems?.map((foodItem: FoodItem, index) =>
        <ImageListItem key={index}>
          <ImageListItemBar sx={{ background: 'transparent' }}
            position='top'
            title={foodItem.title}
            actionIcon={<IconButton sx={{ color: 'white' }}>
              <FavoriteBorderOutlinedIcon />
            </IconButton>}
            actionPosition="right" />
          <img
            src={'images/americano.jpg'}
            alt={foodItem.title}
            loading="lazy" />
          <ImageListItemBar
            subtitle={foodItem.description}
            position='bottom' />
        </ImageListItem>

      )}
    </ImageList>
  )
}

  //    {Object.entries(optionsWithPrice).map(([option, price], i) => <Box key={i}>
  //       <Typography>{`${option}: ${price}`}</Typography>
  //     </Box>
  //     )}