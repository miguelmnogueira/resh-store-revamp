import React from "react";
import { Search, ShoppingCart, UserRound } from "lucide-react";

import s from "../../styles/Navbar.module.css";
import NavbarSearch from "./NavbarSearch";
import NavbarInfo from "./NavbarInfo";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <NavbarSearch />
            <NavbarInfo />
        </nav>
    );
};

export default Navbar;
