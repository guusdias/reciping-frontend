import { Outlet } from "react-router-dom";
import Sidebar from "../../components/SidebarContainer";
import Header from "../../components/Header";
import FavoritesProvider from "../../contexts/Favorite";

export default function BasePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 gap-4">
        <aside className="bg-gray-200 w-1/4 p-4 flex justify-center items-center">
          <Sidebar />
        </aside>
        <section className="flex-1 p-4">
          {" "}
          {/* Adiciona padding para dar espaçamento */}
          <FavoritesProvider>
            <Outlet />
          </FavoritesProvider>
        </section>
        <aside className="bg-gray-200 w-1/4 p-4">
          {" "}
          {/* Ajusta o segundo aside */}
          {/* Conteúdo do segundo aside */}
        </aside>
      </div>
    </main>
  );
}
