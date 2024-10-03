import React from "react";
import { ShoppingCart, UserRound } from "lucide-react";
import s from "../../styles/NavbarInfo.module.css";

const NavbarInfo = () => {
    return (
        <div className={s.infoContainer}>
            <div className={s.accountContainer}>
                <UserRound />
                <span>Login</span>
            </div>
            <button>
                <ShoppingCart />
                <span>Cart</span>
            </button>
        </div>
    );
};

export default NavbarInfo;
