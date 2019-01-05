import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  html {
    font-family: ${props => props.theme.font};
    font-weight: 400;
  }

  body {
    margin: 0;
    background-color: ${props => props.theme.colors.bgPrimary};
    color: ${props => props.theme.colors.light};
    padding: 0;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

`

export {
  GlobalStyle
}
