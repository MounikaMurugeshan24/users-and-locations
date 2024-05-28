import React from "react";
import './SideBar.css';
import { ROUTES } from "../../constants/routes";
import NavItems from "../navItems/NavItems";

const SideBar = () => {

    return (
        <div className="side-bar">
            <ul>
                {Object.keys(ROUTES).map((key: string) => (
                    <NavItems key={key} path={ROUTES[key].PATH} name={ROUTES[key].NAME} />))
                }
            </ul>
        </div>
    )
}

export default SideBar;