import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import YoutubeLogo from "../assests/youtube-logo-png-46020.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { Youtube_Search_Suggestion_API } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  function toggleMenuHandler() {
    dispatch(toggleMenu());
  }

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const response = await fetch(Youtube_Search_Suggestion_API + searchQuery);
    const jsonData = await response.json();
    setSuggestions(jsonData[1]);
  };

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

      <div>
        <div className="head-section-2">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button>
            <IoSearchOutline fontSize="1.3rem" />
          </button>
        </div>
        {showSuggestions && (
          <div className="search-suggestion-div">
            <ul>
              {suggestions.map((data) => {
                return (
                  <li key={data}>
                    {<IoSearchOutline fontSize="1rem" />}
                    {data}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="head-section-3">
        <FaUserCircle fontSize="2.2rem" />
      </div>
    </div>
  );
};

export default Header;
