import { IoHome, IoJournal, IoList, IoMap, IoWallet } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";

const TABS = [
  {
    link: "/trip-planner",
    icon: <IoMap />,
    title: "Planer",
  },
  {
    link: "/",
    icon: <IoHome />,
    title: "Übersicht",
  },
  {
    link: "/budget-tracker",
    icon: <IoWallet />,
    title: "Budget",
  },
  {
    link: "/journal",
    icon: <IoJournal />,
    title: "Journal",
  },
  {
    link: "/notes",
    icon: <IoList />,
    title: "Notizen",
  },
];

const TabBar = () => {
  const location = useLocation();

  const handleTabClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="md:hidden fixed left-0  pt-4   bg-secondary bg-opacity-80 dark:bg-opacity-60 dark:bg-primary-dark  backdrop-blur-2xl  bottom-0 flex justify-beclassNameeen w-screen">
      {TABS.map((tab, idx) => {
        return (
          <NavLink
            className={`w-full  pb-7 ${
              location.pathname === tab.link ? "text-blue-600" : "text-[#aeaeae] dark:text-[#727272]"
            }`}
            onClick={handleTabClick}
            key={idx}
            to={tab.link}
          >
            <div className="pb-0.5 flex justify-center text-[1.6rem]"> {tab.icon}</div>
            <p className=" text-[0.6rem] text-center">{tab.title}</p>
          </NavLink>
        );
      })}
    </div>
  );
};

export default TabBar;
