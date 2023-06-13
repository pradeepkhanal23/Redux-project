import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
import Products from "./components/Products";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

const App = () => {
  return (
    <main className="w-full h-full overflow-x-hidden bg-gray-50">
      <RouterProvider router={router} />
    </main>
  );
};
export default App;
