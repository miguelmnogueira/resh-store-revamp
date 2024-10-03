import React from "react";
import s from "../../styles/NavbarSearch.module.css";
import { Search } from "lucide-react";

const NavbarSearch = () => {
    return (
        <div className={s.searchContainer}>
            <input
                type="search"
                name="search"
                id="search"
                placeholder="Search"
            ></input>
            <button>
                <Search color="#ffffff" strokeWidth={1.5} />{" "}
            </button>
        </div>
    );
};

export default NavbarSearch;
