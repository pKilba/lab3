import React from "react";
import '../css/styles.css';
import useLanguage from "../hooks/Language";

function AboutSection() {
    const {t} = useLanguage();
    return (
        <section className="page-section bg-danger text-white mt-5"  id="about">
            <div className="container1">
                <h2 className="page-section-heading text-center text-uppercase text-white">Description</h2>
                <div className="divider-custom divider-light">
                </div>
                <div className="row text-center">
                    <div className="col-lg-12"><p className="lead">Famous filmmakers of Belarus</p></div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
