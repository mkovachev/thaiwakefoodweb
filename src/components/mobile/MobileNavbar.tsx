import { ImageList, ImageListItem, ImageListItemBar, styled } from "@mui/material"
import { CategoryItem } from "../../data"

export interface CategoriesNavbarProps {
  categories: CategoryItem[]
}

export const MobileNavbar = ({ categories }: CategoriesNavbarProps) => {

  return (
    <ImageListStyled gap={2}>
      {categories.map((category) => (
        <ImageListItemStyled key={category.id}>
          <ImageListItemBar sx={{ background: 'transparent' }}
            position='top'
            title={category.title}
          />
          <img
            src={'images/americano.jpg'} //${category.image}
            alt={category.title}
            loading="lazy" />
        </ImageListItemStyled>
      ))}
    </ImageListStyled>
  )
}


const ImageListStyled = styled(ImageList)(({ theme }) => ({
  background: 'transparent',
  gridAutoFlow: "column",
  gridTemplateColumns: "repeat(auto-fill,minmax(100px,1fr)) !important",
  gridAutoColumns: "minmax(100px, 1fr)",
  //scrollbarColor: theme.color.yellow
}));

const ImageListItemStyled = styled(ImageListItem)(({ theme }) => ({
  height: 100,
  width: 100,
  background: 'transparent',
  '.MuiImageListItemBar-title': {
    fontSize: '.75rem'
  }
}));

