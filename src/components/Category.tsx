import { ImageListItem, ImageListItemBar, styled } from "@mui/material"
import { CategoryItem } from "../data"

export interface CategoriesNavbarProps {
  category: CategoryItem
}

export const Category = ({ category }: CategoriesNavbarProps) => {

  return (
    <ImageListItemStyled key='images/americano.jpg'>
      <ImageListItemBar sx={{ background: 'transparent' }}
        position='top'
        title={category.title}
      />
      <img
        src={'images/americano.jpg'} //${category.image}
        alt={category.title}
        loading="lazy" />
    </ImageListItemStyled>
  )
}

const ImageListItemStyled = styled(ImageListItem)(({ theme }) => ({
  height: 100,
  width: 100,
  background: 'transparent',
  '.MuiImageListItemBar-title': {
    fontSize: '.75rem'
  }
}));