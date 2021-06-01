import React from "react";
import {Carousel, Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import useJsonDB from "../hooks/JsonDB";
import useLanguage from "../hooks/Language";
import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react';
import uuid from "react-uuid";
import '../css/styles.css';

export default function FilmmakerInfo(props) {

    const {getCurrLang} = useLanguage();

    const [allLoaded, setAllLoaded] = useState(false);
    const [poetInfo, setPoetInfo] = useState(null);

    const [shortLoaded, searchShort] = useJsonDB("prevDescription.json");
    const [longLoaded, searchLong] = useJsonDB("fullDescription.json");

    useEffect(() => {
        if (shortLoaded === true && longLoaded === true) {
            let short = searchShort("id", parseInt(props.id), true)[0];
            let long = searchLong("id", parseInt(props.id), true)[0];
            if (short !== undefined && long !== undefined) {
                Object.assign(short, long);
                setPoetInfo(short);
                setAllLoaded(true);
            } else {
                setAllLoaded(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.id, shortLoaded, longLoaded]);

    function getBio() {
        let res = [];
        poetInfo.bio.forEach(b => {
            res.push(
                <TimelineItem key={uuid()} dateText={b.date}>
                    <h3>{b.title[getCurrLang()]}</h3>
                    <p>{b.text[getCurrLang()]}</p>
                </TimelineItem>
            );
        });
        return res;
    }

    function getPhotos() {
        let result = [];
        poetInfo.photos.forEach(ph => {
            result.push(
                <Carousel.Item key={uuid()}>
                    <img style={{ height: "60vh", objectFit: "cover", objectPosition: "top", margin: "auto" }} className="d-block" src={ph} alt="Loading" />
                </Carousel.Item>
            );
        })
        return result;
    }

    return (
        <>
            {
                allLoaded === true ? (
                    <>
                        <div className="container mb-5">
                            <div className="row">
                                <div className="col-md-3" style={{height: "250px"}}>
                                    <img className="w-100 h-100" style={{objectFit: "cover", objectPosition: "top"}}
                                         src={poetInfo.photoUrl} alt="Avatar"/>
                                </div>
                                <div className="col-md-9">
                                    <h3>{poetInfo.name[getCurrLang()]}</h3>
                                    <h4>{poetInfo.dob} - {poetInfo.dod}</h4>
                                    <p>{poetInfo.longDescription[getCurrLang()]}</p>
                                </div>
                            </div>
                        </div>

                        <Container id="photos" className="mb-5">
                            <Carousel style={{ backgroundColor: "black" }}>
                                {getPhotos()}
                            </Carousel>
                        </Container>

                        <div className="container" id="bio">
                            <Timeline lineColor="#ddd">
                                {getBio()}
                            </Timeline>
                        </div>

                        <div id="video" style={{height: "60vh"}} className="container mb-5">
                            <iframe className="w-100 h-100" src={"https://www.youtube.com/embed/" + poetInfo.video}
                                    title="Poet video" allowFullScreen/>
                        </div>

                        <div id="map" style={{height: "60vh"}} className="container mb-5">
                            <iframe className="w-100 h-100"
                                    src={"https://www.google.com/maps/embed?pb=" + poetInfo.location}
                                    title="Poet location" style={{border: 0}} loading="lazy"/>
                        </div>
                    </>
                ) : (
                    <h1>Loading...</h1>
                )
            }
        </>
    );
}