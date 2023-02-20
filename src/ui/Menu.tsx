import { ImageListItem, ImageListItemBar, IconButton, ImageList, styled, useMediaQuery } from "@mui/material";
import { FoodItem } from "../data";
import { parseOptions, parsePriceOptions, parseOptionsWithPrice } from "../utils";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { theme } from "./theme";

export interface MenuProps {
  foodItems: FoodItem[]
}

export const Menu = ({ foodItems }: MenuProps) => {
  //const prices = parsePriceOptions(foodItem.price)
  //const options = parseOptions(foodItem.option)
  //const optionsWithPrice = parseOptionsWithPrice(options, prices)

  const downMd = useMediaQuery(theme.breakpoints.down('sm'));
  const mdLg = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const lgXL = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const upXl = useMediaQuery(theme.breakpoints.up('xl'));

  //TODO: map price and option in dropdown
  return (
    <ImageListStyled gap={2} cols={downMd ? 3 : 5} rowHeight={170}>
      {foodItems?.map((foodItem: FoodItem, index) =>
        <ImageListItemStyled key={index}>
          <ImageListItemBarStyled
            sx={{ background: 'transparent', borderRadius: '20px' }}
            position='top'
            title={foodItem.title}
            actionIcon={
              <IconButton sx={{ color: 'white' }}>
                <FavoriteBorderOutlinedIcon />
              </IconButton>
            }
            actionPosition="right" />
          <img
            src={`${foodItem.image}`}
            alt={foodItem.title}
            loading="lazy" />
          <ImageListItemBar
            subtitle={foodItem.description}
            position='bottom' />
        </ImageListItemStyled>

      )}
    </ImageListStyled>
  )
}

const ImageListStyled = styled(ImageList)(({ theme }) => ({
  margin: 'auto',
  //TODO: mobile not working
  [theme.breakpoints.down('mobile')]: {
    backgroundColor: theme.colors.yellow
  },
}));

const ImageListItemBarStyled = styled(ImageListItemBar)(({ theme }) => ({
  '.MuiImageListItem-img': {
    borderRadius: '20px',
  }
}));

const ImageListItemStyled = styled(ImageListItem)(({ theme }) => ({
  margin: 'auto',
  [theme.breakpoints.down('mobile')]: {
    backgroundColor: 'red'
  },
}));

  //    {Object.entries(optionsWithPrice).map(([option, price], i) => <Box key={i}>
  //       <Typography>{`${option}: ${price}`}</Typography>
  //     </Box>
  //     )}