import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './component/pages/Home';
import ProductsPage from './component/pages/ProductsPage';
import RootLayout from './component/Root';
import ErrorPage from './component/Error';
import ProductDetailPage from './component/pages/ProductDetail';

const routerV1 = createBrowserRouter([
  // TODO :: Insteaf of object array we can declare using <Route> as shown in below
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
]);


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:productId', element: <ProductDetailPage /> }
    ],
  }
]);

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

const App = () => {
  return (
    <div className="app">
            <RouterProvider router={router} />
    </div>
  );
};

export default App;
