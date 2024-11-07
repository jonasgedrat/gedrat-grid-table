import { IGridTableStyles } from './types'
const bsBorder =
  'var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important'

const containerStyle: React.CSSProperties = {
  width: '100% !important',
  textWrap: 'wrap',
  gap: '1px',
  backgroundColor: 'var(--bs-dark-bg-subtle)',
  fontSize: '0.85rem',
  border: bsBorder,
}

const headerStyle: React.CSSProperties = {
  backgroundColor: 'var(--bs-dark)',
  color: 'var(--bs-light)',
  fontWeight: 'bold',
  padding: 2,
  borderBottom: bsBorder,
}

const rowStyle: React.CSSProperties = {
  padding: 2,
  borderBottom: bsBorder,
  backgroundColor: 'var(--bs-secondary-bg)',
}

export const defaultGridTableStyles: IGridTableStyles = {
  containerStyle,
  headerStyle,
  rowStyle,
}
