import { Box } from "@mui/material"
import { ReactQueryProvider, ToastProvider } from "./providers"
import { RouteList } from "./routes"


function App() {
  return (
    <Box>
      <ReactQueryProvider>
        <ToastProvider>
          <RouteList />
        </ToastProvider>
      </ReactQueryProvider>
    </Box>
  )
}

export default App
