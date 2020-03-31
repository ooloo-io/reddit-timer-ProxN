import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
    *,
    *::before,
    *::after{
        margin:0;
        padding:0;
        box-sizing:inherit;
    }

    html{
        box-sizing:border-box;
        height:100%;
        width:100%;
    }
    #root,
    body{
        width:100%;
        height:100%;
    }
    body{
        line-height:normal;
        font-weight:normal;
        ${({ theme }) => css`
          background-color: ${theme.colors.grayLight};
          font-size: ${theme.fontSizes.regular};
          color: ${theme.colors.grayDark};
          font-family: ${theme.fonts.secondary};
        `};
    }
    a{
        text-decoration:none;
        color:currentColor;
    }
    h1,h2,h3,h4,h5,h6,p,li{
        font-size: ${({ theme }) => theme.fontSizes.regular};
        font-weight:normal;
    }
    h1,h2{
        ${({ theme }) => css`
          font-family: ${theme.fonts.secondary};
          color: ${theme.colors.grayDark};
        `};
    }
    h3,p,li{
        ${({ theme }) => css`
          font-family: ${theme.fonts.primary};
          color: ${theme.colors.grayBase};
        `};
    }

`;
