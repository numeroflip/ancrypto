import styled from 'styled-components'

export const Tile = styled.div`
    overflow: hidden;
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
    transition: ease .2s all;
    border-left: 10px solid transparent; 
    &:hover {
        border-color: var(--color-success);
        cursor: pointer;
        box-shadow: var(--shadow)
    }


`