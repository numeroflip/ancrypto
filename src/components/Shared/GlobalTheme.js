import {createGlobalStyle} from 'styled-components'

export const breakPoints = {
  desktop: '1024px',
  tablet: '800px',
  mobile: '600px',
  smallMobile: '370px',
  maxWidth: '1400px'
}


export default createGlobalStyle`

  :root {

    
    --xs: .2rem;
    --s: .5rem;
    --ms: .8rem;
    --m: 1rem;
    --mx: 1.25rem;
    --l: 1.5rem;
    --xl: 2rem;
    --xxl: 3rem;

    --max-width: 1200px;

    /* Colors */
    --color-success: ${props => props.dark ? '#25aa45'  : '#5be37ed9'};
    --color-success-dark:${props => props.dark ? '#5be37ed9'  : '#25aa45'};

    --color-danger-lighter: ${props => props.dark ? '#fdd'  : '#fdd'};
    --color-danger-light: ${props => props.dark ? '#ffb3b3'  : '#ffb3b3'};
    --color-danger: ${props => props.dark ? '#f03535'  : '#ff6060'};
    --color-danger-dark: ${props => props.dark ? '#f03535'  : '#f03535'};

    --color-main-lighter: ${props => props.dark ? '#fbdb60'  : '#ebf9ff'};
    --color-main-light: ${props => props.dark ? '#fbd129'  : '#6cc1e1'};
    --color-main: ${props => props.dark ? '#ffcb00d9'  : '#3486dd'};
    --color-main-dark: ${props => props.dark ? '#fbd129'  : '#3486dd'};
    --color-main-darker: ${props => props.dark ? '#fbdb60'  : '#235f9f'};

    --color-background: ${props => props.dark ? '#000000e6'  : '#fff'};
    --color-background-negative: ${props => props.dark ? 'white'  : 'black'};
    --color-background-secondary: ${props => props.dark ? 'gray' : '#ebf9ff'};

    --color-text: ${props => props.dark ? '#fff'  : '#000'};
    --color-text-negative: ${props => props.dark ? '#000'  : 'white'};
    --color-secondary: ${props => props.dark ? 'gray'  : 'gray'};
    --color-secondary-light: ${props => props.dark ? '#3c3b3b70'  : '#e6e6e6'};

    --gradient-main: linear-gradient( to top left, var(--color-background), var(--color-background-secondary));
    /* Typography */
    --font-family: 'Fira Sans', sans-serif;
    /* Shadow */
    --shadow: ${props => props.dark ? 'inset 1px 4px 40px rgba(0,0,0, 0.5)'  : '1px 4px 14px rgba(0,0,0, 0.1)'};
    --shadow-light: ${props => props.dark ? 'inset 1px 2px 20px rgba(0,0,0, 0.2)'  : '1px 2px 5px rgba(0,0,0, 0.1)'};

    --radius: 10rem;

    @media(max-width: ${breakPoints.tablet}) {
      :root {
        font-size: 13px;
      }
    }

    /* @media(max-width: ${breakPoints.mobile}) {
      :root {
        font-size: 11px;
      }
    } */
  }

  html {
    line-height: 1.5;
  }

  html, body {
    height: 100%;
  }

  html * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--font-family);
    background: var(--color-background);
    color: var(--color-text);
    width: 100%;
    transition: ease .3s background;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    
  }


`
