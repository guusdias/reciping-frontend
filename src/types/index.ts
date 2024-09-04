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
export interface RecipeRequest {
  _id: string;
  title: string;
  description: string;
  mainIngredient: string;
  ingredients: string;
  instructions: string;
  img_url: string;
  user_name: string;
  user_img: string;
}

export interface RecipeResponse {
  recipes: RecipeRequest[];
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

export interface RecipeFormData {
  title: string;
  ingredients: string;
  description: string;
  mainIngredient: string;
  instructions: string;
  img_url: string;
}

export interface RecipeFormRefs {
  title: React.RefObject<HTMLInputElement>;
  ingredients: React.RefObject<HTMLTextAreaElement>;
  description: React.RefObject<HTMLTextAreaElement>;
  mainIngredient: React.RefObject<HTMLInputElement>;
  instructions: React.RefObject<HTMLTextAreaElement>;
  img_url: React.RefObject<HTMLInputElement>;
}
export interface ApiError extends Error {
  message: string;
}

export interface FavoriteItem {
  id: string;
  title: string;
  description: string;
  ingredients: string;
  instructions: string;
  img_url: string;
  mainIngredient: string;
  user_name: string;
  user_img: string;
}
