import { Outlet } from "react-router-dom";
import Sidebar from "../../components/SidebarContainer";
import RecipesFeed from "../../components/RecipiesFeed";
import Header from "../../components/Header";

export default function BasePage() {
  return (
    <main>
      <div className="flex justify-around">
        <Header/>
        <Sidebar />
        <Outlet />   
      </div>
    </main>
  );
}
