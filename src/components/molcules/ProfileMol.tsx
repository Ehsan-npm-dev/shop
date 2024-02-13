import img from "../../assets/Side/Ellipse 2.png"

function ProfileMol() {
  return (
    <div className="flex flex-col items-center pt-4 gap-1 ">
      <img src={img} alt="img"className="size-[100px]" />
      <h3 className="text-[24px]">Hardy Oppenheimer</h3>
      <p className="text-[#777777] text-[20px]">Hardy.Oppenh@gmail.com</p>
    </div>
  )
}

export default ProfileMol
