import { KeyboardBackspace } from "@mui/icons-material";
import { Box, styled, Typography } from "@mui/material";
import { Params, useParams } from "react-router-dom";
import { HomeViewCard } from "../components";
import { useGetMenu } from "../hooks";
import { Link, PageBody } from "../shared/components";


const Navigation = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2)
}));


interface HomePageProps {
  backToLink?: string | ((params: Readonly<Params<string>>) => string);
  backToTitle?: string;
}

export const HomePage = ({ backToLink, backToTitle }: HomePageProps) => {
  const params = useParams();
  const { id } = params;
  const { data, isLoading } = useGetMenu({ id });
  const backUrl = backToLink instanceof Function ? backToLink(params) : backToLink;

  return (
    <PageBody>
      {backUrl &&
        <Navigation>
          <Link to={backUrl} display="flex" alignItems="center"><KeyboardBackspace />
            {backToTitle}
          </Link>
        </Navigation>
      }
      <Typography variant="h1">Home</Typography>
      {!isLoading && <HomeViewCard menu={data} />}
    </PageBody>
  )
}