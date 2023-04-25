import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-left">
        <button>Movies</button>
        <button>TV Shows</button>
        <button>Documentaries</button>
      </div>
      <div className="header-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-right">
        <button>
          <SearchRoundedIcon />
        </button>
        <button>
          <NotificationsActiveOutlinedIcon />
        </button>
        <button>Sign Up</button>
      </div>
    </div>
  );
}
