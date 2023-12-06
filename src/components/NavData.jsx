import { FaHome } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { TbCubePlus } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import { HiOutlineNewspaper } from "react-icons/hi";

export const client = [
  {
    title: "Dashboard",
    path: "/client",
    icon: <FaHome />,
    drop: false,
  },
  {
    title: "Services",
    path: "services",
    icon: <MdOutlineMiscellaneousServices />,
    drop: true,
    children: [
      {
        title: "Add",
        path: "add",
        icon: <TbCubePlus />,
      },
    ],
  },
  {
    title: "Orders",
    path: "orders",
    icon: <HiOutlineNewspaper />,
    drop: false,
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <MdLogout />,
  },
];

export const user = [
  {
    title: "Dashboard",
    path: "/user",
    icon: <FaHome />,
    drop: false,
  },
  {
    title: "Explore",
    path: "explore",
    icon: <MdOutlineMiscellaneousServices />,
    drop: false,
  },
  {
    title: "Orders",
    path: "orders",
    icon: <HiOutlineNewspaper />,
    drop: false,
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <MdLogout />,
  },
];
