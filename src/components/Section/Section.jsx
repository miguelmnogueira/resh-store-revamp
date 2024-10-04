import React from "react";
import SectionInfo from "./SectionInfo";
import Card from "../Card";
import s from "../../styles/section.module.css";

const Section = () => {
    return (
        <div className={s.sectionContainer}>
            <SectionInfo
                className={s.sectionInfo}
                title="BEST SELLERS"
                subtitle="The most picked pieces of our store"
                paragraph="Our company evaluates the best for our customer, so what better way other than to show you our best items!"
            />
            <div className={s.cardContainer}>
                <Card imgURL="/cherry.png" ImgURLHover="/cherryHover.png" />
                <Card imgURL="/cherry.png" ImgURLHover="/cherryHover.png" />
                <Card imgURL="/cherry.png" ImgURLHover="/cherryHover.png" />
                <Card imgURL="/cherry.png" ImgURLHover="/cherryHover.png" />
            </div>
        </div>
    );
};

export default Section;
