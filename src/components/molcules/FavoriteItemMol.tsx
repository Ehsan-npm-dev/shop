import { useNavigate } from "react-router-dom";
type Props = {
  img: any;
  title: String;
  icon: any;
  pic: any;
  url: string;
  title2:string
};

function FavoriteItemMol({ img , title,title2 ,icon, pic, url }: Props) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(url);
  };

  return (
    <div onClick={clickHandler} className="flex border p-2 bg-[#FFF0F3] w-[490px] rounded-lg">
      <div className="flex flex-row justify-center">
        <img src={img} alt="" className="border size-30 rounded-md" />
        <div className="flex flex-col items-center justify-center p-2 text-xl ">
          <h4>{title}</h4>
          <h4>{title2}</h4>
        </div>
        <div className="flex flex-col justify-between ">
          {icon}
          {pic}
        </div>
      </div>
    </div>
  );
}

export default FavoriteItemMol;
