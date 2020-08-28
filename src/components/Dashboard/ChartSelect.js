import styled from 'styled-components'

export default styled.select`
  color: var(--color-text);
  font-size: var(--m);
  justify-self: end;
  background-color: var(--color-background);
  font: inherit;
  padding: var(--s);
  border-radius: 5px;
  box-shadow: var(--shadow-light);
  border: 1px solid var(--color-secondary-light);

  :active,
  :focus {
    border-color: var(--color-main);
  }
`