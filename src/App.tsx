import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home"
import Create from "./pages/Create"
import View from "./pages/View"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/:data",
    element: <View />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
