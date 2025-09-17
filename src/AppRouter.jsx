import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import CategoriesGrid from "./component/CategoriesGrid"
import Search from "./component/Search"
import Listing from './component/Listing'
import WebWrapper from "./Wrappers/WebWrapper"
import ListingMessage from "./component/ListingMessage"


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
                            <CategoriesGrid  />
                        </>
                    ),
                },
                {
                    path: '/listing',
                    element: <Listing />
                }, 
                {
                    path: "/listing/success",
                    element: <ListingMessage />
                }

            ],
        },
    ]);
    return (
             
        <RouterProvider router={routers} />
    )
}

export default MainComponent;