import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Header from "./component/Header"
import CategoriesGrid from "./component/CategoriesGrid"
import  Search  from "./component/Search"
import { CityProvider, DirectoryContext } from "./Context"
// import { ShoppingBag, Utensils, Shirt, Car, HeartPulse, Monitor, Book } from "lucide-react"; 

import Test from "./component/Test"
import BusinessList from "./component/BusinessList"
import FilterPage from "./component/FilterPage"
import { useContext, useEffect } from "react"
import { businesses } from "./component/data"


const MainComponent = () => {
    const { filterActive, setBusinessList } = useContext(DirectoryContext)


    const Layout = () => {
        return (
            <>
                <Header />
                <Outlet /> {/* This is where child routes render */}
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
                    path: "/result",
                    element: <Test />
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
    useEffect(() => {
        setBusinessList(businesses)
    }, [])
    return (
             
        <RouterProvider router={routers} />
    )
}

export default MainComponent;