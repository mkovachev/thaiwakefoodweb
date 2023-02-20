import { KeyboardBackspace } from "@mui/icons-material";
import { Box, styled, Typography } from "@mui/material";
import { Params, useParams } from "react-router-dom";
import { useGetAllFoodItems } from "../hooks";
import { Link, PageBody } from "../shared";


const Navigation = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2)
}));


interface AboutUsPageProps {
  backToLink?: string | ((params: Readonly<Params<string>>) => string);
  backToTitle?: string;
}

export const AboutUsPage = ({ backToLink, backToTitle }: AboutUsPageProps) => {
  const params = useParams()
  const backUrl = backToLink instanceof Function ? backToLink(params) : backToLink
  const { data: foodItems, isLoading } = useGetAllFoodItems()

  if (isLoading || !foodItems) {
    return null
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
    </PageBody>
  )
}