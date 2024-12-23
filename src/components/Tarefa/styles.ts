import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.35);
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;
  color: #333;
`

export const Tag = styled.span`
  display: inline-block;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: #e1a32a;
  border-radius: 8px;
  margin-right: 16px;
  text-transform: uppercase;
`

export const Descricao = styled.textarea`
  display: block;
  width: 100%;
  margin: 16px 0;
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  line-height: 24px;
  color: #8b8b8b;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px;
  resize: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #2f3640;
    outline: none;
  }
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`

export const Botao = styled.button`
  padding: 8px 12px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  background-color: #2f3640;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #404854;
  }
`
