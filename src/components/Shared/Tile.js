import styled from 'styled-components'

export const Tile = styled.div`
    overflow: hidden;
    border: 0;
    outline: 0;
    background: transparent;
    position: relative;
    padding: var(--m);
    border-radius: 1rem;
    color: var(--color-text);

`
export const SelectableTile = styled(Tile)`
    border: 0 ;
    transition: ease .2s all;
    border-left: 10px solid transparent; 
    height: 100%;

    &:hover {
        transform: scale(1.05);
        border-color: var(--color-success);
        cursor: pointer;
        box-shadow: var(--shadow)
    }


`