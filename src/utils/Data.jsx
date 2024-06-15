import { CgProfile } from "react-icons/cg";
import { GrFavorite } from "react-icons/gr";
import { FaList } from "react-icons/fa6";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { IoHome } from "react-icons/io5";

export const datas = [
  {
    id: 1,
    icon: <IoHome />,
    text: "Home",
    path: "/feed",
  },
  {
    id: 2,
    icon: <MdFormatListBulletedAdd />,
    text: "Add Recipe",
    path: "/addRecipe",
  },
  {
    id: 3,
    icon: <FaList />,
    text: "My Recipes",
    path: "/recipes",
  },
  {
    id: 4,
    icon: <GrFavorite />,
    text: "Favorites",
    path: "/favorites",
  },
  {
    id: 5,
    icon: <CgProfile />,
    text: "My profile",
    path: "/profile",
  },
  {
    id: 6,
    icon: <RiLogoutCircleLine />,
    text: "Logout",
    onClick: () => {
      sessionStorage.clear();
      window.location.href = "/login";
    },
  },
];
