import { FaHome } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { TbCubePlus } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import { HiOutlineNewspaper } from "react-icons/hi";

export const clientSidebarData = [
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
