import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function useLanguage() {
    const { t, i18n } = useTranslation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { i18n.changeLanguage(getCurrLang()) }, []);

    function getCurrLang() {
        let lang = localStorage.getItem("lang");
        return lang === null ? "en" : lang;
    }

    function setLang(lang) {
        localStorage.setItem("lang", lang);
        i18n.changeLanguage(lang);
    }

    return { t, getCurrLang, setLang }
}