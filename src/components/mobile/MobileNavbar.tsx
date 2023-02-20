import { ImageList, ImageListItem, ImageListItemBar, styled } from "@mui/material"
import { CategoryItem } from "../../data"

export interface CategoriesNavbarProps {
  categories: CategoryItem[]
}

export const MobileNavbar = ({ categories }: CategoriesNavbarProps) => {

  return (
    <ImageListStyled gap={2}>
      {categories.map((category, index) => (
        <ImageListItemStyled key={index}>
          <ImageListItemBar
            sx={{ background: 'transparent' }}
            position='top'
            title={category.title}
          />
          <img
            src={`${category.image}`}
            alt={category.title}
            loading="lazy" />
        </ImageListItemStyled>
      ))}
    </ImageListStyled>
  )
}


const ImageListStyled = styled(ImageList)(({ theme }) => ({
  gridAutoFlow: 'column',
  gridTemplateColumns: 'repeat(auto-fill,minmax(100px,1fr)) !important',
  gridAutoColumns: 'minmax(100px, 1fr)',
}));

const ImageListItemStyled = styled(ImageListItem)(({ theme }) => ({
  height: 100,
  width: 100,
  background: 'transparent',
  '.MuiImageListItemBar-title': {
    fontSize: '.75rem'
  }
}));

