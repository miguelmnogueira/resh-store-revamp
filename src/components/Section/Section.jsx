import React from "react";
import SectionInfo from "./SectionInfo";
import Card from "../Card";

const Section = () => {
    return (
        <div>
            <SectionInfo
                title="BEST SELLERS"
                subtitle="The most picked pieces of our store"
                paragraph="Our company evaluates the best for our customer, so what better way other than to show you our best items!"
            />
            <Card />
        </div>
    );
};

export default Section;
