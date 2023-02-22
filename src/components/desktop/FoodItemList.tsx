import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Grid, styled } from '@mui/material'
import { FoodItem } from '../../data'
import { useState } from 'react'
import { FoodItemRemoveDialog, FoodItemDialog } from '../shared'

export interface FoodItemListProps {
  foodItems: FoodItem[]
}


export const FoodItemList = ({ foodItems }: FoodItemListProps) => {
  const [open, setOpen] = useState(false)
  const [openRemove, setOpenRemove] = useState(false)
  const [foodItem, setFoodItem] = useState<FoodItem>({} as FoodItem)

  const openCardDetails = (foodItem: FoodItem) => {
    setFoodItem(foodItem)
    setOpen(true)
  }

  const handleClose = () => {
    setFoodItem({} as FoodItem)
    setOpen(false)
  }

  const handleRemove = (foodItem: FoodItem) => {
    //TODO: delete from local storage
    setOpenRemove(false)
  }

  const handleCloseRemoveDialog = () => {
    setOpenRemove(false)
  }


  return (
    <Grid container gap={1}>
      {foodItems?.map((foodItem: FoodItem, index) =>
        <Grid
          item
          key={index}
          onClick={() => foodItem.image && openCardDetails(foodItem)}
        >
          <CardStyled elevation={1}>
            <CardMedia
              sx={{ height: '10rem' }}
              image={foodItem.image}
              title={foodItem.title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                #{foodItem.id} {foodItem.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {foodItem.description}
              </Typography>
            </CardContent>
          </CardStyled>
        </Grid>
      )}
      <FoodItemDialog
        foodItem={foodItem}
        open={open}
        onClose={handleClose} />
      <FoodItemRemoveDialog
        foodItem={foodItem}
        open={openRemove}
        onClose={handleCloseRemoveDialog}
        onDelete={() => handleRemove(foodItem)} />
    </Grid>
  )
}

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