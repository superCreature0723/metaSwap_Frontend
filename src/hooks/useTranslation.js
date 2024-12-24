import { useState, useEffect } from 'react';

import translations from '../translations'
// Хук для работы с переводами и языком
const useTranslation = () => {
    // Функция для получения языка из localStorage или установки языка по умолчанию
    const getInitialLanguage = () => {
        const savedLanguage = localStorage.getItem('language');
        return savedLanguage || 'en'; // Если язык не сохранен, по умолчанию английский
    };

    const [language, setLanguage] = useState(getInitialLanguage);
    const [translation, setTranslation] = useState(translations[language]);

    // Обновление языка и перевода
    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        setTranslation(translations?.translations[lang]);
        localStorage.setItem('language', lang); // Сохранение выбранного языка в localStorage
    };

    useEffect(() => {
        const initialLanguage = getInitialLanguage();
        setLanguage(initialLanguage);
        console.log(translations?.translations[initialLanguage], 'translations-')
        setTranslation(translations?.translations[initialLanguage]);
    }, []);

    return { language, translation, handleLanguageChange };
};

export default useTranslation;
