import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import YoutubeLogo from "../assests/youtube-logo-png-46020.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Header = () => {
  const dispatch = useDispatch();

  function toggleMenuHandler() {
    dispatch(toggleMenu());
  }

  return (
    <div className="head-div">
      <div className="head-section-1">
        <GiHamburgerMenu
          fontSize="1.5rem"
          cursor="pointer"
          onClick={() => toggleMenuHandler()}
        />
        <Link to="/">
          <img src={YoutubeLogo} alt="youtube" width="115" />
        </Link>
        <p className="youtube-in">IN</p>
      </div>

      <div className="head-section-2">
        <input type="text" placeholder="Search" />
        <button>
          <IoSearchOutline fontSize="1.3rem" />
        </button>
      </div>

      <div className="head-section-3">
        <FaUserCircle fontSize="2.2rem" />
      </div>
    </div>
  );
};

export default Header;
