import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from '../locale/en.json';
import zh from '../locale/zh-TW.json';

const resources = {
    en: {
        translation: en, 
    }, 
    zh: {
        translation: zh, 
    }, 
};

i18n.use(initReactI18next).init({
    resources, 
    // Switch to this lng if selected lng does not have a translation
    fallbackLng: "en", 
    // Default lng
    lng: "en", 
    interpolation: {
        escapeValue: false, 
    }
});

export default i18n;