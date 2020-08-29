import styled from 'styled-components'
import { breakPoints } from '../Shared/GlobalTheme'

export default styled.div`
    /* display: flex; */
    flex-direction: column;

    margin: 0 auto;
    max-width: 1400px;
    min-height: 100vh;

  footer {
    margin-top: auto;
  }

    > * {
        padding: var(--l);
        
    }

    @media(max-width:${breakPoints.mobile}) {

       > * {
            padding: var(--xl);
       } 
    }
`