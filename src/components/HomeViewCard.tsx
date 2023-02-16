import { Grid, CardHeader, CardContent, Typography } from "@mui/material";
import { Menu } from "../data";
import { useToast } from "../providers";
import { ToastMessages } from "../shared";

interface HomeProps {
  menu?: Menu;
}

export const HomeViewCard = ({ menu }: HomeProps) => {
  const { openToast } = useToast();
  const toast = ToastMessages();

  if (!menu) {
    return null;
  }

  return (
    <Grid container>
      <CardHeader title="Food Menu" />
      <CardContent>
        <Grid container mb={2} spacing={2}>
          <Grid item sm={3}>
            <Typography></Typography>
          </Grid>
          <Grid item sm={3}>
            <Typography></Typography>
          </Grid>
          <Grid item sm={3}>
            <Typography></Typography>
          </Grid>
          <Grid item sm={3}>
            <Typography></Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Grid>
  )

}