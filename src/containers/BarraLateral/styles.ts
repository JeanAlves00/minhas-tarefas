import styled from 'styled-components'

export const Aside = styled.div`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`

export const Campo = styled.input`
  border-radius: 8px;
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  color: #666;
  border: 1px solid #666;
  width: 100%;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #2f3640;
    outline: none;
  }
`
