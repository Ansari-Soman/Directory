import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import WebWrapper from "./Wrappers/WebWrapper";
import Search from "./Dashboard/Search";
import CategoriesGrid from "./Dashboard/CategoriesGrid";
import Listing from "./ListingBusiness/Listing";
import ListingMessage from "./ListingBusiness/ListingMessage";
import BusinessListSectionSom from "./Dashboard/BusinessListSection";
import Test from "./component/Test";
// import Hero from "./Test Compo/Claude/Hero";
import Hero from "./Test Compo/Chatgpt/Hero";

const MainComponent = () => {
  const routers = createBrowserRouter([
    {
      element: <WebWrapper />,
      children: [
        {
          path: "/",
          element: (
            <>
              <div className="relative h-[550px] 2xl:h-[600px] flex justify-center items-center ">
                <div
                  className="absolute inset-0 bg-cover bg-center "
                  style={{ backgroundImage: "url('/1.jpg')" }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 w-full">
                  <Search />
                </div>
              </div>
              <CategoriesGrid />

              <BusinessListSectionSom />
              <Test />
              <Hero />
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
