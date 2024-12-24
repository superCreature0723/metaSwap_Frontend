import React from 'react';
import selectArrow from '../../assets/img/icons/select-arrow.svg'

const Select = ({ isOpen, selectedItem, items, onToggle, onSelect }) => {
    if (items && items.length > 0) {
        return (
            <div className={`select ${isOpen ? 'open' : ''}`} style={{ zIndex: 11 }}>
                <p className="select__label">Выберите</p>
                <button onClick={onToggle} type="button" className="select__selected">
                    <div className="select__info">
                        {selectedItem.icon}
                        {/*<img className="select__icon" width="24" height="24" src={selectedItem.icon} alt="selected icon" />*/}
                        <p className="select__text">{selectedItem.label}</p>
                    </div>

                    <div className="select__btn">
                        <img className="select__btn-arrow" width="14" height="8" src={selectArrow} alt="arrow icon" />
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
                                    onSelect(item);
                                }}
                            >
                                <div className="select__token-info">
                                    {/*<img className="select__token-icon" width="36" height="36" src={item.icon} alt="item icon" />*/}
                                    {item?.icon}
                                    <div className="select__token-texts">
                                        <p className="select__token-text">{item?.label}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

};

export default Select;
