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
    font-style: normal;
    src: url('PretendardBold');
    src: url(${PretendardBold}) format('opentype');
    font-display: swap;
} 
@font-face {
    font-family: 'Title1';
    src: url('PretendardBold');
    src: url(${PretendardBold}) format('opentype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Body1';
    src: url('PretendardSemiBold');
    src: url(${PretendardSemiBold}) format('opentype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Body2';
    src: url('PretendardSemiBold');
    src: url(${PretendardSemiBold}) format('opentype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Button1';
    src: url('PretendardBold');
    src: url(${PretendardBold}) format('opentype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Subtitle1';
    src: url('PretendardBold');
    src: url(${PretendardBold}) format('opentype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Subtitle2';
    src: url('PretendardBold');
    src: url(${PretendardBold}) format('opentype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Subtitle3';
    src: url('PretendardSemiBold');
    src: url(${PretendardSemiBold}) format('opentype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Button2';
    src: url('PretendardSemiBold');
    src: url(${PretendardSemiBold}) format('opentype');
    font-weight: normal;
    font-style: normal;
}
`;

// export const theme = {
//   Web_fontSizes: {
//     Slogan: "70px",
//     Header: "24px",
//     Title1: "44px",
//     Body1: "16px",
//     Body2: "14px",
//     Button1: "28px",
//     Subtitle1: "36px",
//     Subtitle2: "24px",
//     Subtitle3: "36px",
//     Button2: "28px",
//   },
// };
