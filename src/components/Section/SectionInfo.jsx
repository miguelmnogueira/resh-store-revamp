import React from "react";
import s from "../../styles/SectionInfo.module.css";

const SectionInfo = ({ title, subtitle, paragraph }) => {
    return (
        <div className={s.container}>
            <div className={s.infoContainer}>
                <h3>{title}</h3>
                <span>{subtitle}</span>
            </div>
            <p>{paragraph}</p>
        </div>
    );
};

export default SectionInfo;
