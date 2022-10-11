import React from "react";
import { useContext } from "react";
import "./aside.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Mic } from "../../assets/icons/mic.svg";
import { ReactComponent as Event } from "../../assets/icons/calendar.svg";
import { ReactComponent as GitHub } from "../../assets/icons/github.svg";
import { ReactComponent as WhatsApp } from "../../assets/icons/whatsapp.svg";
import user from "../../assets/images/v3_0140258.jpg";
import { faHeadphones, faRecordVinyl } from "@fortawesome/free-solid-svg-icons";
import { SidebarContext } from "../../context/SidebarContext";
import { NavLink } from "react-router-dom";

export default function Aside() {
  const headphone = <FontAwesomeIcon icon={faHeadphones} />;
  const recordVinyl = <FontAwesomeIcon icon={faRecordVinyl} />;
  const { toggle } = useContext(SidebarContext);

  return (
    <aside className="aside-container">
      <div className={toggle ? "sidebar sidebar-resize" : "sidebar"}>
        <nav className={toggle ? "sidebar_nav" : "sidebar_nav resize"}>
          <div>
            <NavLink to="/">
              <button>
                {headphone} {toggle && "  BERNO PLAYER"}
              </button>
            </NavLink>
          </div>
          <div>
            <NavLink exact to="/artists">
              <button>
                <Mic className="logo_svg" fill="white" />
                {toggle && " Artiste"}
              </button>{" "}
            </NavLink>
          </div>
          <div>
            <NavLink exact to="/albums">
              <button>
                {recordVinyl} {toggle && " album"}{" "}
              </button>
            </NavLink>
          </div>
          <div>
            <button>
              <Event className="logo_svg" />
              {toggle && " Evénement"}
            </button>
          </div>
          <div>
            <button>
              <GitHub />
              {toggle && " Git Hub"}
            </button>
          </div>
          <div>
            <a href="tel:+50947243086">
              <button>
                <WhatsApp /> {toggle && " WhatSApp"}
              </button>
            </a>
          </div>
          <div>
            <img src={user} alt="" className="user_pic" />
          </div>
        </nav>
      </div>
    </aside>
  );
}
