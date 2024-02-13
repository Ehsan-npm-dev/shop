import dash from "../../assets/Side/dashboard 1.png";
import hide from "../../assets/logo/3 992746 1.png";
import order from "../../assets/Side/checkout 1.png";
import heart from "../../assets/Side/heart.png";
import wallet from "../../assets/Side/wallet.png";
import support from "../../assets/Side/customer-support 1.png";
import setting from "../../assets/Side/setting 1.png";
import buy from "../../assets/cards/checkout 1 (1).png"
import book from "../../assets/cards/customer-support 1 (1).png"
import vibe from "../../assets/cards/heart (1).png"
import set from "../../assets/cards/wallet (1).png"
import pic from "../../assets/fav/0076214_-30-_250.png"
import like from "../../assets/fav/heart 1.png"
import view from "../../assets/fav/view 2.png"
export const routes = [
  {
    title: "Dashboard",
    icon: dash,
    url: "/dashboard",
    active: hide,
  },
  {
    title: "Order",
    icon: order,
    url: "/order",
    active: hide,
  },
  {
    title: "Favorite",
    icon: heart,
    url: "/favorite",
    active: hide,
  },
  {
    title: "Wallet",
    icon: wallet,
    url: "/wallet",
    active: hide,
  },
  {
    title: "Support",
    icon: support,
    url: "/support",
    active: hide,
  },
  {
    title: "Setting",
    icon: setting,
    url: "/setting",
    active: hide,
  },
];


export const cards = [

{
icon :buy,
title : "20 Order",
titr : "Active Orders"

},
{
  icon :book,
  title : "20 transaction",
  titr : "Bank transactions"
  
  },
  {
    icon :vibe,
    title : "Favorites to order",
    titr : "20 Favorites"
    
    },{
      icon :set,
      title : "20 Active",
      titr : "Support tickets"
      
      },


  
]

export const favorite = [

  {
    img:pic,
    title:"Estee Lauder double" ,
     title2: "wear powder cream ",
    icon: <img src={like}/>,
    pic: <img src={view}/>
  },
  {
    img:pic,
    title:"Estee Lauder double" ,
     title2: "wear powder cream ",
    icon: <img src={like}/>,
    pic: <img src={view}/>
  },
  {
    img:pic,
    title:"Estee Lauder double" ,
     title2: "wear powder cream ",
    icon: <img src={like}/>,
    pic: <img src={view}/>
  },
  {
    img:pic,
    title:"Estee Lauder double" ,
     title2: "wear powder cream ",
    icon: <img src={like}/>,
    pic: <img src={view}/>
  },
]