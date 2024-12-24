import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const TelegramContext = createContext({});

export const useTelegram = () => useContext(TelegramContext);

export const TelegramProvider = ({ children }) => {
    const [webApp, setWebApp] = useState(null);

    useEffect(() => {
        const app = window.Telegram?.WebApp;
        if (app) {
            app.ready();
            app.expand(); // Разворачивает веб-приложение на весь экран
            // app.setHeaderColor("#20242c");
            // app.setHeaderColor({ color: "#20242c" });
            try {
                app.setHeaderColor("#20242c"); // Устанавливаем цвет шапки

                // Устанавливаем цвет шапки с помощью правильного параметра
            } catch (error) {
                // app.setHeaderColor({ color: "#20242c" });
            }

            setWebApp(app);
        }
    }, []);

    const triggerVibration = (type = 'medium') => {
        if (webApp && webApp.HapticFeedback) {
            webApp.HapticFeedback.impactOccurred(type);
        } else {
            console.log("Haptic feedback is not supported on this device.");
        }
    };

    const value = useMemo(() => {
        return webApp
            ? {
                webApp,
                unsafeData: webApp.initDataUnsafe,
                user: webApp.initDataUnsafe.user,
                triggerVibration, // Добавляем метод вибрации в контекст
            }
            :{};
    }, [webApp]);

    return (
        <TelegramContext.Provider value={value}>
            {children}
        </TelegramContext.Provider>
    );
};
