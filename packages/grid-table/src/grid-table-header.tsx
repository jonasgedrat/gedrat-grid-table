import React from 'react'
import { FieldValues, IColumn } from './types'

const GridTableHeader = <T extends FieldValues>({
  columns,
  headerStyle,
  sortable,
  handleSort,
  sortConfig,
}: {
  columns: IColumn<T>[]
  headerStyle: React.CSSProperties
  sortable: boolean
  handleSort: (columnName: keyof T) => void
  sortConfig: { key: string; direction: 'asc' | 'desc' }
}) => {
  if (!Array.isArray(columns) || columns.length === 0) {
    return <h5>No columns provided</h5>
  }

  return (
    <>
      {columns.map((column) => {
        const { component } = column

        return (
          <div
            key={column.name as string}
            style={{
              ...headerStyle,
              position: 'sticky',
              top: 0,
              zIndex: 1,
              cursor: sortable ? 'pointer' : 'default',
            }}
            onClick={() => sortable && handleSort(column.name)}
          >
            <div
              style={{
                display: 'flex',
                textAlign: column.align,
              }}
            >
              {component ? component : column.name}
              {sortConfig.key === column.name && (
                <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default GridTableHeader
