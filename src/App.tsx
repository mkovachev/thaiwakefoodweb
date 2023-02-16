import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { ReactQueryProvider, ToastProvider } from "./providers"


function App() {

  return (
    <div className="App">
      <ReactQueryProvider>
        <ToastProvider>
          <Routes>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </ToastProvider>
      </ReactQueryProvider>
    </div>
  )
}

export default App
