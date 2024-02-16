import { createGlobalStyle } from "styled-components";
import OswaldBold from "../fonts/OswaldBold.ttf";
import PretendardBold from "../fonts/PretendardBold.otf";
import PretendardSemiBold from "../fonts/PretendardSemiBold.otf";

export const GlobalStyle = createGlobalStyle`
 body, html {
    margin: 0;
    padding: 0;
  }
@font-face {
    font-family: 'Slogan';
    font-size: 70px;
    font-style: normal;
    src: url('OswaldBold');
    src: url(${OswaldBold}) format('embedded-opentype'),
         url(${OswaldBold}) format('woff2'),
         url(${OswaldBold}) format('woff'),
         url(${OswaldBold}) format("truetype");
    font-display: swap;
} 
@font-face {
    font-family: 'Header';
    font-size: 24px;
    font-style: normal;
    src: url('PretendardBold');
    src: url(${PretendardBold}) format('opentype');
    font-display: swap;
} 
@font-face {
    font-family: 'Title1';
    font-size: 44px;
    src: url('PretendardBold');
    src: url(${PretendardBold}) format('opentype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Body1';
    font-size: 16px;
    src: url('PretendardSemiBold');
    src: url(${PretendardSemiBold}) format('opentype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Body2';
    font-size: 14px;
    src: url('PretendardSemiBold');
    src: url(${PretendardSemiBold}) format('opentype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Button1';
    font-size: 28px;
    src: url('PretendardBold');
    src: url(${PretendardBold}) format('opentype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Subtitle1';
    font-size: 36px;
    src: url('PretendardBold');
    src: url(${PretendardBold}) format('opentype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Subtitle2';
    font-size: 24px;
    src: url('PretendardBold');
    src: url(${PretendardBold}) format('opentype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Subtitle3';
    font-size: 36px;
    src: url('PretendardSemiBold');
    src: url(${PretendardSemiBold}) format('opentype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Button2';
    font-size: 28px;
    src: url('PretendardSemiBold');
    src: url(${PretendardSemiBold}) format('opentype');
    font-weight: normal;
    font-style: normal;
}
`;
