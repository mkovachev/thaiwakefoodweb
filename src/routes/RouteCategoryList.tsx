import { Route, Routes } from "react-router-dom"
import { useGetCategoryList } from "../hooks/useGetCategoryList"
import { parseCategoryPage } from "../utils"


export const RouteCategoryList = () => {
  const { data: categories, isLoading } = useGetCategoryList()

  if (isLoading || !categories) {
    return null
  }

  return (
    <Routes>
      {
        categories.map((category, index) => (
          <Route
            key={index}
            path={`/${category.title}`}
            element={`<${parseCategoryPage(category.title)} />`} />
        ))
      }
    </Routes>
  )
}