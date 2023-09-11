import { GoHomeFill } from "react-icons/go";
import { MdAppShortcut, MdSubscriptions } from "react-icons/md";
import SmallSection from "./SmallSection";
import { useSelector } from "react-redux";
const SideBar = () => {
  const selector = useSelector((state) => state.app.isMenuOpen);

  const data = [
    {
      id: 1,
      icon: <GoHomeFill fontSize="1.65rem" />,
      name: "Home",
    },
    {
      id: 2,
      icon: <MdAppShortcut fontSize="1.65rem" />,
      name: "Shorts",
    },
    {
      id: 3,
      icon: <MdSubscriptions fontSize="1.65rem" />,
      name: "Subscriptions",
    },
    {
      id: 4,
      icon: <GoHomeFill fontSize="1.65rem" />,
      name: "Home",
    },
    {
      id: 5,
      icon: <GoHomeFill fontSize="1.65rem" />,
      name: "Home",
    },
    {
      id: 6,
      icon: <GoHomeFill fontSize="1.65rem" />,
      name: "Home",
    },
    {
      id: 7,
      icon: <MdAppShortcut fontSize="1.65rem" />,
      name: "Shorts",
    },
    {
      id: 8,
      icon: <MdSubscriptions fontSize="1.65rem" />,
      name: "Subscriptions",
    },
    {
      id: 9,
      icon: <GoHomeFill fontSize="1.65rem" />,
      name: "Home",
    },
    {
      id: 10,
      icon: <GoHomeFill fontSize="1.65rem" />,
      name: "Home",
    },
    {
      id: 11,
      icon: <GoHomeFill fontSize="1.65rem" />,
      name: "Home",
    },
    {
      id: 12,
      icon: <MdAppShortcut fontSize="1.65rem" />,
      name: "Shorts",
    },
    {
      id: 13,
      icon: <MdSubscriptions fontSize="1.65rem" />,
      name: "Subscriptions",
    },
    {
      id: 14,
      icon: <GoHomeFill fontSize="1.65rem" />,
      name: "Home",
    },
    {
      id: 15,
      icon: <GoHomeFill fontSize="1.65rem" />,
      name: "Home",
    },
    {
      id: 16,
      icon: <GoHomeFill fontSize="1.65rem" />,
      name: "Home",
    },
    {
      id: 17,
      icon: <MdAppShortcut fontSize="1.65rem" />,
      name: "Shorts",
    },
    {
      id: 18,
      icon: <MdSubscriptions fontSize="1.65rem" />,
      name: "Subscriptions",
    },
    {
      id: 19,
      icon: <GoHomeFill fontSize="1.65rem" />,
      name: "Home",
    },
    {
      id: 20,
      icon: <GoHomeFill fontSize="1.65rem" />,
      name: "Home",
    },
  ];

  return selector ? (
    <div className="sidebar">
      {data.map((sectionData) => {
        return <SmallSection key={sectionData.id} {...sectionData} />;
      })}
    </div>
  ) : null;
};

export default SideBar;
