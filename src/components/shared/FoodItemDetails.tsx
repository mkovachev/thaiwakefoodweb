import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActions, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, styled } from '@mui/material'
import { FoodItem } from '../../data'
import AddIcon from '@mui/icons-material/Add'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { ChangeEvent, useState } from 'react'

export interface FoodItemDetailsProps {
  foodItem: FoodItem
}

//TODO: create options with radio buttons / add ac
export const FoodItemDetails = ({ foodItem }: FoodItemDetailsProps) => {
  const [meatOption, setMeatOption] = useState('');

  const addToFavorites = (foodItem: FoodItem) => {
    console.log(foodItem)
  }


  const handleSelectMeat = (event: ChangeEvent<HTMLInputElement>) => {
    setMeatOption((event.target as HTMLInputElement).value)
    console.log(event.target.value)
  }


  //TODO: add options meat, price, spicy

  return (
    <CardStyled elevation={1}>
      <CardMediaStyled
        image={foodItem.image}
        title={foodItem.title}
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>
          #{foodItem.id} {foodItem.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {foodItem.description}
        </Typography>

        <FormControl>
          <FormLabel>Select Meat or Seafood</FormLabel>
          <RadioGroup
            value={meatOption}
            onChange={handleSelectMeat}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>

      </CardContent>
      <CardActions>
        <Button startIcon={<AddIcon />}>Add to cart</Button>
        <Button onClick={() => foodItem && addToFavorites(foodItem)} startIcon={<FavoriteBorderIcon />} />
      </CardActions>
    </CardStyled>
  )
}


const CardStyled = styled(Card)(({ theme }) => ({
  height: '100%',
  width: '100%',
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