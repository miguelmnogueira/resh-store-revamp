import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card";
import Section from "../components/Section/Section";
import s from "../styles/Home.module.css";

const Home = () => {
    return (
        <div className={s.container}>
            <Navbar className={s.navbar} />
            <Section />
            <Section />
            <Section />
        </div>
    );
};

export default Home;
