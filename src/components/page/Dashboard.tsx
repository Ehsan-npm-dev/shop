

import {cards} from "../../assets/config/sideBarConfig"
import CardItemMol from "../molcules/CardItemMol"
function Dashboard() {
  return (
    <div className="flex justify-between items-center border w-[1440px]  ">
      <div className="flex flex-wrap  justify-center items-center">
      {cards.map((i) =>(

<CardItemMol icon={i.icon} title={i.title} titr={i.titr}  />

      ))}
    </div>
    </div>
  )
}

export default Dashboard
