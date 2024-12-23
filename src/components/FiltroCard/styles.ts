import styled from 'styled-components'
import { Props } from './index'

type PropsWithoutLegendaAndContador = Omit<Props, 'legenda' | 'contador'>

export const Card = styled.div<PropsWithoutLegendaAndContador>`
  padding: 12px;
  border: 2px solid ${({ ativo }) => (ativo ? '#34d399' : '#d1d5db')};
  background-color: ${({ ativo }) => (ativo ? '#ecfdf5' : '#f3f4f6')};
  color: ${({ ativo }) => (ativo ? '#065f46' : '#6b7280')};
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ ativo }) => (ativo ? '#10b981' : '#9ca3af')};
    box-shadow: ${({ ativo }) =>
      ativo
        ? '0 4px 8px rgba(16, 185, 129, 0.2)'
        : '0 2px 4px rgba(107, 114, 128, 0.1)'};
  }
`

type LabelProps = {
  ativo?: boolean
}

export const Contador = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: #1f2937;
  display: block;
  margin-bottom: 8px;
`

export const Label = styled.div<LabelProps>`
  font-size: 14px;
  color: ${({ ativo }) => (ativo ? '#047857' : '#4b5563')};
`
