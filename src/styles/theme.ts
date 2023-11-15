import { css, DefaultTheme } from "styled-components";

const fonts = {
  Headline_Large: css`
    font-family: "Montserrat";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 54px;
  `,
  Title_Large: css`
    font-family: "Montserrat";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 125% */
    letter-spacing: -0.12px;
  `,
  Title_Large_2: css`
    font-family: "Montserrat";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 125% */
    letter-spacing: -0.46px;
  `,
  Title_Large_Small: css`
    font-family: "Montserrat";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133333% */
    letter-spacing: -0.46px;
  `,
  Image_Title: css`
    font-family: "Montserrat";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  Title_Medium: css`
    font-family: "Montserrat";
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
  `,
  Title_Medium_1: css`
    font-family: "Montserrat";
    font-size: 2px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  `,
  Title_Medium_2: css`
    font-family: "Montserrat";
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 34px; /* 154545% */
    letter-spacing: -0.44px;
  `,
  Title_Small: css`
    font-family: "Montserrat";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133333% */
    letter-spacing: -0.46px;
  `,
  Body_Text_Large: css`
    font-family: "Montserrat";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
  `,
  Body_Text_Large_2: css`
    font-family: "Montserrat";
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
  `,
  Body_Text_Medium: css`
    font-family: "Montserrat";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
  `,
  Body_Text_Medium_2: css`
    font-family: "Montserrat";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
  `,
  Body_Text_Medium_3: css`
    font-family: "Montserrat";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
  `,
  Body_Text_Small: css`
    font-family: "Montserrat";
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
  `,
  Label_Large: css`
    font-family: "Montserrat";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 2px;
  `,
  Label_Medium: css`
    font-family: "Montserrat";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
  `,
  Label_Small: css`
    font-family: "Montserrat";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,
  Label_Small_2: css`
    font-family: Montserrat;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    line-height: 16px; /* 145455% */
  `,
};

const theme: DefaultTheme = {
  fonts,
};
export default theme;
