// eslint-disable-next-line no-restricted-imports
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./Home";
import { ProductPage } from "./Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/products",
    element: <ProductPage />,
  },
]);
