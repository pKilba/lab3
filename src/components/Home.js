import React from "react";
import '../css/styles.css';
import AboutSection from "./AboutSection";
import FilmmakerOfTheDay from "./FilmmakerOfTheDay";

function Home() {
    return (
        <div>
            <AboutSection/>
            <FilmmakerOfTheDay/>
        </div>
    );
}

export default Home;
