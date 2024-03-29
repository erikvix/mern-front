import { NavLinkBox } from "@/components/NavLinkBox";
import { MdDashboard, MdPerson, MdSettings, MdLogout } from "react-icons/md";

const navLinks = [
  {
    text: "Dashboard",
    pathName: "/dashboard",
    icon: MdDashboard,
  },
  {
    text: "UserList",
    pathName: "/",
    icon: MdPerson,
  },
  {
    text: "Settings",
    pathName: "settings",
    icon: MdSettings,
  },
  {
    text: "Logout",
    pathName: "home",
    icon: MdLogout,
    colorIcon: "#ef4444",
    colorText: "text-red-500 dark:text-red-500",
  },
];

const NavLink = () => (
  <section className="mx-2">
    <div className="md:mt-40 flex flex-col gap-8">
      {navLinks.map((link, index) => (
        <NavLinkBox
          key={index}
          type={link.type}
          pathName={link.pathName}
          icon={link.icon}
          colorIcon={link.colorIcon}
          colorText={link.colorText}
        >
          {link.text}
        </NavLinkBox>
      ))}
    </div>
  </section>
);

export default NavLink;
