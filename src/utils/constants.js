import {
    ChIcon,
    DeIcon,
    EnIcon,
    EsIcon,
    FrIcon,
    ItIcon,
    KazakhIcon, LngArrow,
    PortIcon,
    RuIcon, TurqIcon,
    UkIcon,
    UzIcon
} from "../assets/svg/LanguageIcons";

export const LANGUAGES = [
    { value: 'en', label: 'English', icon: <EnIcon/> },
    { value: 'es', label: 'Español', icon: <EsIcon/> },
    { value: 'fr', label: 'Français', icon: <FrIcon/> },
    { value: 'de', label: 'Deutsch', icon: <DeIcon/> },
    { value: 'ch', label: '中文', icon: <ChIcon/> },
    { value: 'it', label: 'Italiano', icon:<ItIcon/> },
    { value: 'ru', label: 'Русский', icon: <RuIcon/> },
    { value: 'pt', label: 'Português', icon:<PortIcon/> },
    { value: 'uk', label: 'Ukraine', icon: <UkIcon/> },
    { value: 'uz', label: 'Uzbekistan', icon: <UzIcon/>},
    { value: 'kz', label: 'Kazakhstan', icon: <KazakhIcon/>},
    { value: 'tr', label: 'Turkey', icon: <TurqIcon/>},
];

export const BACKEND_URL = process.env."http://localhost:4000/api/v1";
