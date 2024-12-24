
export const FarmIcon = ({active}) => {

    if (active) {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.91 10.7199H14.82V3.5199C14.82 1.8399 13.91 1.4999 12.8 2.7599L12 3.6699L5.23001 11.3699C4.30001 12.4199 4.69001 13.2799 6.09001 13.2799H9.18001V20.4799C9.18001 22.1599 10.09 22.4999 11.2 21.2399L12 20.3299L18.77 12.6299C19.7 11.5799 19.31 10.7199 17.91 10.7199Z"
                    fill="white"/>
            </svg>
        )
    } else {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.08998 13.2799H9.17998V20.4799C9.17998 22.1599 10.09 22.4999 11.2 21.2399L18.77 12.6399C19.7 11.5899 19.31 10.7199 17.9 10.7199H14.81V3.5199C14.81 1.8399 13.9 1.4999 12.79 2.7599L5.21998 11.3599C4.29998 12.4199 4.68998 13.2799 6.08998 13.2799Z"
                    stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
        )
    }
}



export const SkillsIcon = ({active}) => {

    if (active) {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19.08 15.7201C18.49 12.1901 15.1 9.32007 11.52 9.32007C7.63003 9.32007 4.21003 12.4701 3.88003 16.3501C3.75003 17.8501 4.23003 19.2701 5.22003 20.3401C6.20003 21.4101 7.58003 22.0001 9.08003 22.0001H13.76C15.45 22.0001 16.93 21.3401 17.94 20.1501C18.95 18.9601 19.35 17.3801 19.08 15.7201Z"
                    fill="white"/>
                <path
                    d="M10.28 7.86C11.8982 7.86 13.21 6.54819 13.21 4.93C13.21 3.31181 11.8982 2 10.28 2C8.66178 2 7.34998 3.31181 7.34998 4.93C7.34998 6.54819 8.66178 7.86 10.28 7.86Z"
                    fill="white"/>
                <path
                    d="M16.94 9.0299C18.2876 9.0299 19.38 7.93748 19.38 6.5899C19.38 5.24233 18.2876 4.1499 16.94 4.1499C15.5924 4.1499 14.5 5.24233 14.5 6.5899C14.5 7.93748 15.5924 9.0299 16.94 9.0299Z"
                    fill="white"/>
                <path
                    d="M20.55 12.93C21.6269 12.93 22.5 12.057 22.5 10.98C22.5 9.90307 21.6269 9.03003 20.55 9.03003C19.473 9.03003 18.6 9.90307 18.6 10.98C18.6 12.057 19.473 12.93 20.55 12.93Z"
                    fill="white"/>
                <path
                    d="M3.94 10.9801C5.28757 10.9801 6.38 9.88767 6.38 8.5401C6.38 7.19252 5.28757 6.1001 3.94 6.1001C2.59243 6.1001 1.5 7.19252 1.5 8.5401C1.5 9.88767 2.59243 10.9801 3.94 10.9801Z"
                    fill="white"/>
            </svg>


        )
    } else {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.2">
                    <path
                        d="M4.41003 16.75C4.17003 19.64 6.35003 22 9.25003 22H14.04C17.3 22 19.54 19.37 19 16.15C18.43 12.77 15.17 10 11.74 10C8.02003 10 4.72003 13.04 4.41003 16.75Z"
                        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M10.47 7.5C11.8507 7.5 12.97 6.38071 12.97 5C12.97 3.61929 11.8507 2.5 10.47 2.5C9.08926 2.5 7.96997 3.61929 7.96997 5C7.96997 6.38071 9.08926 7.5 10.47 7.5Z"
                        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M17.3 8.69995C18.4046 8.69995 19.3 7.80452 19.3 6.69995C19.3 5.59538 18.4046 4.69995 17.3 4.69995C16.1955 4.69995 15.3 5.59538 15.3 6.69995C15.3 7.80452 16.1955 8.69995 17.3 8.69995Z"
                        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M21 12.7C21.8284 12.7 22.5 12.0284 22.5 11.2C22.5 10.3715 21.8284 9.69995 21 9.69995C20.1716 9.69995 19.5 10.3715 19.5 11.2C19.5 12.0284 20.1716 12.7 21 12.7Z"
                        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M3.96997 10.7C5.07454 10.7 5.96997 9.80452 5.96997 8.69995C5.96997 7.59538 5.07454 6.69995 3.96997 6.69995C2.8654 6.69995 1.96997 7.59538 1.96997 8.69995C1.96997 9.80452 2.8654 10.7 3.96997 10.7Z"
                        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
            </svg>


        )
    }
}


export const RefferalsIcon = ({active}) => {

    if (active) {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M20.36 12.7301C19.99 12.7301 19.68 12.4501 19.64 12.0801C19.4 9.88007 18.22 7.90007 16.4 6.64007C16.07 6.41007 15.99 5.96007 16.22 5.63007C16.45 5.30007 16.9 5.22007 17.23 5.45007C19.4 6.96007 20.8 9.32007 21.09 11.9301C21.13 12.3301 20.84 12.6901 20.44 12.7301C20.41 12.7301 20.39 12.7301 20.36 12.7301Z"
                    fill="white"/>
                <path
                    d="M3.74004 12.78C3.72004 12.78 3.69004 12.78 3.67004 12.78C3.27004 12.74 2.98004 12.38 3.02004 11.98C3.29004 9.36996 4.67004 7.00996 6.82004 5.48996C7.14004 5.25996 7.60004 5.33996 7.83004 5.65996C8.06004 5.98996 7.98004 6.43996 7.66004 6.66996C5.86004 7.94996 4.69004 9.92996 4.47004 12.12C4.43004 12.5 4.11004 12.78 3.74004 12.78Z"
                    fill="white"/>
                <path
                    d="M15.99 21.1001C14.76 21.6901 13.44 21.9901 12.06 21.9901C10.62 21.9901 9.24998 21.6701 7.96998 21.0201C7.60998 20.8501 7.46998 20.4101 7.64998 20.0501C7.81998 19.6901 8.25998 19.5501 8.61998 19.7201C9.24998 20.0401 9.91998 20.2601 10.6 20.3901C11.52 20.5701 12.46 20.5801 13.38 20.4201C14.06 20.3001 14.73 20.0901 15.35 19.7901C15.72 19.6201 16.16 19.7601 16.32 20.1301C16.5 20.4901 16.36 20.9301 15.99 21.1001Z"
                    fill="white"/>
                <path
                    d="M12.05 2.01001C10.5 2.01001 9.22998 3.27001 9.22998 4.83001C9.22998 6.39001 10.49 7.65001 12.05 7.65001C13.61 7.65001 14.87 6.39001 14.87 4.83001C14.87 3.27001 13.61 2.01001 12.05 2.01001Z"
                    fill="white"/>
                <path
                    d="M5.04998 13.8701C3.49998 13.8701 2.22998 15.1301 2.22998 16.6901C2.22998 18.2501 3.48998 19.5101 5.04998 19.5101C6.60998 19.5101 7.86998 18.2501 7.86998 16.6901C7.86998 15.1301 6.59998 13.8701 5.04998 13.8701Z"
                    fill="white"/>
                <path
                    d="M18.95 13.8701C17.4 13.8701 16.13 15.1301 16.13 16.6901C16.13 18.2501 17.39 19.5101 18.95 19.5101C20.51 19.5101 21.77 18.2501 21.77 16.6901C21.77 15.1301 20.51 13.8701 18.95 13.8701Z"
                    fill="white"/>
            </svg>

        )
    } else {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.96 6.16992C18.96 7.55992 20.34 9.76992 20.62 12.3199" stroke="white" stroke-opacity="0.2"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.48999 12.37C3.74999 9.82997 5.10999 7.61997 7.08999 6.21997" stroke="white"
                      stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                    d="M8.19 20.9399C9.35 21.5299 10.67 21.8599 12.06 21.8599C13.4 21.8599 14.66 21.5599 15.79 21.0099"
                    stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
                <path
                    d="M12.06 7.69989C13.5954 7.69989 14.84 6.45524 14.84 4.91989C14.84 3.38454 13.5954 2.13989 12.06 2.13989C10.5247 2.13989 9.28003 3.38454 9.28003 4.91989C9.28003 6.45524 10.5247 7.69989 12.06 7.69989Z"
                    stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
                <path
                    d="M4.82999 19.9201C6.36534 19.9201 7.60999 18.6755 7.60999 17.1401C7.60999 15.6048 6.36534 14.3601 4.82999 14.3601C3.29464 14.3601 2.04999 15.6048 2.04999 17.1401C2.04999 18.6755 3.29464 19.9201 4.82999 19.9201Z"
                    stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
                <path
                    d="M19.17 19.9201C20.7054 19.9201 21.95 18.6755 21.95 17.1401C21.95 15.6048 20.7054 14.3601 19.17 14.3601C17.6347 14.3601 16.39 15.6048 16.39 17.1401C16.39 18.6755 17.6347 19.9201 19.17 19.9201Z"
                    stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>

        )
    }
}



export const TasksIcon = ({active}) => {

    if (active) {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 19.83 4.17 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.97 14.9L7.72 17.15C7.57 17.3 7.38 17.37 7.19 17.37C7 17.37 6.8 17.3 6.66 17.15L5.91 16.4C5.61 16.11 5.61 15.63 5.91 15.34C6.2 15.05 6.67 15.05 6.97 15.34L7.19 15.56L8.91 13.84C9.2 13.55 9.67 13.55 9.97 13.84C10.26 14.13 10.26 14.61 9.97 14.9ZM9.97 7.9L7.72 10.15C7.57 10.3 7.38 10.37 7.19 10.37C7 10.37 6.8 10.3 6.66 10.15L5.91 9.4C5.61 9.11 5.61 8.63 5.91 8.34C6.2 8.05 6.67 8.05 6.97 8.34L7.19 8.56L8.91 6.84C9.2 6.55 9.67 6.55 9.97 6.84C10.26 7.13 10.26 7.61 9.97 7.9ZM17.56 16.62H12.31C11.9 16.62 11.56 16.28 11.56 15.87C11.56 15.46 11.9 15.12 12.31 15.12H17.56C17.98 15.12 18.31 15.46 18.31 15.87C18.31 16.28 17.98 16.62 17.56 16.62ZM17.56 9.62H12.31C11.9 9.62 11.56 9.28 11.56 8.87C11.56 8.46 11.9 8.12 12.31 8.12H17.56C17.98 8.12 18.31 8.46 18.31 8.87C18.31 9.28 17.98 9.62 17.56 9.62Z"
                    fill="white"/>
            </svg>

        )
    } else {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.37 8.87988H17.62" stroke="white" stroke-opacity="0.2" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.38 8.87988L7.13 9.62988L9.38 7.37988" stroke="white" stroke-opacity="0.2" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.37 15.8799H17.62" stroke="white" stroke-opacity="0.2" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.38 15.8799L7.13 16.6299L9.38 14.3799" stroke="white" stroke-opacity="0.2" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="white"
                      stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        )
    }
}


export const AirdropIcon = ({active}) => {

    if (active) {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 2C6.5 2 2 6.58 2 12.18V20.07C2 21.33 2.75 21.67 3.67 20.83L4.67 19.92C5.04 19.58 5.64 19.58 6.01 19.92L8.01 21.75C8.38 22.09 8.98 22.09 9.35 21.75L11.35 19.92C11.72 19.58 12.32 19.58 12.69 19.92L14.69 21.75C15.06 22.09 15.66 22.09 16.03 21.75L18.03 19.92C18.4 19.58 19 19.58 19.37 19.92L20.37 20.83C21.29 21.67 22.04 21.33 22.04 20.07V12.18C22 6.58 17.5 2 12 2ZM16.45 14.6C15.14 15.58 13.57 16.07 12 16.07C10.43 16.07 8.86 15.58 7.55 14.6C7.22 14.35 7.15 13.88 7.4 13.55C7.65 13.22 8.12 13.15 8.45 13.4C10.54 14.97 13.46 14.97 15.55 13.4C15.88 13.15 16.35 13.22 16.6 13.55C16.85 13.88 16.78 14.35 16.45 14.6Z"
                    fill="white"/>
            </svg>
        )
    } else {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M22 20.07V12.18C22 6.57999 17.5 2 12 2C6.5 2 2 6.57999 2 12.18V20.07C2 21.33 2.74998 21.67 3.66998 20.83L4.66998 19.92C5.03998 19.58 5.64001 19.58 6.01001 19.92L8.01001 21.75C8.38001 22.09 8.97998 22.09 9.34998 21.75L11.35 19.92C11.72 19.58 12.32 19.58 12.69 19.92L14.69 21.75C15.06 22.09 15.66 22.09 16.03 21.75L18.03 19.92C18.4 19.58 19 19.58 19.37 19.92L20.37 20.83C21.25 21.67 22 21.33 22 20.07Z"
                    stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
                <path d="M8 14C10.37 15.78 13.63 15.78 16 14" stroke="white" stroke-opacity="0.2" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        )
    }
}

export const Question1Icon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
        >
            <circle cx="8" cy="8" r="8" fill="#fff"></circle>
            <path
                fill="#4952CF"
                d="M7.34 8.299c.779-.344 1.335-.668 1.666-.972.34-.313.51-.68.51-1.102 0-.429-.152-.737-.455-.925-.296-.195-.675-.293-1.137-.293-.656 0-1.37.188-2.143.563L5.5 4.632C6.359 4.212 7.192 4 8 4c.743 0 1.346.184 1.807.55.462.368.693.902.693 1.605 0 .586-.188 1.101-.563 1.546-.375.438-.909.793-1.601 1.066l-.044 1.066h-.92L7.34 8.3zm-.14 3.033a.68.68 0 01.172-.48.625.625 0 01.466-.187.59.59 0 01.454.187.68.68 0 01.173.48.696.696 0 01-.173.492.61.61 0 01-.454.176.625.625 0 01-.466-.187.68.68 0 01-.173-.48z"
            ></path>
        </svg>
    )
}

export const BrainIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="35"
            height="26"
            fill="none"
            viewBox="0 0 35 26"
        >
            <path fill="url(#pattern0_67_34651)" d="M4 2H33V26H4z"></path>
            <g filter="url(#filter0_f_67_34651)" opacity="0.5">
                <ellipse
                    cx="7.33"
                    cy="10.872"
                    fill="#fff"
                    rx="2.266"
                    ry="1.098"
                    transform="rotate(-30 7.33 10.872)"
                ></ellipse>
            </g>
            <g filter="url(#filter1_f_67_34651)" opacity="0.5">
                <ellipse
                    cx="28.765"
                    cy="14.569"
                    fill="#fff"
                    rx="2.266"
                    ry="1.098"
                    transform="rotate(-120 28.765 14.57)"
                ></ellipse>
            </g>
            <g filter="url(#filter2_f_67_34651)" opacity="0.5">
                <ellipse
                    cx="23.6"
                    cy="11.3"
                    fill="#fff"
                    rx="2.266"
                    ry="1.098"
                    transform="rotate(-60 23.6 11.3)"
                ></ellipse>
            </g>
            <g filter="url(#filter3_f_67_34651)" opacity="0.5">
                <ellipse
                    cx="16.572"
                    cy="7.307"
                    fill="#fff"
                    rx="2.266"
                    ry="1.098"
                    transform="rotate(-75 16.572 7.307)"
                ></ellipse>
            </g>
            <defs>
                <pattern
                    id="pattern0_67_34651"
                    width="1"
                    height="1"
                    patternContentUnits="objectBoundingBox"
                >
                    <use
                        transform="matrix(.00195 0 0 .00236 -.017 -.083)"
                        xlinkHref="#image0_67_34651"
                    ></use>
                </pattern>
                <filter
                    id="filter0_f_67_34651"
                    width="13.077"
                    height="11.959"
                    x="0.792"
                    y="4.893"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_67_34651"
                        stdDeviation="2.25"
                    ></feGaussianBlur>
                </filter>
                <filter
                    id="filter1_f_67_34651"
                    width="11.959"
                    height="13.077"
                    x="22.786"
                    y="8.031"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_67_34651"
                        stdDeviation="2.25"
                    ></feGaussianBlur>
                </filter>
                <filter
                    id="filter2_f_67_34651"
                    width="11.959"
                    height="13.077"
                    x="17.62"
                    y="4.761"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_67_34651"
                        stdDeviation="2.25"
                    ></feGaussianBlur>
                </filter>
                <filter
                    id="filter3_f_67_34651"
                    width="11.425"
                    height="13.416"
                    x="10.859"
                    y="0.599"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_67_34651"
                        stdDeviation="2.25"
                    ></feGaussianBlur>
                </filter>
                <image
                    id="image0_67_34651"
                    width="512"
                    height="512"
                    xlinkHref="data:image/png;base64,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"
                ></image>
            </defs>
        </svg>
    )
}


export const LapkaIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="26"
            height="30"
            fill="none"
            viewBox="0 0 26 30"
            {...props}
        >
            <path fill="url(#pattern0_67_34670)" d="M1 0H26V30H1z"></path>
            <g filter="url(#filter0_f_67_34670)" opacity="0.8">
                <ellipse cx="13.5" cy="18" fill="#fff" rx="4.5" ry="2"></ellipse>
            </g>
            <g filter="url(#filter1_f_67_34670)">
                <ellipse
                    cx="10.5"
                    cy="7"
                    fill="#fff"
                    rx="1.5"
                    ry="1"
                    transform="rotate(90 10.5 7)"
                ></ellipse>
            </g>
            <g filter="url(#filter2_f_67_34670)">
                <ellipse
                    cx="16"
                    cy="8.5"
                    fill="#fff"
                    rx="1.5"
                    ry="1"
                    transform="rotate(90 16 8.5)"
                ></ellipse>
            </g>
            <g filter="url(#filter3_f_67_34670)">
                <ellipse
                    cx="20"
                    cy="12.5"
                    fill="#fff"
                    rx="1.5"
                    ry="1"
                    transform="rotate(90 20 12.5)"
                ></ellipse>
            </g>
            <g filter="url(#filter4_f_67_34670)">
                <ellipse
                    cx="6"
                    cy="12.5"
                    fill="#fff"
                    rx="1.5"
                    ry="1"
                    transform="rotate(90 6 12.5)"
                ></ellipse>
            </g>
            <defs>
                <pattern
                    id="pattern0_67_34670"
                    width="1"
                    height="1"
                    patternContentUnits="objectBoundingBox"
                >
                    <use
                        transform="matrix(.00266 0 0 .0022 -.18 -.175)"
                        xlinkHref="#image0_67_34670"
                    ></use>
                </pattern>
                <filter
                    id="filter0_f_67_34670"
                    width="18"
                    height="13"
                    x="4.5"
                    y="11.5"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_67_34670"
                        stdDeviation="2.25"
                    ></feGaussianBlur>
                </filter>
                <filter
                    id="filter1_f_67_34670"
                    width="11"
                    height="12"
                    x="5"
                    y="1"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_67_34670"
                        stdDeviation="2.25"
                    ></feGaussianBlur>
                </filter>
                <filter
                    id="filter2_f_67_34670"
                    width="11"
                    height="12"
                    x="10.5"
                    y="2.5"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_67_34670"
                        stdDeviation="2.25"
                    ></feGaussianBlur>
                </filter>
                <filter
                    id="filter3_f_67_34670"
                    width="11"
                    height="12"
                    x="14.5"
                    y="6.5"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_67_34670"
                        stdDeviation="2.25"
                    ></feGaussianBlur>
                </filter>
                <filter
                    id="filter4_f_67_34670"
                    width="11"
                    height="12"
                    x="0.5"
                    y="6.5"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_67_34670"
                        stdDeviation="2.25"
                    ></feGaussianBlur>
                </filter>
                <image
                    id="image0_67_34670"
                    width="512"
                    height="512"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJzs3Xd0VNX2wPFveoGEGggQQglNCGDoIaFXlSIgRRFRQCwgKCoPu+h7P0GxYgFEQERUitIVpRs6CIbeIRCapBBIIe3+/hh9z5J7ZiaZuXMn2Z+1slzLczKzMyT37nvKPiCEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEMIiHqwMQws34ARWB0r9/lSugTzpwHUj7/b83DItOCCFsJAmAEP9UHmgI3Pb7V10gDKgKVCrE690EEoALwHngKHAQOAKcc0C8QghhN0kAREnnDUQB0UAboC1Qw8D3vw7sAHb+/t9tv/8/IYRwKkkARElUFegJ3AF0Bcq6Npy/yMWSDKz9/WsPkO/SiFzLBwgFwoHK/HX6JbCA/jf+9JUEXMQy8nIF0AyIVwi3IQmAKCmqAIOAe4HWLo7FHonAUmAxltGB4poM+AHNgCb8b/qlAVAN8HTA62djmYY5BBz+/b/7sEzHFNfPVAghSiw/LDf8dVierDU3/zoPvA7UcuSH5CJlgf7A+1imPm7hms80BfgeeAXoiGXEQQghhJuqCbzB/4Z9i9tXHvAjlhuoI56OjdIMeA3LDd+sCdl1LCMuo7BMOQhRbMkUgChOIoHngMGAl7PeJDQ0lNKlS1OmTBlKly6Nj89fHxpv3rxJSkrKf79ycnKcFQrASeBdYB6Q4cw3KqQWWKZe7sH9Ri7ygA3AV8B3QKprwxHCsSQBEMVBM+AloC8O+J328PCgTp06NGrUiAYNGtCwYUNq165NWFgYVapUwdfX167Xu3LlCufOnePcuXOcOXOG+Ph4Dhw4wJEjRxyZHFwD3gamY6lD4EoVgfuBkViSsuLgFpaRgY+BrS6ORQghSryawJdYFnEVetjXx8dH69Chg/biiy9qq1ev1pKSkjQjZGdna7t27dLeeecd7e6779ZCQkIcMYR9GXgS8HfqJ1+w5lj+PVw1n2/U16/AI0CAYz42IVxDRgCEOyoDvAg8gWWhn90qV65Mnz596NmzJ127diU4ONihARZGfn4+e/bsYdWqVaxatYr9+/ejaVphX+4c8CyW3QPO5AHcBTyNZRGdw5UvX54aNWpQvXp1ypYt+9+vwMB/7gJMTU0lIyOD69evc/HiRRITE7lw4QJpaWnOCO0y8A4wA6n2KNyQJADC3dyDZeV4VXu/MTg4mH79+nHvvffStWtXvLyctkzAIc6cOcOXX37JwoULOXLkSGFfZhMwHoh3WGD/0wuYjGUKpsgqVqxI8+bNadq0KZGRkTRu3JiIiAiCgoKK/NpJSUkcPnz4v1+7d+/ml19+4datWw6InGQs6zDexfXTL0IIUeyEAyspxJBts2bNtE8//VS7efOmIUP7zrBnzx5t1KhRWmBgYGGGrHOAKThuyLoLlmJFRRpKDwkJ0YYOHarNnDlTO3TokJafn2/oZ5qVlaVt3bpVmzp1qtapUyfN19e3qFMDiVjWPZg7sxRCCDfyAJbtWTZfjD09PbV77rlH27Fjh6E3FWdLTk7W3n77ba1mzZqFuUEdA2KL8O9QB1hWiPf971fjxo21l156SduxY4eWl5fn6o/zL9LS0rRvv/1WGzZsmBYUFFSURCAe6FCEz1kIIUq88sAi7Lj4ent7a8OGDdMOHz7s6vuJU2VnZ2vz5s3T6tevb+/NKQ+YBtizlSEQmApk2fleGqCFh4dr//rXv7T4+HhXf2w2y8jI0BYvXqz17dtX8/b2LkwSkA989vvvsBBCCDu0xVLD3eaL7t13360dPXrU1fcOQ+Xl5WkLFy7Uateube8Nag+WUw6t6QactvO1NU9PT+3OO+/UVq9ebbonfXudP39ee/HFF7XQ0NDCJAJXsFSjFEIIYYPHsWMrWcuWLbUtW7a4+j7hUrdu3dLefvttrXz58vbcnNKAoTr/BuWwFBey64YXGBiojR8/Xjt16pSrPxKHu3XrljZnzhytXr16hUkEFmKuQ6eEEMJU/LHjphMcHKxNnz7d7Z8wHSkpKUkbPXq05uHhYc/N6W3+unCtPZaDc2x+jTJlymjPP/+8dvXqVVd/BE6Xm5urffXVV1rDhg3tTQLO/v7ZCiGE+JMKQBw2Xkzvvvtu7cKFC66+F5hWXFycFhkZac/N6UegEpbDhmyu0+/n56c9/fTThhVPMpPc3Fxt5syZ9k4N5AKTkC3YQggBWGrEH8HGp/558+a5+trvFrKzs7WXXnrJnkVsNi/y8/Dw0O6//37t7Nmzrv4xXe7GjRvaCy+8YO82wiVA0QscCCGEG4sCLmHDRTMmJkY7ffq0q6/3bmf79u1anTp17B2u1v2KjIzUfv75Z1f/WKZz+PBhrV27dvZ8loeACOf9aQkhhHm1wFJFzerFcsKECVpOTo6rr/Fu68aNG9qwYcOKdOMPDAzUpkyZomVnZ7v6xzGt/Px8bebMmVrp0qVt/VyvAC2d+2cmhBDm0hxIwsoF0t/fX4b8HWjmzJmFqnjXsmVL7ciRI64O322cOXNGi4mJsfXzvYmlrLIQQhR7rbCcra68MFarVk3bv3+/q6/lxc62bdu0qlWr2nRz8vb21l599VUZfSmEnJwc7cUXX9Q8PT1t+axzsByhLIQQxVZdLMOeygtio0aNtHPnzrn6Gl5sJSYmalFRUcp/g6pVq2pxcXGuDtXtrVmzRitXrpwtSUAe8KBBf4dCCGGo6tiwv7xjx45aSkqKq6/bxd7169e1bt266f4bXL582dUhFhvHjx/XGjVqZGsSMMK4P0khhHC+8lhWPSsvgN27d9cyMjJcfb0uMbKzs7Xnn39e8/Pz0wCtdOnS2uuvvy5D/k5w/fp1rWvXrrYmAcOM/fMUQgjn8AZ+wsqF74477tAyMzNdfZ0ukbKysrTjx49rt27dcnUoxdqtW7e0oUOH2pIEZAN3GPx3KkoYObdaGOEd4D5Vhx49erBs2TL8/f0NCkn8mbe3NxUqVMDLSy4JzuTl5UW/fv24efMm27dvV3YF7gbWA4mGBCdKHPlrF842Avg/VYc2bdqwevVqAgICDApJCNfx8PCge/fuZGVlsXXrVlVXXyxJwLdAiiHBiRJFEgDhTI2B7wAfvQ4NGzbkp59+okyZMsZFJYQJdO3alfz8fLZs2aLqFgh0BxZgOSFTCIeRBEA4S2lgHRCq1yE0NJTNmzcTGqrbRYhirVOnTty4ccPadEBFoAGwGMv6ACEcQhIA4SyzgC56jX5+fqxZs4bIyEgDQxLCfLp3786pU6eIj49XdWvw+383OT8iUVLIkZTCGe4FFqo6fPbZZ4wYIdudhQDIycmhd+/erF27VtUtH+gGbDAmKlHcSQIgHK0Slv3+FfU6PPbYY3z88cfGRSSEG7hx4wbR0dEcOnRI1e0i0BS4ZkxUojiTBEA42jfAIL3GyMhIdu3aJSv+hSjA2bNnadmyJdeuKe/v3wN3IesBRBF5ujoAUaz0RXHzL1WqFIsWLZKbvxA6atasyZdffmmtHsMdwMMGhSSKMVkEKBylFLAGCNbr8NFHH9GjRw/jIhLCDUVERACwadMmVbf2wBfADedHJIormQIQjvIa8JJeY+fOnVm3bh0eHvIrJ4Q1+fn5dOvWjQ0blOv91mCZChCiUORqLByhBnAEKHBsv1SpUhw4cIBatWoZG5UQbuzChQs0bdqU5ORkVbd7ga8NCkkUM7IGQDjCVHRu/gD/+c9/5OYvhJ3CwsJs2S0zDUvRLSHsJiMAoqhigJ/R+V2KjIxk3759eHt7GxuVE+Tl5XH06FF++eUX4uPjuXr1KsnJySQlJZGVlYWfnx+lS5emTJkyVK5cmcjISG677TYiIyOpWFF3V6QQSn379mXFihWqLv8BXjQoHFGMSAIgimo90Fmvce3atXTv3t3AcBzr4sWLfPvtt3z77bfs3LmTjIyMQr1OZGQkd955J3fccQcxMTH4+OgejyDEX1y6dIlGjRqRkqJ7HlAW0BA4Y1xUQoiSLgbFmeZ9+vRx9fHrhZKdna198cUXWkxMjObp6WnL2e12fVWsWFGbOHGidurUKVf/qG4tJSVFS05O/u/XjRs3XB2S03zyySfWfq9kHYCwm4wAiKL4EUtp0n/w9fXlwIED1KtXz+CQCu/mzZvMnj2bd999l4SEBKe/n6enJz169ODFF1+kbdu2Tn8/d3Xy5El27NjBjh07iI+P59KlSyQmJpKZmfmPvhUqVCAiIoLatWvToEEDOnbsSJs2bfDz83NB5I6Tn59Pq1at2Lt3r14XDbgdUB4oIIQQjhCN4olk7Nixrn5ossuKFSu06tWrO/xp39avrl27avHx8a7+GEwhLy9P27x5s/b4449roaGhRf5sAwICtM6dO2vTp0/XkpOTXf3jFdrGjRut/ayLHfKXLYQQVixH50Lk6+urJSQkuPp6aZMTJ05o3bt3d9mN/89f3t7e2pNPPqllZGS4+mNxicuXL2vPPfecVq1aNad9xv7+/tq9996rbdq0ydU/bqH0799f9fPlAY2L9FcthBBW1ABy0bkQjR492tXXSZt89913WpkyZVx+4//7V+3atbUtW7a4+uMxzJkzZ7Rx48ZpgYGBhn7OMTExbvc5Hz582Nq6lEWF+osWJZKsARCF8SbwbEEN3t7eHD9+3NT7/rOzs3nmmWeYPn263d8b5O/P7dWr0yw8nMiqValYujTlAgMJ8vcnX9NIzcggKT2dE1evciAxkX0JCZy4etXu9/H29uaFF17glVdeKbbVE2/evMnkyZN5//33ycnJcUkMHh4e3H333bz//vtUr17dJTHYa8iQIXzzzTd6zfnAbcBx4yIS7qp4XlmEMwUA54EKBTUOHz6cefPmGRqQPdLS0ujduzdbtmyx+Xsqli5Nv6goBjZvTqf69fH2tK9+1ulr11hz4ACL9+5ly4kTdn1v//79mT9/PqVKlbLr+8xu5cqVjB071pDFlrYIDg7mrbfeYvTo0a4OxapDhw7RpEkT8vPz9bp8AIw3MCThpiQBEPYaCczWa9yzZw/Nmzc3MBzbJScn07NnT3bv3m1T/4iQECb26MHw6Gj8HFTI6NDFi3yyeTNzt20jIzvbpu+Jiopi+fLlbvOEqpKamsqIESP47rvvivxagb6+//26kZVFWlYWefo3RZv069ePOXPmULZs2SLH50yDBw9m0SLd0f4bQBiQZlxEwh1JAiDstRUocM9a69at2bFjh8Hh2Oa3336jW7du/Prrr1b7VihVijcHDGB4dDRedj7t2yoxNZXXVq1iztat5Npw0woPD2fjxo3Url3bKfEYYc+ePQwePJjTp0/b9X0eHh40DQujXZ06tI2IoH5oKHUrVaL037b2aZrGhdRUTl69yi8JCWw8dowtJ05wIyvLrvdr2LAhq1evpmbNmnZ9n5Hi4+Np2rSpqstY4CODwhFuShIAYY9awCl0fm/mzp3Lgw8+aGhAtsjMzKRjx47s2rXLat/7W7fmnYEDCQkKMiAyy4jAQ59/zu6zZ632DQ8PZ9OmTaZeX6Fn1qxZjBs3jlu3btn8PY2rVWN4dDQDmzcnvHz5Qr1vbn4+3x88yGdxcaw+cMCmZAsgNDSUFStW0LJly0K9rxE6dOigmso6iqU6oGZcRMLdSAIg7PEC8O+CGsqWLUtiYiKBgYEGh6SWn5/P4MGDWbJkibJfgI8Ps4YN4/7WrQ2K7H9y8/N5+6efeHnFCrJzc5V9a9SowaZNm0z9dPp3L7/8Mq+//rrN/e9q3JgJXbvSuUEDh8aRmJrKf9asYXZcHDl5eVb7lypVirVr1xITE+PQOBxl0aJFDB48WNWlLbDdoHCEG5IEQNjjINCooIbx48fz3nvvGRyOdc899xxTpkxR9qlRoQLfPfYYUS6eY487eZJ7Zs7kSpp66rZhw4Zs376d4OBggyIrnLy8PMaMGcPMmTNt6t+mdm3e7N+fdnXrOjWuk1ev8vSSJaywYTqobNmybNq0ydpwu0vk5ORQo0YNLl26pNflY2CMgSEJNyMJgLBVU2C/XuOOHTto7YKnZ5W1a9dyxx13oGn6o6B1KlViw4QJVC9XzsDI9F1ISaHvxx/zi5XV8XfddRfLly/Hy8vLoMjsk5+fz9ChQ/n6a+sl6oP9/ZnSvz+Ptm9v6JbHedu2Mf6bb0izskagcuXK/Pzzz9R1cmJSGK+++iqTJ0/Wa74GVAVcs8dSmJ4kAMJWrwKvFNQQHh7O2bNnTbVfPTU1lSZNmnD+/HndPnV/v/mHmeTm/4frmZncOX06206dUvZ79tlnefPNNw2Kyj5jxoyx5Sx7YiIiWDhqVKHn+IvqzLVr9PnoIw5evKjs16BBA3bv3k3p0qUNisw2586do1atWqoktxew2sCQhBtxzhJnURzdoddwzz33mOrmD/DII48ob/6VgoL46cknTXfzBygTEMDa8ePpaOUgpbfeeouVK1caFJXtXnvtNZtu/k926cLGp5922c0foFbFisRNnEgXK+sNjh49yqOPPmpQVLarUaMG0dHRqi5DjYpFuB9JAIQtQoAWeo1WFiIZbtWqVao90vh6e7P00UepUaHAWkamUNrPj+VjxtA0LEzZb/To0Vy7ds2gqKybO3cur7xS4EDRf3l5ejLz/vt5d9AgfEwwhVEmIIA1TzzB3bffruz35Zdf8umnnxoUle2s/P3dBfgYFIpwM+Z6bBNmNQyYX1BDWFgYCQkJphkByMnJoXHjxhw7dky3z4yhQ3mkfXsDoyq8xNRUoqdM4XxKim6fAQMGWN3lYIRff/2V6OjoAo/p/YO/jw8LR46kX1SUgZHZJisnhzunT2ej4ncnICCAAwcOEBERYWBkapcuXSIsLExVGbATsMm4iIS7kBEAYYs79Rq6d+9umps/wMcff6y8+d8ZGek2N3+AamXLsnzMGPx99B/ili5dqqoNb4i0tDQGDhyovPn7eXuzauxYU978wZKcLHv8ceWoS2ZmJk888YSBUVlXpUoV2qt/p3Wn70TJJgmAsEUnvYYuXboYGYfS9evXee2113TbywYGMmvYMAMjcoyo6tV5a8AAZZ+JEycqb77O9vDDD3NCcc6Bl6cnC0aOtDrX7mrB/v4sfuQRgv39dft8//33Dill7Eh9+vRRNd9lVBzCvUgCIKyJACoX1ODh4WGqBGDWrFkkJyfrtr/Rrx/VTF7jXc/YTp2Uc9QJCQlMmzbNwIj+Z+nSpco1FwDThwzhnmbNDIqoaOpWqmQ1UXzyySfJyMgwKCLrunfvrmpuhOUIbyH+QhIAYU2Bdf8BmjRpQuXKBeYGhsvJyVEe71u/cmVGxcYaGJHjzRg6lHKKSotTpkxR7nxwhrS0NMaNG6fs82j79jzWoYNBETnG4BYtlFUhExISTLUgsFGjRoSpF4y61z+AMIQkAMKaNnoNnTrpzgwY7ptvvlHe/Kb072/3Mb5mUzk4mP/r10+3PSMjg6lTpxoYkaXS4kXFHvomYWG8M2iQgRE5zrR77qGsIuGaNm2aXWcbOFu3bt1UzbqJvCi53PuKKIygWwi9VatWRsah9OGHH+q2Na9Rw+oWL3cxul07WinOAZg7d65h2wL37dvHjBkzdNuD/f359tFHCVAsYDSzysHBTO7dW7f9woULzJ9f4OYYl7CSACiLBYiSSRIAoeKPTu1/gGYmmdM9deqU8qS/8Z07GxiNc3l6eFgdBfjoI2NOgX3ppZdUW894o18/IkJCDInFWR7v2JHaFSvqtr/11lvKUtNGateunaq5EWDuwyOE4SQBECr1AO+CGoKCgkxTG33hwoW6F+FKQUEMbN7c4Iicq0uDBsqT8qZPn056erpTY9i1axdr1qzRbW9Zs6ZbbbfU4+3pycQePXTbT5w4QVxcnIER6QsLC6NKlSp6zV6AuQ7rEC4nCYBQUT79e5pkTl114MzI2FjlHnp3pRqaTkpKYunSpU59/0mTJukmXd6ennw6bBheJvn9KKoH27ZV7h6ZN2+eccFY0aKFbsFOAHMWYBAuUzz+QoWz3KbXEGWSYi7Hjh3j8OHDuu2DitnT/x9i69ShRQ39nV1ffvml0957586dbNy4Ubd9eHS01RLG7sTP25sxHTvqti9evNg0WwKtJAC6Cb0omSQBECoN9Rrq169vZBy6NmzYoNtWr3Jlbq9e3cBojDVWsQtj3bp1JCYmOuV9VQf9+Hp789Jdxa/uzP1t2uCpU/Hyxo0brFq1yuCICtayZUtVs+7fsyiZJAEQKrp3+dq1axsZh65Nmzbptg0wySJFZxncogUVSpUqsC0/P98p5YGvXbumLPrzcGysqQ9ZKqzq5cop1138+OOPBkajr3Hjxqrm25BrvvgT+WUQKrqPz2Y4DEXTNDZv3qzb3tkkoxTO4u/jo0xynHFA0Jw5c8jKyiqwzcvTk2fVFencmqow0Nq1aw2MRF+1atUICAjQay4FhBsYjjA5SQCEnkCgTEEN3t7ehIe7/jpy8uRJrly5UmCbj5cX0SYZpXCmQYo53927d3P9+nWHvt/nn3+u23ZX48bF8un/Dz0aNdI9+OrChQvKtShG8fDwsJac1zMqFmF+kgAIPdX0GsLDw/Exwcr6Q4cO6bZFVa9OKT8/A6NxjQ716lEpKKjAttzcXOUUib2OHDmivMm5W7lfe4UGB9O4mu6fhUM/66KoU6eOqln/BxAljiQAQo/uhaJq1apGxqFLlQC0VFTLK068PT3p0Uh/cfe6desc9l7ffvutblvNChXo3rD4rzHrdpvuxhj2799vYCT6JAEQtpIEQBQkENCtnVuuXDkDQ9GnehptEBpqYCSu1bGe/qiuaruevVRrCga1aKG7Sr44UU0r/frrrwZGoq+GYnsokgCIPymwypsoMcpiKQ7SDGiK5ejf2oDy7lnBJPO8R48e1W0rUQmAYrHj0aNHyczMVC0Ms8nFixeVT7jF5awFa1T1DQ4ePEheXh5eXl4GRvRPIeryy5IAiP+SBKBkCQW6/P7VDssN3+7HtvLlyzs4rMK5fPmyblv9EpQA1K5YkWply5KYmvqPtry8PA4fPkzzIhZEUpW7rVa2LK1r1SrS67uL2iEhlPbz42YBpwBmZGRw5swZa0PwTldRcXYBoFsrWJQ8MgVQ/N0O/B9wALgELAAeAupQiJs/mCcBSEpK0m0LDS5Z5540UTyZxsfHF/n1t27dqtvWo1GjEjH8D5bDmBrq19tXHo1sFCsJQMn6wxBKkgAUT/WB/wDHgX3Ac0Cko168pgkW2KWlpemexR7k74+Pi4dhjaZanX7gwIEiv/7PP/+s29bOxU+8RqumWANz6dIlAyMpmJUputJGxSHMT6YAig8/YADwMNCBQj7dWxMYGEgnRQlao6ie/ssFBhoYiTlEKnZmnDhxokivnZGRoUwi2pqgKJSRKutsuwR061IYSRIAYStJANxfOWAMMA5w6uHrvr6+fPLJJ6bYBqhXjQ6gTBEXvLmj2oqFX0W9KR07dozc3NwC2yoFBVG3UqUivb67qayYXjJDAuDr66tqLo3l4aDgoxxFiSIJgPuqDDwLjAb0H0kKwdfXl5CQEKpUqUJoaCghISE0bNiQ3r17m+YQIL2KbIDuMbXFmWrNgyMSAD1NwsKU/xbFkWqEKTMz08BICubl5YWnpyf5+fkFNXsCNYCzhgYlTEkSAPdTGsuNfwIOGM6rUaMGrVu3plGjRv/9qlOnDt7e5v7V8FScNZ8nCcBfXLlyBU3TCn2jlu2Wf6X83cvLMzASfd7e3mRnZ+s1nwGuAPHAfuAXYDOWRcKiBDH3VV78mSeWp/3JQKHHXGvUqEHXrl1p3749HTp0sFY0xLSUF+GCn3yKtVJ+fpTy8yO9gIWRt27d4saNGwQXcmfE8ePHddvqVa5cqNd0Z16KRMpNEgCwjCB2+/3rD8eATcBG4AfAsQdJCNORBMA9RAEzgFaF+eaIiAjuueceBgwYYO28cLehGqHIVF/4iq1Svr4FJgCAtZuBUmJiom5bvRI2/w/q5FNvrYTRCnlWR/3fvx4BbgHrgW+B5cA1hwUnTEMSAHMLwLKd7wns/LcKDg5m6NChjBw5sshFYMyosuLJ88qNG0Ua8nZXqr34OvPBNlHtuFAtiCuu9JIsAH9/fwMj0Ve9evWingTpB9z5+9cMYDXwKZaRAXMMc4gikzoA5tUc2As8hR03/0aNGjF79mwuXrzIxx9/XCxv/gABAQEE6WzHys7NJTkjw+CIXM9L8WRalIWRycnJum0VSpe8XWXJ6em6bWY5J2PQoEGOfDlvoC+wCsv6gVewTCEINycJgPl4Ai8A2wH9o8f+Jjo6muXLl3PgwAFGjhxJqVKlnBagWYQqFqBdLtrTj1tSjQAUZW46JSVFt618Cay5oEoAzFIlc+LEiQwZMsQZL10deBXLLoKPsZwdItyUJADmUh5YA/wbsGkSr3HjxqxevZpt27bRp0+fEjXsrUoAziqGrYurNEVtBD8/v0K9Zm5urm7NBU8PD0oV8nXdWZIbJAAL1D1vAAAgAElEQVR+fn589dVXHDx4kA8//JDx48dz5513Uq9evcKuD/g7f+AxLAsH5wM1HfGiwliyBsA8ooClgE2nqlSpUoU33niDYcOGKRclFWe1atXSLVF7IDGRuxo3Njgi18nNz9dNALy8vAo9NK062a7kbba0OH1Nfz2clZP4DPfH1t4/y83N5eDBg2zbto0dO3awY8eOolSL9AaGAYOwjAj8Byh52bebKpl3DvMZAGzFhpu/p6cnY8aM4ciRIwwfPrzE3vyBf1zY/uyQCQ5lMVJyerruPH+FChUK/Xvi4eGhO6qkaVqJLLp0QlFYqV69egZGUjje3t7cfvvtPP7448yfP5/jx49z8eJFZs2aRZ8+fQgs3LSOH5b1SiexVCYtuRcmNyL/SK43HliEZcW/UsOGDdm+fTsffvghZcqUcX5kJtdY8YR/QLF1rTi6euOGbpuV2vBWqUYB8ktYAnDp+nXdkRY/Pz+qV69ucESOUaVKFR5++GGWL1/OtWvXWLFiBQMHDrRWVrggZYEPgR1AM4cHKhxKEgDX8QDeBt7Dyr+Dh4cH48ePZ+/evbRqVahSAMWSKgE4dPGick68uDmueCpVbZm0heomcFOxJa44Oqw47a9u3brKZMldBAQE0Lt3bxYtWsSFCxd4++23ue02m9cj/6ElsAt4A7A7ixDGkATANTyAT7CU81WqVKkSP/74I++9955p9hibRVhYGJV0CtHk5uezWVHBrrg5dvmybltRh6VV89pX0tKK9NruZtupU7ptZjknw5FCQkKYMGEChw8fZt26dXTr1s36N/2PFzAJy2hAQ6cEKIpEEgDjeQKzsFTbUmrVqhV79uyha9euzo/KTXXs2FG3bb2ihn1xc0wxAtCwYdGuvcrtliUsAYg7eVK3rbiPznXp0oUff/yRPXv20LdvX3u+NQrYg6WUuTARSQCM5QHMBEZZ6zhixAi2bNnitnOKRuncubNu27ojRwyMxLX2njun21aI4du/qFKlim7bpRJUbyEvP5/tp0/rtsfGxhoYjes0b96cZcuWERcXR9u2bW39tgAs177PsGwhFCYgCYCx/g8rN38PDw8mT57MZ599Vui92yVJp06ddNsOXbyonLMtLpLS0zmk+DmLOgKgSgBUUw/Fzc4zZ7ihs64kICCAFi1aGByRa8XExLB161a++eYbqlatauu3jQDigHDnRSZsJQmAcSZgmQ/T5ePjw5w5c3j55ZcNCsn91atXj5o1a+q2f7Vrl3HBuEjcyZO62/HCw8MJCwsr0uur5rZL0m6Lb/ft021r1apVYVbMFwuDBg3iyJEjPPHEE7YugmyOpdLp7c6NTFgjCYAxBgHTVB18fHz4+uuvefDBB42JqBhR1T3/avfuYr9XfYNirYNqhMRWTZs21W2LL0EJwHeKBKB79+4GRmI+wcHBfPDBB2zZsoXatW2qDlwV2MxfjyMWBpMEwPmigLlY5v8L5Ovry+LFi+nfv79xURUjqprnp377jc2Fr3JmepqmKW9MqjUStlJttzx59SqpJeDgpX3nzysrAMrfrkXbtm3Zv38/I0aMsKV7MJZTBgc7NyqhRxIA56oELAN0S2t5e3vzzTff2LuqVvxJVFSUcpj6nZ9+MjAaY+04c4bzisN6HDECUKFCBd1phHxNY8OxY0V+D7P7LC5Ot61hw4Y0aNDAwGjMLSgoiM8++4wvv/zSlqqCPsCXwH3Oj0z8nSQAzuMFfINisYuHhwczZ87k7rvvNi6qYuqBBx7QbVt94IBym5w7W7x3r25bs2bNHLaLJCYmRrftp8OHHfIeZnXz1i2+2LFDt33AgAEGRuM+7rvvPrZv305ERIS1rl5YDhQa5vyoxJ9JAuA8LwAdVR3+7//+z9ahMmHFww8/rFsoKV/TeGvtWoMjcr7MnBzmb9+u237vvfc67L1Uc9xri3kCsGDnTmVVSScdu1ssNGnShF27dtG+fXtrXb2wTJVKNmUgSQCcIxZ4SdXhgQceYNIk5aYAYYeQkBCGDh2q2z5v+/Zid0DQFzt26B5N6+HhwcCBAx32XqoE4My1a+w8c8Zh72Umefn5vL9+vW57x44di7zNsrgrX748P/74oy0JqRewEFkYaBhJABwvGMuclu5Ry9HR0cyaNcu4iEqIcePG6bbl5ecz6bvvDIzGuTRNY/qGDbrt7dq1o0aNGg57v7CwMOWNbr5iiNydfblrF0cVtQ7GjBljYDTuy8/PjwULFvDEE09Y6+oLLEa2CBpCEgDHm4pi3r9KlSosXbpUivw4QZMmTZSLKVfFxxeb8sBL9+3joGJE4/HHH3f4e6rmur/evZtbubkOf09XysnL47VVq3Tbq1SpIot37eDp6ckHH3zAhAlWj0ApA6wAinaKlbBKEgDHao+ixr+npydffPGFsrKaKJqpU6fi7a07+MKo+fN1q7m5i9z8fF5avly3vWbNmk5ZmPbAAw/g4VHwbtbk9HS+3r3b4e/pSrPj4jj122+67ePGjcPHx8fAiIqHt99+m2effdZat+rAEuQkQaeSBMBx/IFPUez3nzhxIl26dDEuohKofv363H///brtZ5OSeM7NpwI+/fln5bD0+PHjlUlQYdWpU0e5G2DKDz+QX0yKLl1JS+OFZct020NCQmT4vwjefPNNHnnE6nloscAHBoRTYrn/4dXmMRFLxb8CtWjRggULFhSL88LNrlmzZnz66afk5OQU2L733DnaRkQQoTjm1qwSU1MZMHMmWTo/W4UKFfj888+dNsWkaRorVqwosO3azZtEVq1KI9vrwpvWqPnz2aM4YOnf//43HTp0MDCi4ueOO+7gwIEDHFVPy7UATgAHjImqZJERAMeoCjyn1+jj48Nnn30mw4UGCQ8PZ/Lkybrt+ZrGkE8/VVZ2M6uHv/hCWXnvlVdeISgoyGnvf99991G5sv7U7ORVq8jJy3Pa+xthZXw83+zZo9terVo1HnvsMQMjKp68vLxYuHChclTpd58ANtUXFvaRBMAx3gBK6zVOmjSJJk2aGBiOePLJJ2nZsqVue3J6OgNmzCAjO9vAqIpm5pYtfH/woG57/fr1efTRR50aQ0BAAE899ZRu+6GLF5m+caNTY3CmCykpjPj8c2WfN998U7fmhLCPv78/S5cutVawKhj4GkvVQOFAuvPVwmZNgV/QSabq1atHfHy8rPp3gV9//ZVWrVqRrbjJ923alMWPPIKPyadmtp06Red33lGutF+xYgW9e/d2eiw3btygRo0apOiUIA7y9+fI5MlUK1vW6bE4Um5+Ph2nTWPrqVO6fXr06MEPP/xgYFQlw+7du2nfvj1Z6gW6LwOvGxRSiWDuq557mAHcptc4b948KRTiIqGhoQQHBysv2MeuXOHE1av0u/12PHVWuLva+ZQUur77LtczM3X7DBgwgJdeUtaechg/Pz+ys7PZqPOkn52by9HLl7mvVSvdXQNmNO7rr1mqOFgpMDCQNWvWUK5cOQOjKhmqVatGaGgoK1euVHVrCywF3G/uzqQkASiaKOAddEZSunbtyr///W9jIxJ/0aZNGw4dOsRhRbnagxcvcjYpid5Nm5ouCbh0/Tpd332Xc0lJun2qVKnC6tWrbTl4xWFatWrFwoULSU1NLbD9xNWrlPLzI8Z6HXhT+M+aNUy1Ui56ypQp3HnnnQZFVPI0a9aMY8eOcVB/mssbaI6lZHDx2G7iYua62rmfZUCBlUC8vLyIj48vdk//KSkppKamEhQURHBwML6+5t+mm5aWRsuWLTl+/LiyX49GjVg8ejRBJpnfvZiaSud33lEeZOTh4cGaNWvo2bOngZFZrFy5kj59+ui2+3h5sWHCBGLr1DEwKvvNjotj9IIFaIotjL169WLFihVuNaLhjlJSUrj99ttJSEhQdXsUmGlQSMWa/DYXXn3gCDqf4dChQ1mwYIGxETnQ8ePHWbduHfHx8cTHx3P8+HGSCngK9ff3p2bNmkRGRtKoUSNatWpFx44dDX0atcWpU6eIiYnhipVTAZuEhbHi8cepUaGCQZEV7PClS/T9+GNOXr2q7Ddx4kSmTp1qUFT/1KdPH+WwbZmAADY/8wxNdY4TdrV527bx8BdfkJufr9unevXq/PLLL1SsWNHAyEqu9evX061bN1VC9htQF7huXFTFkyQAhfcxUOBeIC8vLw4ePOh2Z4QfPnyYefPmsWLFCo4V4Yx3f39/2rdvT58+fRg6dChlTbIY7MCBA7Rv31532PoPwf7+fHjvvQxr08agyP5qVXw898+Zo5zzB7jrrrtYvny5S2tLXLhwgaioKK4ptlRWK1uWuIkTqenipOrv/r1mjbKiIoCvry9btmyhdevWBkUlAEaMGMHcuXNVXaYBVssJCjVJAAqnPJAAlCqo8f777+eLL74wNqJC0jSNNWvW8P7777Nu3TrlMGhhBAQEMHjwYB599FFTXEQ3bNhA7969yVDspf/Dfa1a8c7AgVQODjYgMkjLyuKFZcv4aNMmq/8OzZs3Z/PmzZQqVeCvoKG+//57evXqRb7qKbpcOdaMG0ekCYoEZeXk8OSiRczcskXZz9PTkwULFjj0WGVhm+TkZBo2bKgascsGGgL6WzaEVbIIsHDGAHfpNc6fP5/Q0FADwymcffv2MWjQIKZMmcLp06ed8h65ubns37+f2bNns3XrVho1akRVF94EatWqRYcOHfjuu++sbTniQGIis37+GQ8PD1rUqIG3k560NU3j23376P3hhzYdVtSwYUPWrl1L+fLlnRKPverWrUtWVhZxcXG6fdKysliwcydR4eHUqVTJwOj+6lxSEr0+/JDlv/5qte8777zDww8/bEBU4u8CAgIICQlhmX45Zi+gLJZ1WKKQZASgcOKBxgU1dOnShXXr1hkcjn1u3rzJM888w6effqp8anMGDw8PBg0axNtvv021atUMfe8/279/Pz179rS6JuAPYeXKMaZjR0bFxlKxtG7NJ7vkaxpLf/mFN77/nn3nz9v0PVFRUaxdu5YQk5Uxzs3NpXfv3lb3yPt4efHinXfy/J134u1pXB2yfE1jdlwczy5ZQpoNh0G98MILsoPHxTRNo02bNuzatUuvSx7QCCj8fGUJJwmA/VoBO/UaV65cSa9evQwMxz5Hjx5l4MCBqq02hihTpgyTJ0/miSeewNPAG8GfnT59mgEDBrB//36bvyfAx4d7mjenb9Om9GjUiNKFKPC07/x5Fu/dyze7d9tVjrhNmzam3oeekZFB9+7d2bp1q9W+rWrWZM7w4YacG7D//HkeW7iQHTaOcr388svKUtLCONu3bycmJkY1JTYfGG5gSMWKJAD2+xDLFMA/hIeHc+bMGZfd0Kz5+uuvGTlypE3z3wXx9vQkyN+fAF9fbmRlOeRY3a5du7JgwQJlfXlnyszM5LHHHuNzK+VfC+Ln7U107drcXr06TcLCuC00lOCAAIL9/Snl50dKRgbJ6elcvXGDA4mJ7D13jp1nzpCQnGz3e40YMYKPPvrI9CVor1+/TufOnfnll1+s9vX08GBAs2ZM7d+fWk5YYX8gMZG3fvyRr3btUq7y/4OHhwfTpk2z5bx6l0pOTubUqVNcuHCB8+fPk/mnxaLe3t5UqVKF8PBwateu7dLpNke5++67Wa6/WDMPy46AM8ZFVHxIAmAfb+AyUOByZjMPG86ePZtHHnnEriH/RlWrcmdkJG0jImhcrRrh5cv/pWRuTl4eyenpHLx4kR2nT7Pr7Fk2Hjtmd2IQFhbGkiVLXLpIcO7cuUyYMMHqDgGj+fv7M336dEaNGuXqUGz222+/0adPH3bs2GFTf38fHwY2b86o2Fja1alTpL32mTk5rPz1V+Zt384Phw7ZvKjV39+fuXPnMmTIkEK/t7P89ttvrFixgri4OLZv387x48dt/rnCw8OJjY2lffv29O/f33RTR7b45ZdfaNGihepnfgd42sCQig1JAOzTDfhRr/Ho0aPUr1/fwHBsM336dMaPH2/TRaOUnx8PtGnD2E6daFilit3vlZmTw7L9+/ly507WHjpk05MXWMrLfvLJJzz00EN2v6ejXLp0ibFjx/Ltt9+6LIY/i46OZsaMGW55kFRmZibDhg1j6dKldn1fREgId0ZG0rlBAzrUq0c5K/Uk8jWNw5cuse3UKTYfP87K+Hi7E9DatWuzePFimjVrZtf3OdPNmzdZuHAhixYtYtOmTeQ54IRFHx8fevbsyQMPPEC/fv3c6mjyvn376h5DDaQB1X//r7CDJAD20d37Hx0dzbZt2wwOx7qlS5cyaNAgq0/+3p6ePN6xI6/06kV5B20tO3n1Kq+tXs3CXbvIc6Mh2JUrV/LCCy9w4IBrjiCvUKECU6ZMYcSIEaadTrJFfn4+zz//PG+++Waht5dWCgqiZoUKhJUrh5enJ8H+/uRpGpeuX+d8cjIJycncvHWr0DH269ePOXPmmKZWxeXLl5kxYwbTp08nuRBTRbaqVasWkyZNYuTIkW6RCOzatcvaCOETWKZnhR0kAbCdB5AIFPhY/MYbbzBp0iRjI7Ji7969tG/f3uqcf9OwML4YMYLGTlqVf/TyZSYuXcrK+Hib+r/66qu88sorTonFVvn5+SxatIjJkydz1IateY5QoUIFxo4dy7hx40yzxc8R4uLiePDBBzmlOGXPaOXKlWPKlCmMHj3a1aEAkJSUxGuvvcYnn3xCTk6OYe8bGRnJ7NmzTVGjw5qYmBjVQ9YBwP2GylzM/KmfeUQBz+g1vv/++1Ry4f7mv0tNTaVjx44Flu/9sxExMXz72GNOPbq1YunS3NuqFfVDQ9ly4gQZiuN5ATZt2oSvry/t2rVzWkzWeHh4EBkZyeOPP05sbCxZWVmcPHnSIUOxf1e/fn1efvll5s+fT/fu3QkICHD4e7hSeHg4Dz74IFevXrVrx4UzeHl58dBDD7F8+XLat2/v0ljAsn3yvffeY+DAgWzevNnwbblXr15l7ty5pKen065dO7y9vQ19f3sEBQWxZMkSvebKwAosa7SEjWQEwHbPAm8W1FCrVi2nFdIprIceeoh58+Yp+7zcqxeTDTg//s+upKUxaNYstpw4oezn4eHB559/zrBhwwyKzLo/FmOtXbuWdevWkZKSUqjX8fDwoHHjxvTr148BAwbQuHGBJSWKpYMHD/Laa6+xePFiw9+7a9euTJs2jaZNmxr+3gU5ffo0w4cPVxZQMlLTpk1ZuXIl1atXd3UoBcrNzaVmzZokJibqdXkfeNLAkNyeJAC2+wnoWlDD2LFjmT59usHh6FuzZg133aVbqBCA1/r04SUrfZwlJy+PpxcvZrrOefJ/8PHxYc2aNXTtWuDH7lJ5eXns37+fgwcPcvjwYY4cOcLly5dJS0sjLS2NW7duUa5cuf9+Va5cmSZNmtC8eXOaNWtmmjlnV9myZQtTp05l7dq1ThlV+YO/vz9Dhw5l3LhxplpM+eGHHzJx4sS/bOGzlaeHB/VDQ6lXqRK1KlYkOCCAQF9fsnJyuJGVxdmkJI5dvsyRy5dtWnvzZ2FhYaxYsYKoqCi74zLC888/zxtvvKHX/BtQFcg1LiL3JgmAbXyAVKDAJclr166le/fuxkakIzs7m/r163P27FndPg+1bcuc4a6vnfH2Tz/x7NKlygViFStWZN++fYSZ9DQ5UTSJiYnMmzePzz//nBNWRoVs5eXlRfv27bnnnnsYNGiQqU7xy8rKYvTo0XafFVK1bFn6Nm1K7yZNaBsRQRkbpomuZ2ay+fhxlv7yC0v37SPdxsWSQUFBrFu3jlatWtkVoxGOHz9ubadVV2C9QeG4PUkAbNMC2F1QQ6lSpUhKSsKvEBXhnOHDDz/kiSee0G2Prl2bTU8/ja9J5vpmbNnCmIULyVckAe3atWPDhg2mnp8URXf69Gk2btzIhg0b2LZtGwkJCTbNifv7+3PbbbcRGxtLbGwsHTt2NNV6nD9cvnyZ/v37s337dpv6e3h4cGdkJI+2b88dkZF4FWFHyI2sLGZs2cKba9dy7eZNq/3Lly/P5s2biYyMLPR7OkubNm3YuVO3GOuHWHYECBtIAmCb8cB7BTW0a9eOLVZOFTNKeno6derU4fLlgtfBBPj4sP+ll6jnoqp7et5fv54nFy1S9nnxxRd5/fXXDYpImMGtW7c4ffo0CQkJ/51aycvLw9/fn8DAQCpVqkStWrUICwsrUvEgIyQkJNCpUyeb1wr1btKEyX36EOXg+fibt27x+urVvP3TT1anB6pWrcrOnTtNN/r27rvvqrYKJ2KpCeDYY02LKXP/1ZjHl8B9BTWMHz+e994rMDcw3AcffMD48eN1298cMIBnTTJV8XdPL17MO4pDlLy9vdmzZ49pFnAJYauzZ8/SuXNnzpyxXq22fuXKfDBkCN0bNnRqTDtOn+b+OXM49dtvyn6xsbFs3LjRVKNvZ86coXbt2qouLYC9BoXj1ty3yoixdO86LVu2NDIOpVmzZum21axQgfGdOxsYjX3euuceeikWaeXm5vLoo48avk1KiKJISEigY8eOVm/+Hh4ejOvcmX0vveT0mz9Am9q12TFpEjEREcp+cXFxLq/J8Xe1atWy9iBgvlXDJiUJgHW+QD29RrOUD926dSuHDh3SbX+lVy/TzPsXxNPDg3kPPkiY4qS7HTt2KJMcIcwkLS2NXr16ce7cOWW/soGBrHj8cd4fPJgAHx+DorPU51j31FPcYWWef8qUKao5d5ford6+3MmoONydJADW3YZlF8A/BAUFmab2/5w5c3Tbqpcrx7A2bQyMpnAqlCrFwpEjlYudXn75ZW7asIhJCFfKzc1l8ODBVstJ16tcmd3PPacc/XImfx8fljzyCG0VIwH5+fk88cQTphp9s1LEKRbLg5uwQhIA63Sf/qOiokxRqz0/P5/Vq1frto+MjS3SCmIjtatbl8c6dNBt/+233/jggw8MjEgI+z3zzDP88MMPyj4ta9Yk7tlnqePiHQuBvr6sGDNGOfq2e/du5s6da2BUam3atFGtSygF3G5gOG5LFgFaNwkosPLE6NGjmTlzpsHh/NOOHTuIjo4usM3Tw4Ozb7xBdcUft9lcz8zktlde4dL16wW2lytXjtOnT5f4YjqFlZqayrFjxzh//jyJiYlkZWWRkZGBr68vPj4+hISEUK1aNWrWrElERIRbHBZjJqtXr6Z3797K+hatatbkp6eeItjf38DI1LacOEHnd97R3R1QrVo1Tp8+ja+vOR6uW7Rowd69umv9xgHmqc5mUuadFDYP3eWmZtkeo3r6b12rllvd/AHKBATw5oABDNOZ1khJSeHjjz/m+eefNzgy95SYmMgPP/zATz/9xO7du+0qW12qVCluv/12OnbsSK9evWjVqpUpRr3M6vLly4wYMUJ5828aFsYP48eb6uYP0L5uXZ7s0oW3f/qpwPbExES+/vprHnjgAYMjK1hsbKwqATDP6mwTk79k62roNZglAfj5559121w1t1hU97VqRRPF5ztjxgynlpB1dxkZGcydO5cOHTpQvXp1Ro0axTfffGP3mRXp6els3bqV//znP0RHR1OzZk0mT57MxYsXnRS5exs1ahRXr17Vba9Spgwrx46lXGCBRUVd7uVevagcHKzbPm3atEIf7exoMTExquYWRsXhziQBsC5Ur8EMh2ZomqY8Yc3aCl+z8vTwUJ5VcP78eVatWmVgRO7h5s2bTJ06lVq1ajFixAi2bNni0Av2+fPnefXVV4mIiGDChAlcu3bNYa/t7pYtW6YcjfPz9mbZ44+bekQu2N+fVxUr7A8cOKB84DCSlQSgLrIQ0CpJAKwzdQJw6tQpruvMlQf4+NC4WjWDI3KcAVFR1FdULfzkk08MjMb8Vq5cSaNGjZg0aZLyKdQRsrKyePfdd6lXrx4LFixw6nu5g8zMTFV1OsBSiKtVzZrGBFQED7VtS6hiFGCRlaqdRqlatSrl9JMpbyxJgFCQBEDNC6ig12iGKQDVNqPG1arh7cbztR4eHsodAevWreM3K5XMSoKMjAyGDRtGnz59SEhIMPS9U1JSGDZsGGPGjCnRUzJTpkxRFvvp3aQJT3Ryj+3pft7ePKr4u1uyZIlp/q3r1KmjanZ+RSU35753B2OUxpIE/ENQUBClSpUyOJx/unDhgm6bag7dXQyPjqaUzkFLeXl5rFixwuCIzOXs2bO0bdvW5U/hH3/8Mf369SMrK8ulcbhCUlIS77zzjm57mYAAPhk61PTnFfzZg9HRuvFeuXLFNNMAVhIAZaOQXQDWBOk1+JtkBa8qATDzXKOtygYG0j8qii927Ciw/dtvv2XkyJEGR2UOO3fupG/fvly5csXu7w0NDqZ+aCghpUtTKTiYID8/cvLyuJ6ZSWpmJueSkvj1wgVy7HjSW7lyJb169WLFihUEmnSRmzO8//77yuJUb/TrRzU327Jao0IFWteqxQ6dRaObNm2iY8eOxgZVACsJQLhRcbgrSQDUSus1mGUvrGo1dlU3u+joUSUA69evJz093RSjMUZavHgxw4cPJzMz06b+ZQICuPv22+lUvz4xERE2FZ/JzMlh77lzxJ08yVe7dxOvSDb/sH79eu644w5WrVpFUJBu/lxspKWlMX26/nbzyKpVGd2unYEROU7/qCjdBGDr1q0GR1MwKwmA7g4uYSEJgFqAXoOPgTW7VdLS0nTbVNt53EmPRo0o5edH+q1b/2i7desWO3fupLOJDzpytDfeeIMXXnjBptX99StX5l89e3Jvy5b42/k7G+DjQ2ydOsTWqcOknj3ZcuIEL69Ywebjx5Xft2XLFnr06MGaNWuKfbGmWbNmkZqaqtv+5oABblOF8+861NMtgsrOnTvJzc11+SmBdesq1/m5fpW2ybnnb6ZxdD8fs4wA5OTk6Lb5FpMKbgE+PnRp0EC33SxPI86WnZ3NQw89xPPPP2/15l/az4/3Bg3i4Kuv8lDbtnbf/AvSvm5dNonmQFoAACAASURBVE6YwKfDhll9ve3bt9O1a1eSk5OL/L5mpWkas2fP1m1vVbOm227DBYiqXp1AnevcjRs3OHXqlMER/VM19S6nikbF4a4kASgkP52FaUZTJQDexSQBAIhVDPVt27bNwEhcIzk5mR49ejBv3jyrfetXrszO555jfJcuDt8F4uHhwajYWNY99RRlrczz7927l86dOzt9S6KrxMXFcezYMd32f/XsaWA0jufj5UWUYqvzyZMnDYymYFammSog5e6VJAFQ0/3lMcsUgJlO6HKmdooEYM+ePQZGYrxTp04RExPDpk2brPbt0qAB2ydNomGVKk6NKSYigg0TJlCxtO4yGQB+/fVXOnToQGJiolPjcYXPPvtMt61WxYrcfbv7n0ejWitihhGA4OBg1e4KH6B4zIM6iSQAarqP12bZ7hSsmOe/buMCMXfQLDwcH50RjWvXrpGSkmJwRMbYvHkzrVu35ujRo1b7joyJ4ftx4wwrMxtVvTobJkygkpXFfkePHqVz587KHSvuJicnh2XLlum2P9S2LZ5utO1PT0RIiG6bqu6BUby8vAgI0F2qBYqF3EISAGsy9Br0qu8ZTVEJi+T0dAMjcS5fb29qVtCtyWSK4UhHmzVrFt27dycpKUnZz8PDg1d69WL2Aw/oJknO0rhaNbY8+6zVbW7Hjx8nNjbWFE+NjvDzzz/rXgO8PD15qG1bgyNyDtVWYtXiRyOpHoIAc+zXNilJANTcOgG4ptib7I7qh+pWZS5WCUBOTg6PPfYYjzzyCNnZ2cq+gb6+LB49Wlm/3dnqV67Mxqeftlp34ty5c3Tq1IkjR44YFJnzqM6h6FCvHmHFoAYHQGlFvRNV7QMjWUkAlMMDJZ0kAGq6j9Dp6enk5uYaGUuBqijmek8Ws8VXtSvqL+otLqfTJSUl0bNnT2bMmGG1b2hwMJuefpoBzZoZEJla3UqViJs4UTlkDJbDhGJiYti+fbtBkTnHDz/8oNvWq3FjAyNxrlKK3U5mSQCs1AAxx2ptk5IEQO06OusANE1T7sE3Sj3FXt1jhagQZ2YVFH/oN27cMDAS54iPj6dly5Zs2LDBat/IqlXZMWkSLU10uEx4+fL8/OyzVhcgpqSk0K1bN+VN1MxSUlKUazLc9Qjugvgq9vmb4QEIsDZKZo5DC0xKEgA1DdCdgDXDHFj9+vV1245cumSas7sdoZwiATDLlExhLVmyhLZt29q0sOrOyEi2/etf1FCsiXCVKmXKsO6pp7jNShKQnp5O3759TXOynD327Nmj+3dVo0IF6tpQZdFdZCpurlYW3xnGyoJsSQAUJAGwTve4OTOchV67dm3dLYlJ6emcKEbTAMGK+UgzjMYUhqZpTJ06lcGDB5Nuw6LN0e3asXzMGIJMchZFQaqUKcOmp5+mqZXDqLKzsxkyZAjvvfeeQZE5xs6dO3Xb2tSqZWAkzpeuSADMct6DlQSgZOyTLiRJAKzT3btkhhXNPj4+NG3aVLc9rhgtjstT1DzwcsOiR2lpafTr149JkyZZrefg7+PD/IceYub997vFEc+VgoJYP2ECra3cEDVN46mnnuL11183KLKiO3jwoG6bmaZkHEG1ldhNEgDdhdxCEgBbnNBtOKHbZKh2isNGrNVtdye5ipukWSoz2urYsWNER0ezfPlyq32rli3LpqefZlibNgZE5jgVSpVi/VNP0bNRI6t9X375ZcaOHesWha3Onj2r22Zt1MPdnFVsQVUtQDaSlQTA/RcHOZEkANaZPgGIjY3VbVtz8KDyxulOshRlj90pAVi0aBEtWrTg8OHDVvu2rlWL3c89Z/VJ2qxK+fmx/PHHGdyihdW+H330EcOGDVOWtzYDVQJQS7FTxR2d/k13BpRaJvmdlASg8CQBsE73Efq4SZ6u27Vrh6fOsPC1mzeLzSjAZcU8vzscPZuXl8ekSZMYMmSITVuo7m3Zko1PP+32xzr7envz1ahRPNW1q9W+Cxcu5I477jDtos6srCzdsw28PD2t1kJwN6o1RDVNMN2RmppKXp7uOr9bv38JHZIAWGf6EYCQkBBiYmJ025fs3WtgNM5zSXFTCDP50Ou1a9fo2bMnU6dOtbozw8vTkyn9+7Nw1CgCTHLmRFF5eHjwzsCBTOnf32rf9evXExsby/nz5w2IzD6pqam6/34VS5dWbptzN1k5ORxQnOFQR3E+h1HOnTunar5sVBzuShIA6xLQySJTUlJMsRMAYMCAAbptX+3eTfot90+EzynmI8PDww2MxD47d+4kKiqKdevWWe1bLjCQ1WPH8q8ePQyIzHj/6tGD6UOGWK2Tf/DgQWJjY22aJjFSRob+mjJV0Rx39EtCAjk6T9cVK1Y0xQhAQkKCqlkSACskAbAuD9DdnG2Wk+j69euneyrW9cxMFu7aZXBEjver4jCZGjVqGBiJ7ebPn0+nTp1sOginaVgYe154gR42LJpzZ2M7dWLByJFWzy1ISEiw+RREoygTADdah2KL7adP67a1bNnSwEj0WUkAikd5UCeSBMA2uvt+tm7damQcusLDw5W7AT7evNmtiwIlJCfrHm4UEBBgmgVJf7h16xYPP/www4cPJ9OGUxnva9WKbf/6l7LccXFyb8uWfD9unNV6BqmpqfTo0YOFCxcaFJmaquqcO2zPtMfqAwd029wkATDfHJLJFK/fWOfZrddglgQA4NFHH9Vt23/+PCvj4w2MxrG2KWouREVF6RZDcoVz584RGxvL7Nmzrfb18fJi+pAhfDlyJIHFbAjZmi4NGvDTk08SYmUBZ3Z2Nvfffz/Tpk0zKDJ9qrrzqqI57uZ6ZqayhkinTp0MjEaflQSg+BRBcRJJAGyjmwDs2rXLNNuWBgwYQCVFGdIXly8n301HAX44dEi3rVWrVgZGorZ582Zat25t09RQpaAg1o4fz1iTXExdoXWtWuyYNIn6lSsr+2maxrPPPsvDDz/s0hr0qt0mN4vBOps/rIyP153/L1u2rHLRsZGslM52faU2k5MEwDZ70akpnZ6ezv79+w0Op2C+vr489thjuu0HEhP5xiRrFuyRr2msVSQA0dHRBkZTME3TmDJlCl26dOGKDYcwxdapw/6XXqKT4iyHkqJ2xYr8/OyzNtU6mD17NgMHDlTOxTuTKgFISU9362m2P5u7bZtuW48ePUwx4pabm0u8elRTRgCskATANmmA7l0+Li7OwFDUnnrqKcoq9o1PWLSIVBddPAtr3ZEjujUAfHx86N69u8ER/dWNGzcYNGgQzz33nGpP8n+NbteO9U89RZUyZQyIzj2EBAWx6emnGdi8udW+y5Yto23btjYtrHS0oKAgSpcuXWBbZk4OF01av8Aep69dY+OxY7rtffr0MTAafQcPHlStr8lARgCskgTAdrpntG7cuNHIOJTKlCnDmDFjdNsvp6Xxog3lZ83kM8U6iw4dOigTHmc7fvw40dHRLFmyxGpffx8f5gwfzsz77y9W+8Udxd/Hh69GjWJMx45W+/7666+0adPGJaNvERERum2nFJXz3MWsLVt0RzKCg4O5++67DY6oYHvV9U0OIicBWiUJgO026TX89NNPpjqP/plnniEkJES3/ZPNm5UZvpkkpqayXHGR79u3r4HR/NWSJUto0aIFhxTTE3+ICAlhx6RJPNS2rQGRuS8vT08+vPde3lBsa/1DYmIinTp1Yv369QZFZ6EqgHNQUTjHHaRkZPDJ5s267UOGDDHNIUC7d+suzQLFiK34H0kAbLcFnYJAWVlZfP/99waHo69s2bL8+9//1m3P1zTunT1bWVrXLKb88AO3dBZ9BQQEcO+99xoc0f9K+g4aNMimxO+OyEh2P/98sTsoxpkm9ezJotGj8bcy15yamkrPnj2ZMWOGQZFBfcW6ja0mOCG0KD7Y8P/t3Xd4lFX2B/DvpAMh9BZKQiABSQg1KL0jQpBeLAgKCigWRF2xrbqKruuKuApY+KGoFGmBkNAJNaEltIQ0CAklDUggZUqmvL8/hvAgzL0zSWbuvDNzPs+Tx2f3XJhDIPOeueXc/Sjh9NafNWuWwGz4zMwAJInKw5FRAWC5MnBmATZv3iwuEwvMmjUL3bt3Z8YLSkowY9UqWV8UdLW4GL9w9ldMnToVjRo1EpgRUFhYiOHDh1vU0tdNocA/IyOxff58NJDJpyZHMql7d8TMn4/6Zr53Op0O8+bNwwcffCBkEx5v06kjFwA3y8qwlDObEhERIZsTNxqNBuc5fQoAJIjKxZFRAVA121mBmJgYixq+iOLu7o5Vq1bBi3O2fPeFC5i/dq3ArKrm1bVruTcAvvzyywKzMX7i6NWrl0V7Pvx8fLBxzhx8PGaM2ba3hG1Ix444sWgRgjnHWyt9/vnnmDJlis1/Dvv27cu8fCvn1i1cyMuz6evbygdbt6KYs0H4gw8+EJgN39GjR6FhH7ssAWB+XY5QAVBF0QBMfsQoKyuzqNe7SOHh4fjnP//JHfPjoUNYLKPli0qbkpKw9exZZnzkyJFCu5EtX74cffr0MXf5CAAgvFUrJL7/PsZ36yYgM+cX3LQpDr/9NnpZ0Ht+48aNGDFiBG5x7o2oqQYNGqBTp07M+AYHvHzr9NWr3Nm2Ll26YMyYMQIz4ouNjeWFE0AbAC1CBUDV5ABgNtW3ZCe4aO+88w4GDhzIHfN+VBS+kFERcPnmTbz0xx/MuEKhwOLFi4XkolKpMGPGDLz88svcNrCVnu7VCwn/+AfaW/CJlViumZ8f4hYuxAQLiqojR46gT58+uGTD6fjRo0czY47Wa6NCp8Ps1auh5ywHfvjhh2Y3ZYoUExPDC4vdFerAqACounWswIYNG1BUVCQyF7M8PDywfv16tGzZkjvuvagofLh1q90bmZRrNBi/fDmz7z9gXPvvJuDT9ZUrVzBw4ECsXr3a7FiPu1f4umJLX1Fqe3lh45w5+GdkpNmxGRkZ6NWrFw4fPmyTXCZPnsyMpeblYW9qqk1e1xY+2rYNSZyWuv369cMEC65xFiUrKwtpaWm8IbtF5eLoqACouvVgTC+pVCr8/vvvgtMxr1mzZtiwYQN8zFy88llsLJ5euRJKO/U0V1ZUYOyyZdxb/xo2bIhvvvnG5rnExsaiW7du5o4aATC29N39xhtOe4WvnCgUCnw8Zgx+nj7d7G2CRUVFGD58ONbaYJ9Ljx49uP0A/rtnj9Vf0xbi0tPxNSdXd3d3fP/997L69B8dHc0LFwBw3EtPBKMCoOryADAX+1esWGH3T9Gm9O7dG2vWrIG7mTfNdSdPou9XXyGzsFBQZkalajXG/PAD9vEre3z33Xdo0aKFzfKQJAn//ve/MWbMGItmc6ilr33M7tcP2+fPh5+Zolaj0eCZZ57Bxx9/bPUcpk+fzoztunCBe4GVHGTdvIkpP/3EnfqfO3cuunTpIjAr88ys/+8AY58WeZh8yjrHMg7AFlZw3759GDJkiMB0LPfTTz9h7ty5ZouU2l5eWDxuHF4dMsTmu9jTCwowfvlypJrZPT1p0iRs2LDBZnkUFxfj2WefNfcGc8/rQ4fiPxMnmv0kSmznzNWriPz+e1y/fdvs2Hnz5uG7776Dh5W6MN64cQMBAQHMUwc9AwJwfNEiWZ4CKVGr0eff/0ZKbi5zTLt27XD69Gnu/QeiFRUVwd/fn3cCYBwAx2p1akf0zlU9mQBmADDZg1apVGLKlCliM7JQjx490Lx5c8TGxnKLAK1ej50pKdiVkoKQZs0QYIPz9gZJws9HjmDKjz+afQPv0qULtm3bxj3WWBNnzpzBsGHDcOIEc4/nPXW8vfHb88/j7REj4O5kd8A7mub16mFKz57Yl5aGAjONrU6dOoXExESMHTvWKv+O6tSpg6tXrzIb0uTeuYNmdesiwoLTCyKVqtUY9d13SOSs+3t4eCA6Opq7zGEPv/zyC7ZvZ57GVgKYC0Ae17M6APmVpo7jIwCfmAp4enoiPT0dbS243cxeVq9ejVmzZll8terozp3x1ogRGBQSYpXXP5SZibc2bsTJ7GyzY5s2bYoTJ04gICDAKq/9oHXr1mHWrFkW3TAX3LQpNs2di85mNlUSsco0Gkz7+WfE8JvDAAA6d+6MmJgYtG7dusavm5mZibCwMOYJkVqenji+aJFs/r2UaTQY9b//4XBmJnfcP//5T5ssm9RUt27dePc/bAIwSWA6Do9mAKovA8BrMPE9NBgMKCsrk82tWaZ06dIFffr0wfbt26HmtP6slFlYiN8SErD59GlU6HRo5udX5e52t5VKbEhMxOzVq7F4xw7kWjBt26RJE+zevRsdO3as0mtZQq/X47333sOCBQug5TQcqhQZHo4dr75qk9kQUjNeHh6Y2rMnbpaXmy0qCwsLsX79egwZMqTG+0kaNWqEkpISxDOuz9UZDIhLT8fTvXqhlp1Ph+SXlOCJ775DQlYWd9zo0aOxfPlyZrMje0lKSsKnn37KG/IBAP4mIvI3NANQMxsBTDQV8PT0RFpaGoKCggSnVDUZGRkYN24cUqtxbKlzy5boHRSE7m3aoFOLFmjs64tGvr5wd3PDHZUKZWo1UvPzkZKbi8OZmThy8WKVWg+3aNECe/fu5TZdqa6ioiJMmzYNeyzYra1QKPDOiBFYPH68LNdzyd8t3bcPb27YAIOZfS6+vr5Yv349Ro0aVaPXKykpQYcOHZCfn88c0zsoCHveeAN1vL1r9FrVdf76dYz54QfkmGmQFBYWhvj4eFmt+1eaP38+fvjhB1a4CIA/GPe1ENPo3axmesLYGMjk93HmzJlYtWqV2IyqQalUYuHChUIvVDEnPDwcmzdvtska5Pnz5zF+/HiLGsU09vXFmtmzMfyRR6yeB7Gd9adOYeavv3JbSQPGQn3FihV44YUXavR6f/31F6ZOncodMygkBJvnzRN+L8SPhw5h4caNKGdvnAMANG/eHPHx8bJculSr1fD390dxcTFryAoA8wSm5BRoCaBmcgFEADC5MJ6cnIynn34aDRs2FJtVFXl6eiIyMhIRERGIj4/HbQum5m3p+eefx5YtW9DUBt30oqOjERkZyf20Vqlb69bYu2ABetho7wGxnTB/fwzr2BHbzp3j9rUwGAzYtm0b1Go1hg0bVu3XCw0NRW5uLpKS2JfQZd+6hW3nzuGJsDAhRUDu7dt4ZuVKfLN3L7R6fmfcZs2aYf/+/Qix0h4fa1u3bh3WrFnDGzIPxvdjUgVUANTcRQAvmgoYDAYUFxfLqosWT0hICF566SUoFAqcOnXK4g2C1uLv74+ffvoJ77//PjzNXANbVZIk4aOPPsLLL7/MO0J0zwt9+2Lz3LloIsOpUGKZVg0aYFzXrtiRksLtLAkYL5cpLCzEyJEjq732PXz4cMTExHCLy5tlZfjlyBH4envj0bZtbdJgp0Knw/dxcZj04484f/262fFNmjTBvn37EBoaavVcrEGSJEyfPh2F7N4kp8DYkE34aAnAOnYCMNkGTqFQ4MCBAxgwYIDglGomLy8PX375JX766SeLNgnWhJeXF9544w18+OGH8PX1tfrvr1arMWvWLHOfIAAYW/p+Nm4cdfVzIkXl5Ri3fLnZne8AMHbsWKxduxa1atWq1mtlZ2ejX79+uG7Bg3dgSAg+HzcOfa20zFWiVuOXI0fw7d69uMqeKv+btm3bIiYmBo/IeIlr69atGDduHG/IbAArBaXjVKgAsI7eAExvA4Zxx/2pU6es1oBEpNu3b+O3337D0qVLcfnyZav+3vXq1cOMGTPw9ttvo1WrVlb9vSvl5uZi7NixOGXBBS2NfX2x/sUXMcQGJw6IfWl0Orzw229YY0Gfh8ceewzR0dFo3LhxtV4rNTUVAwYMwM2bNy0aP+yRRzC7Xz882aULalVx5ssgSTicmYl1J09i7cmTuFOFq5D79OmDqKgoNGnSpEqvKdpjjz2G48ePs8K3AAQA4E/xEJOoALCebQCY92UuXboUr732msB0rMtgMCA+Ph5btmzBtm3bcPHixWr9Pr6+vhg5ciTGjRuHCRMmVPuTliWOHz+O8ePHI8+C+9m7t2mDLfPmoY3M92uQ6jNIEt7dvBn/2W3+rpjQ0FDs3Lmz2oVpUlISRo8ebdFek0r1atXC4A4d0D84GD0DAhDQsCFa1KsHr7sfHLR6Pa4VFyOnqAhnrl7F0YsXcfjiRbMNkEx5/vnnsWzZMrP3g9jbvn37zO3N+CcA7tlAwkYFgPW0B5AMwOQ5n3r16iEtLQ3NmzcXm5WN5OfnIz4+HqdPn8alS5eQnZ2NGzduQKlUQqVSwc/PDz4+PmjTpg3atm2LTp06oXfv3ujWrZvV1/dN+euvv/D8889b1NznqYgI/PLcc3SLn4v4Pi4Or69fb/aYYJs2bbBnz55qb4y7fv06xowZg9OnT1fr19tC/fr18f333+OZZ56xdyoWGTx4MA4cOMAKlwIIhPEIIKkGKgCsazGARazgM888gz8499yTmqvc7Pf555+bve/A3c0NX02ciDdrsPubOKa/Tp3Cc6tWQWNmo2uzZs2wc+dOdO3atVqvU1JSglmzZmHjxo3V+vXWFBkZiRUrVpi9GlwuoqOjzTVT+xrA24LScUpUAFhXbQCpANqwBqxbt87seWFSPRqNBi+88IJFm/3q+vjgz1mzMCY8XEBmRI4OZGRg3LJlZtfN69evj+joaPTr16/ar7Vhwwa88soruHHjRrV/j+oKCQnBf//7X0RGRgp/7erS6XTo0qULLly4wBqiARAEOvpXI/Lq9ej4lADe4w14+eWXcY1z3z2pnqKiIowYMcKih39Q48Y49u679PB3cYNCQnDknXfQqkED7rjbt2/j8ccfx86dO6v9WpMnT0ZycjLmz58Pb0HdAIODg7F8+XIkJyc71MMfAJYtW8Z7+APGXf/08K8hmgGwPgWA/QAGsQYMGTIEe/bskV2vbUd16dIljBo1ChkZGWbHDgoJwca5c9GoTh0BmRFHkH3rFp747jukmdmw5+XlhT/++AOTJ0+u0etdu3YNixcvxurVq1Fupj9BdQwaNAgLFixAZGSkQ77HFBcXIzg4GLfYbYtLYdxzxWwMQCxDjYBs4yCAWWBsCLx8+TJ8fX3Rt29fsVk5oYSEBAwbNgxXr141O/bF/v2x7sUX4WunfuxEnurXro1pERGIS09H7p07zHF6vR6bN29Gq1at0K1bt2q/np+fH0aPHo1XX30VwcHBKCkpQW5uLvRmuvWxuLm5oW/fvnj99dexYsUKvPHGG+jQoYNNmgyJ8M477+DgwYO8IZ/C2HuF1JBj/gtxDLMB/MwKenl54ciRI4iIiBCYknPZsmULnn32WbM7/d3d3PA5NfchZpRpNBi/fDn2mrkYS6FQ4LvvvsP8+fOt9trl5eU4fPgwjhw5grS0NGRkZODatWu4ffv2vc2sPj4+qF+/Pho0aICwsDB07doVXbt2RUREhOzP8lvq8OHDGDRoEAzsS8OuAugAwPKGB4SJCgDbigbAXHxr0aIFTpw4YbMmOM5syZIleOutt3hvFACMm/3Wv/ginggLE5QZcWQqrRZTf/oJ0efOccfZoghgKSsrg4eHh+zP7NeUUqlE165dkcnv2PgcgN8FpeT0aAnAtg4AmAnj6YCHlJWV4fDhw5g+fbqQs/HOQJIkfPLJJ3jvvffMHvNrUa8edr3+OgbI9IITIj+e7u6Y0rMnrhYX44yZZaWdO3fCz88PvXv3tmlOXl5eDtlFtKr+8Y9/ICYmhjfkBIDXAfB/8InFqACwrTIAmQCmgDHbkpubi8zMTEyaNMlh1+xE0ev1mDt3Lr755huzY8P8/RG3cCEeadFCQGbEmbgpFHiySxfcUalwzEz76127dsHDw8Ph7vqQm/j4eMyZM4dX1FfAOJtaIC4r50cFgO2lAfABwDxEnJKSAoVCgUGDBglLytGo1WpMnTrVomN+Izp1ws7XX0dTusmPVJNCocDI0FBo9XocNtP2Oi4uDl5eXujfv7+g7JxLcXExnnjiCRQVcRv6fQbgL0EpuQwqAMQ4AOAxAMxrvw4ePIiWLVuie/fuwpJyFCUlJYiMjLToHPasvn2xZvZsautLrGJox47GGz3NHDHdv38/3N3dMXDgQEGZOQdJkjB16lTeZT8AcAHAdADVOyZBmKgAEEMCEAtgMgBm15Ht27fD398fPXr0EJaY3BUUFGD48OE4duwYd5xCocBnY8fi60mT4O6AZ5+JfA0KCYGXhwf2p6Vxx8XFxaFOnTp0vLcKvvzySyxfvpw3xABgAgDrXkVKAFABIJIKwCEAMwAwd/zFxsYiODgYnTt3FpaYXOXk5GDw4MFISUnhjnN3c8PP06fj9aFDBWVGXE3/4GDU8fbGHjNHBPfs2YPGjRujV69egjJzXAcOHMALL7xg7iTPVwBWCUrJ5VABIFY+jHcFTAKjDbMkSdi6dStCQ0PRqVMnocnJSU5ODoYMGYJLly5xx3l7eGDN7Nl45tFHBWVGXFXfdu3QzM8PscnJ3HE7d+5E8+bN0bNnT0GZOZ7s7Gw88cQTKOFfZRwP47E//llfUm1UAIiXCiAPxh2tJrf9GwwGbNmyBcHBwQhzwfPrmZmZGDhwIHJycrjjfL29sfWVV6inPxEmIjAQze8WAbyzaLGxsWjXrh3C6d/mQ27duoWhQ4ciOzubN6wIwHAAxUKSclFUANhHEozHWphz1gaDAZs3b4YkSS51OiA1NRWDBw9Gbi7/no9mfn7Y9+ab6NuOua+SEJvoGRCAJr6+2MFZmpIkCdHR0ejUqZNLz+Q9SKVSYfTo0UhKSuINkwA8A4C7M5DUHBUA9nMEQD0A3C4iBw8exM2bN/H444875MUeVZGcnIyhQ4ci38ylLG0bN0bcm28i1N9fUGaE/F1EYCD8fHywi3NjncFgQFRUFLp27YoOHToIzE6e9Ho9pk2bht27d5sb+i2ApQJScnlUANjXbgBtAHBvFjl58iTOWgfgywAAIABJREFUnj2LJ5980mk7Bp45cwZDhw41e196mL8/DixciIBGjQRlRohpvYOCzJ4OqFzOGzBgAAICAgRmJy+SJGHu3Ln4888/zQ3dAeB5ULc/IagAsL9tABoB4G4bTk9Px65duzB06FA0bNhQTGaCJCYmYvjw4bzrPwEAXVq1wr4FC9DMz09QZoTw9Q8Oht5gwCFO/3qdToeoqCiMHj0azZo1E5idPBgMBrz44otYuXKluaHnAIwCoLZ9VgSgAkAudsD4j34Yb1BeXh5WrVqFwMBApzkmmJycjGHDhpnrAoZurVtj75tvorGvr6DMCLHMkI4dodZqcZRzYkWtVmPr1q2YOHEi6tevLzA7+9Lr9Zg1axZ+/fVXc0PzYNwTxZ8CJFZFBYB8HIWxV8AwcG5prKiowKZNm1BQUIBhw4Y59CUhFy9exJAhQ1BYWMgd1yMgAHveeAON6tQRlBkhVTO0Y0fcKCvDSc7O9tLSUsTExGDq1KnwdYFCVqfTYfr06ZZM+5cDeBzGE1JEILp9Rn7mAPgegNkne3h4OLZs2YKgoCDbZ2VlOTk5GDBgAK5cucId17ddO8S+9hr8nPwqVOL4JEnCrNWrsSo+njsuIiIC+/fvd+oioKysDE8//TSio6PNDVUDGANgr+2zIg+iAkCehgJYD+PeAK42bdrgxIkTDrW2WFhYiIEDByLNTGvV/sHBiJk/H3Xp4U8chN5gwNSff8Ym/jE3DBkyBLGxsfD29haUmThXr17FmDFjcPbsWXNDNQDGw7gESuyAlgDk6TKAjQCGAOA+2e/cuQM/Pz+HuYTk5s2bGDx4MFLNtFQd2rEjYl59Fb5O+AZJnJebQoExXbrgYEYGrnD2tVy+fBlZWVmYMGGCU10DfuLECQwbNgwXzdygCGMflCkAYmyfFWGhAkC+igH8DuCRu19MLVq0wMSJE4UkVRMlJSUYMWKE2U8GvYOCEPPqq6hDD3/igDzd3TGxe3fsTElBPqfV7fnz56HVajHUSe6wWLduHcaPH4/iYrPN+7QAngYQZfusCI9zd5ZxfGUAJgLg9sQNDAwUkkxNqNVqREZG4tSpU9xxPQICsOO11+iTP3Fo9WrVwvb58832q1i8eLElO+RlTalUYs6cOXjqqaegUqnMDS8HMBbAJttnRsxxnrkn59UXxq6BJvn5+eH8+fNo06aNwJSqRpIki3YDd2jWDAffeovO+ROncbGwEP3+8x8UcGYCPD09sWPHDoecCTh//jymTZuGC5yOiPcphPEOlJO2zYpYimYA5O81VqB+/frYt2+frB/+ALBw4UKzD//2TZsibuFCevgTp9K+aVNEv/IKd0ZLq9ViypQpSE9PF5hZzS1btgy9evWy9OF/CcYPM/TwlxEqAOStCYy7ZE166aWXZH/l6NKlS7FkyRLumDYNG2LfggVoUa+eoKwIESciMBAb5syBB+cuj6KiIkRGRprthikX77//Pl555RWo1RY17TsG48Pf7M5AIhYtAcjb6zBejPEQT09PZGVloVWrVoJTstzWrVsxYcIEGAzs67xb1KuHg2+9heCmTQVmRoh4Kw4dwjwzM2EDBgzA7t27ZX08MCMjA4888gj35/o+KwC8AeORPyIzNAMgbzNYgYkTJ8r64Z+eno4ZM2Zw3yTq+vgg9tVX6eFPXMLcAQOwYBi32zcOHTqEmTNnQpLkexfOsWPHLHn4qwDMBDAP9PCXLSoA5KszOLcEzpw5U1wmVVRSUoJx48bhzp07zDGe7u7YNHcuurZuLTAzQuzr60mT8GSXLtwx69atw+LFiwVlVHWNzN/EmQWgD4DfbJ8NqQkqAORrMivQvHlz2e4YliQJL7zwArfLn0KhwE/PPovhj3DbGxDidNwUCqydPRu9zBzd/eijjxAbGysmqSoaOHAg/PibdfcBOCMoHVIDVADI1yRW4KmnnpLtJUCLFy/Gpk38I76fPvkkZvbpIygjQuSltpcXNs+bh5acWwENBgOmT5+Oy5cvC8zMMr6+vnjmmWd4Q6YCqC0oHVIDVADIUwg43f/M/PDZTXx8PD7++GPumGkREXj/iSfEJESITLWsXx/R8+dzjwcWFRVh2rRp0Ol0AjOzzNy5c3lhPwATBKVCaoAKAHlifvoPCQlBjx49ROZikbKyMsyYMYP7ZhXeqhV+mT7dqXqfE1Jd3Vq3xvqXXoI753jgiRMn8NlnnwnMyjLh4eHow5/Fe15ULqT6qACQJ2YBMH48sy2AXc2dO5d7AUijOnUQNW8e9fcn5D6jwsLw6ZNPcsd8/vnnOHHihKCMLDdnzhxeeDAAx7un3MVQASA/gQC6soJyLADWrFnD7fTnplBg3Ysvom3jxgKzIsQxLBo5knsyQKfTYfbs2dBqtQKzMm/q1Klo0qQJK6wAMF1gOqQaqACQnwlgNGjy9/dHRESE4HT4CgsL8eqrr3LHLHriCQyjHf+EmKRQKPDbzJnci4POnz+P//73vwKzMs/b2xtPPfUUb4g8NyuRe6gAkB/m9P+4cePgxlkvtIcFCxagiHPv+WNBQfh4zBiBGRHieOrXro3fZs6EG2d/zKeffoqcHO7FoMJNmTKFFw4GECooFVIN8nqakJYAHmUF5Tb9v2vXLqxZs4YZ9/PxwZ+zZnF7oBNCjAaGhHA7BapUKixatEhgRub16dPH3GVkY0XlQqqO3pnlZTwYfyf169fHgAEDBKfDplQqMW/ePO6Y7596CkG07k+IxT4eM4bbH2DdunWy2hCoUCgwYQL3xB8VADJGBYC8MH+SxowZAy8vL5G5cH355ZfcJiWjwsIw/bHHBGZEiOPz9fbG15OYq4CQJAnvvvuuwIzMmzyZ2bQUACIAyPfSEhdHBYB8NADQnxUcN26cwFT4cnNz8c033zDjdby98T1/cxAhhGFaRAQGhYQw43FxcTh8+LDAjPh69+7Nu5hMASBSYDqkCqgAkI/hAEz2961VqxYef/xxwemwffDBBygvL2fGF48bR0f+CKmB7596irt3Rk7NgSxYBqBdwDJFBYB8jGIFHn/8cdSpU0dkLkznz5/H6tWrmfGeAQGYP3iwwIwIcT6h/v54sT9zQhC7d+9GUlKSwIz4hg8fzgsPAOPDDbEvKgDkQQFgBCsop93/ixYtgl6vZ8a/mTyZe5SJEGKZdx5/nDsLsHTpUoHZ8A0cOBCenp6ssC84V5sT+6ECQB66A2hhKuDu7o7Ro0cLTse0s2fPcq8ondS9O/oHBwvMiBDnFdioEab07MmMr1u3Dvn5+QIzYqtbty569erFGyKfI0zkHioA5IE5/d+rVy804nQIE+nLL7+EJEkmY14eHviSvw5ICKmit0eMYF6eVVFRgVWrVgnOiG3IkCG8MHs9g9gNFQDywLwf9wmZXJ176dIlbNiwgRmfO2AA2rH7ghNCqqFr69YYzmmj/dtvvwnMhm/o0KG8cH/Q80Z26C/E/hoBYM6dyaUA+Prrr5lr/14eHnhrBHMLAyGkBt7m/Gylp6cjISFBYDZsvXv35m1WbgggTGA6xAJUANjfCADupgJNmzZF9+7dBafzsNLSUvzxxx/M+HOPPYbWDRoIzIgQ1zG0Y0e0adiQGee14xbJy8vL3PsVs805sQ8qAOyPuf4/cuRIWVz+s3btWpSVlZmMubu54R0Z9SggxNkoFApM49wCumXLFhgMBoEZsfXo0YMXDheVB7GM/Z8urs0NnON/cpn+X7lyJTM2tksXBDdtKjAbQlzPU5wC4Pr16zh+/LjAbNi6deOe9qMCQGaoALCvngBMPj3d3d3NNdcQ4ty5c9zLR17iNCshhFhH19at0bF5c2Z827ZtArNhs6AAoCYhMkIFgH3J/vjfn3/+yYy1bdwYwzt1EpgNIa6LNwuwd+9egZmwderUCbVr12aF6wNoLTAdYgYVAPbFnP4fOXKkyDyYoqKimLHZ/fpR1z9CBBnP+XSdlJSEW7duCczGNHd3d3Tu3Jk3hJYBZIQKAPvxg/GqTJPksP5/4cIFZGRkmIwpFAo8+yht6iVElDB/fzRiHLMzGAw4ePCg4IxMCw/nPuO51QERiwoA+2FekNGkSRNzu2mF2Lx5MzPWMyCAezSJEGJdCoUCfdu3Z8aPHTsmMBu2tm3b8sKBgtIgFqACwH6YV+YNGzZMFsf/YmJimLFxXbsKzIQQAgADOHdtOEgB0EZUHsQ8+z9lXBezcbaZntpClJWV4dSpU8z4BP5uX0KIDfAu20pMTOTe1ClKYGAgL0wFgIxQAWAfjcDZDCOHAuDYsWPQ6XQmY4GNGnGPJBFCbKN7mzbw9fY2GVMqlbh06ZLgjB5GMwCOgwoA+3gUjO99mzZtEBQUJDidhx06dIgZGxgSIjATQkglDzc3PNLC5M3hAIwbd+2tadOmvKOAvjDeC0BkgAoA+2A2zB40aJDANNiOHDnCjPGmIQkhtsXrvCmHAkChUNAygIOgAsA+erICEZxmHyKdOXOGGeNtRCKE2FZ7TgGQlZUlMBO2Zs2a8cLsKQwiFBUA9tGOFZDD8b+8vDwUFxebjPn5+KB9kyaCMyKEVOL9/F25ckVgJmz169fnheuJyoPwUQFgH8wSvk0b+8+OpaamMmOPtGgBBXX/I8RueDMAOTk5AjNhM1MA+InKg/BRASCeApxNMHLo/5+WlsaMdeRP7RFCbIw3A5CXlycwE7YGDRrwwlQAyAQVAOLVB6MDoK+vL3x8fASn87DMzExmrCNd/UuIXTVktAMGgNLSUmi1WoHZmEYzAI6BCgDxfFkBM1WzMPn5+cxYa5nkSIircndzg4+nJzNeVFQkMBvTaA+AY6ACQDzTXTwAeDMafIh248YNZqxh7dqQBOZCCHlYXc5M4Z07dwRmYpqfH/dDPs0AyAQVAOLJvgAoKChgxprVrQs9o0MgIUSM2l5ezJgclgDMMLkESsSjAkA85k+uXAoA3gxA4zp1qAAgxM5Y7YABoKKiQmAm1UKTiDJBBYB4BmbAwAwJpVKpmDFfb2/oZHDhCCGurI7MZwAkifuMl8cbHaECwA40rIBcKnfWJUCAcQOSQa839wNOCLEhFech78nZICgTVADIBBUA4jGf8nKo3AEwrxRVKBRwu9sEiFckEEJsq1StZsbksJRo5gMCfXqQCSoAxGP+5JaXl4vMg4lVALjd1wFQJ5NihRBXxCsAvDjLAzJBBYBMUAEgnukm+5DH+V0AcHMz/c/CIEnQ392noNPpaBmAEDsp0zBXEuHry2w1IoyGkx8A2kQkE1QAiKe6+/UQtVoNpVIpOJ2H1a1b1+T/L0nS3954aBmAEPEqdDpoGD97CoVCFu3EzXyYuS0qD8JHBYB93GIFbt68KTIPk+rVYzfqunPf1GMFv8onhNjAHc4pnbp168piE+Dt29xnPBUAMkEFgH0wO+1cu3ZNZB4mcQuA+958DAYDc78AIcQ2sm8xPz+gqUzu6mBdJ14ZFpUH4aMCwD6usgJyuM+bVwDcLCv72//W0iwAIUJlcDp1BgQECMyEzcwSgDw2OxEqAOyE+ZSXQwHg7+/PjGU/8IOt1elk08CIEFeQxrmsq23btgIzYaMZAMdABYB95LACFy9eFJmHSUFBQczYgwUAQHsBCBEpLS+PGZNLAWDmQiL731ZEAFABYC+ZrMCFCxdE5mFSYGAgM3bFRAGg1WphoL0AhNicVqtFRmEhMx4aGiowG7ayB5YKH0AFgExQAWAfqayAHAoA3gxAJuOiIDPnfgkhNSRJEkqVSmRyCoCwsDCBGbHx7hMBYP+zzgQAFQD2chmMjoDFxcV2PwnQvn17Ziy1oABqE2eQdTod9QUgxIY0ajWScnKY9wD4+vrKZglAzelUCE43VCIWFQD2oQdnFuDYsWMCU3lY69at0aRJE5MxrV6PC4w1SLVaTd0BCbEBvV4PrVaLw5cuMcdEREQwu3iKJEmSuT0A8uh5TqgAsKPjrEBCQoLIPEzq1q0bM3aaMUMhGQzQ8Ct/QkgVSZIE9d0p9SNZWcxxvXv3FpUSV1FREe9m0zLQEoBsUAFgP8ynvBwKgO7duzNjSVeZbQyg1WrpoiBCrEijVsNgMEBnMOB4DvMAkWwKgELOHgVwmqAR8agAsB/mPH9SUpLdN9X16NGDGTto5qii+u4bFiGkZnRa7b1rwpOuXkU5433B09MTAwYMEJkaU3Z2Ni/MPsNIhKMCwH4yAZjcUq/RaHD69GnB6fxdnz59mLErxcXI4txZcG/KkvYDEFJtBoPhb5vptpw7xxz76KOPws/PT0RaZqWlpfHC7DUMIhwVAPYjQcb7APz9/dGpUydmPC6T2coAgHHTkor2AxBSLZIkQaVU3ttUqzcYsPnMGeb4ESNGiErNrIyMDF44XVQexDwqAOyLuQywd+9ekXmYNGzYMGbsgJkCADBOX1KXQEKq6O7D//5ltMOXLiGvpIT5S8aNGyciM4skJSXxwlQAyAgVAPZ1lBWIi4uDUmnfzbJDhw5lxnanpUHJ3ul7j0aj4e0IJoQ8QKVWP3TL5gbOkmBISAg6d+5s67QsUlFRgXOcpQoA3CARiwoA+4oHYLKsV6lU2L9/v+B0/m7QoEHMu8VVWi32pFtWzGvUamipCCDELLVK9dApGpVWi23JycxfM3nyZFunZbFz587xmgAVA7D/ZSfkHioA7KsCAHOuPzY2VmAqD/Pz88PgwYOZ8S1nz1r8e6mpCCCES61S3dvxf781p07hDqO1rkKhwHPPPWfr1Cy2e/duXvgkjHufiExQAWB/zKd8TEyMyDxMmjhxIjMWk5KCG/xLP/5GrVbb/XgjIXLEevjrDQb879Ah5q/r27cvQkJCbJlalezcuZMXtn+DE/I3VADYXywYVfGVK1eQkpIiOJ2/Gz9+PHMZQKPT4Y+TJ6v0+1VoNHREkJC7Knf7m3r4A8DW8+e5R25ffPFFW6VWZcXFxeZOL9l/ZzP5GyoA7C8PAHOHz9atWwWm8rAmTZpgzJgxzPjKhAToq9j0R6vVQvnALmdCXE3lw593ida3Bw4wY61atcK0adNskFn17N69m/dnKQNwQmA6xAJUAMgDcxlg3bp1IvMwifcp40pxMTZxziez6PV6KMvLH9rtTIgrsOTf//6MDJzh3Ay6YMECeHl52SK9ajGzZykOxj1PREYU9k6AAAB6gdMU6Pz583a959tgMCA4OBhZjItI2jdpgpNvvQX3at5E5uXtDW8vL0BB/xxtQa/Xw2AwwKDXQ28wQDIY7jWYqfyvws0NChg3lbm5u8PdzQ1u7u5wc3ODgv5erKpCozG7F0ZnMKDfkiW4kJ9vMt6wYUNkZ2ejbt26tkixyioqKtCyZUvcZC9XzAawUmBKxAI0AyAPJ8A5HrN27VqBqTzMzc0NCxcuZMYv3riB9fzmH1wVGg3Ky8tpScBKJEmCTqeDWq1GWWkplOXlUKtUqKiogF6ng+FuAXD/1c2SwQCDwWC8draiAmq1GsrycpSVlRnXqCsq6KrnGpIMBqiUSos2wv589Cjz4Q8AL7/8smwe/gCwbds23sPfAGC7wHSIhai0l4/FABaZCgQFBeHixYt2/SSmUqnQtm1bFBSYvsyrhZ8fEt95B77e3jV6HS9vb3h5e9M/zGowGAzQVlRAq9Xa7GHt4eEBL29vuLu72+T3d1aVBZlkQZFbWFqK7l99hRLGefpatWohOzsbTZs2tXaa1TZq1Cjs2LGDFY4DMERgOsRCNAMgH8yP+VlZWThxwr77Z2rVqoW33nqLGc8rKcGXe/bU+HUqNBqUl5XRlcJVYDAYoFapUF5Whgobf1LX6XRQlpdDqVRCz9m8RowkSYJaqTT29bdwhuufsbHMhz8AvP7667J6+F+/ft3c+f9fBaVCqogKAPk4D4B55s/eywAAMH/+fLRp04YZX37kCM7l5tb4dSSDAaq7DzQqBNjuf/CzjpHZil6ng1KppI2cHFqt1vh3U4VC6UBmJtYkJjLjzZo1w6JFJicK7ebXX3/l/RsoAbBJYDqkCqgAkBfmlv81a9bYvae+j48P/vWvfzHjWr0eL61dC7WVPhka7hYCyvJy7lEpV6PX6e4VSKIf/A/lcnc3u1KppELgrsrviVqlqtJszI2yMry0bh3313z22WeyufYXMP6Mrlq1ijfkLwDlgtIhVUQFgLysBaMp0I0bNxAdHS04nYc9++yz6NOnDzN+IT8fn7DXAqtFr9dDpVTK4oFnT1qtFuV3H7ZymxnR310aULnw0sC9YqgasyIGScKcdeuQz7nxr2/fvnjhhRdqmqZVRUVF4dKlS7wh/ycqF1J1VADIyyVwjgOuXGn/UzRubm748ccfmd0BAWDZ4cPYXIV7AixVOeVdVloKjVrtEqcG9Hr9vd38apUKBpl/ytbdXRooLy93mZMDer2+xsshSw8cwF7O5VoeHh744Ycf4FbNo7a28tVXX/HCaaD2v7Imr39NBOBUzLt378Y1TmMQUcLCwrgbAiVJwisbNiCVcWKgpiRJQkVFBcrLyqAsL7f5xjfR9Ho9NGr1vT+fIz5IDXcLl/KyMmjU6ip3i5Q7SZLurfEry8trNOuRcPkyPtu1izvmww8/RJcuXar9GrZw4MABHD/O/LwCAD+KyoVUD53lkZ8MAK8BeKjFlyRJaNSoEQYMGCA+qwcMGDAAO3fuRC5j059Wr8eOlBSMCw+Hn4+PzfKQJAl6ne7eGXdJkqBQKKCQ2SclHgmAXquFVquFRq02/ln0eod76LNU9hao3MehUCgctrmQXq9HRUUFNGo1dFY4bplWUIBxP/+Mcs7+noiICKxatUp2Ry/nzp3Lm/4vBjAd1P1P1hzzp9D5/QpghqlA27ZtcfHiRVlMBaampqJHjx5QMa4qBYCwFi2w8+WXbVoEmKJwc4OHuzvc3d3h7uEhi+9XJUmSoNfrjV86nUtunqv8e/Hw8JDdg+1Ber0eOq0WurtNlKzl2u3bGP7997h+5w5zTN26dZGUlIT27dtb7XWt4ezZs+jWrRuvAPoMwIcCUyLVIO+fPNdVBOB5U4Hbt2+jf//+CAoKEpzSw5o0aYLAwEBs3ryZOaawrAz7MzMxLjwctTj7BqxOkmAwGKDT6YzNce5+AjXc1wZXxCfRyu56Oq0WFRUV99rA6rRap/qUX1WVRZBWq4W2ouLeEoEcZgcMej1093VE1NpgRqZIqUTkihW4XFTEHKNQKPD777+jf//+Vntda5k/fz4uXLjACqsAPA3a/S97VADIUw6AaQAamwoqlUpMmTJFbEYM4eHhKCoq4jYqyi8pweFLlzA+PBw+IouAB1Q+dHQ6HbR3H8iVhYHu7idxw92++ZLBAIMk3eub/9DX3da5lf319Xd/D51Wi4q7U/kajcb4+9992N9ffJC/s0uxJkkwVP6buO/vreK+17eFErUak1auNNszY+HChViwYIFNcqiJU6dO4c033+QN+QXG439E5mgJQL7eBfCFqYCHhwdycnLg7+8vOCXTtFotRo0ahb17+dd9P9KsGdY//zwCGzUSlBlxJgqFwng5kZsb3BQK4G5RcO/LxK+RJAlS5X/vK+gMdws40fJLSjBx5UqcN/PwHzlyJKKjo+Hh4SEoM8uNGDECe9hdP/UAOoJztwmRDyoA5Ks5jDMBJu/7/OSTT/DRRx+JzYijtLQUAwcOxOnTp7njGtSujd+few4D2rUTlBkh8nD51i2M/+UXZLEvzQEAhIaG4ujRo6hXr56gzCwXFxeHIUO4bf1/B/CcoHRIDVEBIG/rAZic62/VqhWys7NltYEqLy8P/fv3N9cYBF7u7vjv+PGY8eijgjIjxL5OXbmCyf/3f7hVzl8WDwwMxOHDh9GqVStBmVVNnz59kJDAPNqvBfAIjP1MiAOgAkDeBgPYzwpGRUVh7NixAtMx7+rVqxg0aBCysrLMjp3duzc+i4xEbS+TkxykBnKKipCcl4fzublIKyjArfJy3FGrcVulwh2VCrU8PVHPxwd+tWqhno8PWtavj3B/f3Rp2RKhLVqI3bDp5NYmJmLB5s1Qmmnl7e/vj0OHDqGdTGfHtmzZggkTJvCGLAfwsqB0iBVQASBvChgvCHrkwYCPjw/+/e9/47XXXhOflRlXrlzBkCFDzM4EAEBQ48ZYPmUKerdtKyAz51Wm0WBPejqik5OxNy0NtzlHM83xcHNDp+bNMTo0FGPDw9GpeXMrZuo6yjUavLllC9ZyLvep1Lx5c+zbtw+dOnUSkFnVaTQahIaG8n6mlQCCAdT8NjAiDBUA8vcGgCWV/8PPz089b948n9dee002mwBNKSgowOjRo5FowZufm0KBVwYMwIcjR8JHhpue5EqSJOxJT8cv8fE4kJlptUuYHhTStCnGh4fjhd690UJGF9HIWXJeHmb+8QcyCgvNjg0ICMCePXsQHBwsILPqWbx4Md5//33ekH/DuHGZOBAqAOSvAYBrANIBfFtQUJDbtGlT5hZcOSktLcWkSZPM3RV+T/smTfDZ6NEYFRpq48wcW4Vejw2nT+O7Awds1m7ZFG8PDzwbEYE3Bg1CQMOGwl7XkWh0OiyJi8M3+/dbVJB17NgRu3bt4l6zbW+5ubno0KEDysrKWENuA2gHY/8S4kCoAHAMITC2CAYASJJ0HkCY/dKxnE6nwzvvvIMlS5aYH3xXv6AgfD5mDLrJdCOUvai0Wqw6dgzfHTyIXE73OFvzcHPDpG7d8M7QoWjfpInd8pCbw5cuYcHmzRZ96geAwYMHY9OmTWjQoIGNM6uZGTNmYPXq1bwhb+K+WUriOKgAcECSJM0H8D9751EVf/zxB+bMmQOlUmnReIVCgcnduuHtoUPRoWlTG2cnb+UaDX5OSMD/Dh7EDfanMOE83NwwtXt3vDt8uEvPCOSVlOCTHTuwNjHR4kZPs2bNwrJly+Al8w2wx44dQ58+fXh/rjQA4TCeACAOhgoAByRJUl0A1wHUtXcuVZGamoqnn34aZ86csfjXuCkYGuSFAAATxUlEQVQUGNmpE14fONDlNgpevnULP8fH44+TJ2u0qc/WPN3d8WxEBN4eOhSt6te3dzrC3Cgrw5K4OKxMSIBKa9nzz9fXFz/88AOee07+R+UlScJjjz3G7fIJYBSAHYJSIlZGBYCDkiTpRwAv2TuPqtJoNHjvvfewdOnSKl+C0ysgALN69xZ/r4BAWr0ee9PTsTIhAXvT02GoZutgDw8PdOvWDV26dEHnzp0RGhqK+vXro0GDBvD19YVer0dRURGKi4tRWFiI06dPIzExEYmJiSi0cAr7QZ7u7hgTFoY5ffs6dbFWpFTifwcPYsXRoyjXaCz+deHh4Vi/fj06duxow+ys59dff8Xzz5u8kqTSdgBjBKVDbIAKAAclSVIXAJZ/lJaZ48ePY/bs2UhOTq7yr63r44OJXbrgmZ490SsgwO6Xx9SUJEk4lp2NDadPY/PZsyiycJnkQXXq1METTzyBsWPHYtSoUWhYzWn5pKQkbNy4ERs2bMDFi9Xr6Bru74+X+vbF5G7dnKZYO33tGn6Oj8emM2cs/sRfac6cOViyZAlq1aplo+ysq7S0FB06dEBeXh5rSAWMU//p4rIi1ubY75wuTpKkBACP2TuP6qqoqMA333yDzz//nLfDmMu/Xj2MDg1FZGgo+rVrB08ZdUbkUWm1iMvIwK60NOxOTeVeCWtO8+bN8eqrr2Lu3LnVfuizHD58GF988QV27KjeLG9dHx9EhoZiUteuGBQc7DB/P5VK1WpEJyfj5/h4JF69WuVf365dOyxbtgwjRoywQXa2849//ANfffUVb8jXAN4WlA6xESoAHJgkSTMBrLJ3HjWVl5eH9957D6tXr67RBS1+Pj7oGxSE/u3aoX+7dghr0QLubm5WzLT6lBUVOHX1KhIuX0b85ctIyMqq8bn9oKAgvPvuu3juuefg7e1tpUxNS0pKwmeffYaoqKhq32jYsHZtjA0Px5NhYegTFCTbmYHbKhV2XLiAqHPnEJeRUa2/Jy8vL7z99tt4//33HeZTf6VLly4hNDQUGvbyRiGMJ5PsdxSFWAUVAA5MkqRaMHbecoqdV8nJyfj444+xefNmq1yb6+fjg64tWyK8Zct7/w1q3BheNv4UelulQnJeHi7k5SE5Lw9nr1/H+dxc6Kx0+1xISAjee+89PPPMM8Jvi0tKSsJHH32EmJiYGv0+3h4eeCwwEIOCgzE4OBhdW7Uy3vBnBxV6PRKvXMGRrCwcuXQJR7OyUFHF/Sn369+/P1asWCHbrn7mjB07Ftu2beMNeRHGK3+Jg6MCwMFJkrQcwFx752FNZ8+exRdffIFNmzZBZ+Xudu5ubvCvVw9BjRohsFEj+Pv5oZGvLxrXqYMmvr6o6+2Nuj4+cFco4OPpCR9PT+gNBpSq1QAAvSThVnk5ipRKFN39b15JCa4UFSGnuBhXioqqvYZvTu/evfHaa69h8uTJdr8EKiEhAR988AH272deVVEldby9EdaiBbr4+yO8ZUt0adkSHZo1s3pnSJVWi4zCQqQXFOBCfj4Sr17FiZycKq/pm9KtWzd8+umniIyMtEKm9rF3714MHz6cN+Q0gJ4AxN+lTKyOCgAH5+ibAXlycnKwdOlS/N///R/u2LHxjT3VqlULTz31FF555RV0797d3uk85MSJE/j222+xceNGaK3wEH1Qs7p10bpBA7Rp0ACt6tdHcz8/1PHyQr1atVDbywu1vbzg5+2N2yoVKueMlBUVKNdocKOsDHklJSgsK0NBaSlyioqQU1QEvZVmYiqFhobik08+wYQJExx6Q6pWq0V4eDjS0tJ4wwYCOCQoJUKIOZIkJUpOTKlUSr///rs0ZMgQyc3NTQLg1F8KhULq37+/tHz5cunWrVv2/vZb5Nq1a9KiRYukRo0a2f37J+qrd+/e0tq1ayW9Xm/vb79VfP311+b+zGtBCJEXSZLm2fvNQ5TLly9L//rXv6Tu3bvb/QFgzS+FQiH17NlT+uKLL6ScnBx7f5urTaVSSevXr5ciIyMlT09Pu39frf1Vu3ZtadasWVJionPV3Pn5+VK9evV4f/ZyAAEm3n4IIfYkSVI9SZLK7f0mIlp2drb07bffSoMHD5a8vb3t/nCo6lfdunWlCRMmSL/88ouUl5dn72+n1RUUFEhLly6VHn30UUmhUNj9+13dL4VCIT366KPSkiVLpKKiInt/W21i5syZ5r4P3KsAiWNy3AUr8jeSJP0KYIa987AXlUqFY8eO4cCBA4iLi8PJkyehvrtxTy6aNWuGPn36oH///ujbty+6d+8ufBe/veTn5yM2NhYxMTHYvXt3tfs+iOLu7o7+/ftjwoQJGD9+PFo58cVUiYmJ6NWrF+8IbhaAUADy+oEiNUYFgJOQJKkvgCP2zkMudDodUlNTcfr0aSQlJeHs2bPIzMzE9evXbf7a3t7eaNu2LTp37nyvFW94eDgCAwNt/tqOQKPR4OjRozhy5AgSEhKQkJBg902ebm5uCA0NRf/+/dGvXz8MGzYMTVzgpkNJktC7d28cP36cN2w8gChBKRGBqABwIpIkZQJob+885EytViMrKwuXLl3ClStXcOPGDdy8eROFhYUoLCy898m0uLgYAKDX6+8dufP09ISvry+8vb3RqFGje19NmjRBq1atEBgYiLZt26JFixYOvRtcNIPBgJSUFBw/fhwpKSm4cOECUlNTcbUanfcs4eXlhXbt2qFjx47o2LEj+vTpg759+8r+Wl5bsKDf/z4AwwSlQwSjdyknIknSYgCL7J0HIdZQUlKCjIwM5ObmIjc3F/n5+bh+/Try8/OhVquhVCqh0Wju/RcAfHx8ULt27b8VaJVfAQEB6NixI9q2besySy885eXlCA4O5vX71wLoCuCCuKyISPRT4FzWgQoA4iT8/PzQs2dPe6fhtP7zn//wHv4A8D3o4e/UaAbAyUiSlAzjhh1CCDGpsLAQ7du3R2lpKXMIgA4AbovLiogmj5tSiDWtt3cChBB5+/jjj3kPfwD4APTwd3o0A+BkJEkKBpBR+b+LioqsfkUsIcRxpaenIywsjHfPRgqALgCqfyMScQg0A+BkFApFpk6nS46Ojsbw4cPRr18/e6dECJGRjz/+2NwlW++AHv4ugWYAnEtzADPq16//3u3bt/0q/8+LFy+iXbt2dkyLECIHqampCAsL4zX9OQhgkLiMiD3RDIDz+C+AKwC+vP/hDwCxsbH2yYgQIiv/+te/eA9/CcBbAtMhdkYFgPOQAHiaCuzYsUNwKoQQuUlNTcX69dw9wpsBnBKUDpEBKgCcx3ZWIC4uDkqlUmQuhBCZ+fzzz819+v9UYDpEBqgAcB5HwDi2o1arERcXJzgdQohcXL9+HX/99RdvyCYA5wSlQ2SCCgDnoQOwixWkfQCEuK7//e9/0Gq1rLAE4DOB6RCZoFMAzuVZAL+bCgQGBuLy5cuC0yGE2JtSqUTr1q1RVFTEGrIZwESBKRGZoBkA57ITjPO72dnZSElJEZwOIcTeVq9ezXv4A8A3onIh8kIFgHO5CSCRFaTTAIS4FkmS8N133/GGJAI4KigdIjNUADifPawA7QMgxLXs2LEDqampvCFLROVC5If2ADifATB283qIp6cnioqK4OvrKzglQog9PP7449i9ezcrnAugLYAKcRkROaEZAOdzDECZqYBWq8XRozTbR4gruHz5Mvbu3csbsgz08HdpVAA4nwoAB1jBAweYIUKIE1m5ciWv8Y8KwI8C0yEyRAWAc2LuA6CGQIQ4P71ej19//ZU3ZA2Mm4aJC6MCwDkxC4DExESUlpaKzIUQItiOHTtw/fp13pCfReVC5IsKAOeUBqDQVECn0+HIkSOC0yGEiLRy5UpeOBnAcUGpEBmjAsA5SQAOs4K0D4AQ51VQUICYmBjeEG51QFwHFQDOiwoAQlzQr7/+yuv7XwHgT4HpEBmjPgDOqxuAJFMBDw8P3Lp1C35+foJTIoTY2iOPPIK0tDRW+C8AUwWmQ2SMZgCc11kwrgfW6XQ4fJg5QUAIcVBHjhzhPfwB4P9E5ULkjwoA52UAp8f3wYMmmwUSQhzYn39yZ/evAeB2BiKuhQoA53aIFaB9AIQ4l4qKCmzYsIE3ZCUYt4US10QFgHNjFgBJSUm4c+eOyFwIITYUGxuLW7duscISgN8EpkMcABUAzi0RQLmpgF6vR0JCguB0CCG2Ymb6Px7AZUGpEAdBBYBz0wJgPuWpACDEOZSUlJg7+09H/8hDqABwfszt/vHx8SLzIITYyF9//QWVSsUKawFwNwcQ10QFgPNj7gM4fvw49HraE0SIozMz/b8DdPEPMYEKAOd3DIDaVKC0tBQpKSmC0yGEWNPVq1dx6BCzzgdo+p8wUAHg/NQATrGCtAxAiGNbs2YNDAYDK1wCIFpgOsSBUAHgGpgNgWgjICGObd26dbzwZgDMzQHEtVEB4BqYV39SAUCI48rIyMCZM2d4Q2j6nzBRAeAamAXAxYsXcePGDZG5EEKsxEznvzwAcYJSIQ6ICgDXkAtjH/CHSJJEswCEOKj169fzwhtArX8JBxUAruMYK0AFACGOJy0tDefPn+cNobP/hIsKANdB+wAIcSJmNv9dg7H9LyFMVAC4DmYBcOLECWi1WpG5EEJqyMz6/wYYrwQnhIkKANeRCEBnKqBSqcxNJRJCZCQ5ORkXLlzgDdkoKhfiuKgAcB1KAMms4KlTzF5BhBCZMbP57yo4l4ARUokKANfC3Ah48uRJkXkQQmpg40buB/wNACRBqRAHRgWAa2HuA6AZAEIcQ0pKCtLS0nhDuNMDhFSiAsC1MAuA5ORk3nWihBCZ2Lx5My+cDYCm84hFqABwLekA7pgK6HQ6cy1FCSEyEBUVxQtvBE3/EwtRAeBaDOB8OqB9AITIW3Z2Nk6fPs0bwp0eIOR+VAC4HtoHQIiDioqKgiQxP+DngfPzTciDqABwPTQDQIiD2rRpEy+8BdT8h1SBwt4JEOFaA7hiKqBQKFBcXIx69eoJTokQYk5BQQFatmwJvZ55v89wAHsFpkQcHM0AuJ6rAApMBSRJMre+SAixk6ioKN7D/zaAgwLTIU6ACgDXxHzK0zIAIfK0ZcsWXngrALrQg1QJFQCuKYkVoI2AhMjPnTt3EBcXxxvCrQ4IMYUKANeUyAwkMkOEEDuJiYlBRUUFK1wOYI/AdIiToALANTFnALKyslBSUiIyF0KIGWa6/+2E8bIvQqqECgDXlA3gpqmAJEk4d+6c2GwIIUwqlQo7d+7kDaHpf1ItVAC4LuZGQGoJTIh87Nq1C+Xl5aywFkCswHSIE6ECwHUxlwHOnj0rMg9CCIeZ3f/7ABQLSoU4GSoAXBcVAITInFarxfbt23lDaPqfVBsVAK6Lud0/OTkZOp1OZC6EEBMOHDiAoqIiVtgAYJvAdIiToQLAdWUBMPnOolKpkJGRITgdQsiDzEz/HwWQLygV4oSoAHBdEgDmbj9aBiDEvgwGA6KionhDaPqf1AgVAK6NTgIQIlMnTpxAXl4ebwi3OiDEHCoAXNt5VoBmAAixr23buMv7SQAuC0qFOCkqAFwbs+MPFQCE2Fd0dDQvTJ/+SY0p7J0AsStvAKUAPE0F8/Pz0axZM7EZEUKQlZWFdu3a8YaEgzODR4glaAbAtWkAMLf70z4AQuxj69atvHAO6OFPrIAKAMJ8I6ECgBD7oOl/IgIVAIQ2AhIiI7dv38aRI0d4Q7jVASGWogKA0EZAQmQkJiYGWq2WFb4D4LDAdIgTowKAMAuA9PR0KJV0zTghIpmZ/t8BoEJQKsTJUQFArgC4bSqg1+uRkpIiOB1CXJdWq8WuXbt4Q2j6n1gNFQAEoH0AhMjCgQMHcPu2yXocAHQwzgAQYhVUABCA9gEQIgtmpv8PASgWlApxAVQAEICOAhIiC9u3b+eFafqfWBUVAATgzACcO3cOkiSJzIUQl3T27Flcvsxt78+tDgipKioACAAkw3g98ENKSkrMvSkRQqzAzPR/CoCLglIhLoIKAAIY7wNgPuUvXLggMBVCXJOZ2/+4vYEJqQ4qAEgl5jIAHQUkxLZyc3Nx6tQp3hBa/ydWRwUAqcTcCJicnCwyD0Jczvbt23l7bQoAnBCYDnERVACQSswZAFoCIMS2zNz+Fw3AICgV4kIU9k6AyEYHAGmmArVq1UJpaSnc3d0Fp0SI8ysvL0fjxo2hVqtZQ8YC4G4QIKQ6aAaAVLoIwGTjf5VKRScBCLGRnTt38h7+KgB7BaZDXAgVAKSSHsajRibRRkBCbMPM7v/dYBTmhNQUFQDkfsyNgFQAEGJ9er0esbGxvCG0+5/YDBUA5H5UABAiUHx8PG7evMkKGwDECEyHuBgqAMj9aAmAEIHM7P4/DiBfUCrEBVEBQO6XygqkpaVBp9OJzIUQp2em/S/t/Cc2RQUAud81AHdMBTQaDbKysgSnQ4jzunDhAjIyMnhDqAAgNkUFAHkQcxaAlgEIsR4z0/+XAFAHLmJTVACQBzHfdKgAIMR6aPqf2JuHvRMgssMsALZu3QpPT0+RuRDilHQ6HY4fP84bslFULsR1UStg8qBRoKNHhNjTVQABAJi3AxFiDbQEQB5E646E2NdfoIc/EYAKAPKgHABl9k6CEBe2wd4JENdABQB5kAROR0BCiE1lAThh7ySIa6ACgJhCn0AIsY9vQdP/RBC64J2YcgpAKIBO9k6EEBeyF8ACGO8AIMTm6BQA4RkAoCcAOvtHiO1oACQBOAz69E8IIYQQQgghhBBCrOr/AVWcHfSyBD88AAAAAElFTkSuQmCC"
                ></image>
            </defs>
        </svg>
    )
}


export const EnergyIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="27"
            fill="none"
            viewBox="0 0 15 27"
        >
            <path
                fill="url(#paint0_linear_67_34657)"
                d="M14.57 0H2.88L.94 14.003l3.367-.015-1.6 12.462L14.302 7.742h-3.367L14.57 0z"
            ></path>
            <path
                fill="url(#paint1_linear_67_34657)"
                d="M10.945 9.53l-4.62.017L8.29 1.419H4.9L3.27 11.664l4.62-.016-2.96 8.792 6.016-10.91z"
            ></path>
            <path
                fill="url(#paint2_linear_67_34657)"
                d="M.939 14.003l4.435-1.093-2.669 13.54 1.6-12.462-3.366.015z"
            ></path>
            <path
                fill="url(#paint3_linear_67_34657)"
                d="M14.303 7.742l-4.573.765L14.57 0l-3.634 7.742h3.367z"
            ></path>
            <defs>
                <linearGradient
                    id="paint0_linear_67_34657"
                    x1="7.753"
                    x2="7.753"
                    y1="-10.852"
                    y2="18.843"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#EBFFBF"></stop>
                    <stop offset="1" stopColor="#13801E"></stop>
                </linearGradient>
                <linearGradient
                    id="paint1_linear_67_34657"
                    x1="7.108"
                    x2="7.108"
                    y1="-21.112"
                    y2="16.132"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                    id="paint2_linear_67_34657"
                    x1="3.156"
                    x2="3.156"
                    y1="0.619"
                    y2="13.012"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#AFFED3"></stop>
                    <stop offset="1" stopColor="#198149"></stop>
                </linearGradient>
                <linearGradient
                    id="paint3_linear_67_34657"
                    x1="12.149"
                    x2="12.149"
                    y1="-7.722"
                    y2="0.064"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#AFFED3"></stop>
                    <stop offset="1" stopColor="#198149"></stop>
                </linearGradient>
            </defs>
        </svg>
    )
}


export const MonetaIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="none"
            viewBox="0 0 45 45"
            {...props}
        >
            <path
                fill="#EBA400"
                d="M44.996 22.503c.082 12.82-11.01 23.332-23.885 22.445-.24 0-.476-.03-.704-.056a1.959 1.959 0 01-.223-.022 22.146 22.146 0 01-4.688-1.003 22.196 22.196 0 01-7.167-3.912 18.26 18.26 0 01-1.115-.974 17.483 17.483 0 01-1.552-1.586 17.845 17.845 0 01-1.287-1.592 20.982 20.982 0 01-1.866-2.976A22.671 22.671 0 011.282 30c-.094-.291-.197-.587-.291-.888a7.046 7.046 0 01-.125-.428 20.994 20.994 0 01-.656-3.195 19.912 19.912 0 01-.18-2.03C-.87 5.921 18.7-5.873 33.76 3.056a22.536 22.536 0 0111.236 19.447z"
            ></path>
            <path
                fill="#EBA400"
                d="M44.98 23.45a22.513 22.513 0 01-23.87 21.498c-.24 0-.476-.03-.703-.056a1.961 1.961 0 01-.223-.022 21.38 21.38 0 01-3.86-.746c-.27-.077-.558-.163-.828-.257a22.193 22.193 0 01-7.167-3.912c-.377-.304-.759-.635-1.115-.973a17.496 17.496 0 01-1.553-1.587 16.438 16.438 0 01-1.286-1.592 20.982 20.982 0 01-1.866-2.976A22.679 22.679 0 011.282 30c-.094-.291-.197-.587-.291-.887a7.068 7.068 0 01-.125-.43 20.992 20.992 0 01-.656-3.195 19.908 19.908 0 01-.18-2.029l44.95-.008z"
            ></path>
            <path
                fill="#EBA400"
                d="M43.105 22.507a20.587 20.587 0 01-20.588 20.588C-4.79 42.01-4.787 3 22.517 1.92a20.587 20.587 0 0120.588 20.587z"
                opacity="0.39"
            ></path>
            <path
                fill="#EBA400"
                d="M37.722 22.507a15.205 15.205 0 01-15.205 15.205c-20.158-.802-20.158-29.595 0-30.41a15.204 15.204 0 0115.205 15.205z"
            ></path>
            <g style={{ mixBlendMode: "screen" }} fill="#EBA400" opacity="0.33">
                <path d="M33.763 3.048L3.053 33.77c-.18-.309-.36-.622-.523-.943A22.677 22.677 0 011.304 30L30.006 1.28a21.525 21.525 0 013.757 1.768zM43.873 15.49L15.505 43.867a22.196 22.196 0 01-7.167-3.912c-.378-.304-.76-.635-1.115-.974a17.484 17.484 0 01-1.553-1.587L37.409 5.657a22.303 22.303 0 016.464 9.834z"></path>
            </g>
            <path
                style={{ mixBlendMode: "soft-light" }}
                fill="url(#paint0_linear_67_24546)"
                d="M44.439 22.507a21.926 21.926 0 01-21.926 21.926C-6.57 43.279-6.562 1.73 22.513.582A21.926 21.926 0 0144.44 22.507z"
            ></path>
            <path
                fill="#EBA400"
                d="M26.472 20.153h-.082c.211-.558.293-1.156.24-1.75a4.092 4.092 0 00-4.07-3.68 4.022 4.022 0 00-3.74 5.43h-.257a4.032 4.032 0 102.728 6.995l-.326.986a1.62 1.62 0 001.544 2.145 1.622 1.622 0 001.54-2.145l-.326-.986a4.032 4.032 0 102.749-6.995z"
            ></path>
            <path
                fill="#EBA400"
                d="M26.472 20.153h-.082c.211-.558.293-1.156.24-1.75a4.092 4.092 0 00-4.07-3.68 4.022 4.022 0 00-3.74 5.43h-.257a4.032 4.032 0 102.728 6.995l-.326.986a1.62 1.62 0 001.544 2.145 1.622 1.622 0 001.54-2.145l-.326-.986a4.032 4.032 0 102.749-6.995z"
                opacity="0.41"
            ></path>
            <path
                fill="#EBA400"
                d="M26.472 19.797h-.082c.211-.56.293-1.16.24-1.754a4.092 4.092 0 00-4.07-3.68 4.029 4.029 0 00-3.718 5.442h-.258a4.031 4.031 0 102.728 6.992l-.326.99a1.626 1.626 0 001.544 2.145 1.62 1.62 0 001.54-2.145l-.326-.99a4.03 4.03 0 102.728-6.992v-.008z"
            ></path>
            <path
                fill="#EBA400"
                d="M26.472 19.797h-.082c.211-.56.293-1.16.24-1.754a4.092 4.092 0 00-4.07-3.68 4.029 4.029 0 00-3.718 5.442h-.258a4.031 4.031 0 102.728 6.992l-.326.99a1.626 1.626 0 001.544 2.145 1.62 1.62 0 001.54-2.145l-.326-.99a4.03 4.03 0 102.728-6.992v-.008z"
                opacity="0.59"
            ></path>
            <defs>
                <linearGradient
                    id="paint0_linear_67_24546"
                    x1="22.569"
                    x2="22.569"
                    y1="44.433"
                    y2="2.885"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.38" stopColor="#AF5EE7" stopOpacity="0"></stop>
                    <stop offset="0.44" stopColor="#BA74EA" stopOpacity="0.14"></stop>
                    <stop offset="0.55" stopColor="#D2A5F2" stopOpacity="0.44"></stop>
                    <stop offset="0.66" stopColor="#E6CCF7" stopOpacity="0.68"></stop>
                    <stop offset="0.75" stopColor="#F3E8FC" stopOpacity="0.85"></stop>
                    <stop offset="0.82" stopColor="#FCF9FE" stopOpacity="0.96"></stop>
                    <stop offset="0.86" stopColor="#fff"></stop>
                </linearGradient>
            </defs>
        </svg>
    )
}


export const RefreshIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="none"
            viewBox="0 0 18 18"
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.125"
                d="M16.5 9c0 4.14-3.36 7.5-7.5 7.5-4.14 0-6.668-4.17-6.668-4.17m0 0h3.39m-3.39 0v3.75M1.5 9c0-4.14 3.33-7.5 7.5-7.5 5.002 0 7.5 4.17 7.5 4.17m0 0V1.92m0 3.75h-3.33"
            ></path>
        </svg>
    )
}

export const CopyIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#1C1F24"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M16 12.9v4.2c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9z"
            ></path>
            <path
                stroke="#1C1F24"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16v-3.1C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9z"
            ></path>
        </svg>
    )
}

export const DotIcon = (props) => {
    return (
        <svg width="4" height="3" viewBox="0 0 4 3" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M0.848789 1.567C0.848789 1.23767 0.957122 0.969 1.17379 0.761C1.39912 0.544333 1.67646 0.436 2.00579 0.436C2.33512 0.436 2.60812 0.544333 2.82479 0.761C3.05012 0.969 3.16279 1.23767 3.16279 1.567C3.16279 1.905 3.05012 2.18233 2.82479 2.399C2.60812 2.607 2.33512 2.711 2.00579 2.711C1.67646 2.711 1.39912 2.607 1.17379 2.399C0.957122 2.18233 0.848789 1.905 0.848789 1.567Z"
                fill="white"/>
        </svg>

    )
}

export const RightIcon = (props) => {
    return (
        <svg
            {...props}>
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
                opacity="0.5"
            ></path>
        </svg>
    )
}

export const TgIcon = (props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 28 28"
        >
            <g clipPath="url(#clip0_67_19231)">
                <path
                    fill="url(#paint0_linear_67_19231)"
                    d="M14 0a13.998 13.998 0 00-9.898 23.9A13.998 13.998 0 1023.898 4.1 13.998 13.998 0 0014 0z"
                ></path>
                <path
                    fill="#fff"
                    d="M6.337 13.852c4.082-1.778 6.803-2.95 8.164-3.517 3.89-1.617 4.697-1.898 5.224-1.907.116-.002.374.027.542.163.14.115.18.27.2.379.017.109.04.357.021.551-.21 2.214-1.122 7.586-1.586 10.065-.195 1.05-.582 1.401-.956 1.436-.814.074-1.43-.538-2.218-1.054-1.231-.808-1.927-1.31-3.124-2.098-1.382-.911-.485-1.412.302-2.23.206-.214 3.789-3.473 3.857-3.768.009-.037.017-.175-.066-.248-.08-.072-.201-.047-.288-.028-.125.028-2.092 1.33-5.907 3.903-.558.384-1.063.571-1.518.561-.499-.01-1.461-.282-2.176-.515-.875-.285-1.573-.435-1.512-.92.03-.251.378-.51 1.041-.773z"
                ></path>
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_67_19231"
                    x1="1400"
                    x2="1400"
                    y1="0"
                    y2="2800"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#2AABEE"></stop>
                    <stop offset="1" stopColor="#229ED9"></stop>
                </linearGradient>
                <clipPath id="clip0_67_19231">
                    <path fill="#fff" d="M0 0H28V28H0z"></path>
                </clipPath>
            </defs>
        </svg>
    )
}

export const GreenIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="none"
            viewBox="0 0 48 48"
            style={{zIndex:2}}
        >
            <circle cx="24" cy="24" r="12" fill="#fff"></circle>
            <g filter="url(#filter0_f_48_17693)">
                <circle cx="24" cy="24" r="6" fill="#69BE69"></circle>
            </g>
            <circle cx="24" cy="24" r="10" fill="#69BE69"></circle>
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 24.482L22.538 28 28 21"
            ></path>
            <defs>
                <filter
                    id="filter0_f_48_17693"
                    width="46.6"
                    height="46.6"
                    x="0.7"
                    y="0.7"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_48_17693"
                        stdDeviation="8.65"
                    ></feGaussianBlur>
                </filter>
            </defs>
        </svg>
    )
}

export const Transparenticon = () => {
    return (
        <svg
            style={{zIndex:2}}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <g opacity="0.7">
                <circle cx="12" cy="12" r="12" fill="#fff"></circle>
                <circle cx="12" cy="12" r="11" fill="#5A5A5A"></circle>
                <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.833 12A5.835 5.835 0 0112 17.833 5.835 5.835 0 016.167 12 5.835 5.835 0 0112 6.167 5.835 5.835 0 0117.833 12z"
                ></path>
                <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M14.164 13.855l-1.808-1.08c-.315-.186-.572-.635-.572-1.002V9.38"
                ></path>
            </g>
        </svg>
    )
}

export const LockIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="361"
            height="361"
            fill="none"
            viewBox="0 0 361 361"
        >
            <path
                fill="url(#paint0_linear_48_17409)"
                d="M180.5 223c23.472 0 42.5-19.028 42.5-42.5S203.972 138 180.5 138 138 157.028 138 180.5s19.028 42.5 42.5 42.5z"
            ></path>
            <path
                fill="#1C1F24"
                d="M180.5 219.258c21.405 0 38.758-17.352 38.758-38.758 0-21.405-17.353-38.758-38.758-38.758s-38.758 17.353-38.758 38.758c0 21.406 17.353 38.758 38.758 38.758z"
            ></path>
            <g filter="url(#filter0_f_48_17409)" opacity="0.5">
                <path
                    fill="#515EEB"
                    d="M180.5 213.377c18.157 0 32.877-14.72 32.877-32.877 0-18.158-14.72-32.878-32.877-32.878-18.158 0-32.878 14.72-32.878 32.878 0 18.157 14.72 32.877 32.878 32.877z"
                ></path>
            </g>
            <path
                fill="url(#paint1_linear_48_17409)"
                d="M194.004 167.887h-20.761a7.416 7.416 0 00-3.669.962l-5.157 2.22a7.504 7.504 0 00-5.22 7.151v21.585a7.502 7.502 0 007.501 7.502h20.767a7.438 7.438 0 002.638-.488c.266-.1.527-.215.781-.344l5.189-2.294a7.494 7.494 0 005.438-7.201v-21.598a7.5 7.5 0 00-7.507-7.495z"
            ></path>
            <path
                fill="url(#paint2_linear_48_17409)"
                d="M167.492 171.306h1.788v-7.357a10.593 10.593 0 013.039-7.409 10.593 10.593 0 017.357-3.162c5.913-.1 10.752 4.938 10.752 10.852v6.057a7.31 7.31 0 013.869 2.501 2.17 2.17 0 00.507-1.382v-7.457a14.967 14.967 0 00-14.691-14.947c-8.364-.138-15.209 6.926-15.209 15.303v7.501a7.278 7.278 0 012.588-.5z"
            ></path>
            <path
                fill="url(#paint3_linear_48_17409)"
                d="M187.627 170.719h-21.135a7.314 7.314 0 00-7.314 7.314v21.954a7.315 7.315 0 007.314 7.314h21.135a7.314 7.314 0 007.314-7.314v-21.954a7.313 7.313 0 00-7.314-7.314z"
            ></path>
            <path
                fill="url(#paint4_linear_48_17409)"
                d="M187.627 170.719h-21.135a7.31 7.31 0 00-7.295 7.339v21.954c0 1.499.463 2.962 1.325 4.188a7.321 7.321 0 01-.625-2.938v-21.954a7.317 7.317 0 017.314-7.314h19.722a7.312 7.312 0 017.302 7.314v21.954a7.321 7.321 0 01-.625 2.938 7.281 7.281 0 001.319-4.188v-21.954a7.32 7.32 0 00-4.501-6.777 7.314 7.314 0 00-2.801-.562z"
            ></path>
            <path
                fill="url(#paint5_linear_48_17409)"
                d="M176.769 196.711c3.126 0 4.57-.938 4.57-.938l-2.057-12.133-2.5-1.65-2.501 1.65-2.063 12.133s1.407.938 4.551.938z"
            ></path>
            <path
                fill="url(#paint6_linear_48_17409)"
                d="M176.769 188.678a4.576 4.576 0 100-9.151 4.576 4.576 0 000 9.151z"
            ></path>
            <defs>
                <filter
                    id="filter0_f_48_17409"
                    width="360.955"
                    height="360.955"
                    x="0.022"
                    y="0.022"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_48_17409"
                        stdDeviation="73.8"
                    ></feGaussianBlur>
                </filter>
                <linearGradient
                    id="paint0_linear_48_17409"
                    x1="180.5"
                    x2="180.5"
                    y1="138"
                    y2="223"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#4F58E4"></stop>
                    <stop offset="1" stopColor="#1F242A"></stop>
                </linearGradient>
                <linearGradient
                    id="paint1_linear_48_17409"
                    x1="175.438"
                    x2="183.095"
                    y1="160.798"
                    y2="202.643"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#BFFFFD"></stop>
                    <stop offset="1" stopColor="#0665C2"></stop>
                </linearGradient>
                <linearGradient
                    id="paint2_linear_48_17409"
                    x1="179.857"
                    x2="179.857"
                    y1="143.951"
                    y2="176.47"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#BFFFFD"></stop>
                    <stop offset="1" stopColor="#0665C2"></stop>
                </linearGradient>
                <linearGradient
                    id="paint3_linear_48_17409"
                    x1="177.063"
                    x2="177.063"
                    y1="159.623"
                    y2="207.013"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#BFFFFD"></stop>
                    <stop offset="1" stopColor="#0884FF"></stop>
                </linearGradient>
                <linearGradient
                    id="paint4_linear_48_17409"
                    x1="177.063"
                    x2="177.063"
                    y1="139.206"
                    y2="192.66"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                    id="paint5_linear_48_17409"
                    x1="176.769"
                    x2="176.769"
                    y1="212.502"
                    y2="179.208"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#BFFFFD"></stop>
                    <stop offset="1" stopColor="#041470"></stop>
                </linearGradient>
                <linearGradient
                    id="paint6_linear_48_17409"
                    x1="176.769"
                    x2="176.769"
                    y1="212.502"
                    y2="179.208"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#BFFFFD"></stop>
                    <stop offset="1" stopColor="#041470"></stop>
                </linearGradient>
            </defs>
        </svg>
    )
}


export const Question3Icon = () => {
    return (
        <svg
            style={{marginLeft:5}}
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="none"
            viewBox="0 0 14 14"
        >
            <circle cx="7" cy="7" r="7" fill="#fff"></circle>
            <path
                fill="#4952CF"
                d="M6.598 7.305c.819-.35 1.402-.682 1.75-.992.356-.32.535-.694.535-1.124 0-.439-.16-.754-.478-.945-.31-.2-.708-.299-1.193-.299-.69 0-1.44.191-2.25.574l-.295-.957c.901-.43 1.776-.645 2.625-.645.78 0 1.412.187 1.897.562.485.374.728.92.728 1.638 0 .598-.197 1.124-.591 1.578-.394.447-.955.81-1.682 1.088l-.046 1.088h-.965l-.035-1.566zm-.147 3.097c0-.2.06-.363.182-.49a.666.666 0 01.488-.192c.197 0 .356.064.477.192a.683.683 0 01.182.49.7.7 0 01-.182.502.65.65 0 01-.477.18.666.666 0 01-.488-.192.683.683 0 01-.182-.49z"
            ></path>
        </svg>
    )
}


export const CloseIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8.99841" cy="9.00134" r="9.00134" fill="white" fill-opacity="0.05"/>
            <path d="M11.6431 6.5L6.49944 11.6436" stroke="white" stroke-linecap="round"/>
            <path d="M6.64307 6.5L11.7867 11.6436" stroke="white" stroke-linecap="round"/>
        </svg>

    )
}

export const EnergyIcon2 = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="42"
            fill="none"
            viewBox="0 0 23 42"
            {...props}
        >
            <path
                fill="url(#paint0_linear_67_34677)"
                d="M21.784 1H3.908L.938 22.415l5.15-.024L3.64 41.45l17.737-28.61h-5.15L21.785 1z"
            ></path>
            <path
                stroke="#000"
                strokeOpacity="0.5"
                strokeWidth="0.5"
                d="M22.01 1.106l.167-.356H3.691l-.03.216L.69 22.38l-.04.286.289-.002 4.863-.022-2.41 18.775.46.164 17.736-28.61.237-.382h-5.205l5.39-11.484z"
            ></path>
            <path
                fill="url(#paint1_linear_67_34677)"
                d="M16.242 15.575l-7.065.025L12.18 3.17H6.998L4.502 18.837l7.065-.023-4.526 13.444 9.201-16.683z"
            ></path>
            <path
                fill="url(#paint2_linear_67_34677)"
                d="M.939 22.415l6.782-1.672-4.08 20.707L6.087 22.39l-5.15.024z"
            ></path>
            <path
                fill="url(#paint3_linear_67_34677)"
                d="M21.377 12.84l-6.993 1.17L21.784 1l-5.556 11.84h5.149z"
            ></path>
            <defs>
                <linearGradient
                    id="paint0_linear_67_34677"
                    x1="11.36"
                    x2="11.36"
                    y1="-15.595"
                    y2="29.817"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#EBFFBF"></stop>
                    <stop offset="1" stopColor="#13801E"></stop>
                </linearGradient>
                <linearGradient
                    id="paint1_linear_67_34677"
                    x1="10.373"
                    x2="10.373"
                    y1="-31.286"
                    y2="25.671"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                    id="paint2_linear_67_34677"
                    x1="4.329"
                    x2="4.329"
                    y1="1.946"
                    y2="20.899"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#AFFED3"></stop>
                    <stop offset="1" stopColor="#198149"></stop>
                </linearGradient>
                <linearGradient
                    id="paint3_linear_67_34677"
                    x1="18.083"
                    x2="18.083"
                    y1="-10.81"
                    y2="1.098"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#AFFED3"></stop>
                    <stop offset="1" stopColor="#198149"></stop>
                </linearGradient>
            </defs>
        </svg>
    )
}


export const IntelektIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="52"
            height="40"
            fill="none"
            viewBox="0 0 52 40"
            {...props}
        >
            <path fill="url(#pattern0_67_34671)" d="M3.333 0H51.666V40H3.333z"></path>
            <g filter="url(#filter0_f_67_34671)" opacity="0.5">
                <ellipse
                    cx="8.884"
                    cy="14.787"
                    fill="#fff"
                    rx="3.777"
                    ry="1.831"
                    transform="rotate(-30 8.884 14.787)"
                ></ellipse>
            </g>
            <g filter="url(#filter1_f_67_34671)" opacity="0.5">
                <ellipse
                    cx="44.609"
                    cy="20.949"
                    fill="#fff"
                    rx="3.777"
                    ry="1.831"
                    transform="rotate(-120 44.609 20.95)"
                ></ellipse>
            </g>
            <g filter="url(#filter2_f_67_34671)" opacity="0.5">
                <ellipse
                    cx="35.999"
                    cy="15.5"
                    fill="#fff"
                    rx="3.777"
                    ry="1.831"
                    transform="rotate(-60 36 15.5)"
                ></ellipse>
            </g>
            <g filter="url(#filter3_f_67_34671)" opacity="0.5">
                <ellipse
                    cx="24.287"
                    cy="8.845"
                    fill="#fff"
                    rx="3.777"
                    ry="1.831"
                    transform="rotate(-75 24.287 8.845)"
                ></ellipse>
            </g>
            <defs>
                <pattern
                    id="pattern0_67_34671"
                    width="1"
                    height="1"
                    patternContentUnits="objectBoundingBox"
                >
                    <use
                        transform="matrix(.00195 0 0 .00236 -.017 -.083)"
                        xlinkHref="#image0_67_34671"
                    ></use>
                </pattern>
                <filter
                    id="filter0_f_67_34671"
                    width="15.796"
                    height="13.932"
                    x="0.986"
                    y="7.821"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_67_34671"
                        stdDeviation="2.25"
                    ></feGaussianBlur>
                </filter>
                <filter
                    id="filter1_f_67_34671"
                    width="13.932"
                    height="15.796"
                    x="37.643"
                    y="13.052"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_67_34671"
                        stdDeviation="2.25"
                    ></feGaussianBlur>
                </filter>
                <filter
                    id="filter2_f_67_34671"
                    width="13.932"
                    height="15.796"
                    x="29.033"
                    y="7.602"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_67_34671"
                        stdDeviation="2.25"
                    ></feGaussianBlur>
                </filter>
                <filter
                    id="filter3_f_67_34671"
                    width="13.042"
                    height="16.359"
                    x="17.765"
                    y="0.665"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_67_34671"
                        stdDeviation="2.25"
                    ></feGaussianBlur>
                </filter>
                <image
                    id="image0_67_34671"
                    width="512"
                    height="512"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJzs3Xd4HNXVP/DvnS3Sqq56166KJduy5SJLstwrNrgBxtQQIJ28IcCbShpJ3l8aKQRCCqkkIZAQEloCoRts425wxbLVe9dK29vc3x+yiTHeme1N5/M8ft6X7J2dY1m7c+fOuecAhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCgo9FOgBCSHRaVlqaAQBWl8t+uK/PEul4CCHBRRMAQqaJpSUlhW6FoooDZYzzQs5YLgfyGVAAIAdAMoCUc/9XLfFWBgDjAMbB+RhnbIwB/QDaOdDJgQ4n0PFOR4ch5H8pQojfaAJASJyZr9drExirZ6LYIDJWC2AG43wGGEsJcyj9AI4x4Cg4P+ZSKo8eam09BUAMcxyEkEugCQAhMezyysoEg9NZJzJWzxmrZ5w3AKhE9H62DYzz3SJju8D5Lnd29qHDhw87Ix0UIdNRtH5JEEI8qC8tLRcUinWM83Uc2AAgLdIxBcDCOH+NC8JzSpfrX3u6u/siHRAh0wVNAAiJcqv0+kQL52sFYCMHNoKxykjHFCIigP2M8yedwOOHOzv7Ix0QIfGMJgCERCehsbx8CURxBzi/EYxlRzqgMBPB2F4Af9IkJT228+RJU6QDIiTe0ASAkCiyWKdbKArCTYzz6wEURjqeKDEJ4A+CQvHQ3tbWlkgHQ0i8oAkAIRG2tLo61e1w3Mo5vx3ArEjHAwACY1AIApxud6RDuZDIgX8LgvDgvra2VwHwSAdESCyjCQAhEbKkpKTCrVB8BsBHEIZEPpVCgRJtBkozMpCXmobs5GRkJacgKykZWcnJ0KhUSFEnQKNSQa1UXvI9rE4nLA4HLE4HjHY7xiwWDBknMWI2YdBoRN/kBNpHR2CwWkP7l2HsMGfsmwfa2v4V2hMREr9oAkBIeLHF5eVrRVH8LAM2ARBCcZL81DTMzMvHzNw8zMzNQ2lGJvJTUyEIITndB0xYregYH0PL8BBODQ7gxEAfusbHwXnQb9oPMM6/ua+z84VgvzEh8Y4mAISEB1tcVraFc/4tAPOD+cZKQcCc/EIsKtWhJj8fs/IKoNVognmKoDA57DjR14cD3Z040NmB1tGR4E0ION/NgDv3dXYeCc4bEhL/aAJASIg16HSbGPBNMLYoWO9ZkZWN+lId6kt1WFhcCo1KFay3DptRsxn7Otvx+tkz2N/VEYx8AxGc/06tUn11V0vLcDBiJCSe0QSAkBBpLCu7DFN3/IsDfS/GGObkF2DNjGqsnlGF/NRYrv3zQWaHA7vbWvBy82ns7WiDO7CVAQMD7t3X0fEQqOwwIR7RBICQIFus0y3kjP0UwPJA3ocxhtqCwnMX/WrkpoS7lH9kjJhM+Nep43ju5An0TgTQT4ixPZyxjxxoazsTvOgIiR80ASAkSBqKirIEler/ceDjABT+vk+GJgmba+Zg65xalGgzghhhbBE5x4HODjx6+CAOdXf6+zZWDnz1QEfHA6DVAELehyYAhAROaNDrP86A7wDI8usNGMOiklJsmzsPKyoqoRL8nj/EpdODA/jz4QN4veUsRNGv6/guKJU37m9p6Ql2bITEKpoAEBKABp2uiTH2EICF/hyvUihwxawa3LSoAaXT+G7fW+2jI3h472680dri8w4CDgwDuPlAR8eLoYmOkNhCEwBC/NBUXKwRlcrvAbgDfuzlT1En4Op583Hd/DpkJScHP8A4d2qwH7/cswsHu3x+NCCC8++WdnZ+8+9AUMocNlZWpokORwljLA3n/jAgA0Aa4/zCpZxJzpgbgAWcGznnQwJj/czlGtzb0xPiykmEfBBNAAjx0WK9vpEDfwRQ7eux2kQNblrUgKtr5yNZrQ5BdNPL62eb8dM3XsegyejroS+5BOHaw21tE94e0KDTlTHGGhkwk3NeAcYqOVDBgBxfT34JkwA6GNAsMnaGAc0C0Ayn8zhNDkio0ASAEC/V1NSoUy2We7kofhGMXbpWrgcalQrXLViEDy2qR4o6IVQhTktWpxO/3/8WHj9yCC7f8gNOMmDzvo6OjotfqKmpUaeZzU0i0ISpbZyLAeQFJ2KfOAEc58B+APsVwP69HR2nIxAHiUM0ASDECw1lZfMY538CUOvLcUpBwNY5tfhIYxOyk6fHNr5IOTM8hG/9599oHR3x5bABgbFte9vbDywrLc1wMHY5Y2wrgI0A0kMTaYA47wFjLwF42aVWv3L4zBmf/sKEnEcTABJzVgFKV2lpKgBYc3JMhw8fdobyfI1lZZ/gnD/IAJ9u3ZeWVeCulaun9Va+cHO63fj13j34y5GDvuwWsHDgION8qa8rO1FAxFQ/hL+7lcq/H2xt7Y50QCR20ASARNzyysocp8tVLgLlAuflnLESBuTyqS11F/7xVO9WBDABwArABM6HwFgPgAHGeTdnrE/gvDmBsXd3dnTYvI3rXKLfLwDc6svfJy8lFXevWotVlTN8OYwE0dG+Xnzt+ecw7HtuQCzjAPYBeEKhUDz2VmvrUKQDItGNJgAkbC6vrEwYFcW5AucLODAfnC8AMAdAaphCcIPzdjB2ApyfALDXpVDsuVQi2LlWvU/Ch8Y9SkHA9Qvq8NHFS2OyNn+8Gbda8PXn/xVIEaFY5mDAMxCEX+9ra3sVU5MDQt6HJgAkZBorK9O407mcASvB2ApwXheFS6wigBNgbBcTxdec2dnPqcbGNvKp5/1ab99kdl4+vnbZ5SjPyg5dpMRnoijiwV078de3D0c6lIjhQCsYe5gpFA/vb2mZjHQ8JHrQBIAEE2sqK6vnwDYObADn8xFASdwI6QRQCi8/GwrGcGtDEz7S2ASF4HM5ABJCIud4/tQJPLx3T0gfBaiVSmQlJSM7JQVZSUnQqFRIUKqQmpD4vnF2lxMOtxsWhwMGqwUGqxUGqwVjFouvuxf8NQHglyLwwMGOjoFwnJBEN5oAkIBcXlmZMOp0rjuXOb0FQEGkYwqXUm0G7t24CTX50+avHDMOdXfigTdfx9nh4HUFTlAqUZ2bh9l5+dBlZkGXkQl9ZhYyk5ICel9RFDFgNKJ30oAegwFd4+M4MzyI5sFBmBz2IEX/XxywM+ARlyB893BbW1fQT0BiBk0AiF8adLomMHYzA64DkBnpeMLt6tr5uGP5KnrWH2UmbVY88OZOPP/uSZ9LBV8sQanEgqJiNOr0WFBUgsqcXCjDuMrDOUfPhAGnBwdxtK8Xh7o70TE2GsxT2MDYz7nD8b0Dvb1BfWMSG2gCQLzWVFxcJCqVHwXnN4OxykjHEwkalQr3rNuAy6pnRToUcpHXWs7gR6+9jDGLxe/3SFEnYGXlDKyrqkZdcSnUyuhKWRkxmXCopwv7Otqxp70VRntQVggmGOc/dDqd9x/u6/P/h0diDk0AiKzFpaVLuSDcAeBqeN6KF/d0GZn43uZtlOgXZWxOJ36881U8d/K4X8cLjKG+VIer5s7D0rIKqBSxkbbiFN041NWJ18+ewZutLTDYAq4Y3MEYu3Nfe/uzwYiPRD+aAJBLqqurUynGxm5gwGfBeV2oz6dN1KA0MxP5qWnITklBbkoqclJSkJaYiFR1AjRqNTQqNTSXuCMzOxwwOeww2u0wO+wYt1gwaJxE/+QkBoyT6JuYwIBxMqAl4VWVVfj6ZZdT/f4o0zo6gq/++1m/lsaTVGpcWTsPV9fOR3G61xs+opJLFLG7rQXPnjyOfZ0d/rZMPu9ZBtx5qRLJJL7QBIC8T01NjTrFYrkVnN8DQB/s91cwhorsHMwpKERVTi70WVnQZ2ZBm6gJ9qnex+xwoHVkGC0jw/jXyeM4NehdEjRjDJ9sWoZb6hvBGH1coslrLWfw7Refh83pWyHI1IQE7Ji/ENfNr0O6JrS/d5EwbDLiX6dO4h9H38aI2eTv21jA+Tf2d3bej6mtsiQO0TcaATCVzT/ucn0EwJf51Da4oFArlZhXWIT6Eh1qi4owMycPiRFMnDvU3YnPPfNP2F0u2bEqhQJfW78RG2bODkNkxFucc/zx4D48vHePT6s6KoUCO+YvxG31i5GamCh/QIxzut34z+lTePzIIbT51h/hPRx4QwBupdWA+EQTAMIadLobBMa+F6wLf3G6FqsqZ6BBV4Z5hUVIiJJEqrd7unH3M//w6o4xNTERP9h8JRYWl4QhMuIttyjiOy//B8+/e9Kn41ZVVuGO5StRFONL/f7gnOOtjjb8Zt9bOO3lytdFJsH53fs7O38f7NhIZNEEYBpr0umWiIz9BEBjoO9VlpWN1ZUzsLqyGjNygtEePbiO9vXirqf+DqsXF//8tDTcv207yijZL6o43W589fln8WZri9fHZCen4POr11FfBkxNBHa2nMHDe/f4lTPBgSeSkpM/uvPkSb+fK5DoQhOAaaiuvLxUKYr3AbgWAfwOpCVqsGHmLGyZPQdVuZFole6d1tERfOqJx7zaMqXLzMTPr74O2SnUujeaWJ1OfOm5p3Cgy/u6/htnzsbnVq9DaoJPTRzjniiKeP7dk/jlW7swajb7evgpAdi+t6PjdChiI+FFE4DpRVis13+Gc/4dMOb3FW5RiQ5Xzq3FyooZUb9lqn9yAh9/4jGMmORvWsqzsvHQ9usCruxGgsvhcuGup5/EkR7vOt1qVCp8fvU6bJo9J8SRxTaTw47f7N2DJ985ArdvO2SMYOwj+9vbnwxVbCQ8aAIwTSyqqJijcLt/A2CxP8erBAXWV8/E9QsXoSonN8jRhYbBZsUn//YYOsfHZMdWZufgZ9uvRYaGLv7RxC2KuOffz3i97F+qzcB9W6+CPjMrxJHFj5aRYdz32ss41tfry2EcwDf3d3R8O0RhkTCgCUCcq6urUylHR78G4B74UcRHo1Jhx/yFuHb+QmQnx86yuNPtxv/8429efalV5eTiwe3XhnwrIvEN5xz/7+X/4N+nTng1vq6kFN/btBVp9O/oM5FzPH7kEB7euxsOL3bIXOD3mo6OT+4EfDqIRAeaAMSx+tLSckEQHoMfSX4alQrXzFuAmxY1xOSF8dsvPu9VpnhFVjZ+ueN6umhEod/uewu/3bfHq7GbZs/BPes2hLVWfzxqGx3Bt158Hs1Dg74c9qIyIWHHnubm0LVcJCFBE4A4tVinu4kz9gsAab4cpxIUuGb+Any4vjFml8P/eHAffrlnl+y4/NQ0/Pq6m5BLCX9RZ2fLGdzz72e92ue/Y/5C/O/KNVSoKUhcoohf7nkTjx055H2dBcYOq9zu9bu7usZDGx0JJvrExJlVNTUpVrP55wA+7Ouxy8oqcOfK1SjRZoQgsvDY3d6GLz77T4gyX1xpiRr8+tob6FlxFGoZGcbH//YXr7Zsfri+EZ9euiIMUU0/O1vO4v9eeh5mh8PbQ44ILtf6vT098kk3JCrQBCCONFVUVHKX6ynOmE/pz2VZ2bh75Ro0lOpCFVpY9E1M4JbH/wSjzSY5LlGlws+u2oG5hUVhiox4y+p04pa//BFdBvkbyesW1OHulWvCENX01W0Yx5efexqtXlYS5MDbcDrXU3vh2BDde7iI15r0+o0i5/8BY15fxVUKBT66eAm+tXFzTN/1A1Nbxe58+kn0TUxIjhMEAd/bvA31MT7ZiVc/fP0Vr/b6b5w5G19eexkt+4dYeqIGV8yegzPDQ+jxYlLGgAKmUFyWo9X+bcBgkJ6Jk4ijCUAcaNTpPscZ+wMArx/azy0oxE+2bceaGdUQ4uBL9Ievv4I97a2y425fshxbauaGISLiq9fPNuMXe96UHVdfosN3N2+DghL+wkKlUGB91UyMWSw47V1yYL4CaKrNzn68ZWzMHer4iP9oAhDDdgCKFJ3uAcbY1wF49W2oUihwx/JV+PK6DchMSg5xhOGxs+UMHtr9huy4tTOqcTcli0Ulo92OO//5d9hktqAVabV48Ood0KioLXM4CYxhWXkFlIICh70oyMQAvUUUq3oNhn9iqmYAiUI0AYhRTcXFmonMzL+CsVu8PUaXkYmfXnkNVlVWxc1FcMRkwt3P/EO2u19FVjZ+tG171FcunK5eOXMaLzW/KzkmSaXGQ9uvRX5aepiiIhebX1SM9MRE7OvskB3LgJpirTa912B4MfSREX/QGloMWlpdnSoqlf/hwFXeHrOlZi4eufHDUV2z31ecc3z7pecxYbVKjktL1OC+rVdBE8E2xESaN30avrh2PcqpQVPE7Zi/EJ9ftdbbm4i7GvT6T4Y6JuIfmgDEmPl6vdZlt78EwKu9TwlKJe7dsAlfXb8x7i6ATx57RzZhjDGGb2y4fFq2gY0lWTKPozbMnI2NM2eHKRoiZ/u8BfjC6nXeTgIeaCorawh1TMR3NAGIIQ1FRVkJjL0CL+v556el4dfX3ojLZ8XfF+eAcRK/3C2fMHbV3HlYVlYRhohIIFZUVKIw/dJL+4Xp6fjCmnVhjojIubp2Pj69dLnsOAYkiJw/ubyyMvr6hE9z9EA0Riytrk4F5y8BWOTN+HmFRfj5NdejOE7vfO/9z7/RJrM3WZeZie9v2gYlPfePekpBQEOpDge7OjFxQR0HXUYmfrx1O3JTUiMYHfFkXmExJqxWnBockBuaLnK+sMlg+MspSgqMGvGRCRbnVun1iVbgeQCrvRm/dkY17t1wBdRKZYgji4yXmt/FN174l+QYpSDgt9fdhJl5+WGKigSDSxRxsKsDg0Yj8lJTUV+qp/r+UU7kHF99/lm8fvaM/GDOP7+/s/PHoY+KeIMmAFFuFaC06vX/ALDVm/E3LKzHHctXxsXe/kuxOB249pHfYcRskhx3+9LluKXer87HhBAf2V0ufOKJx7xpImTlgjD/QFubF7MFEmo0tY5yNp3ufnh58b95USPuXLEqbi/+APCH/XtlL/4VWdn4UB3lHBESLglKJX6w5UpvOodqmCg+soMeP0cFmgBEscVlZXdwxj4jN44xhs8uX4X/WRbfTVF6DQb89e3DkmMExvDldRuoShwhYZafmob/27QFgvxnr6lLr78jHDERafQtGaWa9PqNnPP7vRl754rVuLGuPtQhRdwDu16H0y1dWfTKufMwt6AwTBERQi5UX6LDbd49evtOU0VFZajjIdJoAhCFlpSV6UTgL/BimewTTctw/YK6MEQVWSf6+/Bma4vkmMykJNxOrWEJiaiPNDahJr9AblgSF8VfhSMe4hlNAKJMTU2N2s35EwAy5cbeWFePjzQ2hSGqyHt4727ZMZ9dsRqpCQlhiIYQ4olCEHDvxk1IkNmFxDlfu7isbEuYwiKXQBOAKJNiNv8QgGwG29qqatyxbGUYIoq8w91dOChT8W9Wbh42VM8KU0SEECml2gzcsEC+ZAnn/L66urr4KlEaQ2gCEEUay8ouAyCbHDO3sAj3XnZF3DT0kfO7/W/Jjrl92cpp8/MgJBasr56FMvneDTMVY2PUKyBCaAIQJebr9VqI4u8gU5shLyUVP9xyVdwW+bmYyWHH2709kmPqS3VoKNWFKSJCiDeUgoAbFy6CQmZizkTx3vl6fXyWLI1y0+MqEgMSOH8QjBVLjVEJCnxn01ZoNbJ7beOGw+UG554rhzLGcLsX9cgJIeElCAyFaelYWzVTutUzY9kJwL31paU/Y0qlkrlcU3WfFQqn6HabRMasyM4eOXz4sDNMoU8bNAGIAg063RowdrPcuDtXrsKcabbFLTMpCUVaLXoNhku+vqpyBmbnyWYcE0LCTMGmFpg3zpyN/V0dcm277xIE4S6IInC+jgDnEARhapl6dBSNev0kgG4OtDGgjTF20s3YO8mieHxnR4dN4r2JB1SNKcLq6upUCqv1OQCSnbKWl1firpVrwhRVdMlJScVrl6gznpqYiPu2XoUUNWX+ExJtzA4HjHYblIKAJJUKx/r7An3LBAC5DKjGVEfULYzzj7s4/3JxRsam4vT06iKtVl2amtrTMznpCvgvMA3QBCDCShITP8eAG6XGZCYl4adXXQONanomy5ZlZqEiKwunhwdhPNcpbmFxCX6w+cq47XYYLk63GxanA3aXC3aXCyLnEBiL63LSJDwsTgcmz31ei9K1ON7f+95/BxVjAoBiMLaEMXYjF4T/LUlPX1yo1SblZGS0DxgMtDrgAX3KI6ihqCiLqVStAC7dCP2c+7ZchRVUNAsAMGI2IUmtRpJKHelQYpbJbkf/5CTsLifsrkvfKKmVSqSoE5CamID0RA1U1FKZ+GjYZELX+Nh7/31yoA+/2LMr3GHYwNi/Oee/OdDR8RKoFfH7UA5ABDG1+h5wLnnxX1U5gy7+F8hOTol0CDFr0GTEd196AQe6u8A5R7pGgytm1WBZWcUHxjpcLoy5XBizmAEAKQkJyEpORmZSMq0OEK9c/GtSk18IXUYmOi+YFIRBIjjfzoDtjXr9KcbYT5nT+ejenh7JhITpgqb1EVJfUVHCRPHPkJiEaVQq/PjK7fSMmwTMaLfjtsf/jObhoff+N7vLhRP9fdCo1CjLypI83uF2Y8JqxbDJBKfohkalooZLRJLN5YThosS/9EQNDnV3RSgi5ADYIgrCJ4rT01OLMzNP9RoM5kgFEw3oExwhCpfriwASpcbc1tCEvJTUMEVE4tmTR9/GoHHykq89c+Io+iYnvHoftyhiyGjE8b4+tIwMw+xwBDNMEkfYJZ4wzykoRElGRgSi+S8G5ICxr0MUWxr1+m/UFRYmRTSgCKIJQAQ0FBVlccY+IjUmLyUV102DJj8kPI719Xp8zSWKePTgfoii6NN7TlitOD04gDPDQzDaKc+KvJ+nypyrK6tkj81OTkFhejpSExO9aS/sH8ZSAHxLqVafWazX34ppeD2kHIAIYCrV/wCQnHV+Ysky2WYahHhL7nep0zCOl86cxsaZs31+b6PNBqPNhpSEhKkv7QTJhS0yTXhKFakrLsXTx49K7ghYoi/DV9ZvfO+/bU4nTHY7OsZH0T42hraRYXSMjaJlZBhGuz3QUIs48IdGvf5OAbhrb0fHG4G+YaygHIAwq6mpUaudzscAeMxmK9Fm4J61l1FtexI0NqcTb7ZJt1NuGx3BzLx8ZGj8WxF1uN0YNZthdtiRqFJBTTsHpjXnud+HiwmMwe524+wF+SgX6zNO4oYFi97LM1EqFEhSq1GYrkVNfgGWlVdgc81cfGhRA5aWVyA/LR0utxsjJlMgaf75HLilJD09OzMx8c1BsznuKw/SJzTMKpKStkFm+f8zy1dhZl5+uEIi00BFdg72dXRg2GzyOEbkHKcG+9FQqgto9cnucmHEbILF6YBGpaYthNOUpwkAMLXE/0brWY8Xa4fLhZl5edBnSienMsaQk5KCBUXF2FIzF9ctrENFVjZMdgf6PeS8yGBgrCElUfPh/Aztwd7x8YhlLIYDfTLDrCgj40cAZnh6PTslBV9bv5EyrElQCYyhtrAQz506AbfEs36by4XO8XE0lOgCXoGyu1wYNplgczmRpFZDSb/T04pTFDHiYcKpUanQOjKMEQ8TBADg4Fg7o9qnc6oVSlRm5+CK2TW4fOZsJKnV6JkwwOJjsqqbi2kMuK22uLg4W61+JV4rC9IEIIyWlpQUioLwc0gkm9y4cBHqqbMdCYGMpCQoBQEHuzolx41ZzLC6nKjJD06PBZvTiWGzCU63G0lqNU1upwmHy+VxBQCYmpS+0+e502ffxASuW1Dn9wpSWmIiFpXocN38OhSla9E6OvJeJVEvMavDsTA9JeXmnOTkp3sMHhqSxDCaAIRRYUbGzWBss6fXBUHANzZcQfv+ScjMzS/E/q5ODJmMkuM6xsagVipRId/P3WsWhwPDJhNEzpGsVlNBoThnd0tPAHKSU/B661mPK1JuUcSsvALZxwByBMZQlZOLa2oXoCAtHa2jviUO2pzO9GSV+vba4qKjzYODH2xKEsNoAhBGxVrtd8FYuafXl+jLcXXt/HCGRKYZxhgaSvV44fQpj2WAz2seGkRWSkpQ+y1wTJUiPr/0m6RWU7JrnHLITAAUgoBuwzgGJJ7VpyYkYFn5BytV+kNgDNW5edg+bwEyk5JwvL8PDrfbq2OdoltpcTiun52X524dHX0zKAFFAZoAhMmy0tIMURAegsTP/LbGJszIyQ1jVGQ6SklIwIycXLzU/K5sxvSJ/j6UaDOQmxrcglQi5zDabRg1m6EQBGhUKpoIxBn7BaWkPRFFLvkYYMJmw/VBrociMIbZ+QXYNHsORswmtI6OeHUcB5jd7V5TkZ09tywt7dkOgyHm8wJoAhAm+Vrt5Ywxj13/VIICX1m/kfb+k7Ao1moBBhzp6ZYcxwG809uDYm0G8oI8CQCmJgITVitGLRYwBmhUtCIQL2wuJ8YsFskxmUnJePXMaY8TUZPdjvXVs6DVaIIeX5JajdUzqlBbWIzjfb2Y9LKYlVsUZ7sZW1aUnf1U79hYwEUIIokmAGFSnJFxO4BGT683lOqwbU5tGCMi0938omK0jg6jY0y6OYvIOd7u6UZeWhoK0iR7V/nNLYqYtNkwYqJHA/FiagVAegKgUihwamgQ4xLjSjMyg5aQeilF6VpsmVOLUYsZZyRqE1xED84v02VlPd09Ph6z/QRoAhAmxVrt9wF43Nx/Ve181BYWhTEicp7N6cSJwX70GMaRnZwybbLUGWNYXl6Jwz3dGDJKJwWeXwnISk4Oak7AxS58NOAWORLjtOkQ5xwOtxtWpwNGuw0GqxWTdhsmbTbYXS4oGINSoYDJYUfbyNRgXALRAAAgAElEQVQSdZI6tlpg25wuyQv7eeMWM86ODHt8PVGlwrqqmcEM7QNUCgVWVFSiRJuBA52dcIpe5QYUcs636TIynus2GLxrphFlaIodBqtqalKsZvMEJLb//enGD6MqNy+MUREA2NlyBt955cX3tgdpNRp8ZtlKbK6ZG+HIwmfCasUnnnjMqzatDMAVs+fg8lk1YfnyYIwhQ5OEnJQUpCTE3u4YzjnsLhdsLhdsTidsLieszqk/nHvOwHCLIl4524znT52A61yW/GKdHl9bfzmyU2KjJfa4xYI2L56vt4yM4P43XvX4en5aGp7+yCeDGZqkbsM4vvb8c2geGvTuAM57BMbW7+3oOB3ayIKPVgDCID85eQGAj3t6PUmlxl2r1tCSZxg53C7sbD2Lrz//HGwXZMPbXC7sam9FWVYWyoO4BS6aJapUWFpWgVfPNsPilC+YcnZ4CCNmE+YUFIZlK5/V6cSo2YwJ21RrWbVCEZWrAi5RhMlux7jFgmGTCX2TE+iZMGDIZMS4xQKj3Qar0wmnTOY5B/DIgX3Y2XIG4gWThJ4JA/Z0tGFbTW1U/v0vZnM6MW6VXwFIS0zEK2dOv+/veiGT3Y7t8xZAo1IFO8RLSk/U4IpZNegeH0f72Kj8AYylcc6vLNJqn+6dmIipWgE0AQiD4oyMywFs9fT67Px8bKXn/2HBOUfPhAHto6P41Z5dGPGQpdw+Nopr5i0Ic3SRk5qYiKXlFdjZetarqmm9ExNoHRlGTUFh2BJXnW43JmxWDJlMMNrtEDmP2GTgwov9kMmIngkD+iYMGLOY37vQu3zsrnjeq2eb8drZ5ku+NmG1ojI7NyYmp2aHHRNWq+w4gTEc7+vFhESRnrri0rC2EVYKAtbMqIJTdOOoRCfN9zCWxhjbUpqS8o+eyUnp52lRJPqnkfGAc8kWa7T0Hx6cc7SMDL/3vLt30vNju/bRkWB0GYspuoxM/OKa65GT4l22/9mRYXzv1RfRMuLdNqpg4ZzDaLOha3wMx/p60Tw0iP7JCZjsdslldX853W5M2mwYmJxE2+gIjvf34WhvD84OD6F3woBxiwUOmZoK3jozPIRnjh+VHHO4JzbK07tF7/8tdFnSxX7eHRoINByfMcbw6aUr8JV1G7wtY10uKpUvL6+szAl1bMFCe87CgDNWCokvJn1GZhijmZ4452gbHX1fC1KNUiV5t9s5Noo5BYXhCC9qlGoz8ItrrsP/PPlXDJk8Nw46b8JqxQNvvoatNXOxrnpWRJKKTHY7THY7gAkwxqBRqZCkUkOjVkElKKBS/PfPpR5ZON1uuEQRTrf7vT82lxM2pws2l1Oyd0IwjZhM+N2+tzwuhZ+XHCOVQkXu/c+tVCv9HXh22HOSYKhtnVOL3NQ0fOm5p2SLZwGYZXe5Xpyv1695p6Mj6h8H0AQgHDiXTO/PT0sLVyTTVrdhHIaLnkdmp6RgVKJQSef42LSbAABT7agfvvZG3P30P9DhxTNQkXM8feIYzgwP46a6RdD62U44GDjnsDgcUxO7GNqcNWmz4We734DJIb3qxBjD6hlVYYoqML6sAMh9B/ZOjAcaTkAW6/T48bar8flnn4LNKd0lmAELEhl7sq6u7vLDhw9HdUthegQQDpwXS72cH6K91WTKqNmM4UvczWYnJ0se122I7JdOJBWkpeM3196IBUWSv7rvc2qwH9955UUckGk2RN7P6nTi57vf8Ng570Lbaxdgdoy0Cnd5t5UOAJAn89ipJwr68Cwq0eH+bdu9SkbknK9VjY4+GIawAkITgHBgTPIKn56YGK5Iph27y4UuD9vbspOlt1MNTPrVTzxupCYm4sGrr/VpD7bF4cAfD+7Dw3t3v5e1TzwzORz42Zuvo8eL5PGa/ALcuXJV6IMKEl+SIJPUaqQmeP4etDrlqwqGw4LiEjxw1Q4kqeRrMnDgU416/Z1hCMtvNAEIB84l61jGyjO9WMM5R/voqMdnqnL7qQdlOuZNByqFAv93+WZ8bPFSn7b8HevrxbdffAGvnW2GOwSJefHAYLXgp2+8hk4vVpoyNEn47uZtUAmxs3FLbrvjxXJkPo+9UbLDrrawCD/YcqW3/xY/XqzTXR7qmPwVO79NMaqurk4lWK33So2pysnFkNGIfuMk+iYn3vszabfD4XQB4FArlFQnwEcDxknJZiROtxt72ts8vq4QBFw3P7iNSGIRYwwLi0swOz8fezs6vEmEAjB1B/ju4ADe6e1BXmqq7IrLdNI7MYGHdr0h25YZABKUSjxw9Q6UBdgWN9wGjJM+JVCeHBiQ7Ay4qKQUldnRkWBflK5FiTYDb7SelWuoJYCxLQUZGU/1GQxeFBUIL0oCDJLGyso0URSrBc51EEUdB3RgTC+MjJRxmQv3V59/1qtzpCYkQHuuKlpBWjoK0tKQn5qG/LQ0FKdnUDLhBaxOJ/pllvDlktUmvdjDPJ006cvxyA03455/P+N9lTQA/ZMTeHDXTswtKMTWObUonOY5L0d6u/HooQNeTaQExvCtjZtCWgs/VFw+rgBoNdKPQicl6gREwvrqmRizmHH/G6/JDU1TcP5EU3Hx4r09PVH1pUITAD80lpfPAOfzIIq1YKwWQC1cLr1wvrQyY+9th5K7+PvCaLfDaLefS077YBe31IQEVGTloDInF5XZ2ajMzkFVTi7U07DDYLdhXHZPeIJK+udidjggiiKEGKi6Fi6F6VPJgb98axf+9vZh2S1rFzre34eTA/2oKynFptlzkDPNVgRcbjeeOXkcr59tlm3DDEytvHx53QasqoyNrP8LOd1un343gKkKfFKisS7HdQvqMGwy4tHDB+WG1ooKxQMAPhGGsLw2/a4MPtoBKLp1unmcseUAVgBYBlHMBQBE2ZK80W7HO3097+uvrVIoMDsvH/OKijGvsAi1BUVIjfOkwzGL+b3a/lJUggIM8PhlLHIOs8MR9z8vX6mVSty5YjWWlpXj/730H8ll24uJnONgVyeOdHehvlSHtVUzp8WKQPf4OP54aD/6JYpPXYgxhs+vWoutMdqTwtvHRBeSy643etmuN9w+vWwl2sfGsKe9VXogYx9v0Ol2HujsfCw8kcmjCcAlNBUXF7mVyi2Msc1dnC8HELNr6073VCnL8+UsBcZQmZOLJfpyLC+vwKy8/LDUcw8Xtyh6vWVIYAxqpVLyy8rqcsG7unjTz6ISHf78oVvxk52v4IV3T/l0rJtz7OvswP7ODszOL8S6qmpU5eSGKNLIsTqdeP7dk3ij5YzXyZCCIOALq9fhqrnzQhxd6Djcvk8AEpVyE4DoWwEApr5HvrlxEz76+J/RJZPQyRj7VUN5+aEDbW1nwhSeJJoAnNNQVjaPAVshiltFxuoYwKSq98UqkXOcGRrEmaFBPHJgLzI0SVhSVo5lZeVYUlYRtrruoTJoNPqUfaxWSE8AxDBVgYtVqQkJuHfDJmycWYMfvvayV9vZLsQBnBzow8mBPhRrtViiL0d9qR5JYWr8EiqiKGJfVweePXHcpztXlUKBb12+GWticNn/Qg6Xb8//gammVFJMUboCAEx9Du7behU++tdHYZbupZHKRPHxurq6xdFQJGha7wJYUlamK8zI+GxxevrvGPAVAKvBWCGmUZtkm8uJs8NDePVsM/7+zhF0jY8jSa1GQWpazO06cLrdaB8d8er56nlvtrXAKlHZa8e8hUijRwCyirVaXDl3HhSCgOP9fT4//wWmkrxODvRjZ8sZDBonkaxWIyMpKaZ+D12iiH2d7fjd/r3Y39nh052wVqPBj7dejSX68hBGGB4jZpPk5+pSxq0WHOjq8Ph6UXoGNsycFWBkoaPVJKEsMxuveGjkdIECwWZz9hoMb4YjLimxfbvnh9q8vOTEpKTtjPNb3JyvwtQ2jUiHFRXMDgf+feoE/n3qBLJTUrC+aha21sxBWQx0HgOm9gn7euFxuekOP1jUSiU+tngpLps5Gz/f9QbeaD3r1/s43W4c6OrEga5OpCdqML+oGAuKilGZnRO1kwGD1YrdbS14q6PdrwJIVbl5uG/zlXGzk8fXi783mE9T+8hYUVGJHfMW4Il3jkgP5PxrjWVlz+xvbz8WnsgubdpMABbrdLNE4H8ZcD04j2j6cWpCAsAYFIy9VwRIKQjQqNWwOh2wu1wwOxywOZxw+lBOM5hGTCY8fuQg/vr2ISwqKcU18xZgeVlF1GbEWxwOjJp9L/5uc0l/UcX6I5FIKNVm4AdbrsSxvl78bPcbOO5NO1UPJmxWvNF6Fm+0nkVqQiJm5+WjOi8PM3PykK6RzhoPNbPdjqN9vTjS243TQ4N+dyK8unY+7lyxOq5+1+Tq5fuDsej87rnYZ5atxNu93XINjNSc80fq6uoaI/koIH5+4zyoLytboRDFL3DGNrEQL+0LgoDC1DToMzNRkpGJnOQUZCQlI0OjQVZyCjI0GmiTkrxtLQngXCa63Q6ry4VhkxFDxkkMmUwYME5iyGjEkMmI3glDyMpk8nNZ2we7OpGflobttQuwbc5cpMls2Qk3f6qEiaIom62cEOPPoiOptrAIv7n2RrzReha/fms3WkcDaxtstNuwv6sD+88tExekpaMyOwe6jAzoMrOQn5Ia0gmqzeVEt8GAM8NDeHdwAJ1jnqtMekObqME96zdgZcWMIEYZeXaXK6CfiydRuvjzAWqlEt/euBm3/fVRyYkQAxYoR0fvAfDt8EX3gRjizw5A0VlWdjXj/PMAGkJxjqzkZMzJL8SsvPz3voBKMjIiVqpz3GrB2eFhnBkewtlzfzrHRkNShjVJpcY18xfgxoX10Eb4LgyYukts8aNdqMXhwBeee8rj64wx7L7jf6GI0lWPWMI5x+72Vvzx4H6c6O8LyTnUSiWK07XITUlFbkoKspNTkJ2aCm1iIpLVCV5NvF1uN4wOOybtdoybzeidnEDfhAE9BgNGzaagLUJvnDkbd61cExWfn2AzWK1oHfH983i8vw+/emuXx9dXVszAD7ZcGUhoYfXU8aP4wasvyQ1zCMC8vR0dp8MR08XibgVgcVnZli7Ov884nx2s9xQYw4ycXNQWFGJOQSHmFhShMD269i5naJLQUKpDQ6nuvf/N4XKheWgQh3q6cbCrA8f7+3yuz30pFqcDfzq4H39/5wiuqp2PD9U1IDMpMi1gOed+dwqzyiz/pyUm0sU/SBhjWF5eieXllTjU3Yk/HdyPg91dfi+bX4rD5ULb6AjaPKw0JCiUSE5QI0md8IGtr1aHA5M2G+x+bF/zRVlWNu5eueZ9n9N4Y5ZpaeyJ3GMDpSK2PotXzqnFzpYz2N/ZITVMLQIPArgsPFG9X9ysACzW6xs5cB+mivUELFmtRmOpHkvLK7C0rCIuZup2lwtH+3pxsKsTh7s7cXpoMChLdQlKJXbMW4BbG5uQEubGRoNGI3r8bNvbMjIsWcazLCsbj998m7+hERldhnE8dewd/OvUCa8KN8WyzKQkfLxpGbbWzI37SeWZ4SG//j13t7fi8SOHPL5+de18fHHN+kBCC7v+yQnc+Oc/yCdFcn7N/s7Of4Qnqv+K+RWApoqKSu52f5cD1yDACU1WcjLWzKjGiopKzC8qjqnOW95IUCrft0owbDLilTOn8XLzaZwaHPD7fe0uFx49fBD/OnUCn2hahivn1IYlWdDpdntdWe1S+iakj81OSvb7vYm8Um0G7lyxGp9ashwvN7+Lf508gWP9vSF5fhwpeSmpuGlRA7bWzJXd5x4vLNL74D2Su0hGW96RNwrS0nH70hX4yc5XJccxxn5SV1j4wuG+vrD2PI7ZCUBdXZ1KNTb2Jbfb/TUG+H3bqVIosLysAlfUzEWTTh/3s/ML5aSk4oaF9bhhYT16Jgx4ufk0Xm5+1+MSqhyD1Yr7XnsZ/zj6Nj67YjUadfrgBnyRHoPBp25jF5MrYVuSkeH3exPvJSiV2FwzF5tr5mLQZMTLzafx0ulTODM8FOnQ/Da3oBDb5y3A2qrquLuRkGJzOv3+TMo1+0mP0Xoc18xbgJeb38VxidwXDpQqEhK+AuBr4YssRh8BNJSXL2Ki+DsAtf6+R1VOLrbNqcX66pkxObMMpbPDw3jy6BH85/Qpv2p6n7d6RhU+v2odspKDfyftb+LfhX765us4K3GRuWvlGly/gNoBR0rn+Bh2t7Vib0c7jvb2RGxLrLeyk1Owtqoam2bPicuyxt4YNpnQNT7m17G/P7AXh7u7PL7+9csux6bZc/wNLaLaRkdw86OPSCZlc8CuZKz6rfb2znDFFVMrAHWFhUlKlepbEMW74UcVQ8YYGkp1+NCiBtSXxG8STqBm5OTgnnUbcPuyFXj62FE8eextjJhMPr/P62fP4FB3F+5cvgqbZs8JWhEXtyiic8y/L5kLDcg8Poi1/uvxRpeRCV1dJm6qq4fF6cCBzk4c6OrAsb5etI2NRkWZ5hJtBpaUlWNFeSUWFJfEVV8NfwTSsleu/XYs52GVZ2Vju0yBIAYkiJx/C8Ct4YorZn5bm3S6BSJjfwPg86ZZpSBgffVM3FTXgMrsnBBEF9+cohuvnWnGX48cwrs+9IG/UH2JDves2xCU3RPto6MYs/he9OdCQyYjvvXi8x5fZ4zhxU/+D60ORSmzw4ET/X043t+L04ODaB8bRf/kREjzBwTGUJqRibkFhagtLMLCohIUabUhO1+s4ZzjWF8fXH6u1Hz9heck65k8dvNtKI+RqqSXYrTZcM0jv5WrFOkWRXHewa6uk+GIKSZWABr0+k+KwE8B+PQQSGAM66tn4VNLlqFgGrQcDRWVoMCGmbOxYeZsHOzqxK/37pZ8nnUpB7s7cdOjf8DnV68LaBlvyGQM+OIPAM0yE5mitHS6+EexZLUajTr9+/JMzHY79rS3oXV0BCNmEyZtNhisFhhsVoyYvKtNn6JOQJomEdnJKShIS0d+ahpKtFqUZ+egLDNLtmXtdGZxOv2++DvdbhgkVgAExlCUHtuTrdTERHxyyTLc99rLUsMUgiB8F8C2cMQU1ROAVTU1KTaz+WEO3OjrsQ2lOnxm2UpU5eaFIrRpq75Uh/pSHfa0t+LhvXtwxocVAavTif976QUc7OrEF9euR5JK7dO5TXa733v+L3ZSZgIzr6g4KOch4cE5R8+EAVnJyZfMOXnmxDG81Pyux+M/2rgEH21sitpS17Fg0o8eCOcNm02SqzfZyclxUSr5yjm1+Nvbh9EpnSextUmnW7K3s/OtUMcTtb/t9aWlNVaz+aCvF/+KrGw8cNUOPHj1tXTxD6GlZRV45Iab8dX1G5Gd7Ftrhf+cPoVb//InnyYPDrcLrSMjQSkcY3U6ZR9lxHOhlng0bDbBJNEvXq7nQ0aShi7+AZK6g5czaDRKvl6sjY8dOYIg4Jb6RtlxImP/F4ZwonMC0KDTrREEYQ+Amd4eo1Io8Mkly/HHm24J+fYzMkVgDFtq5uLvt34Mt9Qv9qnHQZdhHB/921/w1PGjsmMdbhfODA35vbx4saN9PXBJJJAJjKFRVxaUc5HQc7hd6JVZGbI5pCcAyerY3GIWLRxul9/7/wGgW6aYV3GML/9faHlFJSqzZXMZ1jTq9YtDHUvUTQAa9PobGGMvAPD6oX1tYREevelW3Nbg20WIBIdGpcLtS5fjTzfdgtrCIq+Pc7rd+MGrL+HHO1/1uHf4/MU/kO2IF9vT3ib5em1BUUxnHE833ePybaBtMiV+k9W+PY4i7zdu8f/uH4Ds1sFYaUnujWR1ArbNne/N0HtCHUtUXS0bdbrPMeAvALz6NCaqVPj86rX41Y4boMvMDHF0RE55VjZ+teMGfHHNep+Spf7+zhF87pl/wHjREq7N6URzkC/+PQaDbKGj9dVeLzyRCLM4HDBY5YunydWZpwlAYLz5N/CEA3LPxDErP9/v9482AmOoyctHTX6h3NAtiyoqQlr4IFomAKxRr78fjP0IXm5N1GVm4nfXfwjXzFs47ffeRhOBMVxdOx+P3nQr5vqwGrCvswMf/9tf0HOura/BasXpoUE4gnjxB4AXm09Jvq4UBKypqg7qOUno9HlZCtpCE4CQsbtckvkXckbMJsnHB4IgoDonvvK5NCo1Ns2ukRvGFC7Xl0IZR1RMABr1+vsB3OXt+A0zZ+ORGz6MijhaFoo3RVotHr7menxqyTIovJygdYyN4mN/fRS721rQOjIcUJnfS+mfnMA7vT2SY1ZWzkCGJjKdDYlvzA4HJrxMPJNrTqONUDfLeDBqDmxbbuuI9IpcWUZm3G2/TFQpocvIRLV8ovr1S8rKQpaRHPEJQKNe/10Ad3ozVq1U4strL8O3Nm6Ku1+IeCQIAm5taMJD11zv9U4Bg9WKb7zwL7T72Y9Ayj+PH5V9VnzNvIVBP28wOEU3fr9/L676/a/R9MCPcOOf/4BnTx6PdFgRNSjTy+E8zjkm7Z4nAIyxkJSrni4CrcvRPCTdiGxWfkFA7x+NNOe2QG+oniU9kDGlm/NPhiqOiE4AFpeVfQ1eJjqkJWrws6uvxZVz54U4KhJsC4qK8aebbkFdSalX4y1OJ362+w3ZYj2+ON7fh1MD/ZJjZuXmYUGU7v//3ssv4td7d6N/cgKcc7SNjuC7L/8Hv9sf8q3CUUmucMyFJu02ye2j6QmJ06phTzAZ7baAc3SaZZo+RetnMhCJ52oaVOfmQZchnb/GgY9dXlkZkj7rEZsALNbp/pdz7tVex/y0NPz62hswz4dnyiS6ZCYl4cGrdmD7vAVejbe7XPjFnjd9rjh4KRanE399+7DsuI82LQ34XKGwr6Mdz7976cqgv9/3Fob86NMQ64ZMRq9rQkxapZf/6e7ff8MB/u4NGCdlH+PUl+oDOkc0Ul9Q1OgymVUABuSMud07QhFHRCYAjTrddj6V8CerKicXv73uJuipMUvMUwgCvrB6HT63ep1XeQEuUcRv9+3BqUHpJUI5T7xzWDZLeVZuHpbqywM6T6gc7PbcHMzNOXa3tYQxmsjjnGPE5P2ys0ztdWSn+FbIikzxZRXGk1MD0p9tXUYmcuPw30dgDMpzq07zCouQKZeDwvmnQxJHKN5USmNZWS2AR+BFtv+8wiL8cscNPleaI9GJc45xiwW1BYX41JLlXpX2PD8J8DcnYFdbCw52SXfXZIzh7lVrg9atMNjkojrQ1RGOMKKGwWr1qSjUuMzkj75f/OPLKown7/R2S76+KI4rcqqVUxMAxhiWlVXKDW9q0um8Wz71QVgnAA1FRVng/GkwJvuJm51XgJ9ceQ1tz4kDLlHEwOQkTgz0o210BCa7HbPzC/CZZSuR5MW/r93lwi/e2oXeCe+2fJ13dngITx59W3bchupZPhUwCje5JKjD3V1B3zERzYbNvi07yz0ioUZhvhN9XIW5lEmbDe1jo5JjGuNw+f88leK/eSdLyspli9iJjN0S7BjCNgFYBSiZSvUEANkaq1U5uXjgKrr4xzLOOSZtNnSMjeJ4Xy96Jwwf2NNfnpWNu1euQboXVfcsDgce2r3T6y//vskJ/HrvbsmSv8BUj/E7V6726j0jpa6kVLLWhdFuR/Nw8BImo5nd5ZLd0nexYZndAiXU0tdno2ZzwKW5j/b1SO7K0ahUcV3W/cILfmpCAhYUl8gdcv2qIDfwC9sEwFpW9n0Aa+TGlWVl48Grr0VqItXmjjXnL/pd42M41teHs8NDGDWbJT/khWnpuGvFaq8mAZM2G36x+03Zoi7tY6N44I3XZMcBwJfWrI/6ff/aRA1m5ORKjnlX5llqvBjx8e4fAIZk9qmXyGRhk/fjnHu9BVPK2zI1OZp0ZXHRAdCTiyf1K8oq5A7Js+p0lwU1hmC+mSeL9fpV4PxuuXHZySl48KprqA57DOGcY8JmRefYfy/6wyaTT3cHuSmpuHP5aqQnyv+7D5mM+MP+tzw+ezze34cHd+2EyYvGJFtq5mL1jNio+rdIZgvl6SBumYxWnHOfi85MHSM9aSiJo0Yz4TBqMQe89W/UYsZZme1/q2ZUBXSOaKe4aMm/PDtH/nEUYzcHM4aQTwDqysvT+VTSn+S5VAoFvr95G3JSUkMdEgmQWxQxZjGjbXQER/t60TI8jBGzbxf9i+WlpuLOFauQmiC/3fXU4ACeOnHsff8bB7Cz5Swe3rvbq/LBM/Py8YXV6/wNN+xm50nnAQSzZkK0mrDZ4HT79js2ajFLPgbSJmpotdEHnHMMTAZ+97+/o11yZVClUGCp/B1xTFOwD14S60tkkx63NlZWpgUrhpBPAJSi+FMAsn+rL6+9DHMKZJsjkAhxuF0YMZvQMjKMo329aB8dxbjFEtTks7zUNNy+bCUSFPLLfq+eOY3957LfjXYbfrlnF/5+9IhXWclZycn4/qZt79uLG+0qs3MkX28bHYn7REB/lv/7ZS5WJRnx0Wc+XIJx9y9yjr2d7ZJjlpVXTMscsPpSndyunyS43VuDdb6QfgM26PVXArhVbtz1C+qwaXZImx4RPzjdboxZLBi3WGB2+N/swxc6bQY+3rQUv3prl2wC32NHDsHmdOH5Uydg8jK+ZLUa92/bjvy0oE2iw6JEq0WiSuWxq51LFDFoNKIwPT4z2h1uFyZ9TP4D8F5zKU/KqL6I14J19988NIgxi/TWzM3T9HqQmZSEyuwcnB0Z9jxIFLcBeDQY5wvZCsDS6upUBvxSbtycgkLcsXxVqMIgfjA7HGgbHcHx/j70GMbDdvE/b1ZePm6qa5Ad53K78cQ7h72++CeqVPjBlitRJd+AI+oIgoBymYtVr8zFLpaNms1+7TnvMYxLvl6VK51cSf5ryGQKSmvu11vOSr6enZKCxTrZzWIxj+PSv89eVD7cuEqvD8pzq5BNAFx2+1cASDZx1qhUuHfDFR9IhiCR4XS70TY6gtODAxi3WAIu8hGIhlId1ss1yvCBRqXCT7ZtxyL5Z2xRSy5BqD8ImdnRiHOOET87zvUYpCdFVXHWZhnUVjYAACAASURBVDZU3OdqeQRqwDiJUwPS5b2vmFUzra8JC4qKpWsCMJZi4XxtMM4Vkp9yfWlpOQdks/7vWL4KJVp6BhcNjHYbTg1MXfijxdaauUHJC8nQJOGh7ddhofw+26iWmyr92KLPx0JJscJgtXqV2Hkxq9MpuQNAYAyVOdK5FWRK/+RkwPv+AeC1s80e7nunMMawuWZuwOeJBW7x0j+JJLVadtsvgCuDEUNIJgCCIPyQAZLp3E36clxFnf2igsluR8vwcFA+4MHEATSU6AIq0avPzMLvrv8QauKgpWheqvQOmQmZkrexatBo9Ou43okJyYtNUboWSarpl2jmK7vLhSGTf/8GFzLa7TggU5Z7ib4cpdPkplAqaXdugXRlUsbYFgTh+h30JMDFev0qDlwtNSZJpcZX122I2trr04lbFNE2OiK5JSecXG43zo4M40hvN97p7YHFi/38nqyvnol71m2Imy/5XNkJQGCNWaKRyW73OwelfUy6f0SV/F0WwVRuSTAeB7585rTsNs4bFtYFfJ5YIZXkPLegEE+8I9nBNK9Jp5u3t7NTvta5hKBPADjwXbkxtzYspg5cUWLAOOnz3upgsrtc6DWMo3lkGGeGBtE2NgpXgPFoVCp8dsXquFthSlVL10iYsPueJR/t+ib9f6zRKpVJDfkeC2QqITgYjwUnbTbskulaWZWTG9M5Or6SWnHNTEpCcbpWcheLKAhrAUTPBKBJr18pAk1SY4rStbhh4aJgnpYEYMxigd3twu7WFhzr74NCEJCemIjMpGRkJiUjI0mDDE0SUhM1SFap/Fq1cbndGLNaMWmzYsxiwbDJiL7JCfRMGDAmUyrYV4tKdPjKug1xuR0uOUF6JWNSpu1trJm02Xyu+38eB9Am02hmXhQ3gIoWcrsovPVS87uyeRzXT7PrgtyN19yCQskJAJ9KBPxRIDEEdQIgAl+SG3PH8lXv64JEIsfqdGLEZMJPdr7qdZMdjUqFJJUaGrUaSkG4ZK1uq9MJp9sNh9sFi8MBqxc1+QNVqs3Ap5etwKrK+C0fKvcow+4MfItWNAlkW+PA5ATMds+PDhKUSszMox0AUsYtFpgkfobeMlit2NXeKjmmMD0dlwVx10+045zDITMBqMkvwAunT3l8nQHLa2pq1CdPnvT7OWnQJgANZWXzwPlGqTF1JaVYVTkjWKckAbK7XHjq2Ds+tVe1Op1TF3RLYK1AgyUzKQkfbVyCbXPnybbTjHVyldFcPH4qAY6YTQHlf7SOSj//n51fAJVANyKeiJzLFlHy1jPHj8o+1rutoSnuP78XsrtcsnkVpZlZSFAoYXd7nNgnJ1ssjQB2+RtH0CYAjPMvAdJVDD+2eGmwTkeCwOl242hfb6TD8EtuSgqurp2PaxfUxU2SnxylzMqZ2x0fEwCn2y27f1+O3PP/eYXFAb1/vOufnPBr6+XF2sdGcbBbOvO/OF2LK2bVBHyuWGLz4merYAwV2dk4Nei50yfjfDUiPQForKwshst1rdSYuYVFWFBEH7pokq7RyC5DRRPGGBaVlGJ77XwsL6+cdsVCRA/7hs+LlxWAbsN4QH0NOIDmIelOc/MKqe+IJ3aXC0N+br28EAfw5NG3JbdiAsBtjU3T7rNsdXq3ujUjJ1dyAgCgMZA4grMC4HJ9CIDk7ckt9QHFSUJArVCgMicbZ4el75YirThdixWVM7BtTi1007h3eyQrM4aLwWoNOOu812DAhERCpIIxzKUEQI+6DeNBSczd39mBDplEzPKsbFw+c3bA54o1Zi8fb8ltVeVAfSBxBOsRwIelXqzIysZSfXmQTkWC6ZNLVuCLz/4zauoAAFNf0LVFxVhaVoHlZRXQZU7fi/6F5O6J1V50UYxmTrcbnWNjAb/PqcF+ydfnFhQhRWZL5XQ1abMFpZ6EyWHHU8fekR1354rVEKbZ3T8AmO3eTQBKtRmSeQAMyKkvLS0/2NXV5k8cAX9jNJWVNYicS6Zv3lhXT0V/otSysnJ8+/LN+Ombr2PE5Hu71WDITk7BzNxczMwrwKy8PMwtKERaoiYisUQzt0ylxkvtyIglneNjQalGKbNkisV6fcDniEecc3QHadvfk0fflm3StbSsAo06fVDOF0tsTqfXv+eCIKBYq5VMalUIQj2AyEwAROAWqdeTVGqsmVEd6GlICK2rmok1lVVoHx9D/+Qkhk1GjJhMGDBO/f9DJhMGjZN+b+djjCErKRl5qanIS0lFbmoq8tPSUZSejpm5echJka5wR6aYZO4a1DE8ARg0GoNy52lzOdEmkwA4HTrN+WPQaPTYbtoXJwf6cFCm5K9SEPDZFasCPlcsMvq4tbIkI0NyAiAy1gDgb/7EEtA3Rk1NjRpm8/VSY1bPqIJGpQrkNCQMBEFARVY2KrKyPY6xu1xwuFwwOx1wiyKMNhtcogirywm3W4RCISBBoYRaoXivTkBqQgI0ajVtuQqQyDmGTNLd2BJjdAJgstuD1sr49OAg3BKPszI0STHZDjrU7C7X/2fvvcPbuM6073vQAYIk2HunClWoXi1ZcpEsW7Zlyy2JU9dvNm3Lu9lsdr9NdpPdJLtv+iZOHKcXJ7ETZ1OcYsdVXVQvFCVS7A0giDYoAwymne8PioosEzODSpDE77p0xeEczByCM3Oe85T7gSMJ1cVpwhyH587JStgCAB5ds27B5vPQcfbsqFf4nihC1iY6l6TeGHmh0DZQlOzs7l22IplL5MgijDodjDod8k3XWlHPP7G9rEWUJFxVyGwvnINhk+kW1KlKcDxvH5M9vrmxEZpcOPItpCrx7xfnz8CrkMRZWVCA9y/QknBRkuL3ACg3R0pYQSmp7AsKkBX+qS4sxOpc6V+OHEkjEYKwQulQkcWSodmkBkIIBjzulPWiEEQRnXb5XvM59/9b8YaZlIRfjg8N4PToiOK4f7l994L1CgdYNm5jt9Kar6SeW7GltjYhd0py6ZcUJWsA7Frclkv+y5EjBfCiiICCLn7xHDMARmlfSqRmp7nsnAArxI5h67VabGtuTdn15gOiJCUtugQAk6EQnr+g3JfmrqXLsLlx4RphSt6RmdBoNIqtwIlGk5AXIGEDYFNray0AWf/+lqaF+4fOkSOVcKIADyMvv1xknjsGgDMYhCvFVSfnxkZlj2+qb1SUU15ojPvppD0wnCDg+x1HEVVQt7OZzfiHHbcnda25DC+KsvoUcpTnyRsAEkUtTeS8CRsAlCjugYz0b77RiJWVObWtHDlSAcsLiruH0ry50WLbz0ZSlvQ3jSCKuOiQd//fsTihd+S8heG4lBhhPz93WrFvAEVR+OTuu2Ezz708lVThYZiEc13KFTwAVKY9ANdaEcZkQ13DgpN3zJEjXYR5Dl6FBkw1c6AFcpjjMOBOXdLfNF0q3P/bW1pSes25DCEEwwoqfWp4vfeqYskfAOxvX41tTQv7+3fH0XTtZsqsCsY9IQl9ucms0OvkDm5pyin/5ciRKkLRKLwK5UM1ytnCs0pUENDndqVFdfL4kLwOyqb6hpz63w04g8Gk23RfdU3iN53Kan9NJaX4u+07k7rWXMcXDiuGSOQoV/buJeRuT8gAWNfcXAhANptmQ11DIqfOkSPHTfCiCGcgINudzWYyI9+YvQscL4rodU2mLOP/RvxsBF0T8vK/t+fc/9fhxORr/h0BP757/KiiMWfQ6fCfe+6d8yqVyTIRlNfwUKI4L09pSELNLRIyAHSiuBYy8X+byYzKgoJETp0jR46bYDhOMcZaW5S9u39BktDrmkxqByTHieEh2YXIrNdjZ+uitFx7LjLiS67m389G8NTRQ4plqQDwT7fdiUVlZQlfaz5ARyIIq2z+E4sCoyn2gjtF5SMKDflmIjGzTKNZB5kbaGllZUKnzaEeQggiPA+G4xAVhCmVPlGAKEkQbmilSoGCVkNBr9XCoNXBpNchz2BEnsGQy9GYIwTYCOwKBkBzcUmGZhMfoiShz+VK2t0sR8fwkOzxXUvaYNHnsv+B5Gv+OUHAd44fVVXO9tCqNbhv+cqErzVfSIXCokajgdlgkDMktPa6ugqMjspnwt5EQgYARcgaOftxaU5qM+VIhCAYZRFko2C4KMIcp9qKFyRc2339peaaoihYjUYUmS0otlhyxkAWQ0ciGFd4iSzJwmdOlCT0ulxgFJrCJEOf2w2ngnv1vpwaKYDka/4FUcS3jx9RbPELACurqvF/d9yW8LXmC24mlPTuf5oCo0n2XJxeXwMg/QYAAZbLHc8ZAKlBlCT42QjoSAT+SCSlyVOEEARZFkGWxRjtQ6nVior8/DnfUna+wXAceFHEiE++TW62GQCZWPwB4Mhgn+zxhuJirKxOKDw670im5l8kBN/rOIruSafi2FKrFf+19/4F3/9DlCSM08nv/qexGo1AMPZxSpLiVgNM9G1fL3dwUVl5gqfNQQhBIMrCFQolJBuZCBIhmAxOdQCsLChAZX5BTsExS6AjYXjCjKzLVUtRWfXMZWrxpyMRnFWQnr1veXta5zBXSKbmnxCCH504jk6FREtgqvvrV+7fn+vwiSmDKxXtraexGk2yxylC4hYCidsA2NTaWgBBiJlxNCVbmEsAjBdeFOFmQnAzjGy2dzqRCIHd7wcdiaCpuASmBarXnU3QkQh6XfLtbZtKSrMmy3o62z+dMf9pDvRdle38p9NocPfSZWmfR7ZDCFH0IMVCkiT85MxJnB2XV1kEpgzRz+29L9dtEVNlu24F5c54MSiEaQlFpd8AEAmpl3PslFnyoMvFk1Uz3YbTGw5nZLevhjDH4YpzAi2lZSgwyVudOdJHKBoFy/Podcl3AVxTW5ehGcnD8jz63K60ZfvfSFQQcHSwX3bMHYuXokS5fGreMxlKLA4tSBJ+eLID51Us/gDwDztvx5bGnP6LKEkY9HpS/j7X6eRDKhnxAGgFoR4y7uGKXPmfKrJx4b8RiRD0uV1oLC5GsSX3Ep0NppXDet3yBsC6WtmIXEZgOA59LldKXZ5yHB0cQFjBy/C2teszMpdshhdFxQqSmYgKAr5z/IiqmD8A/NWmLXh4VcJt6ecVIz5fWry4eqWNNUXFHXeJ2wAgFFUvFx2uzLn/ZeFEAXZ/9i78N0IIwZDXC51Gm/MEZBheFOELh+EI+GWbAGkoCmtrZ7fltp+NYMDtTovC30xIkoQDfVdlx6ypqUVbzhWNiWAg7r9LmOPwreNHMOCWDz1N8/a16/HXW7YlMr15h4dhFCW7E0WnlKBNSNw7tbgNAA1QKXc75eL/M0MIgTMYhCPgz9iLMhUQQtDvdqGtojKXE5BBJkNBSITggn1cdlxrWTkKTLPXYGUiEEh5Yx8lTowMw6Pwks3t/qdc0e44E//coRCeOnYIzqBMuvkNPLBy1YKX+Z0mzHEJ51qoQZuGxOz4PQCEWORCALmd4lvxsxGM0TTYDCRGpQOJEAx43FhaUQlNrjog7YiSdD1j+7x9THbs5obGDMzorUiEYNjrTdtuJxaCJOHFK12yY2oLbdjeLKtUviDwhJm4NhuDHjeePnYEIZXVG3uWLsPHb9+VqxjClGc3XX0uprlR4G0mCEXFHXeIP3VYo7HIqQDmdol/QZAkjPi88KlQzcp2IjwPu9+PWptttqcy75kIBiBKErzhMMZ8PtmxsyFxy4kC+t3ulAmcxMPxoQEVu/91OUMViEvx7/ToMJ45cwqCSp2AvctW4BN33pX7nvEXtct09Lm4EaX8Gg0hGTAACLHIHTZnSTnSbBNgWQx5PWm/KQIsC38kgojAIyoI4G+4STSgkG8ywWowosBkgjlJ42wyFERpXl7OyEsjnChg8pr79czYCGTDbdZ8tJVnVnabjkQw7PVmLNnvRnhRxEvdV2THlFqtudr/a6ipxpAkCb+5dBGv9/aoPu8jq9fioztuz+38MRUiHfC4M1L2yovyHgCJouKeRCKrtawBsNAXB4kQjNG+hEU3YuGPRDBC+zBC+zBO++AMBuEOM6otdgDIMxpRkV+Ayvx8NBQVo6WkFJUFhUpNJq5DCMG434+W0tLEfokciozRNCRCQAAcHZAvc9vRuihjL+F03dfxcHigD7RCS+T3btiUNZoIs43SvRFgWfzgxDH0qkz2A4D3btyCD27NJfwBU+/DQa8HAZbNyPWywgNAAIvcbbWQDYCoIKDfnZrGJ5wg4MqkEz2TTnRPOhX1ztXARKMYiLow4Hbh2OBU//Q8oxHLyyuxqqYGbRVVii9PPzslSZxz/aUePxu5Hi7qmXTCxcgvtrctWpKJaSHC8xjwuGc1hyXM8/izwu6/Mr8A+1asytCMsp9ya37MpLQ+tws/OHlcdZhAQ1H4m2078I51G1I5xTnNiM+X0fCu0vNHbmz2opK4DQAKkM3yW6ha8gGWxaDHk5RrlBdFdDrsODs2gi7nREYUAZloFCdHh3FydBgGnQ5ra+qwrbkFTTG6yxm02tzinwam8kX+Eu+fNtBiUV1ow+o0a9xLhMAR8MMZDM56yeofL3cqJqe9d+Nm6LULW3/+RsqsVpj1enjDDAIsi6ggQCQEf+jqxKtXu1UnrBl1Onxqz17c3ro4zTOeO4zR9HWdjkwRUDDWKI1GvSvnGoms1rKrkjgLscHZxhkMYtxPJ/ySdAYDODLYj47hoVlJrJqGEwR0DA+iY3gQdUVF2LNkGVbV1F4PEeSbTGgoirvfRA4VDHk91w0+PxvBBYXs/30rVqbV/R9gWYz4vBlR9VNi3O/HoX75pj/VhYW4N9d69i1YjcapJjIAhn1efOrFP6gW9wGAIrMFX7z/Qayoqk7XFOcco7Tvep5OJvFHFUINhMgrhs1AIiEAQe61I6fNPR9J5mYY9nnxh65LuOJ0yCZ7zQajPh++23EUdbYivHv9JtyxeAkshlxP9XQwEQi8yRX76tUe2ZIfLUVhb1t6WtxyooBx2p/x8r5YEADPnz+juFt9YtPWnAS5DK9d7cFnX3kxrvBkY3EJvrxvP2oKc5U/0wx7vRnf+QPX2sEr5BqIkpR+D4AGEOQeRUEhU3G+MNVgw5fQzTBG0/jD5U5cctizbuG/mVHah8+9+hIO9vfiozvvQHVh4WxPaV7hC4ffJKQTjEZxREHjfktjM0qtcct+y8KLIiaCAbhCoVl399/I6ZFhxSS1ZRWVuLtNtkP5gqZn0olPvfQHxTryG7lt0WL82+67YdHnjH5g9nQvpmE4TnFzbTIY0u8BkABe1gMQx002V5mWyI33ZvCGw/jtpQs4Oypf3pWNHBnsx6nRYfzd9p3Y3746VwKUAvxsBENez5t+9trVbsXcj8fWrEvZHARJgjMYwGQwmHUKlRGex28uXZAdQ1EU/mHnHbm8FBl+ef6s6sVfS1H40LYdeHzt+twzfo2oIGDAMzu6F9O4QopeZvFwX59HadDNpN4DsAByAOJd/KOCgD/3XMHrvT0p1wXQUBSK8/JQbMlDockEo1YHo04HhucgihL8URa+cBi+MBPXDmAmooKAL77xKjqGh/CJ3Xtgm0UJ2rkOHYlgwON+0247GGUVY91tFZXYUN+Q9PVD0ShcoRB8keztSfGrC2cVs9TvXroMK3PxaVk8Kr2URWYLPnvPfVhXN/vNpbIFNxPCGE3P+sZ2QrkKbBhA3JNMJAdANhWXzYKkoXQy1chH/eLfPenEs2dPpyRupNdq0VJSiuVV1dhQ14DWsjJU5heoin3ykogRnw+DHjc6HXacGxtNWLry8EAf/urZZ/Dl+/ejqSSnCRAvjoAfdr//LT//9cXziIryz8/7Nm5J+LqcKICOROAOhTIiXJIMF+zj6Bgekh1j0Rvw4W23ZmZCcxirUVmefXNDI/5t9z0Lun3yRDCAp44cwpmxEQSjUSwtr8DtrYuxqKx8tqc24/viRihCLidy3kSqAGRnEozGXYo4Z/AwDBwB+T/ENFFBwP9ePIdjgwNJufsbi0uwrKISS8or0Fhccn2xX1pRibw4kvL0minjoaWkFHcuXgpgKiTxem83Xu3pwQXHeFw7Qbvfj/f/4uf4r3v3YWMKdqQLgaggYMTnnVE4pM/twqmRYdnP19uKsK62TvX1RElCiIsiwLIIsOyc6UUR4qJ49uwpxXHv27QFpXmpzYWYj9y3fCVevdo94zGDToeP3HIrHl29dkG7/Mf8NP7q2Wfe9GxetI/jon0ci0rLcHfbciyZxe6SdoV1hwDyIhkxSMQDQMvdJqF5agAwHIdhlZ2exmgaPzh5PGHxniKzBZsaGrGpoRHl1plbPA97PWirqEzqoS22WPDwqrV4eNVaDHjceO7sabzUc0W1/kCIi+JjL/wa3370HbnWqzIIkoTJYBDOGK1ZRULw3Lkziobi7qXL0D3phFajgVGng0mnh06ruR7/JmQqBMeJIqKCkBEdiXTw7NnTihuJlpJSvG1t6nIh5jObGhrx4VtuxdPHj0C6wZXdUlKK/7znPrTkvHj49rHDMRX9et0u9B4+gNbSUuxvX5PxUmgCwK7QcZOiqMx4AChAdibz0QAQJQmDN8VrY3FscAC/uHA2LoneG9m/chVuW7REMakpwvNwBAIpy8pvLinFv+7ag/+zZRuePnoIL3VfVhUe4AQB3zt+FF/etz8l85gvCJKEIMteV/eT+y7/3H1Z0bPUWlqKNTW1AKbuxzDHzWpSUrroGB7C+XF5DQSdRoN/v+se6DU50R+1vHvDJmxrbsHB/j6EOQ7LKiqwo2URNLnSSQDAqWF57xsA9Lnd+OLrr2BDfQP2rVgFmzkzOVDOYEDRIM6YAaDsAciMLnImGaV9ioIohBD8uvNCXE01ZuKycwJ3XHPRK+EI+JFnNKAwhcl45VYr/v2ue/Do6rX4zMsvot/jVvzM5QlHyq6fbUwn/4hEeksTTFGSIBIJEiEQRGlq1y0KiPC86sW5z+3CnxTa22ooCg+1r0lo/nOJMZrGL86fURz37g2bZtUdO1dpLilFc263PyN5JiNoVlkWmQA4OTKM8/Zx3LWkDbuWtEGb5tBJr0uhuo8QwZiXlx0eADVf4lwiwLLwMPJJf7wo4vsdR9GZgoWw+5r+v9oX3KDHg6XlFSnvwbC0ohI/ese78Z3jR/CzM6dkd7DFFtn+UFmPKEkIRqOI8BwiPA+W5yFIEgRJSmuGfDDK4gcnjiteY1NDI+rnuQIjE43iOx1HFMMWi8rK8L5NiSdC5sgxE2tr6jBOy7vZb4QTBPy+qxNnRkfw+LoNaIwhnZ4Kel0K+j4UdfpAV1dCWeZx+38oSZLdErpnsVtYqpkS+5GP+0d4Ht84ciAli/80L3R1qk4cFCUJvW5XWiRb9VotPrJtBz5/3wOyrYRTUZaWaQRJgpsJodc1iQv2cfS7XbD7/fCFw4jwPHhRTOviTwjBD092wK9gMOcZjbh/nre3JYTgByePKxraOo0G/7Y75/rPkXo+sHVbQi59e8CPLx14Db+6cC4trd8lQtDrVtT3OZDo+eM2ADRarWyAbnIeGQATwYDswhrmeXzt8Bvocyu7yae5bdFirK6ulR0z5PXggkIc9EY4QUCvaxKcQglZomxvbsV3Hn0clQUFbznWUlKKJzbfkpbrpgOW5zHi86LTPo5h71RGfqbr4AmAn589jR4VmuxvW70OBSblMq65zO8uXVSlT//E5luwOAtKsnLMP0rzrPjB296FHS3xt9gmhOCNvqv4/OuvKGbrx0u/x63YbpgkYQDEbUqXt7SENZHIJ4CZ28hHBQHvXLcRujnelYsXxSmhlhjHo4KAbx49hGGvusoAs16Pj9+xGx+55VY0l5biha5O2fF2vx+3NLWoVjgTJQl0JIICkyktHdFK8vJwT9ty6K5loJflWbFv5Sr86649cZUjzhYBlsUo7cMo7UOY42ZVifHXF8/j0IC84A8w5VmZ7xK3J0aG8NtOebU/ANjc2IR/vn3Xgi5Vy5Fe8k0m7FqyFNuamuFmQhhVyLy/mVA0iuPDg7Do9WgoLpl5gYyTV692K1Wf8Za8vL8ZcrkSygiOe6VwOBxSrc32IQAxC3D3Ll+R0sS02cARCMSsaBAJwdPHDqNPQaN8mqUVlfj6/kev18uXWfMx4HZh0BtbuTHERUEBWBxHspMoSfCGw8gzGmDUpb4ts1Gnx/q6qUXp3uUrsaamNqvbrxJC4IuEMejxwBkMZkVnuz9e6cLLPcoluzazBR/auj2rv99k6XTY8cOTxxWNscqCAnztgUdkw1A5cqSKUqsVu5cuw9amZriYEEZpn/KHriERgq4JByYCASyvrEqqQRUhBD89cxKcfGjh2NHe3m8neo3EZkeIrH860fr3bEGQJFnt5V+eO6O6pebO1sX4ziNvR72t6E0//+C2WxWzR1/uuYKxOK1QUZLQ63JhUlk7et5CCIGbCaFrwoFBjycrVO8IIfjfi+fxp8uXFMfqNBo8sXHzvO6+2Od24fsnjimWmhp0Ovz3vQ+gMEMlVzlyTLOsohJf2fcQvvbgI3HX/p8dH8VXDrwGTxLNg65MTigL6xHyXMIXQAIeAACoLSq6B0DMWrUVVdVoq6hMeFKzjSPgj/nFH+zvxYvd6iouHlm9Fp/ctWfGcEihyQxPmMEV50TMzxMAIz4ftjY0xe36DLAsooKAApNpwTRKkQiBm2Ew4PXAyzCzrt89DSvw+G7HMZwcGVI1/h1rN6C9uia9k5pFRn0+fPPoQVUemY/fvgvbmloyMKscOWam1mbDA+2rYNbpcWnCrrqnSiDK4tTIEJpKSlFsiV9i+Zfnz8IlLyHPC0bjXzk8nnDcJ79GYgZAYeE6UFTMzK+aQhu2NDYnOqdZhRCCQY93xp3JMO3DD1TsWiiKwke27cAHt26XXbiXlFfgN50XZG8oPxuBQadDS2mZ+l/iGhGehzcShsWgT0tIIFuQCIGLCWHA44YvHM6ahR8AXEwITx4+iAEVegoAcPuiJdi9pC3Ns5o9JoIBPHn4ABgVOgn3r2jHO+cE8wAAIABJREFU++dQgmmO+YuW0mBVTS3uWbYCwz6v6rAAJ4o4PTqMqoICVBaoF22zB/z4zcXzsmMoQl48NTDwfdUnnYFEPQC1APbFOm41Guds8hIdiczotokKAp48dAAhTlnp8G+278S71m9UHGcxGGDW69ExPCg7rt/jxrLKqoS674mSBA/DQJBEWI3GeeUNkAjBZCiEwWsLf7a1sz05Moynjx0GrdDRbhqLXo8l5RUY9LgxcNO/QZ8X9oAfLiYEL8MgEGWnkhkJYNTp5kRy3JDXg68fOahKLXRzYxP+Y8+98+p+zTH3yTMYsHtJG0ry8nB2bFSVN0AiBOfGx5BvNKoOJfy286Ji+JeiqH8fo2l5FTEFEt0WymYxqc2Mz0ZixWx+03leyR0DAHjHug1457oNqq/3yOq1eL23Bxfs4zHHCKKI7x0/gn++YzesBqPqc9+IKxQCHYmg1mZLyB2VTYiSBFcoBGcwmHXtp/2RCCaCARwfHlRs7nMzYZ7H7xWqQ2aCoigUmEywGU0oMJthM1tQlpeHyoICVFgLUJKXN+sGwmWnA9/rOKbK7d9WXoH/3rsvqQSqHDnSBUVR2N++GuvrG/DpF/+Iy05lDRhyrd9HmONw19JlsmMnQ0GcHlV8d3goQXhB/axnJqG3wurGRpsRiOkDoSgKr33472DRz60kJkGScNH+1q54/R43vnrwdcV68bvbluHfd98T98t2hPbhXT/9keLLcXFZOf52246k9bstBgOqCwvnXKUGJwqYDIbgZkKz7uaXJAn2YAAjPi+GvVO784mAH+EsSDi8GZ1Gg3JrPiry81FnK0ZjcTHqiophyVBW/amRYTxz+gREFR6a2kIbvvu2x1FkntvqkjkWBqIk4cnDB/DcOWUJ62nuX96Ou5bGDvM9dfQwuibssuegKOrfOgYHP6v6ojFIKAQwQdNsrc32AQAzt6oDsLmhCVVxxDyyAX9kqnHLjUiShO90HEVAQbFteWUVvnD/fmgTWJwLTWYYtTqcUEgS84QZREURy5JMsORFEd5wGAGWhVGvy/r8gAjPY9xPY9jnQygazbhwD3BNbMntwrGhAfzhShd+dfEcDvb1otNhxwjtgy8SBp9FuQc3IhGCYDSKiWAAPS4nTowM4dWeKzg1OoIhnwd0JAKjTod8FX3j4+XV3h788vwZVeGZYosFTz38NpTnx3yt5MiRVWgoCpsbp9a6juEhVRuTHpdzKq9rhr4MXRN2xd4gAPxR4B0TNJ10451k3vydAKpiHexyTmBNHL3Ls4HgDI2MztnHMaaQ8GHRG/Cfe+5NymX5tjXr8EbfVXQ65C2/13t7UFdUhI11ycvvMlwUVycnkW8yoTK/IKsU5yRC4AuH4QkzCCooYaULe8CPTvs4uiYcGPZ5VWf/zgUIplyNk6Hg9VBFgcmEJeUVWFJWgaUVFUntwlmBx09Pn8Q5lYqWNpMZ//PAw6ix2RK+5kJj2qjK5UnMPnuXrUBTSQk+/vvfqpLD/23nBRi0WuxoWXT9Z1FBwK8unFNzuafODw3FVx8eg4QNAEJRpyhCdsc6fsk+DsQRC88Gbi79kwjB71SolH3s9juTfnFpNBp8+q69eO9zzygueD89dQJmnR4rq6qTuuY0QZZFkGVh1OlQmmdFSV7erAnQMBwHdygEXyTz2fwEQL/bjQv2UVywjytq0883AiyLUyPD1w2CqoJCrKquwZqaWtTepGMhx5ifxvc7jqqWBS/Ns+Lr+x/JdaqbAUIIGI5DKBqdalQl8IgKwpueDb1WC5vZDEfAjz9d7oIj4EdlQSEeal+NVTXysuM5Useyiir88G3vxN//5leqqn6ev3AONrMFq66V/P7i3Bk1z0zYoNN9NfnZTpGw6bi5qel+QsjvYh0vzbPiD+//UKKnzziiJL2lD3mnw46njx2W/dztrYvxX/fGLIiIm46hQXz0hV9DUlj8dFotPrx1e1raolIUhUKTGaXWPBQYTWlPIGM4DnQkDDoSATsLMfSJYACnRoZxcmQI3nDCJbXzmtI8K9bU1GJVTS0aZWROjw8N4Bfnz6pujFJZUIBvPPQYagtzO/9pWJ6Hn2XhZyNgolHF8IlECF7o6sSrPd0gN+gqaigK71y3EbuXtiHPYIDFYIDVYEwoTJlDPf5IBP/3N8/jigqxOL1Wi7+/9TY4g0E8c/qE4ngK+I+OoaFPp2Ca0+dLjHUNDVU6ipL1Vz/z+HuwaI407whz3JtEecw6Pf71xRcwEYitaqjXavHL9zyR8lyHn5w6gaeOHlIcZ9Tp8De33IrmBDQC1KLVaFBoMqPAZEK+yQiDNrl8AUIIIjwPhuMQjLIIstFZyeQXRBGnx0ZwqL9PSWs7x02UW63Y0tiMTQ2Nb0ok/W3nBbxytVv1eeptRXjy4cdQYc3F/HlRhIdh4A0zcSlXRgUBPzl94i2bl2l0Wi3+c8/e63+n6YqRIrMFhWZzrtIiTTAch4+98GucGxtVHGs1GMBLkpoKmUGNICw/Pjamrq5YBUlt7TY1No4AiBnof9/GLXjPhk0p71WfDgIsi17XX9ouOoIBfPblF2U/8451G/B323emfC6EEHzyT7/Ha709imPNej3+dvvOuKUqE8Wg08Gin9IvMOl10Gu10FJTL5HpnYUoSRCJBFEi4EURnCiAE0SwAo8Iz89KEt803nAYhwb6cHywHyEVYjSpJs9gQKnVCotOD6vRBL1OC7NOD5NeD71WizyDAZpr3ychEkIcB0mSwHAcREKmdoQg8IbDcAWDqnQp0oWGorC8sgq3NLWAEIJvHz+i+rOLyyvwPw88jGLLws7250URdr8fnjAT93NBR8J4+vgRjPrkc5Se2LQVa2fIx6IoCsUWC8qt+fNadnq2iAoCPva7X+OUckmfGghFyN6O4WH5RSlOkt3OnQBFxTQAuicnMOT1Ykl5+azXIStxY0zNpNfjjd6rsuPzTSa8d8OmtMyFoih8cvfdGPJ60K8QS4rwPL526A28b9NWrKyMmZOZMjhBACcIoFNmg2YGFxPCn7uv4OTwoKpytETRa7RoKilBQ3Exagpt1/9V5OejNM+a8oqLCM9jMhiEiwnCFWIwGQrAHQph2OdFn9uV1pCGRAg6HXZ0Ouxx7SR2LVmKT9y5Z05sDNIFuaZeaff7E8p1GfX58PTxI6Ajyn/fmZKbp+fgYRh4GAZWoxGVBQVzrjQ4mzHqdPjC/Q/iI796DpdlJN/VQAj5/okUL/5AkgYARVGvE+DhWMd7Jp1guKnyo2wvCbzRQNFrtegYGpAd/3D7ahSk8WEx6/X48gMP4YPPPysbhgCmLM1vHzuMx1avxfbm1rTNaS4yGQrixctdODU2knLPg0mvx9KyCiyvqsKyyiq0lJSizlaU0RirWa9HQ3ExGopn9gB5w2H0uV3oc01O/a/HjUG3G3yKwy5qvlmNRoMP33IrHl+7Pus3BOkkzHEY8fnAJOi9OT8+hp+cPqG6u2W9Cu9gKBpFn8uFPIMRtTYbrMbEBMdyvBmzXo+vPPgwPvDLnycjkNejN5k+msp5TZOUAUA0mlchY716w2FMhoLX4k7mrO4br9X85YV00TEuu0ukKAr3Ll+Z9jlV5hfgm/sfwwd+9axiacm00pQnHMa+Fe0p6UU9lwlzHP50pQuH+ntTtuM36/VYVV2D9fWNWFdXj8WlZVmfUFVssWBjfcP1VtTAlOBVz6QTF8bHcN4+hgv2cfhVyhUnSoHJjM/cfS82NTSm9TrZjChJU3LOoVDCxugrV7vxwqWLqmWvV1ZVo6m4RPX5GS6KnkkniiwW1NmK5nU76kxhM5nx9f2P4v3P/VR1ZcwNMJIkPXS0pyct7V2TXic2NTYOAmiMdfzhVWtwW+tiGHU6tFVUZu0LkxMFdNrtMOv1+NGpDhzq74s5dn1dA77x0KMZm9uQ14MPPv+sak35tTV1eHz9Bph0C8/FKkkSDg30449XLiGcghh/ZUEBbm1uxfbmVqyurYVeM/9eiBIhuDrpRMfwEE4MD+KiXd4AjheNRoNvPvQY1izgkjQ/G8GIzwdO5a79ZgRJwnPnzuC4gmfyRpZXVuOJTVsSDjtpNRpUFxaiPJekmRK6nRP46+efjecekEDIoyeGh/83XXNK+m1WU1i4gqKotbGOc6KALY3NECUJUVFAUZYm/Wg1GriZEKxGI546ekhW9OUDW7ehNY2Z9zdjM1uwsaERr/b2qLp5HMEAzo6Noqm4BLYFJKk6RtN4+vgRHB8aUF2GNhNFZgsebF+Fj992Jz6ybQe2NDajptB2PdlxvkFRFEqtVqyuqcW9y1fi0TXr0FpaCoDCRDCQtAASIQSv9/ZAIgTLKqsWVOZ5VBAw5PXAkWCsH5jyZn3r2GFcsKsTVQKAHS2L8J4Nm2ZsRa4WQggCLIsQF4XVaFxQf7d0UGq1oizPikMDsTeXN0KAfzw5PPyDdM4paQOgrrjYDOCRWMd9kQi2NbXAqNOB5XloNZqsjS+xvIDJUFC2IQtFUfiXO3ZnPIGpJC8P6+vq8XrfVVVGQJjncGJ4EFqNBk0lpfM65iqIIn5/+RKeOX1CtZfkZrQUhW3NrfjItlvxz3fsxtbGZpTkWVM807mBUadDa2kZ7ly8FG9bsw6LysvBCQLsAX/CHRcFScKZsRG8dOUySvKsaC4pmdf3JCEEzmAQgx53UtoWk6EgvnboDdXtZymKwqOr12HvsuUp+345QYAnzMCo08G8gBM3U8Hi8gp4w+E3lZzHgNcAHxmj6ZQo/sUieQ9AaekokaSPUjL5BOX5+dcTUYLRKWsyG/XnjTodTo0M4/hQ7Pa8TSWleHyWFA7LrPm4tbkVx4YG3qJaOBMEU4mYgx43lpRXzMusa2cwgG8cOYjz42OqEtFuptxqxXs3bsGn9uzFvhXtaCwuyUmr3oBOq0VzSSl2L23D/vY1KM/Px2QwCJ+K7POZCHFRvNF3FSdHh9FWXomSvLndmXImQtEo+twu+MLhhO7JaXomnfjGkYOqjVqjTocPbNmGDfXJy4TfDCEEvkgYgiQi35R+cbD5zMaGRpwYGlTqLqsF0DhO079I51ySNgDGvd5oXWHhJlDU4lhjeFF8U/JPgGVRZLFkXT6AXqvFy92X0TURu73jjpbWWc20t5kt2LWkDefGRlW1JwYAN8Pg6EA/NBSFhnm0wB0fGsR3Oo7Cl8Cuv6WkFH+zfQf+ddcerKmpy+1sVGDS67G8sgoPrVqDDfWN4AQBIz5fQl6ByWAQv++6CAKgvbpmXtyTgiRhxOfFKO1LOmxybGgAPzxxHJzKUFaxxYK/v/W2tMsphzkOAZZFodmUde/vuYKW0mBVTS1+p5zMubTGZusYp+n+tM0lFSepLSoyAngg1nFvOIwtjU3XX7ISIQiyLIoteVn34P+m84KsMtwjq9ZgcRrkd+PBrNfjrqXLMOB1q1axE4mE7kknzo2PosyajzLr3HVvC5KEn589jT9duRR3XLW20IZ/un0X/vG2O7GkvGLexvXTTWV+AW5btBj7VrRDr9Wi3+1SvVhNIxGCs2OjODI4gPbqmjktCuRmQuh3uxMu7ZuGEILfdl7A7y5dVO09aCgqxt/fehtKMxSy4kURvnAYVqMJhlyVQELYzBYw0ahi8zcK2GCrqfmOy+VKi1xqSv56jQUFwxJFfVTufBaDEYtuSJwTJAkMz6HYYskqd9Izp0/CE47dBObh1WtRkwW65TqtFncsWoIQx8l6LG6G4TicGhmGPeBHna0IeYbszMeIRYjj8K2jB3HRPh7X54otFvzt9p34xO67saisLKvuubmMxWDAhvoGPLRqDQpMZvS5J+OSsgUAD8Pg95c6QVEU2quqs25TIEeY49DvdsMVCiWcH3H9XDyP73YcVWwLfiNramrxgS3bMq7kJxEC7/W8gOwt785mam02nBkdUQqnleoFIThO08fSMYeUGAAjfj9ba7PdAiCmb9wTZrCjZdGbXrycIIAXJdjM2aM+9ePTJxCSia+/bc26jFnaSlAUhS2NTWguLcPJkeG4SowmggEcHujDRCCAMmt+VrUCjoUzGMDXDr2BMb/6vBiNRoOH21fj/933IFbX1M6pxWUuYdBq0V5dg/3ta5BnMKDHNalaqAaYWlDOjI7g3PgYtjY2Z31IRpQkjNE+DPu8SVWcTDMRDODrhw5gyOtR/Zntza1414ZNs5adTwDQkUhWJ3ZnO0UWC44O9ssajxSwtrGi4lujHk/KtctT5r+ptdkEyKgCRngeraVlb1k8wzwHApI1C9CPTnaAlXlxvXfj5qy72ZuKS7B7SRu6nU5MBOVVA2+EAHAE/Dg62I8hnw/FeXlZ64Yd9/vxtUNvxJXlv6yiEl+47wHcv6I9K5NO5yN6rRaramrxYPsqaCgNrjgn4grTTAQCeLmnGyurqlGRn53159PufrmNQjx0Tjjw1JFD8LPx5bKM0T70u13gJRFFFsus3eMBls2qd/hcQavRTLV5FgQMyku+WyRRDIzTtPpmG2rnkKoTtZeW9kYk6UMAYq4gnChi3QxNKULRKDQUlRUL6w9PHpe16D+4dXtStbXpwmo04p625dBoNLiQQEa8KxTE8aFBXHZOgICg1JqfNSpgwz4vvn74ABiVwj5aisITm2/Bp+66B2VZuojMdwxaHdbX1WPP0mWYDAXj2tmGOQ4vXbmMQpMJyzLQ30ItDMdhIEXufmDKAH+5+zKePXs6IWlmgqkE30sOO17vvYqrk05ERQFleVYYMmwMhKJR8KKYVd7cbEdDUfCGGdTainB8cEA2h4YAq0qMxqecDJPSfukpe8P3eb1irc1WDWBzrDHOUBAb6xpmjFcFo2xWuJJe6emO2UCl3GrFu9LUACgVUBSFtbV12FDfgE6HPaGaeDoSwSWHHW/0XYUj4IdOo0WR2ZzxjN8Iz6Nzwo5Xerrxu86LYAV1931NoQ1f2vcQ7m5blovzZwH5RhPuXLwUq2tq0emwI8DO3JjmZiRCcGxoAI5AAFubmmc1WZMXRYzSPoz6fClx9wNTAkE/PtmBA/29SZUKTkMwlWzdNeHAG31XMeanoddoUZJnzVjYK8xz4ERhQYmPJUswGoUoSTDpdbgkk8tFAXl6g8GX6lyAlG7x6ouLxwkhH5IbQwAsj2HVB1gWOq1mVhPTyLUXz0y8f8s2rKiqzvCM4qcivwAPrFyFPIMRlxz2hHYXEiFwBPw4PTqC1/quYsDtRoTnYNYbkGc0pqXXwGQoiBPDQ/j95Uv45bkzODM2inE/DZGocyHvbF2M/3nwYdTaZj9JM8ebqS60Yd+KdogSQZfDrnrR63VN4vKEAztbF2fcI0UIwWQohAGPW7X3SQ3uUAjfOHIAV29oP55KJEIwEQzgzNgIjgz0IRCNojTPmpFeLBGez3kC4oDleYSiUdTbinB6dETpPmu31dQ8mcqKgJQ+UWM+32StzXYXgJgtgh3BALY3tcR0UQVYFhQ1tXOYDdoqKhEVeFyacFx/SVEUhQdXrsJfb9k2Z3aVGopCe3UN9i5fAW84rNhWWA7pWuvSrgkHDvb34kB/L3pdk3AGg4jwPARJgl6rVf2CnhIViWCU9uGcfQyvXu3Gry6ew8s9V3DFOQEPw8S9K3rPhs34lzt2Zdz1mUM9Oo0GG+sbsK25BRfs46pa2QLAuJ/G6dFh7GxZlDExKz8bQb/HDW+YSWkXyal4/8G0tmm+EU4UMej14FB/Lwa8Hhh1elRY89P6HgvzHARJRGHOCFCE4TgEoywoioJBq1UqC7Qaeb5rjKa7UnX9lN8Fm5qaHgYhz8uN2du2HPcsWyF7nsqCglktt+t1udAxPABRItjY0IBlFdkTi0yEC/ZxfOXAa+iZdKbtGhaDAcVmCww6HfRaLcx6AzQAeFEAJ0mICgJCXBQ+hklZsxm9Vov/7867cE/b8pScL0dmYHke/3PoDfy284LqzzSVlOJrDz6C8jRqWIQ5DuN+WnWoQi0SIfjT5Ut4qfuyauPWoNNBkCRISYoK3UyxxYLbWhfjluYWGLXpM5hn+x0+F3AGgxi7JvMsSBI+9dIfZEO3FEW91jE4eGeqrp9yA+ARQDvS0NANiopZEmjS6fEfd98Lq4JLqiK/IOfOTSGEEBzs78P3Oo6iz+2a7ekkjUmvx5fv3491dfWzPZUcCfJGbw8+98qfEVIpoFNZMNUiuybF7wVOFGD3++FhYmuAJAoTjeJHpzpwWVn//To1hTZ8/r4HYNEbcHigD0cH+3FufCxlOQjAlMF+a3MrdrYuRn6acq/qiopy3QRlmAwFMer7S5+H13uv4n8vnpP7CNGK4qJjo6MpUQdMeVDtMkDqiooEAHtjjREkCQRT7nY5GC4KVuBRaDbPGdd7NkNRFBqLS/DgylVYUl4BVygUV9lgNmHU6fCl+/djfRp0z3NkjqaSUuxoXYRTI8OqyuBC0SiODg3gzkVLUyJ+I0oSHAE/hjyelLSPvpkRnxdPHj6IEZXNfABgU0Mjvvbgw6gqKES+yYQVVdW4u2053r52PZZXViHPaISLCcUtuHQzvCiiz+3Cwf5eBKMs6mxFKS8lDLAsTPqcWFAswhz/pvu+urAQhwb65KSkKaLRhMdp+rVUXD8tWTV1VmuXpNH8NQXE7PQxSvuwpaFJMabH8jyCbBQ2iyUn4pIiKIpCQ3Ex7l2+Erc0t0IQRYylQL88Uxh0Onzxvgex8Yb+EjnmLjazGXcvW45+t1tV17sgy+LU6BB2LWlLeMH6S4Kf51ode+o5NjiA7544ploemKIovGv9Jnxy1x6YZlgw9VotGoqLsa25BW9fsw6ra+ug02jgCPjjlmG+EYkQDHm9ODLYj4ggoK7QltJcGj/LIt9oyuXnzADDRd8UbtJpNPAwjJLB2DJO018Fkr9t02IAjAUCQq3NpgNwR6wxEiFgBR7tVTWK5+NFEXQkjAKTKStr8OcyZXlW7GhZhMfWrENTSQkiPA9HMJDSxKdUotFo8Pl792FLY/NsTyVHCjFoddi1ZCn8LIvLTmVpa284jE77OHYtaYtLCY8QAjfDYMDrgS8cTkk9/81ERQE/O30SL/VcVn1+s16PT9+1F4+tWafK20lRFGoKbbi1pRVvX7seS8orQAiBPeCPuz/GNKIkYcDjxuGBfohEQkNRccrKf/2RqQZws6VamK0EWPYtnV2tRmPMSrRr5NcXFr485vePJnv9tK2mJUbjOb1e/z4AMQNA434ayyurVJWMiJIED8PApNNnvUzoXESv1aK1tAx3ty3HvuXtKMmzIiLw8IRCadkdJcpHtu3AvQoJpDnmJhRFTdX8a7Q4O6b8bpsIBtDncuGOxUsUvYOEEHjCDAY8HnjDTMKLpBJjNB13iV+NzYYnH3os4VwWrUaDxuIS3LF4CR5dvQ41hTZ4QiG4E8xnECQJva5JnBwZRr7RhOpCW9LJYhIhCERZlGRhA7jZJMCyb1GULDJbcG58TF5pkqI8YzT9arLXT5sB4GQYvrawMAKKipkLQACM0jRuaWxWZfUSAL5IOCc7mWYsBgPaq2tw//KVePu69VhZXYtiiwURngcdp1xpKtm9pA1/f+tts3b9HJlhTU0tSvPycGxoQNH4HKF94AQhZjiIEAJvOIwBjxseJn0LPwAc6u/D904eQzCOCoLtza346gMPozK/ICVzMGi1WFpegQdWrrretnzY500ovMcKPM7bx3Bl0omaQlvStf2CJCEi8Ci2xIwMLzjoSHjG3JOoKKBbvmKrZJymv5ns9dPqT69sbT1PRSLvoIDiWGP8bARWoxGNxSWqzxuKRsFwURSazTlrMs3otVrUFxVhc2MTHlq1BvvbV2NDfSOWlFegqqAQZoMBLM/L9k+YCYvegKaSEqyqroErFFKMYS4ur8AX7nsgFwJaICytqERJXh6OyrtCAUzV1i8qK3vTO2R64R/0euBmQmld+MM8jx+dOoHXertVu/y1FIUPb7sV/7jzjrRp+JfmWbGtuQX721ch32jCkM+bUKIjHQnj+NAgQlEWraXlSbnxo4KQFYqv2YIvEp4xmdNqMOBgf5/cR0urioqes9O0eo3tGUj76rmxsfHtFPBzuTEWvR6f3H03Ck3xWZh6rRaNxSU5b0AWEGAj8DAMaJaFPxIGL0rXk58sBgMsBgNMOh2sBiPK8wuuNx3qmnDgied+Kntug06Hn73zvaizFaX998iRXfz64nl88Y1XFXNS8o1G/Ojt70ZlQQHcDANnMJDSkrlYDPu8+P6JY3GVD5bk5eEzd9+HtTP0RUkngiTh1avd+MmpExhIUBisyGzBY2vWYWUSiqgURWFxWXnOCADQ73bHFMT69Et/hIsJxf4wIR87MTz85WSun/bt1DhNd9XabLcBiFmvxUsSJoJBrK9viMsime5JTUCQbzTmSgVnEaNOjyKLBVUFBWgsLkFLaSmWVlRiaUUlWkrLUF9UjOpCG0qt1jflcPzXKy8ptvd9/+ZbsKNlUbp/hRxZSFtFJfRaDU6PjsiO40QRp0ZH0FRcgmCUTUty340QQvByzxX8+FRHXDLBq6tr8eT+R9FSWpbG2c2MhqLQWlqGB9tXo7W0FKO0D55wfHkCrMDj9OgInMEglpRXJCzPHIxGUZKXyweYDAZjGqqeMINBuSZaFBUap+lfJnP9jPhTqwsKTlEU9X6567lCQRSazagvihktiEkoGgUdiSDPYMyaDnY5lOm0j+Nbxw7LjmktLcO/33XPgn9RLGRW19TCzTBKMVHQkTACLJvU7lQNbiaEp48fRcfwoOoEWYqi8Pi6Dfj0nr2zvvOlKApNJaV4YOUqLK2owIDbDZ9KWeZpHAE/To2OoKbQ9pYW72oQJQlsLh8A9oA/prGqpTQ4MTIk9/HCcZr+SjLXz8hqaff7XXU2mxXALXLjel2TWFtXn1DTCkGS4AkzkEjOGzBX+OzLL8Ee8Mc8rtFo8IX7HkxZglSOucuWxiZcdk5gjJZ+r1CYAAAgAElEQVT3Fo3SPiwqK0dJXnoWluNDg/j28SNwh2RcszdhM5nx2b3345FVa7LKkKUoCg1FxXhw5SpUFRSie3IiLm/GlDdgGKwgYFFZedy/W1QQsqYN/GwwXbYZiwKjCa9c7ZYzMvMri4t/6PD5Yp9EgYxtl4uNxuMGvf6dAApjjRElCUNeLzY1NCb8oISiUfhZFnkGQ84bkMUMeNx48vAB2TH3LluBh1atycyEcmQ1GorChvoGvHa1R1FYZ9DrwS1NLSldbEMchx+f6sDLPVfiSihcU1uHJ/c/oqh6OptQFIXF5RXY374GZr0elycmVHcQJQAGPW5cmXCgrbIq7hLtEBddsCJBnChiMhiMeVyr0eCCfUy2L4WWkBPJNAfK2ArpZBi+zmbrJsDjkEk+pCMRMByXVNtdXhThZkLgRRH5RmNWWd05pvjJ6ZO4JNP5Sq/V4r/37luwu4McU5Br9eNjNA1nIIDm4lJ0jAzJxvgZjoOWorCorDwlc7jsdOCbRw5h2OdV/RmNRoMnNm3FJ++8C9ZZ6mwaLzqNBqtranHPsuWYDAbl48834WdZnBoZQn1RcdwhAYbjUJpnXXBeW4aLKnaFHKNpWVVAChgdo+k/JzqHjG6Rx2i6r7aoqAzARrlxIz4vSvLyUJtk1neY5+AJM9c70+XIDnhJxGf+/CJYIbaW+b4V7djTtiyDs8qRLRBCEOKimAgEMOzzwc2EEL1WZlpoNiPfaJQ1HoEpL8Da2rqkDMgwz+OXF87iNxfPx1XmWmbNx5fuexB7l62Yk4tansGIOxYvwcqqGnRNOFR3RuREESdHh6HTaNBcWqY6oXtao2ChVXP5I6zidxtkWfkWwRTlHadp2So7OTLuI6+0WA5otNqHAZTKjbvinMDyiqqke0pLhICORBCMsjDrDTDkwgKzzuH+Pvzh8qWYxymKwqfuugc2syWDs8ox24SiUThDQQz7vHCFQgjz3Iw7/fqiYgz7fHCFYrtPJULgCASwuaEpobl0Oux46ugh9Lni65q5vbkVX33wYTTFoWuSrdTabHhw5SqIRELnhEO1PHjPpBPeMIPlldWqva8Mx6HQZF5QYVsPwyDMK+dcHBmUbfwnJSMIlPFv2xEM8tXFxScoQt4rd32JEHRNOLC2tl6xYZAauGthgaggwGIw5DSpZ5Gnjsq7Uzc1NOLta9dncEY5ZgOJEASjUUyGghjx+TAZDILhZl70b2ZRWRk6hgbBy8TjPWEGLaVlcbmkQ1wUPztzGi90XbzudVCDWa/HP92+C3+7fSdMuvkjVa7VaLChvgEb6xpwbmwUgag6b8CYn8aQ14P26hrVizrDRRdUKMAR8CtqVRh0OrzccyXmcQLkj9P0fyHBxkCzYm7ZfT57jc0WpYBdcuNYgUe3cwIb6htSZhlGeB6ua4aAWZ8zBDINL4n4/Gsvy0qTfnDrdrSUyjqIcsxRooIAOhLGRDCAkWvufYbj4lbqM+n1yDeacNExLjvOxYSwVWXjqDOjI/jW0cMY8sUnrraiqhpf3/8oNs7j1tQV+QW4b0U7glFWsRxzGjfD4JLDjvbqGlWbOEGSQFEU8udIzkQyEEIwqlDRAkzlQh3o741pKFCArrqk5Pt2ny+hvu6z5m8Zp+ljtUVFKwDIBnqD0SiGvB6sr2tIaTLftCEgSBLMen3Kul7lkOf82Bh+d+lizON5BgP+ddeenGE2T+BFEQGWxWQwiFHaB0fAD38kApbnk+44WWsrQvekU7aGnY6E0VxSijJrbC+ALxLGj0914M89V+Jqq6vTaPB/Nt+CT+7ak7RO/lxAr9XilqYWtJaW4vjQoCqlxWA0iov2cbRX18CiIg8rxHEoMlvmveR3mOdVl5KeHR+VzRXQEPLCGE0PJTKPWf2WGysqXpRE8QEAsrJYnjADVyiE1TW1KXcPMRwHV2jKI2DS6ef9jTfb/PbSBVywx9613b5oCe5cvDSDM8qRSlieh59lMRkKYtzvx7ifhi8SRpiPf5evBAWgptCGY4Py/QJcDDOjF0CQJLx2tRvfP3Fcth57JhqKivHlBx7C7iVtC67KqLG4BDtbF+Pc2KgqAaEwz+GCfQztVTWwqNB4YQUhbToO2YI/EoFfZWO1K04nJoKxN/gURb2YaCngrK52ox4PV1VU9KoGeDcA2XRdR8APFxPCquqatMSIIjwPVyiECM9Dr9WkrUHHQucbRw7K6qa/a/1GtM6CTGqO+JEIAcNx8EUicAaDGKN9mAgGQEciiPB8Qh3o4sVmNsPFhDDuj72Az+QF6Jl04tvHjuD02EhchomGovDYmnX43D33o6ogpqTJvMdmNuOeZSvgCPjRr6KvQITncd4+jpVV1cgzyFdmcIIAs35+t313BgNgZ2gCNBNXJ52ypYCEkD+P+/3nEpnHrG937TTtqSks7KSAR0FRsn5fuz+9RgAwlXfgYZhrDRoomPX6BZOUkm5CXBRfO/hGzGwViqLwL3funldJVPMFQghYQYCfjcDNhGAP+DFG03AzIQRYFqzAp11/PxZ1tiIc7O+VzYKSyFSbYToSxs/PnsZvL11ASEFQ6GYai0vwhfsfxL4V7TlPIaZCArctWgwNpcHZ8VHF8azAo9MxjrW1dYo5AQzPocw6fxMCR3w+1c9Lr9uFQTkji6IOjNN0RyLzyIq7eNzv762x2ewURd2vNHbaCGivqk7rzSFIEvxs5FqrWgE6rTZXQpgkPU4nXujqjHm8qaQU71y3IYMzyhGLqCAgyLLwMAwmggGM+nyYDAXhj0QQ5riMdNpTi8VggIcJyTaV0mu1YHke3ztxDKMyu6mZ0FIU3rNxMz5z930LetcfizW1dajIz8exwX7FVPQIz6Pb6cT6unrZxG5RkqDTaOelEFiE5+GUcenfzKDHjV537HJUCjg2TtMHE5lL1qxo437/uVqbjQC4TWms3e/HGO3DyuqatCeLEUIQ5ji4mRDoSBgSAYw6XS5pMAE6hodwZCB2TeutzS3Y3tKawRnlAKYS9UJcFF4mDGcoiFEfjYlgAL5IGAwXBScIidUYZZDK/EIcGojdP93PRnBl0hl3HsLisnJ8Zd9DuGvpstwzL8OS8gq0VVTi0ECfYugnGI2iz+PG+tp62e80zPEos1rnXY6FNxxWLa4EAMO0D93OidgDCDkz7ve/kshcssYAAIBxmj5YW1hYA4papzR2MhRCj2sSq2pqYNBmJl4vSBICLAtnMIgAy0IkBHqtNpexrpI/Xb6ErglHzOMPtK/Oas30+YAoSWC4KHzhMJzBIMb9NOx+P7zhMELRKKKCMGuu/GSwGo0IsCxG4pDrlcOo0+H9m7fi3+66B2XW/JScc75TV1SEDfUNeP1qj2I1BR0Jw80wWF1bF1MxUCJkqixwnikEjtF0XB60Udon+96kgLNjfv+LicwlqwwAANjq9/+JLipqoYB2pbF0JIKL9jGsqKpWlV2aSq6XN4WC8EXCEEQJWo1mQSlZxcvPzpyWzbZ+x9r1qC7MuVhTSZjj4IuE4QpNJcqN0TQ8DINgdCpun+rM/NlkUVk5HMEAnDINVtSwtakZX963H7e2LJp3u890U27Nx+qaWrx6tVvRE+AI+GHQatEik/TL8gLK8/PnTS4AL4oYizMENeBx44qcB0CjOTxO0y8nMp+s27o+D4gNg4PvIRT1MzXjJ0MhfPH1V+S/oDTD8jwcAT+uOCfQNeHAuJ9GgGXn5E4qnYwq7M6KLTnp32SYDldNhoIY8LhxYXwcV5wTGPX54GEY1VnHcxWG46ZagSf4+QprPv7fvQ/gK/seQk2hLaVzW0i0V9fgS/fvV1VJ9buuTlyW2d0KkihbNTTXoCPqSv9uhBflDSkCqI8n3ERWblcvA2QrTf9OrSeAE0WcGh2BhqLQEkcTinQgSBJC0Si8YeZ6qIATRBBMJSLNF0s2EZ4+djjmjtOg0+GBlatQlDMC4oLhOLhDITiuJeq5Qtey8vnZy8rPNP5IBC90deKZ0yfi6tg3jU6jwePrNuBze/dhUVmuBDUVVBcWoq2iCq/19ijeh11OBzbUN8Qs+4uKAsrnSRhm3E+Di0NiGgC6nRPok0kC1FDUK2M0fSiR+WRtsfvzgPjI4OB7RhoaJFDUu5TGE0Lw+65ODHncePeGzRkPCcSaUygaRSg6VW5EURTyDAbkG02wGAywGPQZy1+YbViel9VWLzCarntNcm7X2EzloUSudxITVPZtn4/QkTBe6+3BoYF+CAlWJaytrcPHbrsTzSU56elUs7mhEZ/YtQeffumPsuPCHIcfnzqBv9u+c8Znn+V5RHh+zusCTFfWxItSKCUZD0BWrz7PAyKGh9+zqaFhAhT1T2o+0znhwOffeAVPbNyC+qLidE8xLm42CABAp9HCbNDDop8yCMx6A0w63bzzFNAKqlf5JhNESUIwyqLQNP9lVeMhwvOgI2H4IyyYOGvX5yMuJoSXu6/g5MhQwmJDdbYifGTbDuxsXZTi2eW4kT1Ll6Hf7cIzp0/Kjut1TeLVq93YvaRtxuO+cBjmOZ4f5GbUSf/ejGLHQEmKP65wjaw2AK5BTgwPf3xzY+MYAb4KFXkL7lAIX3rjVexe0oY9bcuzOktfkEQEWfFNlqGGomDST3kHjLqpfwadFkatDgadbk7ukAMKsS/zNfEfXzicMwAwZSxOS2CHOeWWoQuBMZrGy1ev4OzYaMJ9BApMZvzVpi14aNVq6DVZGQGdd3xo63b0ud04PiQv2fyHrk4sq6hCre2t+Re+SHhOJwgTQhLOZfCFFdf3hBPg5oIBAADoGBr6+qamJjsIeQaAYl2ISAhe7L6Mi45xvHv9JtTaijIwy9QgXUvmCmPmF79eq4VRp4NOM1WCqNNqrv+3VqOZ+plGA51Wez0fgqKomIYDIeRNcTqRSJj+v9Mxe+mGMdM/I7jxZwSEkJt+9pfKCIeC1rpOO2Wk+SMsyLXyn4WKh2HgCPjjakc7XyGE4IJ9HAf6e9Hrmkz4PHqNFg+vXoP3bdyMgpyBmVE0Gg0+c8+9eOK5n2LYGztHQyQEz547jX/cecdb3lXTOS1zcfMDAH6WTVg8S6nfgkajUZZhjMGcMQAA4MTg4K82NTaOAfgVgBo1nxn3+/GF11/BXUuX4a6ly7LaG6AWXhSzSolNDQ6F0qzpv4sgiQhGoyiYZ7W/aogKAoZ93oTihPONMM+jY2gAB/p7k8oCpygK/3979x0fx3XeC/93ZjsWwC56x6KxiF1iF1WoYskqtmJZkltsxXbs3Nwkdtp98+beFPv1tXMdJ67XRUrc4yY3FcuyuiixASTEClZgC4BF3d7LzJz3D5A0RXJnd7EdeL6fDz4UMWdnjkDszjOnPM9t/Svw32++FZ20sr9kqrU6fPbed+LDP/4hkgrrVuweN/bZxnBz39UJwaLJJIxlsLZrMWYCi6rWCwDwRJR//xOyvDwCAAAYtNsPbu3p2SIATwC4OZPXSJzjt6dHcMQ5iQc3bMIaSjZTdNkMtvqikWUXALjCIUxkkR98qbK65rHPbsWbzsmsV0tfjjGGm3r78bGdu7CyqTmPPSSLNdDYhI/uuBHf2v+GYrunR05gU0cXaq5IAxyr0AAgGF/82p1IIqE4EsiB+LDDMbvYvlVcAAAAh+z2mc2bN9+hcbm+yBn780xfNx3w4+t792BdWzseXL8JLTVLY2tJJRDSjLxcPqLhi0bRZV4+0wBTfn/aKZKlLJRIYMhhx367NS8/hxt7+/CxnTfhuuaWPPSO5NMHt2zDG9ZRxcx2kUQCz50ewSObbnjL94tRXbIQpnN4+s+gTPUkgEX/YCoyAACA4eHhJIC/2N7Tsw/ANwFkPL53cnoKp2emcevACtyzem1ZbBlc6tLN3V3+5k5KEsKJxJIsBHIlh8ez6NXBlSwuijg+5cThyXGcnpmGlIeRj23dFnxs501Y39aehx6SQlAJAv7prnvxoR9/X/HJdp9tDLevWIlGY3XKNpUgnEjkNKU37lXOGsiAkUWfHBUcAFw0aLf/dHNf3361LH8fwO5MXydxjlfOn8PguAN3DKzC7oEVGWWuIoujSrPi+sosdd5oZMkHANMB/7K6+SclCadnZ/CmcwLHnU7EpdwXOQqM4caePnxw63ZsbM9oWRApMUt9PT68bQe+tX9vyjaiLOPZUyfx6NYdl76nEipvRDDbtL9XmvApJ7biwJu5nH9J3PGGrdZxAHds6+n5WwZ8BkDGj/TheBxPjxzHS+fP4LaBldg9sBJVFZ5wohxVpxllCcTfGiV7IxF0VdDOjWxFEomchgYrRSSRwMmZaRybmsSp2Zmc5vUvp1Wrcc/qNXj/DVthqS+vfB8kvfdevwW/PH4M86HUi4MPT4zjnuvWobl6YRRAr66sz2XvhQJbuZjwpS5xDQACYxQAXCAP2e3/ur2393fg/DEAO9K+4jKRRALPnjqJV86fxe7+Fbh9xSqaGsijGp0OjLGU+7eDV7xRLk4DVOKin0xMBwKL3stezjjncHg9ODM3i9Oz07C63Xld2GgyGPDuDZvw0MYbqHZEBdNrNPj4zl347Iu/S9lG5hwjM1NoHlgJgbGK+jzmnMPpV755pxOOxzETVH5IUInicC7XWEoBAABg0GY7DmDXdovlT8HY5wDUZvP6aDKJ586cwiuj57Clqxu39K24ZmIKkh1BEFCr08OfIiNgQhQRSSbfMvrijUSWZAAgyXLKn0OlWfig82PM7cK5+Tmcm58tSOKivoZGvHvDJty3Zh30NEK3JNx33Vr89M3DGHO7Ura5uDjYZDBUVA6A2WAw5zweZ+Zm0z0kTO+bmJjK5RpLLgC4QB50OL6+q6vr16Ja/VVw/u5sTxAXReyzWbHPZkVfQyNu6RvA9Z1dSyKPQKmYDAbFG998OATLZcP+vmhkSQZfMVGs2Kd/fzQKp98Hu8eNUbcLdo+7YAmLdGo17ly5Gg+s24ANNL+/5AiCgP9+0y34m6d+lbLNwIUaDZVUDOhiddhcnUpT4ZYBr+Z6jaUaAAAALkRHD223WG7jjP07A65fzHmsbhesbhd+cewIdvb0YpulB+21lZuWslRMafb2zwUCbwkA4qKISCJRUUN/2QrG49CpVNCW2QLUUCKB+VAQc6Egpnw+TPh9cPp8CBWhFsFAYxMeWL8Rb1+95qq94GRp2dXbjztWrsLL585edWz3wEqsammFUaurmAXBnHPYPZ6cp704kLbEPWcs9fxJhsrrU6dABh2OVwFs2dHT8yEO/G9kmEXwSqFEHC+eO4MXz51BW60JW7u6sbmru+K3qhRLfZVR8fjcNRYEuSPhJRcA6NVqDE9O4DcjxzEXWtgFYNTpUGeoQkNVFeqrjKivqoJJb0CNXg+jVgejVoNqnT7nESiZc8SSSQTjMQTicfgiEQTjcfijEfhiMcwHA5gPhxC5YldGoZn1Bty2YiXuW7MO62gb37LyqbvvQ3N1DZ48cQzRZBI6tRr3rVmHT9y8G95opKI+X2eCgbwU7Br3etJNE8oqQXg+1+tUzqRKnmxoaTHq9fpPMsb+GkBDPs7ZW9+AzV3d2NDWgQaj8k1uOdtvs+JHbx5KeXxjewc+vvOmt3xPLaiwob19SSUF+u3pEXzm+efAkf1Tgk6lhkGrgVpQQatSQa1SQadSXZVoiQGXbuIXSzHHROWSzMVWo9djd/8K3LFyNbZ2dUNF02vLmijLcIVDqDdUld2IWCYiiUQm8/YZeeLom9gzdj51A84PDzocW3O9TuX9lHN0fHY2DOBzu1at+poYj/85OP9rMJZTMXCbxw2bx41fHDuC1pparGltw7rWNvQ3NtGagct01Clv63NcI+mFKEvwRaOoWyIrvhOiiC+99vKibv4AEJdExKPlcxPPllGrxS39A7hj5XXYbrFQRT5yiVoQ0FqT1ZrtsiHKMqxuV15u/hLnGJ5wKDdi7Lc5XwjLMAC4aN/Zs0EA/7J77dqvxcLhP+PAXwHIOXfoTDCAmWAAr5w/C51KjVUtLbiuuRUDTU1oramtqJWs+dZx4f8/1fyYLxqBPxa9qhywOxJeMgGA1e26asvjUtfX0IgdPb3YYenF9R2d0Kjopk+WDs45rG5X3kbXRqanEEqzk0Zi7Mf5uNayDQAuem1kJATg8/cMDHzZK4rv48AnAWzKx7nj0kK60+NTTgCAQaNBb0Mj+i98WerqK3Koa7HUKhVaamoVV8g6PJ6rVnwHLpTSXAo3DvUS+H9Ip0anw5ZuC3b29GG7pQctFbSCm5BsTfi8ea3gud9uTdfk4GGb7epVk4uwfO4+aTw3OhoH8D0A39tusdwGxj4J4H5kV8hOUTSZxKmZaZy6UAhDYAztJhPaa01oN5nRYTKjo9YEk2Fp1ivnnKOlpkYxADjvmrsqAOCcwxUOoW0J7Lzoa2hEW61pSRX/aa6uxrrWdqxvb8e61nasaW2j+XyyLMyFgpgP5S+d90wwoFgoCQA48P18XW/5jkdnYPvAQCdLJh+VGfswA/qLdV2jToeOWhNaamrRYDRe+KpGo6EKxjLfDhMXRcyHQ3CFQnCHQ5gPh+EOh+AKh+CJRNJW9Oo0mfH3d9591fc1KhXWtbUviSmUQxMO/PWTv3xLBcRKoddosKqpGeva2rGutQ3r2trRRE/4GQnEYpgLBZGUJAiMQWAMOrUaOrUGeo0aVRrtVaNcMuc4MzcLdziEBqMRq5tbl8R7YClwhUNweJRz9Wfrh4eHcNBhS3mcA3GtLLftHR/PrcjABfSblBm2o6fnVs75R8DYgwBKttRfp1aj0WhEvaEKRp0eNTodanQ6GHV6VGu1qNbpUK3VQa/VQACDQatd9D9yNJlEXEwiIUmIJZOIJJNIShKC8Rj8sRiCsSj8sYXtZMFoFIF4LOd5MIEx/Mv9f3DN2gGW+vqK2hKk5Nz8HL5/6CBOTDnhCofzmi43H8x6A3rqG2Cpr0dPff3Cf9c1oLV2ea9jWYyL2RJn06R1BRZqHBgvvI9n/H584bWXcH5+/tLxdW3teHTrdqxubkWtXk8FzErEHQ7D7nHn9ZzeaASf+t2zyg9JnP/XoMPxwXxdk97JWdrc3l6l1unuZZw/woH7AJT96jQGwKDVQgBLmUZVkuVL1dkkWS7pdrGPbN+JzZ3dV33foNFgTWtbCXpUWElZwmwwiGm/H9MBP+ZCQXgiEbjDYXijEXjCYfjjMYTi8ZxXGasFAXVVRjRWVaHBaES9sRqNRiPqqoxoMlajoaoK3XX1S3YaqtgSkgiry5313vBQIoHPPP/bayZeUjGGWwdW4t7r1sJsMMBkMKBWr0eNTk/BWRF4IxHYPO68Z/P82dFhvD42qtSEC4Kw8YDVeiJf16TflhxsaGkxVhkM98vAgwx4G4ClW76uiLZ0WfDhbdeu5bSiqRm1aTIKLmXRZBLhRHzhzwu7CThjCF1WTbFapwfjHNV6PRgAo1YHFVsYDaJtqcUTTiQwOj8PUc5+qufFc2fw5Iljim1qdDq8c90G7LD0XppSqNbpYDIYYNIbaHSgAOZDIUz4vHm/+U8H/PjcS88rjgQyzn9z0OF4Rz6vS78hObiQU+BnAH62G1BHent3Ms7vBXAPgI0l7VwFG5mZgijL17xZTQf8yzoAMGg0MFAxnLLnj0VhdbkWPbWjVCb3omA8jh8NH8Lr1lE8suF69DU2IRCLIRCLYQJe6DUamPQGmAx6VGt1SyqZVrFxzjHp92EumP7fZTF+deJY2t8VrlJ9Pt/XXfp7korEDshOn2/c6fO97PT5vtVTU/MfEmNvMsZcWFgz0FTiLlYMUZbR39iEpuqr5/sTkoRqnY6ebkjZcofDOQ8ROzwejLrm0zfEwuLCgw4b5sIh9NY3XJrmE2UZ4UQc7nAYc6EQIskEJC5Do1LRLo0syJzD5nbDHQ4X5PynZqfx21Mj6Zq9MWizfTrf16YAoEAmAoGg0+8/4fT5fuP0+b7eWVf3Lc7YEAOc4FwEUA/GllaS+zxaSAF87ZINMTF5zeCAkFKbCQQw4ct9gXZ9lRFvWEezyhc55fdjn80KvUYNS139W574+YUaEP5oFLPBIPyx6MJuBEGAdhnkplisuChi1DWPYDx/+/yvPP9j+/ciklRM/MM55+9z+v2T+b4+jQmVyMOAyt7dvZoJwhZwvpkxtg7AWgDNpe5bQXEe4oydFwCRAylzWevVGvzLfe9MmShpKe0IIEuD0+/DTCD9Sv9M7Rkbxc+PvbmokQSLuQ7vu2ErutKk3wYWgu0ave7SQkIaXVvgCocw4fUWdIdOBgv/AOAng3b7+wtxfQoAysy2jo4GaLVrwPkaBqzmQD8DLAB6AFRComwZwCw4d3LGrAJjo5zzUb7w5/lDdvsMAGzv7W2BLE+CsZSfNn+0dQe2dluueUwtqLC2rY0WtZGS45xj3OuFK5y/hDAXObwePHH0zUVtOWOM4baBFbh/zfqsbuoalQrVuoWAwKQ3LIkMnNmIJZOY8HkRyGN2v2s5OzeLr73xWrpRnqiKsev222xpigMsDgUAFWRnZ2c9V6l6OGNdDGiXgWbGWBOAVnDejIXRg1oA1QDymZ0lDM69YMwL4PdfnM+DMSc4nxSAaVmjGRdNptnh4eGMasnusFie4Yzdn+r46uYW/MXNu1O+vsFoRE99Xgo6ErIoF+eHfdFIwa7BAQyN2/HUiePpSsRek9lgwCObNmNjiim1dKq0WtTo9KjV61Gt0y3ZrYZJScJMMID5UCjvq/yvFEkk8LmXnoc3ze8NZ+yzQzbbPxSqH0vzX5IAADb19Jh1anU1l+UqJoqXAgKuUlUJjF1KKShxnhAk6eIKl6gMxABAo9GE/Hq9b2RkRLkyxSJtt1jeDcZ+keo4A/CPd92DFoUKYX0NjUumUBCpLElJwqhrHpE0hVvy5emR43j+zOlFv359Wzse2bQZ9Tm8X9iFrYbVWh2MOi2qtbqKX1AYF0XMhYJwhUJFScjFOcc39qrBHk8AACAASURBVL2OU7Mz6ZqeFxOJTcNTUwWLLikAICWzdu1abXUo5FQqx3xL/wDes2lzynOoBRWua22BVkXzlqR4IokERl3zRUvnPO714N9efQlSjjcorVqNt61YhbtWr8nb9JlBo4FRq0O1TgejVgudWl32Ww455/DHYpgPBQs+1H+lJ08cw4vnzqRrJnPGdg/ZbG8Usi/La3KHlJX5+Xmps77eAmBbqjbTwQBu6RtIOQ8pc45QPI4Go7HsP3TI0uCLRjHqmoeUpq5FvoiShK/vewOBPKxEl2QZ513zODHtRKe5DnWG3EfPRFlGJJmALxrFfCi0sMsgGkMkmUDyQhIklSCU/P2ZlCT4Y1HMBIJweD1wh8NFz3h61DmJXxw7kknTzw/Z7d8pdH8oACAl1VlXNwngvyHFaJQky9BrNBhoTJ1GISlJiIsizAZDyT9kyNLFOcd0IIBxryer7Xm5euLYkbQV4rIVjMdx0GFDKB5HX0NjXhf6cSy8JyOJBPzRKFzhhaDAHQ7DH4sikkwgLoqQ5IWfooqxvL9vZc4RubDt0RUKYcrvg9Pvgy8aRTSZLPgc/7WMuubx+MF9aUdxGOcn6zWa9496PAUfXqJPS1Jy23p6nmPA21MdN+p0+Mzb70+7kpkWBZJCSUoSbB53Xuu+Z+LQuAPfO3QwbbsPbN6KM3OzGJ4Yz/oaJoMBD228Hjd0dC2mi3mhFlTQqASoVSpoBBXUKgFqQQADuzB6sNBOYAwMDDLnkLgMSZYhyXzhTy5fehgot0qbDq8HX3n91fQjDpyHJLV65+GxsZPF6BeNAJCS6zKbnQD+KNXxpCRBr9GgX2EUAFjIky/KEhWyIXnljy0M+UeTGW1uyZvpgB+P7d8LiStPNWxq78Sn77kf9123Fh1mM45NTSKWxdB2XBRxZHICDq8XvQ0NqLpGJc5CkzmHKMtIiOKFehcJBOPxC5VHo/BHF7580Si80Qh80SgCsRiC8TjCiTgiyQRiyYXKpeVWWXMq4MdX33gNsfS/P5wJwoeGrNZXi9EvgAIAUgYmfT57p9l8L4CU+5ScPi92KawFuCiSWEh3atJTEEByI8kyxr0eOH2+ot9UIokE/u/e19Nu+zNoNPjygw/DpF+Y/lrR1Ix3rF0PfyyK8xmmEr5oPhTEPpsVsiyjp76h4lf3l4NJnxdfe2NPRtUgGfCFg3b7V4rQrUsoACBlodNk8oKxR1IdT0gSuCzjupbWtOcKJxJISOKlD0VCsnVxoV8onl0Z33yQOMfjB/bC4fWkbfvXu+/AdkvPW76n12hwS/8AtnR3Y2RmJqscBTLnOO+ax6EJBxqqjIpbcImyc/Nz+L97X0+X5veiF7vt9o+cQlGXl1AAQMrDjX7/Ob/Z/AiAlFsCx31ebO22ZDREGU0mEU3SwkCSnYQkwu7xYDrgL9lQ8k/ePIwjzvRp328fWIk/V0iU1VpTiz9YvxFalRonpqey2rUQTSYxPDkOu8eDnvoGGEswLVDJjjon8PiBfUhkthbhaBy4/xWfL/ssTzmiAICUhVMA7zSbJwG8N1UbmXN4IxFs7urO6JwxMYlALAaTQU/DmUSRzDlmg0FY3a6iz/Vf7rkzp/Dy+bNp23WYzPjiu96dNv+FwBg2dXTirlXXYdznxaTPl1V/5sMh7LONISlL6KlvoNTbaXAAL509jZ8cGc40gDyrUqnuOGSzZZ/rOQ8oACBlw+nzne00m3djoe7BNc0Gg+gwmdFam9nQZFKS4AlHUK3TpSwsRJY3dziMMdc8fNFoccdfr7Bn7Dx+feJY2nZatRpfetdD6Kg1ZXzuWr0eb1+9Br31jTg+5cx0WBrAQnA05nJhaNyBGp0ebbUmGlW7hmgyie8OHcCe9MV9AAAMGJdVqtsGx8byu8czCxQAkLLSZTKdAGMfg8IWVavbjV29fVALmf36ypzDE4lAYAKqdbr0LyDLgjcSgdXtgitcnBSwSg467Pjpm4czavuPd92DnZbeRV2nr6ER71y/AdFEAmfmZrMKeGJiEkenJnFiegqNRiOV5L7MVMCPr73xKqzujB/kp7kg3HHIarUVsl/pUABAysqk3z/daTb3A9iYqk1MTCIUj2NDlsVNArEYQok4avSVn7+cLJ43EoHN7cJ8KASxSNn8lAxNOPDDw0MZ3Yw/uGU73n/Dlpyup1WpcWNvH3b29uHM3Czc4XD6F10mEIthaNyBMbcLbbW1y3rbLeccL4+ew3eGDiCY6YJRzkc5cNuQ3T5W2N6lRwEAKTudjY2HIUkfB2MpVx5N+LzoNNehNctVyglRhCccgVatgkFDC5uWC5lzuMJh2C488ZfDjR8A9tut+NHwoYwy093cN4C/v/PuvA2/N1VX44G161FXVYWTMzNZp8V1h8PYb7NiNhRCl9lckvwBpTQbDOKxA3txwG7NZgTpKATh9iG7Pf0qzyKgAICUHafHE+g0mwNg7F6ldmfnZrDN0gO9WpPV+WXO4YtGEU7EUa3T0cKmJSwpSZgNBmFzu+GNRoqWvz8Te8bO42dHhjN68l/f1o4vvPNdeU3ZCyxU91vT2oYH1q1HNCni7NxM1usgpgJ+7LWOIRiPo7uuPm3GzkonyjJePncG3xk6kNXoCQf2SILw9lIt+LsWCgBIWXL6/Yc7zeZbobAgMCFJcHg92N5tWdRTUVwU4QqHAABGrY4WNi0hgVgMTr8P414vgvFYyef4L8cBPDNyAk+fPJ5Re0t9Pb724CMFXb+iU2vQ29CAvsYmzAYDcEeymxaQOYfD68Hr1lGEE3G015qg12QXmFeCo85JPHZwL96cnMj2d+o7VcD7D9hs2f1gC4w+8UjZ2trd3ScIwnEARqV2t69YhXdv2JTTtbRqNdpqa9FQRVUFK1VSkuAOh+EKh4pe5S1TEuf40eEhDI7bM2rfWlOLbz38vox3vSzWpM+H2WDg0t+POifwq+PHsg4ELlILAnZYevG2VavRaKz8xYLjXg9+efwoRrPMrgggwYFPDNntjxWiX7miEQBStqb8fm9HXV2AAYpTATaPG83VNegwmRd9LUmWL+Ua16jUS/LpZSmSZBneSAROvw8TPh8CsVhZDfNfLpJI4LEDe3FsyplR++bqanzjofei3ZT5dr/FcPrfevMHgNZaE27q64dapYLd68n6ZypzjnGfF3vGRuH0+1CrN6ChSjGOL0s2tws/OTKMJ08cgyeSeUbFC5wA7h2y258qQNfygh51SLkTtlssz4OxO5UaqVUqfOLm3ehvSJlIMCt6jQatNbWor6qiEYEyI3OOQCwGTyQMfzRaVsP7qUwH/Hj8wF7MhUIZtW+qrsE3HnoPusx1Be3XTCAAp185OZA3GsFTJ49jeGI8p591p7kOtw2swPUdXWW/TuDs3Cx+d+YUzs3PLer1HHiGMfaxQZttNs9dyyv6ZCNl78b+/mZJFIfBWKdSO6NOh7/dfQeaq2vydm2tWo0mYzUaq6tpsWAJibIMXzQCfzSGQKwybvoXnZiewneHDmQ8LdFaU4uvvvsRdBf45n8xD0KmJv0+PH3yBEZmpnK6rl6twQ2dXbixpxe9eQrY8yEcj2Nw3I59NitmrhgRyYKfAX950G7/Xh67VjAUAJCKsL2nZweAPQAU9xo1GI3461vvgDnPe5MZY6gzVKGpupqSCRVJNJlcKAMbi5akKE+uZFnGs6dH8MLZ0xkHLJa6enzlwYez3t6arVA8jvPzc4sKpM675vHUyeOwZRE8pNJSU4NNHV24vr0TXXWFDXiuhXOOc/NzOOCw4YhzEmJmuftTnewlUaX66LDVOp6/HhYWBQCkYuzo6flTDnwjXbuWmhr81a23o0anL0g/tGo16quqUF9lhIHWCuRNXBQRjMcQjC3UgU/m8mFcYr5oFN8d2o9RV+Y3yZXNLfjKux5CnaGqgD1bWCx5enYm55/vyMwUnjt9CjZPfna1NVQZsbGjE6ubmzHQ2FywaQKJc5ybm8UR5wSOOZ0IZVCqN41pDvz9kN3+AxS5ml+uKAAgFWV7T8/3AXwoXbv2WhM+ccttqCnw07pBo4HZUAWzwbDsEqHkKiGJCMXjl2745bpyP1snZqbxX4cOIpTIPN/+dksPPnffAwWvunfxiTefIyqnZ2fwuzMjWQU76QiMobuuHisam9BdX4/2WhOajdUQFjENJ3GOSZ8XVrcLVrcLZ+ZmEcni3yYVDsQZ8CWD0fjZ10ZGMlvcUWYoACAVZWdnp0FWq38H4JZ0bVtqavCJm2/L+3RAKhqVCia9AbV6PWr0elozcBlJlhFOJBBOxBFJJBFOxCv6Cf9a4qKIXxw7gv12a1ave2DdBvw/t7+tKOmpJ3xezAWDBTn3+fk5vHD2NE7PZp9MKBNqQUBrrQn1VVWo1elRo9OhRn91pc9oIgFvNAJPJAJvNIq5UBCJ/AaXHMCvZVn+H4fGx7P7xy4zFACQirOpp8esW1gPsCFd2wajEX9+0615XRiYKYNGgxq9HkatFkatruxXPudLQhIRS4qIJpOIJhMIJxKIlbDEbjGMuubxg0ODWe2bFxjDn+66BR/csq2APfs9TyQMW+bFahZtOuDHa6PnMThuX2pBngzOfyUz9tlDdvvRUncmHygAIBVpV1dXu6hS7QWQtixalVaLj26/EaubW4rQs9TUggpGnRYGjebClxZ6tboitxlyzpGQJMTFhRt9LJlc+FNMlu0+/EKIJpN4euQ49lrHslpQV6PX49N334cbe/sK2LvfiyaTODM7U9TdE6FEAnuto9hrHYM3mvUe+nIiMeBnkix/7tD4+EipO5NPlffJQ8gF2/v6VkCW9wJoTtdWYAyPbLoBN/cNFKFnmWOMQadWX/rSqzXQqFQXvgSoBRWEIgcInHOIsgxJlhGXRCRECYnL/oyL4lJ7sluUo84JPHHsCPzRaFav629oxOff+S505pC4KhuSLOP0bPbFfvJF5hxn5mZx0G7DsWlnbivti4gD8wLwXUGSHt8/MVHyyn2FQAEAqWg7LJYbOGMvAGjIpP2t/Svw0IZNi1pMVCoqQYBGpYL6sj8vznuqmHCpDWMAA3tLwCBzDn5hRlaS+aWqcxKXIXMOUZIhyhIkmUOUpUs3fpKaKxTCL44fwYnp7PfD3716Df7fO+4q6u6RMZcLvjJ5Ao+JSdg9Hnx93+uQy/T3jC9MLz7WoFb/6rnR0crbf5oFCgBIxdvS379OJUkvAGjLpP3q5hZ8ePtOVGtpPz/JXFwS8fyZU3j53NmsywkbNBr87W134r416wrUu2ubCwUx4fUW9Zrp7LNb8ePhQ6XuxpWOg7FfSMATh222s6XuTLFQAECWhJ39/QOyJL0EwJJJ+1q9Hn+4eSvWtrYXuGek0smcY2jcgadHjmc93A8s7O//zD33w1JXX4DepRZOJHB2bvbSqE85iIsi/vG53yCceu99BJxPgbFCz9VxAEcA/IILwi+HrNZzBb5eWaIAgCwZW/v7uwRJehHAqkzaMwA39Q3gwfUboV0mK/RJdk5OT+Gpk8cxFfBn/VoVY/jg1h346I6d0AjFrbsmXpj3z/P2t5y9PjaKnx0dVmriHLTbO2/s72+WJGkngB1gbD04XwuF0uAZCDPgFGdsiAN71IKwZ//Y2OIS/S8hFACQJWV7b28LOH8aQMZ7q1pqavDotp2wFDj3Oqkcoy4XfjNyHOezL/8KALDU1+Of774Xa1oympXKq0Ik+8kHmXN85oXnMBdSzEMwOGi377jWge0DA7VcknrBWBdkuZNx3s4Z0zLAzBhTc84lBsgy4AfnATDmBDCjlqTR/RMTNgDlueighCgAIEvO7p4efZTzx8HYBzN9jYox3DawEveuWbds9uuTt+IARqan8MLZ0xhbZJ57jaDC+zdvxUe27yzZ75Hd44Y7nHk+gmI5OT2Fb+5/Q7EN4/xvDjocXyxSl5Y9CgDIkrW9t/fjkOWvg7GMP4lNegMeWL8B27p76M2xTMicY2RmGs+dOgmHb/EL5q7v7ML/uO1O9JWwwl0m5X1L5WtvvIYzc4rVcYOiIHQNW63Zz7eQRaHPOLKk7ezpebsM/ARAVpuuBxob8fCmzUXbq02KT5RlHHTY8OK5M3CFFp/KvbG6Gp+8+Ta8bdXqPPYue75oFGOLnLIoNIfPiy+8/EK6FMFfHbTbP1mcHhGAAgCyDFzYIfAjZLEuAFhI0rOzpxdvX7UGDUZjgXpHii0Yj+GA3YbXRs/DH8t+Vf9FKsbw8KYb8LGdNxW8iE86kQsr/ouZ6S8bX9/7Ok7NTis1kQWVatWBsbHRYvWJUABAlondgDpqsfwTGPufALJakq1iDDt6enH36jVoqKJAoBLJnOPs3Cz22cZwYnoq6338V7q+oxN/c9udGGhsylMPFy8uijg7N1u22Rmtrnn8+55X0jV7etBuf6AY/SG/RwEAWVZ2Wiw3yoz9FzKoIXAltSBgh2UhEKivKmzNdpIf/lgUB+w2HLDb4ArnXrF1dUsr/mTnLuzsKU4O/3REWcaZEqb5zcRXXn8V5+aVd9wJwO4DdvueInWJXEABAFl2tg8M1EIUvwTgw1jEe4Axho3tndjdP4AVTWnLEJAi45zj9OwM9tmtOD7lzMuweF9DIz6+cxdu7V9RNsWbJFnGufm5vNS2L5Qzc7P42huvpWv26qDdfnsRukOuUB6/yYSUwNbe3ltUsvx1ztii87N2mEy4tX8ltnZ1UzKhEpI4x7m5WRxxTuCY04lQ6kxzWekwm/GxHbtw16rril6USQnnHKOueQRisVJ3JSWZc/zbqy/B4fUoNxSEmwet1r3F6RW5XPn8RhNSAps3b9aoXa5PgLF/BlCz2PNUabW4oaML27st6G1sojdWEYiyjNNzszg6OYHj0868Pgm31tTij7btwP1r10NdhoWjrG4XvJHyKPCTyn6bFT96M23O/xcG7fa7i9EfcjX6nCIEwM7Ozg5Jrf4iAx5Gju+LxupqbO+yYEt3D5qrq/PUQwIsLHg7PTuDo1OTODE1hZiYzOv517S04X03bMHtK1ZeqrhYbhweT17WMxRSJJHAp5//bSYjMTsH7faDxegTuRoFAIRcZmdv7zYuy//IGbs/H+drqzVhXVs71re1o6+hkd5wWZJlGZN+H87OzeL03CzGXPM5r+C/ksAYbuzpxXtu2IKtXRnVkiqZca8H8znkLCiWJ44OY0+6HX2MPTtos+XlfUYWhz6PCLmGnT09t8qMfRac78rXOc0GA9a3dWBtaxv6G5tQVcSa8JVC5hwTfh/Ozc3i7NwsxtyughW0MWq1eOe6jXhk0/VoqzUV5Br5NOHzYi6omEe/LEz6ffg/L7+gXIWQc1FQqW44YLWeKF7PyJUoACBEwXaL5V7G2Kc4sDWf52WModtch5XNLVjZ1Iy+hgbo1csvIPBGIxj3ejHu9WDC54PN4yrKqvYdlh589r4HSp7AJ1NOvw8zgUCpu5GWzDm+9PqrsKbJSMg5/9qQw/GJInWLpEABACEZ2NbbezPj/C8BPIAsEwllQmAMLTW16Kmvh6Vu4avdZC7LBWiL5YlEMO71YNznxcSFm36+Vutny6DR4GeP/nFFrNGolJs/ALxy/ix+efyociPOXRrOV+4dH1984QWSFxQAEJKFbRZLL2PsEwA+AqC2kNcSGENzdQ3aTSZ0mMxorqlBU1U1GqurYSjT6QNfNIL5cBiuUAjz4RBc4RBcwSDmI+Gy26/+tlWr8Zl73lHqbiia8vsxHaiM2jizwQD+5eUX0mckZOxPBm22x4vTK6KEAgBCFuFCbfIPCZx/KN/TA5mo1mrRWF0Ds8EAk96w8KfBgFqdHkatFkatDgatNi/rDGJiEqFYHKFEHOFEHOFEEqH4xf9OwBeNwB0OYz4cKnk6WkEQcENHF3b19uLxA/sQTabeJcAYwzfe/R5c39lVxB5mbtLnw2ywMp78Oef499dehs3jTtf0zUG7fSuA/K7kJItCAQAhOdphsVzHGfsQOP9DMNZZ6v5cTmAMeo0GakGAVqWGRqWCRpV6BkPmMmLJhUV3sWQC0WQSUpkWmLlII6iwuasLt61YhVsHVsCsNwAAfnh4EF/f+7riawcam/D993+orLb8cc7h8HrgDodL3ZWMvXD2NJ46eTxdM5lzftOQw3GgGH0i6VEAQEj+CDv6+m7nsvwBcH4/GCtdYfglrtFYjRt7+3BjTy+2WXpQpbl6MV9SlvCHP/xe2kx0f7P7Djy86YZCdTUrnHPYPO6yT/JzuUm/D1945cVMtmd+edBu/6ti9IlkhgIAQgrgYUA13te3k8nyOzjwDgDXlbpPlUyv0WBjewc2d3Zju6UHK5uaM8rJf9Bhx1/++ueKbWr0evz80T+G2WDIV3cXReYcY2We3vdKMTGJz7/8AubS5SbgfFRMJjcOT01VTmSzDFAAQEgR7OzvH5Ak6R2MsTvA+U0Ayn/jeQlVabRY29aGje2d2NLdjbWtbdAIi9t88XfPPIk9Y+cV27xz7Xr8z7e9fVHnzwdRljE6P49wiXZFLAYH8O2D+3DEOZmuqcwZ2z1ks71RhG6RLFAAQEiRPQyo7D0961XALZyxW8D5zQCWbVlBgTF0meuwprUV61rbsaG9E/0NDRDyNC8/HfDjvT/4jmLJXIExfPt9H8R1zS15uWY2EpKI8/PziCksWCxHr5w/h18eP5JJ068O2u2fLHR/SPYoACCkDGzp7V2l4vx6DmwCsJEBGwG0lbpf+aZXa9BSU4MOkxkDjU3Y0dOD61raCr6t8T8P7sd/Htyn2GZtaxv+8z0fKGq533AigTHXfMl3T2TL6nbhy3teSb9AlIb+yxoFAISUqRv7+5slWd4IYCM4XwHO+8BYPzjvAmNlW3tYo1Kh0ViNBqMRDVVVaKkxobWmBi01NTAbqt7SVi2oMNDUVPCMfHFRxPt++B1M+ZX31P/D296O+9euL2hfLvJEwnB4PJDLfJfFlfyxKL7wykvwRtPe0xOyINx0yGpNWxKQlAYFAIRUmM2bN2u0Pp9FluU+znkbWxgpaONA64X/bgZgxkKiooKsbLOY69BhroPZYECNTr/wp16PRqMRNTp9VucSGMNAU1PWr8vWnrHz+LtnnlRsU19VhZ//0ccKHpBUUoKfyyVEEV/e8wocvvRJ/BjwyYN2+1eL0C2ySBQAELKErV27VqtPJmuFWKxWAOoAgAmCGoJQc7EN55wxxrgkilwQhH8FkHZPXFutCX+z+468Dd0LjGFFUzOqdbq8nC+Vv3zyFzhotym2eXTrDvzprpsLcn1RlmFzuypqpf9FMuf49uB+HE2/6A8AfjVotz+EhbWCpExRAEAIuWTzypWN6kTidWSwbXFFUzP+/KZb81avQCUIuK6lFTp14WY3Jv0+vO8H31Gcc9eq1XjiQx9Fa21+Mz1HEglY3S7FxYjl7FcnjuHlc2cyaeoQRPGGA5OTygkYSMnlvagJIaRyTbvdkdb6+mcEzh9Cmq2KnkgYoXgc69va83JtzjkC8RgaqowQCrQQr1avRzSZxPEpZ8o2kizDG43itoGVebvuXCgIm9udSbKcsvSGdRTPjKSv3MuBOJPluw9OTFiL0C2SIwoACCFvMe31+rvN5udk4D0MMCq1Hfd5odNo0NeQn6SHoiwjJoqor6pK33iR1rW14ZmRE4p1AqxuF27s7UVTdU3KNpkQZRlWtwtzwWDFjoUfdU7gv4YPZdR/xvmfDI6P/7bgnSJ5QQEAIeQqkz6fq7O29hUw9l4AihPz5+Zm0VVXj5Ycb5YXxcQkVIJQsPUAGpUKVVod9tnGFNvZPW68I4cdAb5oFOfn5xFNllcVxGycmJnGdwb3Z1QPggH/OuhwfKEI3SJ5QgEAIeSanH7/dIfZfIRx/l4wlnKinwM4Me3Exo7OvN20g/E4zIYqxcJFuVjV1IzXRs8rbmWbDQbR39CI3ixHN5KSBIfXgym/v+K2+F3u7NwsHjuwN7NpC8ae7bbbP3aKFv1VFAoACCEpOX2+sa76+mkA71RqJ8kyzs7NYbulB+pFpuy9UjiRQKPRWJDEPIwxdJjM+N2ZU4rtzszN4sENmzKqFsg5x3w4BKvbhUiicp/6AcDqmsc397+RUYIiDhyJRaP3vhoOV04eYwKAAgBCSBqTPt+bHXV1tQzYqdQunIjDHQnj+o6uvFw3KUkQWOGmAjrNdTg5PYVJvy9lm2A8hlq9DuvbOhTP5Y1EYPW44QmHwSv4qR8ARl0ufH3v64hLGe1WmFKJ4u3D09PuQveL5B8FAISQtJw+30udZvMmAKuV2k0H/DBoNFkPm6cSShR2KmBFcwuePHlc8aZ9anYGD6zdAP0VOQ845/DHYrB53JgLBSt2hf/lTsxM4/EDe5HI7Obv5YzdNTg+rlxpiZQtCgAIIZngDTrdM2qN5h6WpkbBublZrG5pRZ0hPyv5o8kkGo3VeTnXleqrqjAXDOLs3GzKNglRREISsbOnD8DCyv75UAg2jxuuUKji8vinMjTuwHcH92cayAQZcPeg3T5c6H6RwqEAgBCSkdlwOGmpq/sd5/wPwVjKuzsHcHZ+FjssvXl5ck9IEgwaTcEKBq1ra8eTJ44p3sjPzs1ic5cFgVgMEz4vArEopCXwxH/RnrHz+OmRw5kuWowy4P6DdrtydSVS9igAIIRkbMLn83fW1x8D8H4AKVfGRZPJvK4HCCcTaKquLsiCQINGA845Dk+Mp2wjcw5XKIjVza15v34pcQDPjBzH0ydPZLp8P8E4f/Cgw/FSQTtGioICAEJIVpw+31iHySQyxu5Qajcd8KO+yoguc13O15RkGaoCLgi8rqUNz50aQVhh9b4z4Mfmzq6C1ysolrgk4rtDB7DPlmHSPs5FBrz3oMPxTGF7RoqFAgBCSNacfv/eTrN5I9IsCjw7P4vrO7tg1OZ+04wmk2iqri5ImmC1IMBsqMKeMeX1bMFYHDd05mdUo5TmwyF87fXXcN41axtCxgAAEV9JREFUn1F7DsTB2HsGHY5fF7hrpIjyU8WDELLccFEQ/giA4uNjXBTxg8NDedkaJ8oS5kLBnM+Tyt2rr8NAY5NimyPOCUxmUAq3nJ2anca/vvIipjItR8x5iMvyfUN2u3ItZVJxaASAELIo015vvNNsHgLwKBQ+S3zRSN7qBUSTIppragqWHKjRWI0X01S888Wi2Nplyfv1C03mHC+cPYMfvXkom50LHkEQ7hp0OPYWsm+kNCgAIIQsmtPnm+wwmaR06wFG5+ewqaMTNTp9TteTOYdOrUaVVpvTeVKx1NfjgN2G+VAoZZu5UBBrWlpRV8CCRfkWiMXw7aED2Jum/sEVZsDYnQdttjcL1S9SWhQAEEJy4vT793WazbcA6E3VRuYcEz4vdvb05vz0nhDFnKv0KWmpqU2bItgVDmOHJeX/blk5POHAN/a9nvmQ/4LTsizfOeRwKA+HkIpGAQAhJFe8u7r6JS4IjwJI+Vjsi0ahV6tzngoQZRk1eh10anVO50ml02zG4fFxzAQDKdu4I2H0NzYVLEFRPkSSSfzozUN49tQIktnkLGDsWajV9wzZbDOF6x0pBxQAEEJyNhkIBDvN5nEADym1s7rd2Nrdk3NSH5nzgg7Bd5jr8Oypk4pt5kJB7OrtK1gfcnHUOYnH9u/FmNuVzcs4gM8P2u0fc3o8sQJ1jZQRCgAIIXnh9PlOpqsXIHEZnkgYm7u6c7pWXBRRX2WEOoMqfYvRVluL41NOOP2ph8190SgsdfVorincdES2ZoNBfO/QQTx/9jRiYjKbl0Y58OiQ3f5lUEnfZYMCAEJI3rSaTK8LjH0YgCFVm9lgEN119WjJ8cYpCAy1+twWFSqx1Nfj6ZETim080Shu7Cn9WoC4JOI3p07ih4cHF7NV0g5ZvmfI4XihEH0j5YsCAEJI3kz7/aGOuroZBrxLqZ3N7cau3j6ocniCT0pSQZ++m6prcHZuFuNeT8o23kgEK5tb0FBlLFg/lEicY9Bhx38c3IdTM9OZ5vK/hAE/FgXhHYfsdluBukjKGAUAhJC8cvp8xzrN5m0AVqRqE00mwRjDquaWRV9HkmWYDAZoC1QqGAB66xvx1MljimPigXgM27qLmxdA4hwHHTZ8e3A/Bh12xMSMyvdeLgDG/njQbv/UtNcbL0QfSfmjAIAQkncdJtMBxtjHAaRc7efwerDdktuCQJUgFHQaoMFohNXjgs3tTtnGFQphQ3tnQftxkSjL2G+34tsH92Fo3IFoMqt5fgAAB/aD87uG7PbXC9BFUkEoACCE5J3T7/d11tUJAG5L1UbmHMF4HJs6Ohd9nYQkoqWmdtGvz0S3uR5Pnjym2CaSTBS0RoAnEsHL587gh8OHcHhicTd+AFHG+acNDscf7/P7U89rkGWDAgBCSEFsaGwcjMryIwAaUrWZ9vuxurkFdYucQ5c5R61eD22BcgIAC6MAJ2emMOnzpWwzEwxiS5cFxjxmKBRlGSMz0/jNyAn85MhhnHfNZ7uy/3KvSIy9c8hu/7UdyCIpAFnKKAAghBTEqMcjdZlMY2DsA0rtZsOhhQyBi7yOwBhMhpSbDvKiubombV6ApCRhQ3tHTtcRJQln5ufw6uhZ/Gj4EPbbrZhWSEiUFueTDPjwoMPx91M+X+p5DLIsUQBACCmYSb9/NF1uAG8kgg6TGa21ixvKT0pSwacB2mpNaWsETAf82NnTC32Waxp80SgOT47jt6dH8NOjwzhgt8Hh9SCRecGea0mAsS8bjMaH954/rzx/QZYtCgAIIQXVUV9/hHH+36DweTMTCOCmvv5F1Qm4mBVQU8DdAABg0hvwkkKlwIUteAxrWlpTtgklEhj3enBiegqvjZ3HUyeP4ZmREzg5PYW5UBBSNil7r4VzEYz9gHP+8JDd/oR9fj6R2wnJUla4iTNCCAEwZLWe297b+zg4/7NUbaYCfgxPjGPrIrfTBWKxnNMLp3NL/wAs9fVweFKvn9tnHUN7bS0SkoRoMolQPA5vNAJfNApXKIhQomD3YxnAz7hK9akhq/VcoS5Clpb8F9UmhJAr3Njf3yxJ0iiAlJl7mqur8Y9vuwfCIpIDmQwGDDQ25dLFjDx98jg+99LzBb9OFmQAT0oq1T8fHhtTXqRAyBVoCoAQUnATXm+4s65ODYVtgeFEAvVVRnTV1WV9/qQkobWmNudSw+n0Nzbh2ZGTCBfuST5TPgCPc87fP+RwPDbl9c6VukOk8hSmkgYhhFwhGol8EcC0UpvfnTkFeRHz4DLnCCUKn9BOLQh45PrNBb+OgkHO2KMGoG3Qbv/kkMNBKXzJotEIACGkKGbD4WSn2SwCeHuqNtFkEs01tegwmbM+v0alKko2voGmJvzq+NFcV+lnjvNRxth/Cpz/xUGH4387fb5jdp8v69y/hFyJAgBCSNF0V1cf54LwESisBZgLBRe1I4BzoLG6OtcupqVRqRBKxHFsylnIyxznwDcZY58ctNv/YdLne2nS758p5AXJ8kMBACGkaCYDAbHTbJagMAoQisfRuYi8AJIsF2UdAAB0mevwxLEj4FlW31MwA+BZcP5NlSx/8uD4+OecPt8ep883m68LEHIl2gZICCkqQRQfk9XqvwOQcsP8C2dPZ10jQOYc0WQSVXlMx5tKa20tbrT0Yq9tLNuXSgAcHDjHgKNgbJjL8jDN5ZNSoACAEFJUByYno9t6ev6VAV9M1cbh9eDc/BxWNjVnde5wIlGUAAAAHtywKW0AwDj/DReEJ7gsO1WMTQWMRuvIyEjJtxAQAlAAQAgpASmReEyt1f4vKBQKenX03CICgDiaUPh1AACwo6cX7SYTpvz+lG04Y6ZBm+2HRekQIVmibYCEkKIbnpqKAHhcqc3J6Sm4FHLvX0sx9+cLjOGBdRvSNbt5Z09PyjoIhJQSBQCEkNJg7CsAYqkOy5xjj/V8VqeMJZO559PPwgPrNqatQSADHypSdwjJCgUAhJCSGLTZZgH8RKnNPpsVMTGZ1Xmjyeza58JsMGD3wIp0zT68m6ZbSRmiAIAQUjKSSvVFACn30sVFEYMOe1bnzDZgyNWD6zela9IasVjuLkZfCMkGBQCEkJI5PDZ2kjH2ilKbvdbsttoVcwQAAK7v7EJ/Q6NiGyYIHy5SdwjJGAUAhJCS4rL8TaXjUwE/rG5XxueLFTkAAIA/WL9RuQHn77h5YKDw5QoJyQIFAISQkjI4HE8BUMyru89mzfh8MbH4afLvWbMWeo1GqYk2Lop/WKz+EJIJCgAIISX1GiAy4D+V2gxPjiOS4Ra/hCgWdScAAFRrdbi1X3kxoMD5R4rUHUIyQgEAIaTkmCj+BzhP+eielCQcmhjP+HwlGQVYvUbxOGds3fbu7pLWEibkchQAEEJK7sDkpJMx9oxSm6Fxe8bnS5QgANjWbUGjUTkLIROER4rUHULSogCAEFIeGPue0mG7x425UDCjUyUkKR89yoogCLhr9XWKbTjwCIDClyskJAMUABBCyoLeZvstFsripnQ4w2mAhFT8EQAAuG/NunRNerb29W0pRl8ISYcCAEJIWXgNEDljP1Zqc3jCkdG5EmLxRwAAoL+hMW1OAEGSHi5SdwhRRAEAIaRscEn6jtLx2WAQ415P2vOUagQAAO5cpTwNAMYeBk0DkDJAAQAhpGwcGh8fAWPDim0ymAYo1QgAANyxclW6JjQNQMoCBQCEkLLCOf+R0vHhiXFwnrJ8AABAlCXIadoUSre5DiubmhXb0DQAKQcUABBCyorE+U8BpHyE98eiODs/l/48RU4GdLm0owCMvRc0DUBKjAIAQkhZGXY4pgG8odQmk90AYgkDgDtXrgZjivf3rp29vVuL1R9CroUCAEJI2eHAz5SOH3VOQEyz11+US7cOoMNkxopG5do/sizTNAApKQoACCFlR9JqfwEgZVm/aDKJkzPTyueQS7MG4KJb+geUGzB2f3F6Qsi1UQBACCk7w+fOuTjwslKbY1OTiuco5QgAANzclyYAAFZvs1h6i9EXQq6FAgBCSLl6SungyZlpyArz/KUeAVjV3IK2WpNiGwbcU6TuEHIVCgAIIWVJI0lPA0h5F48kEhjzuFO+vpS7AC7a1duveJwCAFJKFAAQQsrSvomJKXCumBToxPRUymM8dexQNOnWAXDGbtvd06MvUncIeQsKAAgh5StNieDjztTrAEqUB+gtru/sRJVGq9TEGGXs5mL1h5DLUQBACClbMvC00vH5cAizwWuXCC6HEQCNoMLmrm7FNoxzmgYgJUEBACGkbB2y248CsCu1OT7tvOb306ULLpYdlh7F45zWAZASoQCAEFLWGOe/UTp+MkUAUC529vSla7L6xq4u5dWChBQABQCEkLLGBUFxHcCY241QInHV99Ok4i2adpMJ3eY6xTaSINxdpO4QcgkFAISQshaqqnoNQCDVcc45Rmau3g0glEkAAAA7epTz/dB2QFIKFAAQQsrayMhIggO/U2pzYurqaYByCgC2pUn4xxm7+WFAVaTuEAKAAgBCSAUQOFfcDXB6dhbSFYv+BFY+H2/Xd3RCpRyQmCYtlg3F6g8hAAUAhJAKwCTpOQApk/vHxCQcbtdbvldOIwBGrRarmlsV23DKB0CKjAIAQkjZOzA56QGgmBXw9PzcW/6uUZXXiHq6fACccwoASFFRAEAIqQicsReVjp+bm3nL39VCeX28pQsAwNgtAMpn2IIseeX1DiGEkBSYLCuWB7a63YiJyUt/L7cRgE3tHdAIin1q3tbXt6JY/SGEAgBCSEWo12j2A4ikOi5zjvOu368DKLcAQK/RYHWr8joAgfNbitQdQigAIIRUhudGR+MA3lBq8/zpkTfjojSuEoSyWgR40ab2DsXjtA6AFJO61B0ghJCMMfYSOE+ZNW/MNW/a9ZV/e/BPdu2q/9ZD7+8A+A1gwkqArwDQAUBXwN75AIQA+AG4AXjA4IEMDwS4wTEfTiZ7AfwvhXNQAECKpvxCZEIISWFrT88mATii1MY6N3fvfCRyDsDYlcf4l75khlrdClllhIyF/LwMVQB0ABfAmOn3jTkHmO/S3xkPQmYiwGQI3A8IAcgshIQ6xP7uo9cuSXiFzStXNqoTiTkofPbKKlX3obGxiUzOR0guKAAghFQStr2nZwZAc6oGgVjsn07PzHwXwGTxupW57T09ZwCsSnWcc/6BIYfjx0XsElmmaA0AIaSScACvKDUwqNXbAcSL051F2ad0UGBsS7E6QpY3CgAIIRWFc/6S0nGVWr0NQFKpTUlxrhgAcMa0xeoKWd4oACCEVBS1ICgGAALQtKGlpbNY/cmWVqN5hiuMUDDOFXc6EJIvFAAQQirKfpvNAeC8UhtBpzMpHS+lN0ZH5wXg/6Q4/ILebv9lUTtEli0KAAghlYfzJ1MeAhIQhJFididbB+32T4PzP2PA+IVvhRnwLTGReNdrgFjKvpHlg3YBEEIqztb+/i5Bko4CqL/yWCyZ/NYxp/NPS9CtRdm9dm1108hI9OcK1Q4JKQQKAAghFWlrX99WQZa/C2AtAIBzMS6KPz7qdP5/uEYOAELIW1EAQAipZMKW/v41aklqjIri+WOTk40ArAAySsxDCCGEkKWBHmoIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBCSo/8f1NgX4MpIJUkAAAAASUVORK5CYII="
                ></image>
            </defs>
        </svg>
    )
}


export const DayCheckedIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            fill="none"
            viewBox="0 0 17 17"
        >
            <circle cx="8.5" cy="8.5" r="8.5" fill="#49B43A"></circle>
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.387 8.482l2.784 3.583 5.99-7.13"
            ></path>
        </svg>
    )
}

export const CopyWrapperIcon = (props) => {
    return (
        <svg width="100" height="100" viewBox="0 0 36 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="14" rx="3" fill="#0F111F"/>
            <path
                d="M30.8537 17.2664C30.4819 17.991 29.4462 17.991 29.0744 17.2664L27.2475 13.7066C26.906 13.0411 27.3892 12.25 28.1372 12.25L31.791 12.25C32.5389 12.25 33.0222 13.0411 32.6806 13.7066L30.8537 17.2664Z"
                fill="#0F111F"/>
        </svg>

    )
}

export const XIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="none"
            viewBox="0 0 28 28"
            {...props}
        >
            <path
                fill={props?.fill ? props?.fill :  "#000"}
                d="M22.051 1.345h4.294l-9.38 10.722L28 26.654h-8.64l-6.767-8.848-7.744 8.848H.553l10.033-11.469L0 1.346h8.86l6.117 8.088 7.074-8.089zm-1.506 22.74h2.379L7.567 3.78H5.014l15.531 20.305z"
            ></path>
        </svg>
    )
}

export const YoutubeIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 32 23"
            {...props}
        >
            <g clipPath="url(#clip0_67_19237)">
                <path
                    fill="red"
                    d="M31.39 3.555a4.085 4.085 0 00-1.042-1.817 4.026 4.026 0 00-1.8-1.052C26.059 0 16.034 0 16.034 0S6.007.02 3.517.707c-.68.186-1.301.549-1.8 1.052A4.085 4.085 0 00.677 3.576c-.754 4.47-1.046 11.281.02 15.572a4.084 4.084 0 001.042 1.817 4.025 4.025 0 001.8 1.052c2.49.686 12.515.686 12.515.686s10.025 0 12.516-.686c.68-.186 1.3-.549 1.8-1.052a4.084 4.084 0 001.04-1.817c.795-4.476 1.04-11.283-.02-15.593"
                ></path>
                <path
                    fill="#fff"
                    d="M12.842 16.217l8.316-4.865-8.316-4.865v9.73z"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_67_19237">
                    <path fill="#fff" d="M0 0H32V23H0z"></path>
                </clipPath>
            </defs>
        </svg>
    )
}

export const RedCloseIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="red"
            viewBox="0 0 24 24"
        >
            <path
                fill="#f00024"
                d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm3.36 12.3c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2.3-2.3-2.3 2.3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l2.3-2.3-2.3-2.3a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 2.3-2.3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.3 2.3 2.3 2.3z"
            ></path>
        </svg>
    )
}

export const GalochkaIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth="1.4"
                d="M6 13.636S9.32 18 9.852 18 19 6 19 6"
            ></path>
        </svg>
    )
}

export const Close2Icon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="white"
            viewBox="-0.5 0 25 25"
        >
            <path
                stroke="silver"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 21.32l18-18M3 3.32l18 18"
            ></path>
        </svg>
    )
}
