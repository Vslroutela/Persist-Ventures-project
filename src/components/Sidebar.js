import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { navs } from "../config/config";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./SidebarNew.css";

// Icon mapping for each category
const iconMap = {
  "Home": "home",
  "General": "newspaper",
  "Business": "briefcase",
  "Sports": "futbol",
  "Science": "flask",
  "Health": "heart",
  "Entertainment": "film",
  "Technology": "microchip"
};

function Sidebar() {
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        {navs.filter(navItem => navItem.nav !== "Payout Calculator").map((navItem) => (
          <LinkContainer to={navItem.page} key={navItem.key}>
            <Nav.Link className="nav-item">
              <i className={`fas fa-${iconMap[navItem.nav]}`}></i>
              <span className="nav-text">{navItem.nav}</span>
            </Nav.Link>
          </LinkContainer>
        ))}
      </Nav>
    </div>
  );
}

export default Sidebar;
