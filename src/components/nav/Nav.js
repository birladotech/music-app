import React from "react";
import {useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUserCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
 
import nav from "./nav.css";
import playMenu from "../../assets/icons/playMenu.png";
import { SidebarContext } from "../../context/SidebarContext";
import { Dropdown} from "react-bootstrap";
export default function Nav() {
  const search = <FontAwesomeIcon icon={faSearch} color="" />;
  const userCog = <FontAwesomeIcon icon={faUserCog} color="" />;
  const signOut = <FontAwesomeIcon icon={faSignOutAlt} color="" />;
  const { toggleChange } = useContext(SidebarContext);

  return (
    <nav className="nav">
      <div>
        <img
          alt=""
          src={playMenu}
          className="play_menu"
          onClick={() => toggleChange()}
        />
        {search}
        <input type="search" placeholder="Recherher..." />

        <label className="select" htmlFor="slct">
          <select id="slct">
            <option value="song" defaultValue>Single</option>
            <option value="album" >Album</option>
            <option value="artist">Artist</option>
          </select>
        </label>
        
      </div>
      <Dropdown className="drop_down">
        <Dropdown.Toggle bg="light" id="dropdown-basic">
          Joberno Joseph
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-2">{userCog} Parametres</Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            {signOut} Se déconnecter
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
}
