import ElipseMenu from "../../components/ElipseMenu";
import { useFavoriteContext } from "../../contexts/Favorite"

export default function Favorites () {
  const { favorite } = useFavoriteContext();

  return (
    <div className="favorites-recipies">
      <section>
        {
          favorite.map((fav) => {
            return <ElipseMenu {...fav} key={fav.id} />
          })
        }
      </section>
    </div>
  )
}