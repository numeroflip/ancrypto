import styled from 'styled-components'
import React from 'react'
import { breakPoints } from '../Shared/GlobalTheme'

console.log(breakPoints)

const Title = styled.h2`
    color: var(--color-main-darker);
    font-size: var(--xl);
`
const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;

`

const SearchInput = styled.input`
    border: 0;
    border: 1px solid var(--color-secondary-light);
    padding: var(--m) var(--l);
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    margin: var(--s) 0;
    font-size: var(--mx);

    &:focus {
        border-color: var(--color-main)
    }

    @media(max-width: ${breakPoints.mobile}) {
        width: 100%;
    }
`

const Search = () => {
    return (
        <>
            <Form>
                <Title>Search</Title>
                <SearchInput
                    name="searc"
                    placeholder="search"
                    onChange={(e) => {console.log(e.target.value)}}
                    />
            </Form>
        </>

    
    )
}

export default Search