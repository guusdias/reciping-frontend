import { Outlet } from "react-router-dom";
import Sidebar from "../../components/SidebarContainer";
import { Container } from "postcss";
import RecipesFeed from "../../components/RecipiesFeed";

export default function BasePage() {
  return (
    <main>
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </main>
  );
}
