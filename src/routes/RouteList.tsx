import { Routes, Route } from "react-router-dom"
import { HomePage, FavoritesPage, ShoppingCartPage, AboutUsPage } from "../pages"
import { RouteCategoryList } from "./RouteCategoryList"

export const RouteList = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/shoppingcart" element={<ShoppingCartPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
      </Routes>
      <RouteCategoryList />
    </>
  )
}