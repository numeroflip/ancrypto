import React, {useContext} from 'react'
import styled from 'styled-components'
import {SubHeading} from '../Shared'
import {DataContext} from '../contexts'

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Text = styled(SubHeading)`
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
      <Text>This site is made by Áron Berényi</Text>
    </Footer>
  )
}