import { KeyboardBackspace } from "@mui/icons-material";
import { Box, styled } from "@mui/material";
import { Params, useParams } from "react-router-dom";
import { Home } from "../components";
import { Link, PageBody } from "../shared/components";


const Navigation = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2)
}));


interface OrderPageProps {
  backToLink?: string | ((params: Readonly<Params<string>>) => string);
  backToTitle?: string;
}

export const OrderPage = ({ backToLink, backToTitle }: OrderPageProps) => {
  const params = useParams()
  const backUrl = backToLink instanceof Function ? backToLink(params) : backToLink

  return (
    <PageBody>
      {backUrl &&
        <Navigation>
          <Link to={backUrl} display="flex" alignItems="center"><KeyboardBackspace />
            {backToTitle}
          </Link>
        </Navigation>
      }
      <Home />
    </PageBody>
  )
}