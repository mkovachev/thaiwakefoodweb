import { BottomNavigation, BottomNavigationAction, Box, styled } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useState } from "react";


export const MobileFooter = () => {
  const [value, setValue] = useState(0);

  return (
    <BoxStyled>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Cart" icon={<ShoppingCartOutlinedIcon />} />
      </BottomNavigation>
    </BoxStyled>
  )
}

const BoxStyled = styled(Box)(({ theme }) => ({
  width: '100%',
  background: 'transparent',
  position: 'fixed',
  bottom: 0
}));