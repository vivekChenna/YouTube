import { GoHomeFill } from "react-icons/go";
import {
  MdAppShortcut,
  MdSubscriptions,
  MdVideoLibrary,
  MdOutlineWatchLater,
} from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { BiSolidVideos } from "react-icons/bi";
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
      icon: <MdVideoLibrary fontSize="1.65rem" />,
      name: "Library",
    },
    {
      id: 5,
      icon: <GrHistory fontSize="1.65rem" />,
      name: "History",
    },
    {
      id: 6,
      icon: <BiSolidVideos fontSize="1.65rem" />,
      name: "Your Videos",
    },
    {
      id: 7,
      icon: <MdOutlineWatchLater fontSize="1.65rem" />,
      name: "Watch Later",
    },
    {
      id: 8,
      icon: <MdSubscriptions fontSize="1.65rem" />,
      name: "Subscriptions",
    },
    {
      id: 9,
      icon: <MdVideoLibrary fontSize="1.65rem" />,
      name: "Library",
    },
    {
      id: 10,
      icon: <GoHomeFill fontSize="1.65rem" />,
      name: "Home",
    },
    {
      id: 11,
      icon: <BiSolidVideos fontSize="1.65rem" />,
      name: "Your Videos",
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
      icon: <BiSolidVideos fontSize="1.65rem" />,
      name: "Your Videos",
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
      icon: <MdVideoLibrary fontSize="1.65rem" />,
      name: "Library",
    },
    {
      id: 19,
      icon: <BiSolidVideos fontSize="1.65rem" />,
      name: "Your Videos",
    },
    {
      id: 20,
      icon: <MdAppShortcut fontSize="1.65rem" />,
      name: "Shorts",
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
