import { Card, CardProps, styled, ImageListItem, ImageListItemBar, IconButton } from "@mui/material";
import { FoodItem } from "../data";
import { parseOptions, parsePriceOptions, parseOptionsWithPrice } from "../utils";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export interface FoodCardProps extends CardProps {
  foodItem: FoodItem
}

export const Food = ({ foodItem, ...props }: FoodCardProps) => {
  const prices = parsePriceOptions(foodItem.price)
  const options = parseOptions(foodItem.option)
  const optionsWithPrice = parseOptionsWithPrice(options, prices)

  return (
    // <CardStyled elevation={0} {...props}>
    //   <CardMedia
    //     component="img"
    //     height="140"
    //     image='images/americano.jpg'
    //     alt={foodItem.title} />
    //   <CardContent>
    //     <Typography>{foodItem.description}</Typography>
    //     {Object.entries(optionsWithPrice).map(([option, price], i) => <Box key={i}>
    //       <Typography>{`${option}: ${price}`}</Typography>
    //     </Box>
    //     )}
    //   </CardContent>
    // </CardStyled>

    <ImageListItem key='images/americano.jpg'>
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

const CardStyled = styled(Card)(({ theme }) => ({
  height: '100%',
  width: '100%',
  borderRadius: theme.shape?.borderRadiusBox,
}));