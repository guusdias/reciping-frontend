import Recipe from "../../components/Recipe";
import { useFavoriteContext } from "../../contexts/Favorite"

export default function Favorites () {
  const { favorite } = useFavoriteContext();

  return (
    <div className="favorites-recipies">
      <section className="space-y-4">
        {
          favorite.map((fav) => {
            return <Recipe {...fav} key={fav.id} />
          })
        }
      </section>
    </div>
  )
}