import React, {useContext} from 'react'
import styled from 'styled-components'
import {DataContext} from '../contexts'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Text = styled.div`
  color: var(--color-secondary);
  display: flex;
  align-items: center;
  font-size: var(--ms);
`

const ThemeToggler = styled.button`
  color: var(--color-text);
  border: 0;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: var(--s);
  background: transparent;
  border: 3px solid var(--color-main-darker);
  font-weight: 700;
  cursor: pointer;
  margin: var(--m);
  transition: ease .3s all;
    &:hover {
      transform: scale(1.05);
    }
`
const Icons = styled.ul`
  height: auto;
  font-size: var(--l);
  margin: 0 var(--s);
  list-style: none;
  display: flex;
   li {
     margin: var(--s);
   }
`

const A = styled.a`
  display: inline-block;
  color: var(--color-main-darker);
  text-decoration: none;
  transition: ease .2s all;
  &:hover {
    transform: translateY(-3px);
    
  }

  svg {
    height: 100%;
  }
  
`


export default function () {

  const { toggleTheme, theme } = useContext(DataContext)

  return(
    <Footer>
      <ThemeToggler onClick={() => toggleTheme()} >
        {
          theme === 'light' 
            ? 'Dark theme' 
            : 'Light theme'
        }
      </ThemeToggler>
      <Text><p>This site is made by <A target="_blank" href="https://numeroflip.github.io/">
             Áron Berényi</A>
        </p>
        <Icons>
          <li>
            <A target="_blank" href="https://github.com/numeroflip">
             <FaGithub />
            </A>
          </li>

          <li>
            <A target="_blank" href="https://www.linkedin.com/in/aron-berenyi/">
             <FaLinkedinIn />
            </A>
          </li>
        </Icons>
        </Text>
    </Footer>
  )
}