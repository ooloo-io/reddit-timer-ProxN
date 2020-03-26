import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import fonts from './fonts';
import theme from './theme';

export default createGlobalStyle`
    ${reset};
    ${fonts};
    
    *,
    *::before,
    *::after{
        margin:0;
        padding:0;
        box-sizing:inherit;
    }

    html{
        box-sizing:border-box;
        min-height:100%;
        width:100%;
    }
    #root,
    body{
        width:100%;
        height:100%;
    }
    body{
        line-height:1.5;
        background-color:${theme.color.grayLight};
        font-size:${theme.fontSizes.regular};
        color:${theme.color.grayDark};
        font-family:${theme.fonts.primary};
        font-weight:normal;
    }
    a{
        text-decoration:none;
        color:currentColor;
    }
`;
