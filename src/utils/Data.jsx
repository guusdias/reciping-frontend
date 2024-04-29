import { CgProfile } from "react-icons/cg";
import { GrFavorite } from "react-icons/gr";
import { FaList } from "react-icons/fa6";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdFormatListBulletedAdd } from "react-icons/md";

export const datas = [
    
    {
      id: 1,
      icon: <MdFormatListBulletedAdd />,
      text: 'Add Recipe',
      path: '/addRecipe'
    },
  
    {
      id: 2,
      icon: <FaList />,
      text: "My Recipes",
      path: '/recipes'
    },
      
    {
      id: 3,
      icon: <GrFavorite />,
      text: "Favorites",
      path: '/favorites'
    },

    {
      id: 4,
      icon: <CgProfile />,
      text: 'My profile',
      path: '/profile'
    },

    {
      id: 5,
      icon: <RiLogoutCircleLine />,
      text: "Logout",
      path: '/login'
    }
]