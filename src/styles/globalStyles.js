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
        scroll-behavior: smooth;

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
          color: ${theme.colors.grayBase};
          font-family: ${theme.fonts.primary};
        `};
    }

    a{
        text-decoration:none;
        color:currentColor;
    }

    h1,h2,h3,h4,h5,h6{
        font-size: ${({ theme }) => theme.fontSizes.regular};
        font-weight:normal;
        margin:0;
    }
    h1{
        font-size: ${({ theme }) => theme.fontSizes.xlarge};
    }

    h2{
        font-size:${({ theme }) => theme.fontSizes.large};
    }

    h1,h2{
        ${({ theme }) => css`
          font-family: ${theme.fonts.secondary};
          color: ${theme.colors.grayDark};
        `};
    }

    h3{
        ${({ theme }) => css`
          font-family: ${theme.fonts.primary};
          color: ${theme.colors.grayBase};
        `};
    }
    
    main{
        padding: 27px 0 99px 0;
        width: 100%;
    }

    table, th, td{
      border: 1px solid ${({ theme }) => theme.colors.gray4}; 
      border-collapse: collapse;
    }

    th,td{
        padding:0 12px;
        height: 34px;

    }

`;
