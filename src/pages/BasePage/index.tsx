import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/SidebarContainer/index";
import Header from "../../components/Header/index";
import { FavoritesProvider } from "../../contexts/Favorite";
import Footer from "../../components/Footer/index";
import Welcome from "../../components/Welcome";

const BasePage = () => {
  const location = useLocation();

  const welcome = location.pathname === "/";

  return (
    <main className="flex flex-col h-screen bg-gray-200">
      <Header />
      <div className="flex flex-1 gap-4 py-4 px-8">
        <aside className="bg-gray-200 w-1/4 flex flex-col justify-start items-start h-full">
          <Sidebar />
        </aside>
        <section className="flex-1 flex flex-col justify-center items-center">
          {welcome ? (
            <Welcome />
          ) : (
            <FavoritesProvider>
              <Outlet />
            </FavoritesProvider>
          )}
        </section>
        <aside className="bg-gray-200 w-1/4 p-4 flex flex-col justify-center items-center"></aside>
      </div>
      <Footer className="py-4 px-8" />
    </main>
  );
};

export default BasePage;
