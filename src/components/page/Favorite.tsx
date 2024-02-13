import { favorite } from "../../assets/config/sideBarConfig";
import FavoriteItemMol from "../molcules/FavoriteItemMol";

function Favorite() {
  return (
    <div className="flex justify-between items-center border w-[1440px]">
    <div className=" flex flex-wrap justify-center items-center gap-10 ">
      {favorite.map((i) => (
        <FavoriteItemMol
          img={i.img}
          title={i.title}
          title2 ={i.title2}
          icon={i.icon}
          pic={i.pic}
        />
      ))}
    </div>
    </div>
  );
}

export default Favorite;
