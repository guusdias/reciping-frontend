// App.jsx
import "./App.css";
import { Outlet } from "react-router-dom";
import RecipesFeed from "./components/RecipiesFeed";
import SidebarContainer from "./components/SidebarContainer"

function App() {
  return (
    <div className="flex">
      <SidebarContainer/>
      <Outlet/>
    </div>
  );
}

export default App;
