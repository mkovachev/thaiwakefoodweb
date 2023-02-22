import { ImageListItem, ImageListItemBar, ImageList, styled, useMediaQuery, Button, Box, TextField, Autocomplete } from "@mui/material"
import { FoodItem } from "../../data"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import { theme } from "../../ui/theme"
import { FoodOptions, SpicyOptions } from "../../shared"
import { useState } from "react"
import { Option } from "../../shared/Option"


export interface MenuProps {
  foodItems: FoodItem[]
}

export const Menu = ({ foodItems }: MenuProps) => {
  const mobileSmall = useMediaQuery(theme.breakpoints.down('mobileSmall'))
  const [foodOption, setFoodOption] = useState('')
  const [spicyOption, setSpicyOption] = useState('')

  const addToFavorites = () => {
    console.log('added to favorites')
  }

  const handleFoodOptions = (event: any, option: Option) => {
    if (option === null) setFoodOption('')
    setFoodOption(option.value)
  }

  const handleSpiceOptions = (event: any, option: Option) => {
    if (option === null) setFoodOption('')
    setSpicyOption(option.value)
  }


  return (
    <ImageListStyled cols={mobileSmall ? 1 : 2}>
      {foodItems?.map((foodItem: FoodItem, index) =>
        <ImageListItem key={index}
          sx={{ borderRadius: theme.shape?.borderRadiusCard }}>
          <ImageListItemBar
            sx={{ background: 'transparent' }}
            position='top'
            title={foodItem.title}
            actionPosition="right"
            actionIcon={
              <Button
                sx={{ color: theme.colors.white }}
                onClick={addToFavorites}
                startIcon={<FavoriteBorderOutlinedIcon />}
              />
            }
          />
          <img
            src={`${foodItem.image}`}
            alt={foodItem.title}
            loading="lazy" />
          <ImageListItemBar
            title={foodItem.description}
            subtitle={
              <OptionsBox gap={1}>
                <AutocompleteStyled
                  options={FoodOptions}
                  renderInput={(params) => <TextField {...params} label='Meat or Sea food' />}
                  onChange={(e, option) => option && handleFoodOptions(e, option as Option)}
                />
                <AutocompleteStyled
                  options={SpicyOptions}
                  renderInput={(params) => <TextField {...params} label='Spicy' />}
                  onChange={(e, option) => option && handleSpiceOptions(e, option as Option)}
                />
              </OptionsBox>
            }
            position='bottom' />
        </ImageListItem>

      )}
    </ImageListStyled>
  )
}

const ImageListStyled = styled(ImageList)(({ theme }) => ({
  margin: 'auto',
}));

const OptionsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'column',
  alignItems: 'center'
}));

const AutocompleteStyled = styled(Autocomplete)(({ theme }) => ({
  '.MuiInputBase-root, .MuiFormControl-root, .MuiAutocomplete-inputRoot': {
    background: 'transparent',
    //color: theme.colors.white,
    border: `1px solid ${theme.colors.white}`,
    borderColor: theme.colors.white,
    borderRadius: theme.shape?.borderRadiusCard,
    '&:hover': {
      border: `1px solid ${theme.colors.white}`,
    },
    '&[aria-expanded=true]': {
      border: `1px solid ${theme.colors.white}`,
      color: theme.colors.white,
      background: theme.colors.white
    }
  }
}));