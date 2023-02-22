import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, styled } from '@mui/material';
import { FoodItem } from '../../data';

export interface FoodItemListProps {
  foodItems: FoodItem[]
}


export const FoodItemList = ({ foodItems }: FoodItemListProps) => {

  const openCardDetails = () => {
    console.log('added to favorites')
  }

  return (
    <GridContainer container gap={1}>
      {foodItems?.map((foodItem: FoodItem, index) =>
        <GridItem item key={index}>
          <CardActionArea sx={{ height: '100%' }} onClick={openCardDetails}>
            <CardStyled>
              <CardMediaStyled
                image={foodItem.image}
                title={foodItem.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {foodItem.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {foodItem.description}
                </Typography>
              </CardContent>
              {/* <CardActions>
                <Button onClick={openCardDetails} startIcon={<FavoriteBorderOutlinedIcon />} />
              </CardActions> */}
            </CardStyled>
          </CardActionArea>
        </GridItem>
      )}
    </GridContainer>
  )
}

const GridContainer = styled(Grid)(({ theme }) => ({

}))

const GridItem = styled(Grid)(({ theme }) => ({

}))

const CardStyled = styled(Card)(({ theme }) => ({
  height: '100%',
  width: '15rem',
  display: 'flex',
  flexDirection: 'column',
  border: 'transparent',
  borderRadius: theme.shape?.borderRadiusCard,
  '.MuiCardActions-root': {
    marginTop: 'auto',
  }
}))

const CardMediaStyled = styled(CardMedia)(({ theme }) => ({
  height: '10rem',
}))