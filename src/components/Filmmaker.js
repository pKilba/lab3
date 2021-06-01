import React from "react";
import '../css/styles.css';
import {Link, useParams} from "react-router-dom";
import {FormControl, InputGroup} from "react-bootstrap";
import useLanguage from "../hooks/Language";
import useJsonDB from "../hooks/JsonDB";
import {useEffect, useState} from "react";
import FilmmakersList from "./FilmmakersList";
import FilmmakerInfo from "./FilmmakerInfo";

function Filmmaker() {
    const {t, getCurrLang} = useLanguage();
    const {id} = useParams();

    const [dbLoaded, dbSearchPoet] = useJsonDB("prevDescription.json");

    const [searchResult, setSearchResult] = useState(null);
    const [query, setQuery] = useState("");
    useEffect(() => {
        if (dbLoaded === true) {
            setSearchResult(dbSearchPoet("name." + getCurrLang(), query));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dbLoaded, query]);
    let search;
    let margin;
    if (id === undefined) {
        search = <div className="w-50 m-auto">
            <nav style={{marginTop: 130 + "px"}}>
                <InputGroup className="mr-4">
                    <FormControl
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder={t("landing.search")}/>
                </InputGroup>
            </nav>
        </div>
        margin = 50
    } else {
        margin = 150
    }

    return (
        <>
            {search}
            <div className="mb-3" style={{marginTop: margin + "px"}}>
                {
                    id === undefined ? dbLoaded === false ?
                        (
                            <h1>Loading...</h1>
                        ) :
                        (
                            <FilmmakersList poets={searchResult}/>
                        ) :
                        (
                            <FilmmakerInfo id={id}/>
                        )
                }
            </div>
        </>
    )
        ;
}

export default Filmmaker;
