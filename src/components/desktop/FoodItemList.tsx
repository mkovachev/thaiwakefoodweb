import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Fade, Grid, Modal, styled } from '@mui/material';
import { FoodItem } from '../../data';
import { useState } from 'react';

export interface FoodItemListProps {
  foodItems: FoodItem[]
}


export const FoodItemList = ({ foodItems }: FoodItemListProps) => {
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')

  const openCardDetails = (image: string, title: string) => {
    setOpen(true)
    setImage(image)
    setTitle(title)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Grid container gap={1}>
      {foodItems?.map((foodItem: FoodItem, index) =>
        <GridItem
          item
          key={index}
          onClick={() => foodItem.image && openCardDetails(foodItem.image, foodItem.title)}
        >
          <CardStyled elevation={1}>
            <CardMediaStyled
              image={foodItem.image}
              title={foodItem.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                #{foodItem.id} {foodItem.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {foodItem.description}
              </Typography>
            </CardContent>
          </CardStyled>
        </GridItem>
      )}
      <ModalStyled
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open} timeout={500}>
          <img
            src={image}
            alt={title}
          />
        </Fade>
      </ModalStyled>
    </Grid>
  )
}

const ModalStyled = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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