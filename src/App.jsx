import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Search from "./component/Search";
import CategoriesGrid from "./component/CategoriesGrid";
import { Home, ShoppingBag, Utensils, Hospital, School, Dumbbell, Theater } from "lucide-react";
import { CityProvider } from "./Context";
import MainComponent from "./AppRouter";
function App() {


  return (
    <CityProvider>
      <MainComponent />
    </CityProvider>

  );
}

export default App;
