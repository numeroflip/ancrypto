import styled from 'styled-components'
import { breakPoints } from '../Shared/GlobalTheme'

export default styled.div`
    margin: 0 auto;
    max-width: 1400px;

    > * {
        padding: var(--l);
        
    }

    @media(max-width:${breakPoints.mobile}) {

       > * {
            padding: var(--xl);
       } 
    }
`