import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Header from "./component/Header"
import CategoriesGrid from "./component/CategoriesGrid"
import  Search  from "./component/Search"
import {  DirectoryContext } from "./Context"
import Test from "./component/Test"
import BusinessList from "./component/BusinessList"
import FilterPage from "./component/FilterPage"
import Result from "./component/Result"
import { useContext, useEffect } from "react"
import { businesses } from "./component/data"
import Listing from "./component/Listing"


const MainComponent = () => {
    const { filterActive } = useContext(DirectoryContext)


    const Layout = () => {
        return (
            <>
                <Header />
                <Outlet /> 
                {filterActive && <FilterPage />}
            </>
        );
    };


    const routers = createBrowserRouter([
        {
            element: <Layout />,
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
                    path: "/listing",
                    element: <Listing />
                },
                {
                    path: "/result",
                    element: <Result />
                },
                {
                    path: "/shops",
                    element: <BusinessList />,
                },
                {
                    path: "/housing",
                    element: <BusinessList />
                },
                {
                    path: "/restaurant",
                    element: <BusinessList />
                },
                {
                    path: "/hospital",
                    element: <BusinessList />
                },
                {
                    path: "/school",
                    element: <BusinessList />
                },
                {
                    path: "/sports",
                    element: <BusinessList />
                },
                {
                    path: "/events",
                    element: <BusinessList />
                },
            ],
        },
    ]);
    return (
             
        <RouterProvider router={routers} />
    )
}

export default MainComponent;