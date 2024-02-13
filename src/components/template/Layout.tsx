import HeaderOrg from "../organize/HeaderOrg"
import SidBarOrg from "../organize/SidBarOrg"


function Layout({children} :{children:React.ReactNode} ) {
  return (
    <div className="justify-center flex flex-col items-center pt-40">
    <HeaderOrg/>
    <div className="flex w-[1890px]">

      <SidBarOrg/>
      {children}
    </div>
    </div>
  )
}

export default Layout
