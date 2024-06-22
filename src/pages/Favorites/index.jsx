import Recipe from "../../components/Recipe";
import { useFavoriteContext } from "../../contexts/Favorite";

export default function Favorites() {
  const { favorite } = useFavoriteContext();

  return (
    <div className="flex flex-col mt-0 gap-10 items-left shadow-md p-10 rounded-3xl bg-slate-50 h-full w-full">
      <div className="favorites-recipies ">
        <section className="space-y-4">
          {favorite.map((fav) => {
            return <Recipe {...fav} key={fav.id} />;
          })}
        </section>
      </div>
    </div>
  );
}
