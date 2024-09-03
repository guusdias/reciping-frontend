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
