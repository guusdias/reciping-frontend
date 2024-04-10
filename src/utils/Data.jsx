import { CgProfile } from "react-icons/cg";
import { GrFavorite } from "react-icons/gr";
import { FaList } from "react-icons/fa6";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const datas = [
  
  {
    id: 1,
    icon: <CgProfile />,
    text: 'My profile',
    path: '/profile'
  },

  {
    id: 2,
    icon: <GrFavorite />,
    text: "Favorites",
    path: '/favorites'
  },

  {
    id: 3,
    icon: <FaList />,
    text: "My Recipes",
    path: '/recipes'
  },
  
  {
    id: 4,
    icon: <RiLogoutCircleLine />,
    text: "Logout",
    path: '/login'
  }
]