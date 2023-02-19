import { KeyboardBackspace } from "@mui/icons-material";
import { Box, styled, useMediaQuery } from "@mui/material";
import { Params, useParams } from "react-router-dom";
import { Home, MobileHome } from "../components";
import { useGetAllFoodItems } from "../hooks";
import { useGetCategoryList } from "../hooks/useGetCategoryList";
import { Link, PageBody } from "../shared/components";
import { theme } from "../theme/theme";


const Navigation = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2)
}));


interface HomePageProps {
  backToLink?: string | ((params: Readonly<Params<string>>) => string);
  backToTitle?: string;
}

export const HomePage = ({ backToLink, backToTitle }: HomePageProps) => {
  const params = useParams()
  const backUrl = backToLink instanceof Function ? backToLink(params) : backToLink

  const { data: categories, isLoading: isLoadingCategories } = useGetCategoryList()
  const { data: foodItems, isLoading: isLoadingAllFoodItems } = useGetAllFoodItems()

  const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const desktopScreen = useMediaQuery(theme.breakpoints.up('sm'))

  if (isLoadingCategories || !categories || isLoadingAllFoodItems || !foodItems) {
    return null;
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
      {mobileScreen && <MobileHome categories={categories} foodItems={foodItems} />}
      {desktopScreen && <Home categories={categories} foodItems={foodItems} />}
    </PageBody>
  )
}