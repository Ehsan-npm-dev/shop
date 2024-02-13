import { useNavigate } from "react-router-dom";

type Props = {
  title: String;
  titr: String;
  icon: any;
  url: string;
  active: any;
};

function CardItemMol({ icon, title, titr, url }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
  };
  return (
   
    <div
      onClick={handleClick}
      className="flex  justify-center mt-10 border border-x-8 rounded-md ml-10 p-2  "
    >
      <div className="flex flex-row w-[550px] p-2 justify-between items-center gap-20">
        <img src={icon} alt="" className="size-14 " />
        <div className="flex flex-col gap-2 justify-revers w-[320px] text-xl font-bold">
          <h3> {title}</h3>
          <p>{titr}</p>
        </div>
      </div>
    </div>
   
  );
}

export default CardItemMol;
