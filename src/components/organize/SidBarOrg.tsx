import ProfileMol from "../molcules/ProfileMol"
import SideBarItemMol from "../molcules/SideBarItemMol"

import {routes} from "../../assets/config/sideBarConfig"
function SidBarOrg() {
  return (
    <div className="w-[422px] h-[997px]  bg-slate-100">
      <ProfileMol/>
      {routes.map((i)=>(
      
      <SideBarItemMol icon={i.icon} title={i.title} active={i.active} url={i.url} />
      ))}
    </div>
  )
}

export default SidBarOrg
