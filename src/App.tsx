import { Box } from "@mui/material"
import { MuiThemeProvider, ReactQueryProvider, ToastProvider } from "./providers"
import { RouteList } from "./routes"


function App() {
  return (
    <Box>
      <ReactQueryProvider>
        <MuiThemeProvider>
          <ToastProvider>
            <RouteList />
          </ToastProvider>
        </MuiThemeProvider>
      </ReactQueryProvider>
    </Box>
  )
}

export default App
