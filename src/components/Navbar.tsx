import { Typography, AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { MenuModel } from "../data";
import { useToast } from "../providers";
import { ToastMessages } from "../shared";
import MenuIcon from '@mui/icons-material/Menu';


interface NavbarProps {
  menu?: MenuModel;
}

export const Navbar = ({ menu }: NavbarProps) => {
  const { openToast } = useToast();
  const toast = ToastMessages();

  if (!menu) {
    return null;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )

}