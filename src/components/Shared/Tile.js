import styled from 'styled-components'

export const Tile = styled.div`
    border: 0;
    outline: 0;
    background: transparent;
    position: relative;
    padding: var(--m);
    /* background: var(--color-main-lighter); */
    /* border-radius: var(--radius); */
    border-radius: 0 1rem 1rem 0;
    color: var(--color-text);
`
export const SelectableTile = styled(Tile)`
    border-left: 4px solid transparent; 
    &:hover {
        cursor: pointer;
        box-shadow: var(--shadow)
    }


`