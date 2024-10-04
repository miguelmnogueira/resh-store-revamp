import React from "react";
import s from "../styles/card.module.css";
import { useState } from "react";

const Card = ({ imgURL }) => {
    const [isHover, setIsHover] = useState(false);
    const ImgURLHover = imgURL.replace(".png", "Hover.png");
    return (
        <div
            className={s.mainContainer}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
        >
            <div className={s.imgContainer}>
                <img
                    src={isHover ? ImgURLHover : imgURL}
                    className={s.cardImg}
                />
            </div>
            <div className={s.infoContainer}>
                <h4>Camiseta oversized - cherry</h4>
                <div className={s.subInfoContainer}>
                    <div className={s.priceContainer}>
                        <span className={s.discountedPrice}>149,99</span>
                        <span className={s.price}>106,99</span>
                    </div>
                    <span className={s.moreInfo}>Ou até 6x no cartão</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
