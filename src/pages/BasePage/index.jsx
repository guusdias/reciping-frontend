import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/SidebarContainer";
import Header from "../../components/Header";
import FavoritesProvider from "../../contexts/Favorite";
import Footer from "../../components/Footer";

export default function BasePage() {
  const location = useLocation();

  const showSearch =
    location.pathname === "/feed" ||
    location.pathname === "/recipes" ||
    location.pathname === "/favorites";

  const welcome = location.pathname === "/";

  return (
    <main className="flex flex-col h-screen bg-gray-200">
      <Header showSearch={showSearch} />
      <div className="flex flex-1 gap-4 py-4 px-8">
        <aside className="bg-gray-200 w-1/4 flex flex-col justify-center items-center h-full">
          <Sidebar />
        </aside>
        <section className="flex-1 flex flex-col justify-center items-center">
          {welcome ? (
            <div className="w-full flex items-center justify-center flex-col gap-4 bg-[#f7f3ef] h-full rounded-3xl">
              <h1 className="text-4xl font-bold mt-2">Bem vindo ao Reciping</h1>
              <img
                className="w-full rounded-3xl"
                src="https://raw.githubusercontent.com/guusdias/reciping-frontend/fa301733698687b762d443a13932d8e90dc1ade8/src/assets/svg/DrawKit-cooking-kitchen-food-vector-illustrations-01.svg"
                alt="welcome_img"
              ></img>
            </div>
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
}
