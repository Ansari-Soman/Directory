import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Search from "./component/Search";
import CategoriesGrid from "./component/CategoriesGrid";
import { Home, ShoppingBag, Utensils, Hospital, School, Dumbbell, Theater } from "lucide-react";
import { CityProvider } from "./Context";
import MainComponent from "./AppRouter";
function App() {

  const gridCategoryData = [
    { name: "Shops", path: "/shops", icon: <ShoppingBag size={28} /> },
    { name: "Housing Societies", path: "/housing", icon: <Home size={28} /> },
    { name: "Restaurants", path: "/restaurants", icon: <Utensils size={28} /> },
    { name: "Hospitals & Clinics", path: "/hospitals", icon: <Hospital size={28} /> },
    { name: "Schools & Colleges", path: "/schools", icon: <School size={28} /> },
    { name: "Sports & Gyms", path: "/sports", icon: <Dumbbell size={28} /> },
    { name: "Events & Entertainment", path: "/events", icon: <Theater size={28} /> },
  ];


  return (
    // <BrowserRouter>
    //   <CityProvider>
    //     <Header />
    //     <Search />
    //     <CategoriesGrid categories={gridCategoryData} />
    //   </CityProvider>
    // </BrowserRouter>

    <CityProvider>

    <MainComponent />
    </CityProvider>

  );
}

export default App;
