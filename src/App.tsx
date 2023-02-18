import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import { FavoritesPage, HomePage, OrderPage } from "./pages"
import { ReactQueryProvider, ToastProvider } from "./providers"


function App() {
  return (
    <Box>
      <ReactQueryProvider>
        <ToastProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/orders" element={<OrderPage />} />
          </Routes>
        </ToastProvider>
      </ReactQueryProvider>
    </Box>
  )
}

export default App
