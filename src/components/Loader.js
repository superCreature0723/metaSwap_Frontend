import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import '../assets/css/style.css'; // Assuming you have a CSS file for styles

import LogoSvg from '../assets/img/logo.svg';

function Loader(props) {

  return (
      <div className={'loader-block'}>
          <img
              className="loader-block-image"
              width="86"
              height="86"
              src={LogoSvg}
              alt="token icon"
          />
      </div>
  );
}


export default Loader;
