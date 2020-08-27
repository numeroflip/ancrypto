import {createGlobalStyle} from 'styled-components'

export const breakPoints = {
  desktop: '1024px',
  tablet: '800px',
  mobile: '600px'
}



export default createGlobalStyle`

  :root {
    --xs: .2rem;
    --s: .5rem;
    --m: 1rem;
    --mx: 1.25rem;
    --l: 1.5rem;
    --xl: 2rem;
    --xxl: 3rem;

    --max-width: 1200px;

    /* Colors */
    --color-success: #5be37ed9;
    --color-success-dark:#2fb34f;

    --color-danger-lighter: #fdd;
    --color-danger-light: #ffb3b3;
    --color-danger: #ff6060;
    --color-danger-dark: #f03535;
    --color-main-lighter: #ebf9ff;
    --color-main-light: #d1f0ff;
    --color-main: #6cc1e1;
    --color-main-dark: #3486dd;
    --color-main-darker: #235f9f;
    --color-background: #fff;
    --color-text: #000;
    --color-secondary: gray;
    --color-secondary-light: #e6e6e6;
    --color-text-negative: white;
    --color-background: white;
    --color-background-negative: white;

    --gradient-main: linear-graadient( to top left, #99ddff, white);
    /* Typography */
    --font-family: 'Fira Sans', sans-serif;
    /* Shadow */
    --shadow: 1px 4px 5px rgba(0,0,0, 0.1);

    --radius: 10rem;

    @media(max-width: ${breakPoints.tablet}) {
      :root {
        font-size: 13px;
      }
    }
  }

  html {
    line-height: 1.5;
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
    background: var(--gradient-main);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    
  }


`
