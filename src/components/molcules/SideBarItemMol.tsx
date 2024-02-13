import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  icon: any;
  active: any;
  url: string;
};

function SideBarItemMol({ icon, title, url, active }: Props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };
  const hidden = location.pathname;

  return (
    <div className="flex flex-col gap-2 p-4">
      <div
        onClick={handleClick}
        className="flex justify-start border gap-3 items-center rounded-md bg-white text-2xl "
      >
        <div className="w-[30px]">
          {hidden === url && <img src={active} className="w-full " />}
        </div>
        <img src={icon} alt="" className="size-[25px]" />
        <p>{title}</p>
      </div>
    </div>
  );
}

export default SideBarItemMol;
