export interface RecipeProps {
  id: string;
  title: string;
  description: string;
  ingredients: string;
  instructions: string;
  img_url: string;
  mainIngredient: string;
  user_name: string;
  user_img: string;
  showElipse?: boolean;
  imgDisplay?: boolean;
}

export interface User {
  _id: string;
  user_name: string;
  email: string;
  user_img?: string;
}

export interface FormData {
  user_name: string;
  email: string;
  password: string;
  user_img: string;
}

export interface FormRefs {
  user_name: React.RefObject<HTMLInputElement>;
  email: React.RefObject<HTMLInputElement>;
  password: React.RefObject<HTMLInputElement>;
  user_img: React.RefObject<HTMLInputElement>;
}
