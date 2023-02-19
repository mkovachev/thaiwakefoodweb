import { KeyboardBackspace } from "@mui/icons-material";
import { Box, styled, Typography } from "@mui/material";
import { Params, useParams } from "react-router-dom";
import { Favorites } from "../components";
import { useGetAllFoodItems } from "../hooks";
import { Link, PageBody } from "../shared";


const Navigation = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2)
}));


interface FavoritesPageProps {
  backToLink?: string | ((params: Readonly<Params<string>>) => string);
  backToTitle?: string;
}

export const FavoritesPage = ({ backToLink, backToTitle }: FavoritesPageProps) => {
  const params = useParams()
  const backUrl = backToLink instanceof Function ? backToLink(params) : backToLink
  const { data: foodItems, isLoading } = useGetAllFoodItems()

  if (isLoading || !foodItems) {
    return (
      <Box>
        <Typography>No items</Typography>
      </Box>
    )
  }

  return (
    <PageBody>
      {backUrl &&
        <Navigation>
          <Link to={backUrl} display="flex" alignItems="center"><KeyboardBackspace />
            {backToTitle}
          </Link>
        </Navigation>
      }
      <Favorites foodItems={foodItems} />
    </PageBody>
  )
}