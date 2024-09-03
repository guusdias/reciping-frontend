import { CgProfile } from "react-icons/cg";
import { GrFavorite } from "react-icons/gr";
import { FaList } from "react-icons/fa6";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { IoHome } from "react-icons/io5";

export interface DataItem {
  id: number;
  icon: JSX.Element;
  text: string;
  path?: string;
  onClick?: () => void;
}

export const datas: DataItem[] = [
  {
    id: 1,
    icon: <IoHome />,
    text: "Home",
    path: "/feed",
  },
  {
    id: 2,
    icon: <MdFormatListBulletedAdd />,
    text: "Adicionar Receitas",
    path: "/addRecipe",
  },
  {
    id: 3,
    icon: <FaList />,
    text: "Minhas Receitas",
    path: "/recipes",
  },
  {
    id: 4,
    icon: <GrFavorite />,
    text: "Favoritos",
    path: "/favorites",
  },
  {
    id: 5,
    icon: <CgProfile />,
    text: "Meu perfil",
    path: "/profile",
  },
  {
    id: 6,
    icon: <RiLogoutCircleLine />,
    text: "Sair",
    onClick: () => {
      sessionStorage.clear();
      window.location.href = "/login";
    },
  },
];
