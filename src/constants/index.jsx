import { BiHomeAlt, BiWrench } from "react-icons/bi";
import { BsBox, BsTruck, BsSim } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { TbBuildingEstate } from "react-icons/tb";
import { FaRegHandshake, FaRegMoneyBillAlt } from "react-icons/fa";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { SlUser } from "react-icons/sl";

export const pages = [
  {
    text: "fitment",
    to: "/fitment",
    icon: <BiWrench size={20} />,
  },
  {
    text: "alloted stocks",
    to: "/alloted_stocks",
    icon: <HiOutlineSquare2Stack size={20} />,
  },
  {
    text: "available stocks",
    to: "/available_stocks",
    icon: <BsBox size={20} />,
  },
  {
    text: "distributor",
    to: "/distributor",
    icon: <BsTruck size={20} />,
  },
  {
    text: "sub distributor",
    to: "/sub_distributor",
    icon: <BsTruck size={20} />,
  },
  {
    text: "dealer",
    to: "/dealer",
    icon: <FaRegHandshake size={20} />,
  },
  {
    text: "sub dealer",
    to: "/sub_dealer",
    icon: <FaRegHandshake size={20} />,
  },
  {
    text: "customer",
    to: "/customer",
    icon: <FiUsers size={20} />,
  },
  {
    text: "employee",
    to: "/employee",
    icon: <SlUser size={20} />,
  },
  {
    text: "sim",
    to: "/sim",
    icon: <BsSim size={20} />,
  },
  {
    text: "state",
    to: "/state",
    icon: <TbBuildingEstate size={20} />,
  },
  {
    text: "orders",
    to: "/orders",
    icon: <BsTruck size={20} />,
  },
  {
    text: "products",
    to: "/products",
    icon: <BsBox size={20} />,
  },
  {
    text: "manual payment",
    to: "/manual_payment",
    icon: <FaRegMoneyBillAlt size={20} />,
  },
];

export const typesOBJ = {
  Admin: 0,
  Dealer: 1,
  Distributor: 2,
  Customer: 3,
  Employee: 4,
  SubDealer: 5,
  SubDistributor: 6,
  Account: ["home", "manual payment"],
  Operational: [
    "home",
    "fitment",
    "available stocks",
    "dealer",
    "distributor",
    "customer",
    "sub distributor",
    "subDealer",
    "sim",
    "state",
  ],
  Production: [
    "home",
    "orders",
    "alloted stocks",
    "available stocks",
    "dealer",
    "distributor",
    "customer",
    "sub distributor",
    "sub dealer",
  ],
};

export const depType = {
  0: "Account",
  1: "Operational",
  2: "Production",
};

export const accessgrant = {
  0: [
    "home",
    "orders",
    "fitment",
    "alloted stocks",
    "customer",
    "available stocks",
    "dealer",
    "distributor",
    "sub dealer",
    "sub distributor",
    "sim",
    "state",
    "manual payment",
    "product",
    "employee",
  ],
  1: [
    "home",
    "orders",
    "fitment",
    "alloted stocks",
    "customer",
    "available stocks",
    "sub dealer",
    "manual payment",
  ],
  2: [
    "home",
    "orders",
    "fitment",
    "alloted stocks",
    "available stocks",
    "dealer",
    "sub distributor",
    "customer",
    "manual payment",
  ],
  3: ["home", "orders"],
  4: [
    "home",
    "orders",
    "fitment",
    "alloted stocks",
    "available stocks",
    "dealer",
    "distributor",
    "customer",
  ],
  5: [
    "home",
    "orders",
    "fitment",
    "available stocks",
    "customer",
    "manual payment",
  ],
  6: [
    "home",
    "orders",
    "fitment",
    "alloted stocks",
    "available stocks",
    "dealer",
    "customer",
    "manual payment",
  ],
};
