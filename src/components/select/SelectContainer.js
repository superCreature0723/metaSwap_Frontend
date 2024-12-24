import React, { useState, useEffect } from 'react';
import Select from './index';
import selectArrow from "../../assets/img/icons/select-arrow.svg";
import useTranslation from "../../hooks/useTranslation";

const SelectContainer = ({ defaultIndex = 0, data, onChange , type, defaultByCode, label, translation}) => {
    // const {translation} = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (data && data.length > 0) {
            setItems(data);

            if (type === 'languages') {
                const index = data.findIndex(language => language.code === defaultByCode);
                setSelectedItem(data[index] );
            } else {
                setSelectedItem(data[defaultIndex] || data[0]);
            }
            setLoading(false)
        }

    }, [data, defaultIndex]);

    const handleToggle = () => {
        setIsOpen(prevState => !prevState);
    };

    const handleSelect = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
        onChange(item)
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (

        <div className={`select ${isOpen ? 'open' : ''}`} style={{zIndex: 11}}>
            <p className="select__label">{label ? label : translation?.select }</p>
            <button onClick={handleToggle} type="button" className="select__selected">
                <div className="select__info">
                    {selectedItem?.crypticon ?

                        <img
                            className="tokens__icon"
                            width="36"
                            height="36"
                            src={selectedItem?.crypticon}
                            alt="token icon"
                        />
                        :

                        <div>
                            {selectedItem?.icon}
                        </div>
                    }
                    <p className="select__text">{selectedItem?.label}</p>
                </div>

                <div className="select__btn">
                    <img className="select__btn-arrow" width="14" height="8" src={selectArrow} alt="arrow icon"/>
                </div>
            </button>

            <ul className={`select__tokens`}>
                {items.map((item, index) => (
                    <li className="select__token" key={index}>
                        <a
                            className="select__token-link"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handleSelect(item);
                            }}
                        >
                            <div className="select__token-info">
                                {/*<img className="select__token-icon" width="36" height="36" src={item.icon} alt="item icon" />*/}
                                {item?.crypticon ?

                                    <img
                                        className="tokens__icon"
                                        width="36"
                                        height="36"
                                        src={item?.crypticon}
                                        alt="token icon"
                                    />
                                    :

                                    <div>
                                        {item?.icon}
                                    </div>
                                }
                                <div className="select__token-texts">
                                    <p className="select__token-text">{item?.label || item?.cryptoTokenName}</p>
                                </div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SelectContainer;
