import React from 'react'
import styled, { css } from 'styled-components'
import { AppContext } from './AppProvider'

const Bar = styled.div`
    display: grid;
    grid-template-columns: auto 1fr 1fr 1fr 1fr;
    align-items: center;
`

const Logo = styled.span`

    font-size: 1.2rem;
`

function ControlButton({name}) {
    return (
        <AppContext.Consumer>
            {({page, setPage}) => (
                <ControlBtnElem
                    active={page === name}
                    onClick={() => setPage(name)}
                >
                    {name}
                </ControlBtnElem>
            )}
        </AppContext.Consumer>
    )
}

const ControlBtnElem = styled.div`
    cursor: pointer;
    opacity: .8;
    margin: 0 1rem;
    padding: .2rem .5rem;
    transition: ease .2s opacity;
    border-bottom: 2px solid transparent;
    text-transform: capitalize;

    &:hover {
        opacity: 1;
    }
        ${props => props.active && css`
            opacity: 1;
            font-weight: 500;
            border-color: black;      
        `}

`

export default function(){
    return (
        <Bar>
            <Logo>Ancrypto</Logo>
            <ControlButton name='dashboard' />
            <ControlButton name='settings' />

        </Bar>
    )
}