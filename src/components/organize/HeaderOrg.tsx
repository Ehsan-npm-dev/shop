import logo from "../../assets/logo/Artboard 2 1.png"
import user from "../../assets/icon/user (1) 1.png"
import icon from "../../assets/icon/icons8-cart-64 1.png"
function HeaderOrg() {
  return (
    <div className=" flex flex-row justify-between p-2  border w-[1863px] mr-6 h-[83px]  rounded-md mt-4">
     <img src={logo} alt="Sorme" className="w-[230px]" />
     <div className="flex flex-row justify-center items-center p-4 gap-4">
        <div className="flex flex-row items-center gap-2  border p-3 rounded-md">
        <button className="text-xl">
        Sign In /Sign Up
        </button>
        |
        <img src={user} alt="user" />
        </div>
        <img src={icon} alt="" />
     </div>
    </div>
  )
}

export default HeaderOrg
