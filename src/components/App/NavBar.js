import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from "react-router-dom";

const Bar = styled.div`
  width: 100%;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: flex-start;

  a {
    color: inherit;
    text-decoration: none;
  }

  nav {
      margin-left: auto;
      display: flex; 
      
      a {
        border-bottom: 2px solid transparent;
        transition: ease .2s all;
        padding: var(--xs);
        margin: 0 var(--m);
      }

      .active-link {
        border-color: var(--color-main);
      }
  }

`
const Logo = styled.span`
  color: var(--color-main-darker);
  justify-self: start;
  font-size: 1.2rem;
  font-weight: 700;
`

export default function(){
    return (
        <Bar>
            <Link to='/'><Logo>Ancrypto</Logo></Link>
            <nav>
                <NavLink activeClassName="active-link" exact to='/'>Dashboard</NavLink>
                <NavLink activeClassName="active-link" exact to='/settings'>Settings</NavLink>
            </nav>

        </Bar>
    )
}