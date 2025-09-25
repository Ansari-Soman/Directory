import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import WebWrapper from "./Wrappers/WebWrapper";
import Search from "./component/Search";
import CategoriesGrid from "./component/CategoriesGrid";
import Listing from "./ListingBusiness/Listing";
import ListingMessage from "./ListingBusiness/ListingMessage";

const MainComponent = () => {
  const routers = createBrowserRouter([
    {
      element: <WebWrapper />,
      children: [
        {
          path: "/",
          element: (
            <>  
              <Search />
              <CategoriesGrid />
            </>
          ),
        },
        {
          path: "/listing",
          element: <Listing />,
        },
        {
          path: "/listing/success",
          element: <ListingMessage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routers} />;
};

export default MainComponent;