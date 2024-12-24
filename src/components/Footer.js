import React from 'react';
import '../assets/css/footer.css'
import LinkHref from "./LinkHref/LinkHref";
import {useTelegram} from "../TelegramContext";

function Footer({page}) {

    const { triggerVibration } = useTelegram();

    const handleVibrate = () => {
        triggerVibration('heavy');
    }

    return (
        <footer>

        </footer>
    );
}

export default Footer;
