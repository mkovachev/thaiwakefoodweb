import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActions, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, styled } from '@mui/material'
import { FoodItem } from '../../data'
import AddIcon from '@mui/icons-material/Add'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { ChangeEvent, useState } from 'react'
import { Option } from "../../shared"

export interface FoodItemDetailsProps {
  foodItem: FoodItem
}

export const FoodItemDetails = ({ foodItem }: FoodItemDetailsProps) => {
  const [option, setOption] = useState('');
  const hasOptions = foodItem.options

  const addToFavorites = (foodItem: FoodItem) => {
    console.log(foodItem)
  }

  //TODO: fix same price selects all items with this price
  const handleSelectOption = (event: ChangeEvent<HTMLInputElement>) => {
    setOption((event.target as HTMLInputElement).value)
    console.log(event.target.value)
  }

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

        <Grid container spacing={2}>
          {!hasOptions &&
            <Grid item>
              <Typography variant='subtitle2'>{foodItem.prices?.find(p => p)} THB</Typography>
            </Grid>
          }
          {hasOptions &&
            <Grid item>
              <FormControl>
                <FormLabel>Select Option</FormLabel>
                <RadioGroup
                  value={option}
                  onChange={handleSelectOption}
                >
                  {foodItem.options?.map((option: Option, index: number) =>
                    <FormControlLabel
                      key={index}
                      control={<Radio />}
                      label={<Typography variant='subtitle2'>{option.label} {option.value} THB</Typography>}
                      value={option.value}
                    />
                  )}
                </RadioGroup>
              </FormControl>
            </Grid>
          }
          {foodItem.spicy?.length !== 0 &&
            <Grid item>
              <FormControl>
                <FormLabel>Spicy Options</FormLabel>
                <RadioGroup
                  value={option}
                  onChange={handleSelectOption}
                >
                  {foodItem.spicy?.map((spicy: string, index: number) =>
                    <FormControlLabel
                      key={index}
                      control={<Radio />}
                      label={<Typography variant='subtitle2'>{spicy}</Typography>}
                      value={spicy}
                    />
                  )}
                </RadioGroup>
              </FormControl>
            </Grid>
          }
        </Grid>

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
  '.MuiCardActions-root': {
    marginTop: 'auto',
  }
}))

const CardMediaStyled = styled(CardMedia)(({ theme }) => ({
  height: '10rem',
}))