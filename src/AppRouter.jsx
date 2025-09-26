import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import WebWrapper from "./Wrappers/WebWrapper";
import Search from "./Dashboard/Search";
import CategoriesGrid from "./Dashboard/CategoriesGrid";
import Listing from "./ListingBusiness/Listing";
import ListingMessage from "./ListingBusiness/ListingMessage";
import BusinessListingsSection from "./Dashboard/BLSClaude";
import BusinessDetailModal from "./Dashboard/BDClaude";
import BusinessListSectionSom from "./Dashboard/BusinessListSection";

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
              <BusinessListingsSection />
              <BusinessListSectionSom />
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