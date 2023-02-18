import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components"
import { HomePage } from "./pages/HomePage"
import { ReactQueryProvider, ToastProvider } from "./providers"


function App() {

  return (
    <Box>
      <ReactQueryProvider>
        <ToastProvider>
          <Navbar />
          <Routes>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </ToastProvider>
      </ReactQueryProvider>
    </Box>
  )
}

export default App
