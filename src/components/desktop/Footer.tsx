import { BottomNavigation, BottomNavigationAction, Box, styled } from "@mui/material"
import { Link } from 'react-router-dom';
import { useState } from "react";


export const Footer = () => {
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
        <BottomNavigationAction
          sx={{ position: 'right' }}
          component={Link}
          to="/aboutus"
          label="About us"
          value="About us" />
      </BottomNavigation>
    </BoxStyled>
  )
}

const BoxStyled = styled(Box)(({ theme }) => ({
  width: '100%',
  background: 'transparent',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}));