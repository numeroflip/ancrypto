import styled from 'styled-components'

export const Tile = styled.div`
    padding: var(--m);
    background: var(--color-main-light);
    border-radius: var(--radius);
    color: var(--color-text);
`
export const SelectableTile = styled(Tile)`
    border-left: 4px solid transparent; 
    &:hover {
        cursor: pointer;
    }
`