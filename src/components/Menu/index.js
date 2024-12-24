import React, {useState} from 'react';
import selectArrow from '../../assets/img/icons/select-arrow.svg'
import {Link as RouterLink, useNavigate} from "react-router-dom";
import navDots from "../../assets/img/icons/nav-dots.svg";
import '../../assets/css/style.css';
import useTranslation from "../../hooks/useTranslation"; // Assuming you have a CSS file for styles

const Select = () => {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const {translation} = useTranslation();

    return (
        <>
            <div  onClick={()=>{setIsOpen(true)}} className="nav__item" >
                <img className="nav__icon" width="24" height="24" src={navDots} alt="dots icon" />
            </div>

            {isOpen &&

                <div className={'absolute-menu-wrapper'}>


                    <div className={'absolute-menu-wrapper-menu-list'}>
                        <div className={'absolute-menu-wrapper-menu-list-item-top'}>
                            Menu
                        </div>

                        <div
                            onClick={()=>{
                                setIsOpen(false);
                                navigate('/settings')
                            }}
                            className={'absolute-menu-wrapper-menu-list-item'}
                        >
                            {translation?.settings}
                        </div>
                        <div className={'absolute-menu-wrapper-menu-list-item in-bot'}>
                            {translation?.toBot}
                        </div>
                        <div className={'absolute-menu-wrapper-menu-list-item'}>
                            {translation?.support}
                        </div>
                    </div>

                    <div onClick={()=>{setIsOpen(false)}} className={'close-absolute-menu-wrapper'}>
                        {translation?.close}
                    </div>

                </div>

            }

        </>
    );

};

export default Select;
