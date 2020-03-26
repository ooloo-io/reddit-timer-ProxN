import { css } from 'styled-components';

import MontserratRegularWoff from '../assets/fonts/Montserrat/Montserrat-Regular.woff';
import MontserratRegularWoff2 from '../assets/fonts/Montserrat/Montserrat-Regular.woff2';
import MontserratMediumWoff from '../assets/fonts/Montserrat/Montserrat-Medium.woff';
import MontserratMediumWoff2 from '../assets/fonts/Montserrat/Montserrat-Medium.woff2';
import MontserratBoldWoff from '../assets/fonts/Montserrat/Montserrat-Bold.woff';
import MontserratBoldWoff2 from '../assets/fonts/Montserrat/Montserrat-Bold.woff2';
import BitterRegularWoff from '../assets/fonts/Bitter/Bitter-Regular.woff';
import BitterRegularWoff2 from '../assets/fonts/Bitter/Bitter-Regular.woff2';
import BitterBoldWoff from '../assets/fonts/Bitter/Bitter-Bold.woff';
import BitterBoldWoff2 from '../assets/fonts/Bitter/Bitter-Bold.woff2';

export default css`
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratRegularWoff2}) format('woff2'),
      url(${MontserratRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratMediumWoff2}) format('woff2'),
      url(${MontserratMediumWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratBoldWoff2}) format('woff2'),
      url(${MontserratBoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Bitter';
    src: url(${BitterRegularWoff2}) format('woff2'),
      url(${BitterRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Bitter';
    src: url(${BitterBoldWoff2}) format('woff2'),
      url(${BitterBoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
  }
`;
