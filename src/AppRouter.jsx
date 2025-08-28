import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Header from "./component/Header"
import CategoriesGrid from "./component/CategoriesGrid"
import  Search  from "./component/Search"
import { CityProvider, DirectoryContext } from "./Context"
import { Home, ShoppingBag, Utensils, Hospital, School, Dumbbell, Theater } from "lucide-react";
// import { ShoppingBag, Utensils, Shirt, Car, HeartPulse, Monitor, Book } from "lucide-react"; 

import Test from "./component/Test"
import BusinessList from "./component/BusinessList"
import FilterPage from "./component/FilterPage"
import { useContext } from "react"


const MainComponent = () => {
    const { filterActive }= useContext(DirectoryContext)
    const gridCategoryData = [
        { name: "Shops", path: "/shops", icon: <ShoppingBag size={28} /> },
        { name: "Housing Societies", path: "/housing", icon: <Home size={28} /> },
        { name: "Restaurants", path: "/restaurants", icon: <Utensils size={28} /> },
        { name: "Hospitals & Clinics", path: "/hospitals", icon: <Hospital size={28} /> },
        { name: "Schools & Colleges", path: "/schools", icon: <School size={28} /> },
        { name: "Sports & Gyms", path: "/sports", icon: <Dumbbell size={28} /> },
        { name: "Events & Entertainment", path: "/events", icon: <Theater size={28} /> },
    ];
    //  const gridCategoryData = [
    //     { name: "Food", path: "/category/Food", icon: <Utensils size={28} /> },
    //     { name: "Clothing", path: "/category/Clothing", icon: <Shirt size={28} /> },
    //     { name: "Automotive", path: "/category/Automotive", icon: <Car size={28} /> },
    //     { name: "Health & Beauty", path: "/category/Health%20&%20Beauty", icon: <HeartPulse size={28} /> },
    //     { name: "Electronics", path: "/category/Electronics", icon: <Monitor size={28} /> },
    //     { name: "Books & Stationery", path: "/category/Books%20&%20Stationery", icon: <Book size={28} /> },
    // ];


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
            element: <Layout />, // header always there
            children: [
                {
                    path: "/", // homepage
                    element: (
                        <>
                            <Search />
                            <CategoriesGrid categories={gridCategoryData} />
                        </>
                    ),
                },
                {
                    path: "/test",
                    element: <Test />
                },
                {
                    path: "/shops",
                    element: <BusinessList />,
                },

                // {
                //     path: "/housing",
                //     element: <HousingPage />,
                // },
                // {
                //     path: "/restaurants",
                //     element: <RestaurantsPage />,
                // },
                // ... add hospitals, schools, sports, etc.
            ],
        },
    ]);
    return (
             
        <RouterProvider router={routers} />
    )
}

export default MainComponent;